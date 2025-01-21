import mongoose from "mongoose";
// Define the schema for the listing model
const listingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    furnished: {
      type: Boolean,
      required: true,
    },
    parking: {
      type: Boolean,
      required: true,
    },
    parkingType: {
      type: String,
      required: true,
    },
    parkingArea: {
      type: Number,
      required: true,
    },
    houseFace: {
      type: String,
      required: true,
    },
    houseArea: {
      type: Number,
      required: true,
    },
    builtYear: {
      type: Number,
      required: true,
    },
    flooringType: {
      type: String,
      required: true,
    },
    gym: {
      type: Boolean,
      required: true,
    },
    park: {
      type: Boolean,
      required: true,
    },
    shops: {
      type: Boolean,
      required: true,
    },
    school: {
      type: Boolean,
      required: true,
    },
    publicTransport: {
      type: Boolean,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    offer: {
      type: Boolean,
      required: true,
    },
    imageUrls: {
      type: Array,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Listing = mongoose.model("Listing", listingSchema);
export default Listing;
