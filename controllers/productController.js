const { Product } = require('../models/Product');

// 1. Get full list of products.
const productGet = async (req, res) => {
    // VARIANT 1: TRY-CATCH Syntax
    try {
        const product = await Product.findAll();
        console.log(product);
        res.json(product);
    } catch (err) {
        console.error(err);
        res.json({ message: err.message });
    };

    // // VARIANT 2: THEN-CATCH Syntax
    // await Product.findAll()
    //     .then((result) => res.json(result))
    //     .catch((err) => console.error(err));
};

// 2. Add new products in the list.
const productPost = async (req, res) => {
    // VARIANT 1: TRY-CATCH Syntax
    try {
        const { name, price } = req.body;
        const product = await Product.create({ name, price });
        console.log(product);
        res.json(product);
    } catch (err) {
        console.error(err);
        res.json({ message: err.message });
    };

    // // VARIANT 2: THEN-CATCH Syntax
    // await Product.create({
    //     name: req.body.name,
    //     price: req.body.price,
    // })
    //     .then((result) => res.json(result))
    //     .catch((err) => console.error(err));
};

// 3. Change info about existed product by his ID.
const productPut = async (req, res) => {
    // VARIANT 1: TRY-CATCH Syntax
    try {
        const { id } = req.params;
        const { name, price } = req.body;
        const product = await Product.update({ name, price }, { where: { id } });
        console.log(product);
        res.json(product);
    } catch (err) {
        console.error(err);
        res.json({ message: err.message });
    };

    // // VARIANT 2: THEN-CATCH Syntax
    // await Product.update({
    //     name: req.body.name,
    //     price: req.body.price,
    // },
    //     {
    //         where: { id: req.params.id },
    //     })
    //     .then((result) => res.json(result))
    //     .catch((err) => console.error(err));
};

// 4. Delete product by his ID from list.
const productDelete = async (req, res) => {
    // VARIANT 1: TRY-CATCH Syntax
    try {
        const { id } = req.params;
        const product = await Product.destroy({ where: { id } });
        console.log(product);
        res.json(product);
    } catch (err) {
        console.error(err);
        res.json({ message: err.message });
    };

    // // VARIANT 2: THEN-CATCH Syntax
    // await Product.destroy({
    //     where: { id: req.params.id },
    // })
    //     .then((result) => res.json(result))
    //     .catch((err) => console.error(err));
};

module.exports = {
    productGet,
    productPost,
    productPut,
    productDelete,
};