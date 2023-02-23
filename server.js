require('dotenv').config();

const mongoose = require('mongoose');
const app = require('./app.js');

const DB_URI = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD)
	.replace('<USER>', process.env.DB_USER)
	.replace('<NAME>', process.env.DB_NAME);

const PORT = process.env.PORT;

async function main() {
	try {
		await mongoose.connect(DB_URI);
		console.log('DB connection success');

		app.listen(PORT, () =>
			console.log(`App running on: http://localhost:${PORT}`),
		);
	} catch (error) {
		console.log('ERROR:', error);
	}
}

main();
