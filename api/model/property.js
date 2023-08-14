import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
  },
  type: {
    type: String,
    required: true,
  },
  approve: {
    type: Boolean,
    default: false,
  },
});

const Property = mongoose.model("Property", propertySchema);

export default Property;
