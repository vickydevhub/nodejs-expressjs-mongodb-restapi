import express from 'express';
import { getAllProduct, addProduct, getProduct, delProduct, updateProduct } from '../controllers/product.js';

import auth from '../middleware/auth.js';

const router = express.Router();

// Get all products
router.get('/', auth, getAllProduct);

// Add product
router.post('/add', addProduct);

// Get product by ID
router.get('/:postid', getProduct);

// Delete product by ID
router.delete('/:postid', delProduct);

// Update product by ID
router.patch('/:postid', updateProduct);

export default router;
