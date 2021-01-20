require('dotenv').config()
const bodyParser = require('body-parser');
const express = require('express');

require('./config/createDatabase');
const { db } = require('./config/initializeDatabase');
const productRoute = require('./routes/productRoute');

const app = express();
app.use(bodyParser.json());

app.use('/api', productRoute);

///////////////////////////// SERVER'S LAUNCH /////////////////////////////////////////

// Synchronization with DB, if success -> server starts.
// VARIANT 1: TRY-CATCH Syntax
(async function () {
    try {
        await db.sync();
        app.listen(process.env.APP_PORT, () => {
            console.log(`Server listening on port ${process.env.APP_PORT}.`);
        });
    } catch (err) {
        console.error(`Connection failed at port: ${process.env.APP_PORT}`, err);
    };
}());

// // VARIANT 2: THEN-CATCH Syntax
// (async function () {
//     await db.sync()
//         .then(() => {
//             app.listen(process.env.APP_PORT, () => {
//                 console.log(`Server listening on port ${process.env.APP_PORT}.`);
//             });
//         })
//         .catch((err) => console.error(`Connection failed at port: ${process.env.APP_PORT}`, err));
// }());