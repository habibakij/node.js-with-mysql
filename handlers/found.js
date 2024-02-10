// dependencies
const { createPool } = require('mysql');

// module scaffolding
const handler = {};

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "akij_09",
    connectionLimit: 10

});
const insertQuery = "insert into education (id, institute_name, start_date, end_date, certificate, institute_type, duration) values (6, 'Akij name', 'Akij start', 'Akij end', 'Akij certificate', 'Akij type', 'Akij duration')";
let eduDb = {};
let jobDb = {};
pool.query("select * from education", (err, result, field) => {
    if (err) console.log(err);
    console.log(result);
    eduDb = result;
});
pool.query("select * from job", (err, result, field) => {
    if (err) console.log(err);
    console.log(result);
    jobDb = result;
});

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200, {
        data: {
            'eudcation': eduDb,
            'job': jobDb
        },
    });
};

module.exports = handler;