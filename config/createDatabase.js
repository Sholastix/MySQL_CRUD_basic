const mysql = require('mysql2/promise');

// Create DB in MySQL.
(async function (req, res) {
    const dbName = 'crud';
    // VARIANT 1: TRY-CATCH Syntax
    try {
        const connection = await mysql.createConnection({
            host: '127.0.0.1',
            port: '3306',
            user: 'root',
            password: '',
        })
        connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`);
        console.log('Database successfully created or already exist.');
    } catch (err) {
        console.error(err);
        res.json({ message: err.message });
    };

    // // VARIANT 2: THEN-CATCH Syntax
    // await mysql.createConnection({
    //     host: '127.0.0.1',
    //     port: '3306',
    //     user: 'root',
    //     password: '',
    // })
    //     .then((connection) => {
    //         connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`)
    //             .then((result) => {
    //                 console.log('Database successfully created or already exist.', result);
    //             });
    //     })
    //     .catch((err) => console.error(err));
}());