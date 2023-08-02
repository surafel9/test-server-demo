

![postgresql-as-a-service-elephantsql](https://github.com/surafel9/test-server-demo/assets/96924000/a26b71c7-3da4-4be1-9a00-0637ff725151)


Test Server for ElephantSQL with Node.js and pg. 


This is a simple test server to connect to ElephantSQL using Node.js and pg. The server is built with Express and allows you to retrieve data from a PostgreSQL database hosted on ElephantSQL.

Prerequisites
Before running the server, make sure you have the following installed:

Node.js (https://nodejs.org/)
PostgreSQL (https://www.postgresql.org/)
Getting Started
Sign up for a free ElephantSQL account at https://www.elephantsql.com/.

After signing up, create a new PostgreSQL database instance on ElephantSQL.

Obtain the connection information for your database, including the DB_URL and DB_API_KEY.

Clone the repository and navigate to the project directory:

bash
Copy code
git clone https://github.com/your-username/test-server-elephantsql.git
cd test-server-elephantsql
Install the dependencies:
bash
Copy code
npm install
Add the connection information to a .env file in the project directory:

DB_URL=your_database_url_here
DB_API_KEY=your_api_key_here

Run the server with nodemon:
bash
Copy code
npm run dev
If you prefer not to use nodemon, you can run the server with:


nodemon index.js or node index.js
The server should now be running on http://localhost:3000.

API Endpoints
GET /: Retrieves all users from the database.
Database Connection
The server uses the pg library to establish a connection to the PostgreSQL database on ElephantSQL. The connection is closed gracefully when the server is shutting down to ensure data integrity.

