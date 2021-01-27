# Week 12 at-a-glance
This week is focused on *authentication* - how to identify a user and grant them access to your application.
There are 2 common ways of implementing authentication:
1. Session-based authentication, where a cookie is passed back and forth between the server and client. Additionally, the session information is stored in your database.
2. Authorization for RESTful APIs. The main difference is that the REST conventions don't require us to store the session information in the database. Two popular authorization methods for RESTful APIs are OAuth and JSON Web Tokens. You'll get exposed to the OAuth workflow but you'll learn how to implement JSON Web Tokens.

*NOTE:* Remember that the assessment got moved to Tuesday so all days in aA Open will be moved as well.

## Monday
- Practice assessment in the morning
- Pairing on the Amusement Park Tracker project in the afternoon that integrates sequelize and express.
## Tuesday
- Assessment in the morning.
- Group project planning in the afternoon (we will announce the teams on that day).
## Wednesday
- Authentication, cryptography, implement session-based authentication in Express.
- The project **Amusement Park and Users**. Even though this project picks up where the first Amusement Park Tracker from Monday left off, you will be provided with a starter so you don't need to worry about how far you got into Monday's project. You will implement session-based authentication in Express.
## Thursday
- Introduction to RESTful APIs, how to parse HTTP requests bodies of type json, configure your API to use Cross-Origin Resource Sharing (CORS).
- You will build a **Twitter clone** with two Express applications that work together. The first app will hold API routes that will access a database and send that data as json. The second app will serve the pages that user will have access to and then communicate with the first server via AJAX requests.
## Friday
- API security - OAuth and JSON Web Tokens.
- **Part 2 of the Twitter clone** will guide through user authentication for your RESTful API.