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
    Price: {
      type: Number,
      required: true,
    },
    regularPrice: {
      type: String,
      required: true,
    },
    regularPrice_tag: {
      type: String,
      required: true,
    },
    discountPrice: {
      type: Number,
      required: true,
    },
    bhk: {
      type: Number,
      required: true,
    },
    parking: {
      type: String,
      required: true,
    },
    propertyAuth: {
      type: String,
      required: true,
    },
    propertyAuthOption: {
      type: String,
      required: true,
    },
    key_feature1: {
      type: String,
      required: true,
    },
    key_feature2: {
      type: String,
      required: true,
    },
    key_feature3: {
      type: String,
      required: true,
    },
    key_feature4: {
      type: String,
      required: true,
    },
    key_feature5: {
      type: String,
      required: true,
    },
    key_feature6: {
      type: String,
      required: true,
    },
    key_feature7: {
      type: String,
      required: true,
    },
    key_feature8: {
      type: String,
      required: true,
    },
    key_feature9: {
      type: String,
      required: true,
    },
    key_feature10: {
      type: String,
      required: true,
    },
    key_feature11: {
      type: String,
      required: true,
    },
    key_feature12: {
      type: String,
      required: true,
    },
    amenities1: {
      type: String,
      required: true,
    },
    amenities2: {
      type: String,
      required: true,
    },
    amenities3: {
      type: String,
      required: true,
    },
    amenities4: {
      type: String,
      required: true,
    },
    amenities5: {
      type: String,
      required: true,
    },
    amenities6: {
      type: String,
      required: true,
    },
    amenities7: {
      type: String,
      required: true,
    },
    amenities8: {
      type: String,
      required: true,
    },
    amenities9: {
      type: String,
      required: true,
    },
    amenities10: {
      type: String,
      required: true,
    },
    amenities11: {
      type: String,
      required: true,
    },
    amenities12: {
      type: String,
      required: true,
    },
    amenities13: {
      type: String,
      required: true,
    },
    amenities14: {
      type: String,
      required: true,
    },
    amenities15: {
      type: String,
      required: true,
    },
    houseArea: {
      type: Number,
      required: true,
    },
    // bathrooms: {
    //   type: Number,
    //   required: true,
    // },
    // bedrooms: {
    //   type: Number,
    //   required: true,
    // },
    // furnished: {
    //   type: Boolean,
    //   required: true,
    // },
    // parking: {
    //   type: Boolean,
    //   required: true,
    // },
    // parkingType: {
    //   type: String,
    //   required: true,
    // },
    // parkingArea: {
    //   type: Number,
    //   required: true,
    // },
    // houseFace: {
    //   type: String,
    //   required: true,
    // },
    // houseArea: {
    //   type: Number,
    //   required: true,
    // },
    // builtYear: {
    //   type: Number,
    //   required: true,
    // },
    // flooringType: {
    //   type: String,
    //   required: true,
    // },
    // gym: {
    //   type: Boolean,
    //   required: true,
    // },
    // park: {
    //   type: Boolean,
    //   required: true,
    // },
    // shops: {
    //   type: Boolean,
    //   required: true,
    // },
    // school: {
    //   type: Boolean,
    //   required: true,
    // },
    // publicTransport: {
    //   type: Boolean,
    //   required: true,
    // },
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
