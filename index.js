require('dotenv').config();

const initOptions = {
	error(error, e) {
		if (e.cn) {
			console.log('CN', e.cn);
			console.log('EVENT: ', error.message || error);
		}
	},
};

const pgp = require('pg-promise')(initOptions);

// using an invalid connection string:
// const db = pgp('postgresql://userName:password@host:port/database');

const db = pgp(
	`postgresql://${process.env.PGADMIN}:${process.env.PGADMINPASSWORD}@localhost/${process.env.DATABASE}?user=${process.env.DBUSER}&password=${process.env.DBUSERPASSWORD}`
);

db.connect()
	.then(obj => {
		// Can check the server version here (pg-promise v10.1.0+):
		const serverVersion = obj.client.serverVersion;
		console.log(serverVersion);
		obj.done(); // success, release the connection;
		process.exit(0);
	})
	.catch(error => {
		console.log('ERROR:', error.message || error);
		process.exit(1);
	});
