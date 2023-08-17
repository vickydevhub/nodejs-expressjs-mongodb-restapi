const express = require('express');
const productcontroller = require('../controllers/product');
const router = express.Router();

const auth = require('../middleware/auth');

//ALL Usr
router.get('/', auth, productcontroller.getAllProduct);
router.post('/add', productcontroller.addProduct);

router.get('/:postid' , productcontroller.getProduct);
router.delete('/:postid' , productcontroller.delProduct);
router.patch('/:postid' ,   productcontroller.updateProduct); 

module.exports = router;