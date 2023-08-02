const express = require('express');
const { Client } = require('pg');

const app = express();
const port = process.env.PORT || 3000;
// parse request bodies (req.body)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const dotenv = require('dotenv');

//load enviroment variables
dotenv.config();

//create a new psql client

const client = new Client({
	connectionString: process.env.DB_URL,
	ssl: {
		//to use without ssl certificate
		rejectUnauthorized: false,
		ca: process.env.DB_API_KEY,
	},
});

// Connect to the database
client.connect((err) => {
	if (err) {
		console.error('Error connecting to the database:', err);
	} else {
		console.log('Connected to the elphantSQL🐘 database!');
	}
});

const getUsers = async () => {
	try {
		const query = 'SELECT * FROM users';

		const result = await client.query(query);

		//console.log(result);
		return result;
	} catch (error) {
		//console.log(error);
		return error;
	}
};

// Close the database connection gracefully when the server is shutting down
process.on('exit', () => {
	client.end(() => {
		console.log('Database connection closed.');
	});
});

// Handle any uncaught exceptions and close the database connection before exiting
process.on('uncaughtException', (error) => {
	console.error('Uncaught Exception:', error);
	client.end(() => {
		process.exit(1);
	});
});

app.get('/', async (req, res) => {
	const response = await getUsers();
	res.status(200).json(response);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
