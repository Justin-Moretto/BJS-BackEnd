const pg = require('pg');
require('dotenv').config();

const connectionString = `postgres://jwpbliytxqejai:8eb26fe27eaadbeb2cdb6115066640f89ad5cf58111d4e156910482e01ea301f@ec2-100-24-165-208.compute-1.amazonaws.com:5432/dpmhsqa1r6gbb?sslmode=disable` ;

const client = new pg.Client({
    connectionString: connectionString || process.env.DATABASE_URL,
});

client.connect();

module.exports = client;