import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { auth } from "express-oauth2-jwt-bearer";
import * as dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";

const credentials = "../secrets/X509-cert-2281574032255151349.pem";

dotenv.config({ path: `.env.${process.env.NODE_ENV || "development"}` });
const app = express();

const port = process.env.API_PORT || 4200;
const clientPort = process.env.CLIENT_PORT || 3000;

const clientOrigin =
  process.env.CLIENT_ORIGIN || `http://localhost:${clientPort}`;

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(cors({ origin: clientOrigin }));

const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ["RS256"],
});

const client = new MongoClient(
  "mongodb+srv://cluster0.spyuocj.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority",
  {
    sslKey: credentials,
    sslCert: credentials,
    serverApi: ServerApiVersion.v1,
  }
);

app.post("/api/v1/test", (req, res) => {
  console.log("test", req.body);
  async function run() {
    try {
      await client.connect();
      const database = client.db("currentDB");
      const collection = database.collection("test");
      const result = await collection.insertOne(req.body);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
  res.json(req.body);
});
app.listen(port, () => console.log(`API Server listening on port ${port}`));
