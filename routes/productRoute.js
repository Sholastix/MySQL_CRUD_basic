const { Router } = require('express');
const { productGet, productPost, productPut, productDelete } = require('../controllers/productController');

const router = Router();

router.get('/product/', productGet);
router.post('/product/', productPost);
router.put('/product/:id', productPut);
router.delete('/product/:id', productDelete);

module.exports = router;