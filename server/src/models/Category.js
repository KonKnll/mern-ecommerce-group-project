const mongoose = require('mongoose');
const handleSlugs = require('./utils/slugify');

const categorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      unique: true,
      trim: true,
      maxlength: [32, 'Name must be shorter than 32 characters'],
      require: [true, 'Name is required'],
    },
    slug: String,
    image: {
      type: String,
      default: '/img/categories/default_cat.jpg',
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, 'Description must be shorter than 500 characters'],
      require: [true, 'Description is required'],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
  },
  {
    timestamps: true,
  }
);

handleSlugs(categorySchema);

// categorySchema.virtual('products', {
//   ref: 'Product',
//   localField: '_id',
//   foreignField: 'category',
//   justOne: false,
// });

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
