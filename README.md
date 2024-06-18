# Slidely-App-Form-Backend-
This project forms the backend of a Windows application that replicates the basic functionality of Google Forms. It allows users to create and view submissions, including fields for name, email, phone number, GitHub repository link, and stopwatch functionality.

*Table of Contents*
1. Project Structure
2. Prerequisites
3. Installation
4. Running the Server
5. API Endpoints
6. Local Database Configuration
   

*Overview:*

This project is part of the SlidelyAI application, which involves creating a Windows Desktop application for handling form submissions. The backend is implemented in TypeScript using Node.js and Express, and it connects to a local database for storing submission data.

*Prerequisites:*

1. Node.js (version 14.x or later)
2. npm (version 6.x or later)
3. TypeScript (installed globally)
4. A local database (e.g., SQLite, MySQL)

*Steps Instructions:*

1. Clone the Repository
```
git clone https://github.com/yourusername/slidely-backend.git 
cd slidely
```
2. Install Dependencies
```
npm install
```
3. Configure Dependencies

Ensure your local database is set up and running. Update the database configuration in your server.ts or any config file you use for database connection.

4. Compile TypeScript

Compile the TypeScript files to JavaScript:
```
npx tsc
```
5. Run the Server

Start the server using:
```
node dist/server.js
```
*File Descriptions:*

1. Controllers


controllers/submissionController.ts: Handles the logic for creating, reading, updating, and deleting submissions.

2. Routes

routes/submissionRoutes.ts: Defines the API endpoints for managing submissions.

3. Server
   
server.ts: Entry point of the backend server. It sets up the Express server, connects to the database, and initializes the routes.

4. Types
   
types/submission.ts: Defines the TypeScript types for submission data.

5. Configuration Files

tsconfig.json: TypeScript configuration file.

package.json: Contains project metadata and npm scripts.

*API Endpoints*

1. GET /submissions: Retrieve all submissions.
2. POST /submissions: Create a new submission.

*Additional Notes*

Ensure that your local database is correctly configured and accessible.

Use Postman or a similar tool to test the API endpoints.

*Contributions*

Contributions are welcome. Please fork the repository and submit a pull request for review.
