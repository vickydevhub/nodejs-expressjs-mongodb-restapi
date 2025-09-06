import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  // Other fields...
});

const Product = mongoose.model('Product', productSchema);

export default Product;