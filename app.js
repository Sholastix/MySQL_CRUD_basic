const bodyParser = require('body-parser');
const express = require('express');

require('./config/createDatabase');
const { db } = require('./config/initializeDatabase');
const productRoute = require('./routes/productRoute');

const app = express();
app.use(bodyParser.json());

app.use('/api', productRoute);

///////////////////////////// SERVER'S LAUNCH /////////////////////////////////////////

// Create variable, which contains connection port value.
const PORT = 5000;

// Synchronization with DB, if success -> server starts.
// VARIANT 1: TRY-CATCH Syntax
(async function () {
    try {
        await db.sync();
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}.`);
        });
    } catch (err) {
        console.error(`Connection failed at port: ${PORT}`, err);
    };
}());

// // VARIANT 2: THEN-CATCH Syntax
// (async function () {
//     await db.sync()
//         .then(() => {
//             app.listen(PORT, () => {
//                 console.log(`Server listening on port ${PORT}.`);
//             });
//         })
//         .catch((err) => console.error(`Connection failed at port: ${PORT}`, err));
// }());


// SEEDS
const { Product } = require('./models/Product');

Product.create({ name: 'Intel Core i5-2500K', price: '1000' });
Product.create({ name: 'AMD Ryzen 3 3600', price: '5600' });
Product.create({ name: 'NVIDIA GeForce GTX 1050Ti', price: '4000' });