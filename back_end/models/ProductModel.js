import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true, required: true },
    product_details: [
      {
        name: { type: String, unique: true, required: true },
        category: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        countInStocks: { type: Number, required: true },
        ratings: { type: Number, required: true },
        numReviews: { type: Number, required: true },
        details: [
          { type: [String], required: true },
          { type: [String], required: true },
        ],
        description: { type: String },
        additional_information: { type: [String] },
        likes: { type: String, required: true },
        sub_product: [
          {
            name: { type: String, required: true },
            category: { type: String, required: true },
            image: { type: String, required: true },
            price: { type: Number, required: true },
            countInStocks: { type: Number, required: true },
            ratings: { type: Number, required: true },
            numReviews: { type: Number, required: true },
          },
        ],
        related_image: { type: [String], required: true },
        related_video: { type: [String], required: true },
        related_blueprint: { type: [String], required: true },
        comments: [
          {
            name: { type: String, required: true },
            date: { type: String, required: true },
            text: { type: String, required: true },
            likes: { type: Number, required: true },
          },
        ],
      },
    ],
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Product = mongoose.model('product', productSchema);
export default Product;
