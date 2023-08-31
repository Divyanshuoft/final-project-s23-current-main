**Accounts:**
1. As an unregistered user, I want to be able to sign up with a unique username, email, and password so that I can create a personalized account.
	- Given the user entered a unique email and valid password, when the user creates an account, then they should receive a confirmation/verification email.

2. As a user, I want to be able to sign in and sign out of my account so that I can securely access and manage my account.
	- Given a user has a registered account, when they enter their credentials (username/email and password), then they should be able to sign in and access their account.
	- Given a signed-in user, when they choose to sign out, then they should be logged out of their account and redirected to the sign-in page.

3. As a user, I want to be able to upload and change my profile picture so that I can personalize my account and be easily recognizable.
	- Given a user wants to set a profile picture, when they upload an image, then the selected image should be displayed as their profile picture across the application.

4. As a user, I want to be able to set my status as active, away, do not disturb, or invisible so that other users can know my availability and responsiveness.
	- Given a user wants to set their status, when they choose to set their status as active, away, do not disturb, or invisible, then the chosen status should be visible to other users as appropriate

5. As a user, I want to be able to access and modify my account settings, including changing my username or password so that I can customize my account preferences.
	- Given a user wants to modify their account details, when they access the account settings page and make changes to their username or password, then the changes should be saved and reflected in their account.

**Team/Groups:**
1. As a user, I want to be able to join or leave teams or groups so that I can collaborate and communicate with specific sets of people.
	- Given a user wants to join a team/group, when they select the join option or use specific commands, then they should be added to the team/group.
	- Given a user wants to leave a team/group, when they choose the leave option or use specific commands, and they should be removed from the team/group

2. As a team/group leader, I want to be able to add or remove members from the team/group so that I can manage the composition of the team/group effectively.
	- Given a team/group leader wants to add new members, when they initiate the process and provide the necessary information, then the new members should be added to the team/group successfully.
	- Given a team/group leader wants to remove members, when they initiate the removal process, then the specified members should be removed from the team/group

3. As a user, I want to be able to send messages within a team or group so that I can communicate and share information with other team/group members.
	- Given a user wants to send messages within teams or groups, when they enter the message content and choose to send, then the message should be delivered to all members of the team/group.
    
	- Given a user wants to view received messages within teams or groups, when they access the conversation or refresh the page, then the messages should be displayed in real-time or with minimal delay.

4. As a user, I want to be able to edit or delete my own messages within a team or group so that I can correct errors or remove outdated information.
	- Given a user wants to edit their own messages within teams or groups, when they select the edit option and modify the message content, then the edited message should be updated and displayed to all members of the team/group.
    
	- Given a user wants to delete their own messages within teams or groups, when they choose the delete option, then the message should be removed from the conversation and no longer visible to any members.

5. As a user, I want to be able to reply to specific messages within a team or group so that I can provide targeted responses and maintain conversational context.
	- Given a user wants to reply to specific messages within teams or groups, when they choose the reply option and enter their response, then the reply should be displayed in a threaded or nested format, providing clear context and readability.

6. As a user, I want to be able to mention or tag specific users within a team or group so that I can draw their attention to relevant messages or actions.
	- Given a user wants to mention or tag specific users within teams or groups, when they use the mention feature and enter the username or select the user from a list, then the mentioned users should receive notifications or highlighted indicators for the relevant messages. 

7. As a user, I want to be able to see the timestamp of messages within a team or group so that I can track the chronology of conversations.
	- Given a user wants to view the timestamp of messages within teams or groups, when they access the conversation or scroll through the messages, then each message should display a timestamp indicating when it was sent.

8. As a user, I want to be able to see read receipts for messages within a team or group so that I can know if my messages have been viewed or read.
	- Given a user wants to see read receipts for their sent messages within teams or groups, when the recipient's device is connected to the internet and the message is delivered, then the sender should be able to detect the delivery status, such as two tick marks indicating that the message was received and/or read by the recipient.

**Video Conferencing:**
1. As a user, I want to be able to mute and unmute myself during a video conference so that I can control my audio input.
	- Given a user wants to mute themselves during a video conference, when they select the mute option, then their audio input should be disabled, and other participants should not hear their audio.
	
	- Given a user is muted during a video conference, when they select the unmute option, then their audio input should be re-enabled, and other participants should hear their audio.

2. As a user, I want to be able to turn my camera on and off during a video conference so that I can control my video input.
	- Given a user wants to turn their camera on during a video conference, when they select the camera on option, then their video feed should be enabled, and other participants should see their video.
	
	- Given a user wants to turn their camera off during a video conference, when they select the camera off option, then their video feed should be disabled, and other participants should not see their video.
    

3. As a user, I want to be able to see a timer for the duration of a video conference so that I can keep track of the duration of the call.
	- Given a user has joined a meeting, when they select the timer, then they should be able to see the duration of the ongoing call.

**Calendar:**
1. As a user, I want to have an independent calendar where I can manage my events and appointments so that I can keep track of my schedule.
	- Given each user has their own calendar, when they access their calendar, then they should only see their own events and appointments.

2. As a user, I want be able to add an event to my personal calendar, so that it better reflects my schedule.
	- Given a user clicks on an empty time block in the calendar and enters an event name and a time range, when they save the event, then the necessary time blocks will be filled on the calendar showing the event's information.

3. As a user, I want be able to delete an event from my personal calendar, so that I can clear the time block for any other events I may add.
	- Given a user clicks on a space in their calendar occupied by an existing event, when they delete the event, then the event should no longer be displayed in their personal calendar.
	
	- Given a user deletes an existing event, when they click on the newly freed space in the calendar, then they should see the card to fill in a new event's information

4. As a user, I want be able to quickly return to the current week in the calendar, so that I don't have to manually navigate week by week.
	- Given a user that has navigated to a week other than the current week, when they press the "Today" button, then they should see the days and events in the current week.

**Quiz 4 Feature:**
1. As a user, I want to record meetings and save it to a group folder so that people in my group can view past recordings.  
	- Given a user is part of a specific group, when the user initiates a meeting recording and stops it after the meeting, then the system saves the recording in the designated group folder, and the users in the group can access and view the recorded meeting within the group's recordings section.
  
