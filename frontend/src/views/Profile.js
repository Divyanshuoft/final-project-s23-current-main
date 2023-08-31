import React from "react";
import { Container, Row, Col } from "reactstrap";

import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

function ProfileComponent(props) {
  function handleClick() {
    fetch("http://localhost:4200/api/v1/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ XP: 4 }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return <button onClick={handleClick}>This is check buttion</button>;
}

// export function  withAuthenticationRequired(ProfileComponent, {
//   onRedirecting: () => <Loading />,
// });

export default ProfileComponent;
