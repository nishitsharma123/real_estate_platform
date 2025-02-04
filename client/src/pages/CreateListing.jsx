import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

// import { Helmet } from "react-helmet-async";
export default function CreateListing() {
  const [files, setFiles] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    imageUrls: [], //
    title: "", //
    description: "", //
    address: "", //
    type: "sale", //
    regularPrice: "", //
    Price: 0,
    discountPrice: 0, //
    offer: false, //
    key_feature1: "",
    key_feature2: "",
    key_feature3: "",
    key_feature4: "",
    key_feature5: "",
    key_feature6: "",
    key_feature7: "",
    key_feature8: "",
    key_feature9: "",
    key_feature10: "",
    key_feature11: "",
    key_feature12: "",
    amenities1: "",
    amenities2: "",
    amenities3: "",
    amenities4: "",
    amenities5: "",
    amenities6: "",
    amenities7: "",
    amenities8: "",
    amenities9: "",
    amenities10: "",
    amenities11: "",
    amenities12: "",
    amenities13: "",
    amenities14: "",
    amenities15: "",
    regularPrice_tag: "",
    propertyAuth: 'Certified by us',
    propertyAuthOption: "certified", // Default value
    houseArea: 0, //
    bhk: 0, //
    parking: "", //
  });
  const [imageUploadError, setImageUploadError] = useState(false);
  const handleImageSubmit = (e) => {
    if (files.length > 0 && files.length + formData.imageUrls.length <= 15) {
      setUploading(true);
      setImageUploadError(false);
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(urls),
          });
          setImageUploadError(false);
          setUploading(false);
        })
        .catch((err) => {
          setImageUploadError("Image upload failed (2mb max per image");
          setUploading(false);
        });
    } else {
      setImageUploadError("You can only upload 15 images per listing");
      setUploading(false);
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };

  if (currentUser.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">
          Only admins are allowed to access this page.
        </p>
      </div>
    );
  }
  const handleChange = (e) => {
    if (e.target.id === "sale" || e.target.id === "rent") {
      setFormData({
        ...formData,
        type: e.target.id,
      });
    }
    if (e.target.id === "certified" || e.target.id === "owned") {
      setFormData({
        ...formData,
        propertyAuthOption: e.target.id,
      });
    }
    if (
      
      e.target.id === "offer" 
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.checked,
      });
    }
    if (
      e.target.type === "number" ||
      e.target.type === "text" ||
      e.target.type === "textarea" ||
      e.target.type === "select-one"
    ) {
      // console.log(`Changing ${id} to ${value}`); // Debugging line
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
        
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.imageUrls.length < 1)
        return setError("You must upload at least one image");
      if (+formData.regularPrice < +formData.discountPrice)
        return setError("Discount price must be lower than regular price");
      setLoading(true);
      setError(false);
      const res = await fetch("/api/listing/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userRef: currentUser._id,
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      } else {
        window.location.reload(); // Refresh the page after successful listing creation
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="absolute bg-blue-100 w-full min-h-screen">
      <Helmet>
                  <title>Create-listings</title>
                  <meta name="description" content="create listings" />
              </Helmet>
      <main className="p-3 w-full mx-auto bg-blue-100 mt-20 ">
        <h1 className="text-3xl font-semibold text-center mb-7 ">
          Create a Listing
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-col gap-4 w-full"
        >
          {/* -------------- */}
          <div className="w-full bg-blue-200 rounded-3xl">
            <p className="font-semibold text-center p-4">
              Images:
              <span className="font-normal text-gray-600 ml-2">
                The first image will be cover image (max 6 images allowed)
              </span>
            </p>

            <div className="flex gap-4 w-96 text-center items-center m-auto">
              <input
                onChange={(e) => setFiles(e.target.files)}
                className="p-3 border border-blue-300 rounded-lg w-full"
                type="file"
                id="images"
                accept="image/*"
                multiple
              />
              <button
                type="button"
                disabled={uploading}
                onClick={handleImageSubmit}
                className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80"
              >
                {uploading ? "uploading..." : "Upload"}
              </button>
            </div>

            <p className="text-red-700 text-sm text-center">
              {imageUploadError && imageUploadError}
            </p>
            <div className="flex flex-row flex-wrap gap-12 mt-5 bg-blue-100 m-10 rounded-3xl">
              {formData.imageUrls &&
                formData.imageUrls.length > 0 &&
                formData.imageUrls.map((url, index) => (
                  <div
                    key={url}
                    className="flex flex-col p-3 rounded-3xl gap-3 pl-5 mt-4"
                  >
                    <img
                      src={url}
                      alt="listing image"
                      className="w-52 h-52 object-cover rounded-3xl"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="p-2 rounded-lg text-red-700 bg-blue-200 mt-0 m-auto hover:opacity-75"
                    >
                      Remove
                    </button>
                  </div>
                ))}
            </div>
            {/* <button
              disabled={loading || uploading}
              className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
            >
              {loading ? "creating..." : "Create listing"}
            </button>
            {error && <p className="text-red-700 text-sm">{error}</p>} */}
          </div>
          {/* ------------------ */}

        <div className="flex flex-col gap-1 ">
            <div className="flex flex-row justify-between p-5 gap-5 items-center">
              <h1 className="text-2xl flex-1 pl-40 ">Title: </h1>
              <input
                type="text"
                placeholder="title"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="title"
                required
                onChange={handleChange}
                value={formData.title}
              />
            </div>

            <div className="flex flex-row justify-between p-5 gap-5 ">
              <h1 className="text-2xl flex-1 pl-40">Description: </h1>

              <textarea
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 h-32"
                type="text"
                placeholder="description"
                id="description"
                required
                onChange={handleChange}
                value={formData.description}
              ></textarea>
            </div>

            <div className="flex flex-row justify-between p-5 gap-5 items-center">
              <h1 className="text-2xl flex-1 pl-40">Address: </h1>
              <input
                type="text"
                placeholder="address"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1"
                id="address"
                required
                onChange={handleChange}
                value={formData.address}
              />
            </div>
            <div className="flex flex-row justify-between p-5 gap-5 items-center">
            <h1 className="text-2xl flex-1 pl-40">Property authentication: </h1>
            <select
              className="border-black border-2 p-3 rounded-lg m-auto flex-1"
              id="propertyAuth"
              required
              onChange={handleChange}
              value={formData.propertyAuth}
              name="propertyAuth"
            >
              <option value="Certified by us">Certified by us</option>
              <option value="Owned by us">Owned by us</option>
            </select>
          </div>
            {/* <div className="flex flex-row justify-between p-5 gap-5 items-center">
              <h1 className="text-2xl flex-1 pl-40">
                Property face direction:{" "}
              </h1>
              <input
                type="text"
                placeholder="East / west / north / south or else"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1"
                id="houseFace"
                required
                onChange={handleChange}
                value={formData.houseFace}
              />
            </div>
            <div className="flex flex-row justify-between p-5 gap-5 items-center">
              <h1 className="text-2xl flex-1 pl-40">property floor type: </h1>
              <input
                type="text"
                placeholder="Marble / Tile / Woodsurface or else"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1"
                id="flooringType"
                required
                onChange={handleChange}
                value={formData.flooringType}
              />
            </div> */}

            <div className="flex flex-row justify-between p-5 gap-5 items-center">
              <h1 className="text-2xl flex-1 pl-40">
                Property area:
                <br />
                <span className="text-green-500 text-sm">
                  In square feet
                </span>{" "}
              </h1>
              <input
                type="number"
                id="houseArea"
                min="1"
                max="50000"
                required
                placeholder="Area in sqrft"
                className="p-3 border-black border-2 rounded-lg m-auto flex-1"
                onChange={handleChange}
                value={formData.houseArea}
              />
            </div>

            {/* <div className="flex flex-row justify-between p-5 gap-5 items-center">
              <h1 className="text-2xl flex-1 pl-40">Number of bedrooms: </h1>
              <input
                type="number"
                id="bedrooms"
                min="1"
                max="10"
                required
                className="p-3 border-black border-2 rounded-lg m-auto flex-1"
                onChange={handleChange}
                value={formData.bedrooms}
              />
            </div>

            <div className="flex flex-row justify-between p-5 gap-5 items-center">
              <h1 className="text-2xl flex-1 pl-40">Number of bathrooms: </h1>
              <input
                type="number"
                id="bathrooms"
                min="1"
                max="10"
                required
                className="p-3 border-black border-2 rounded-lg m-auto flex-1"
                onChange={handleChange}
                value={formData.bathrooms}
              />
            </div> */}

            

            {/* <div className="flex flex-row justify-between p-5 gap-5 items-center">
              <h1 className="text-2xl flex-1 pl-40">Build year of property:</h1>
              <input
                type="number"
                id="builtYear"
                min="1"
                max="2025"
                required
                className="p-3 border-black border-2 rounded-lg m-auto flex-1"
                onChange={handleChange}
                value={formData.builtYear}
              />
            </div> */}

            <div className=" flex flex-col gap-2 flex-wrap">
              <div className="flex flex-row p-5 gap-5 items-center">
                <h1 className="text-2xl pl-40">Property type: </h1>
                <div className="flex flex-row flex-1 m-auto gap-5">
                  <div className=" flex gap-2 ml-auto">
                    <input
                      type="checkbox"
                      id="sale"
                      className="w-10 border-black border-2"
                      onChange={handleChange}
                      checked={formData.type === "sale"}
                    />
                    <span>Sell</span>
                  </div>

                  <div className="flex gap-2 mr-auto">
                    <input
                      type="checkbox"
                      id="rent"
                      className="w-10 border-black border-2"
                      onChange={handleChange}
                      checked={formData.type === "rent"}
                    />
                    <span>Rent</span>
                  </div>
                </div>
              </div>
            </div>
             

            <div className="flex flex-row justify-between p-5 gap-5 items-center">
              <h1 className="text-2xl flex-1 pl-40 ">BHK: </h1>
              <input
                type="text"
                placeholder="bhk"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="bhk"
                required
                onChange={handleChange}
                value={formData.bhk}
              />
            </div>

 {/* --------- */}
            <div className=" flex flex-col gap-2 flex-wrap">
              <div className="flex flex-row p-5 gap-5 items-center">
                <h1 className="text-2xl pl-40">Property auth option: </h1>
                <div className="flex flex-row flex-1 m-auto gap-5">
                  <div className=" flex gap-2 ml-auto">
                    <input
                      type="checkbox"
                      id="certified"
                      className="w-10 border-black border-2"
                      onChange={handleChange}
                      checked={formData.propertyAuthOption === "certified"}
                    />
                    <span>Certified by us</span>
                  </div>

                  <div className="flex gap-2 mr-auto">
                    <input
                      type="checkbox"
                      id="owned"
                      className="w-10 border-black border-2"
                      onChange={handleChange}
                      checked={formData.propertyAuthOption === "owned"}
                    />
                    <span>Owned by us</span>
                  </div>
                </div>
              </div>
            </div>

              {/* ----------- */}


            <div className="flex flex-row justify-between p-5 gap-5 items-center">
              <h1 className="text-2xl flex-1 pl-40 ">parking: </h1>
              <input
                type="text"
                placeholder="Available/Not Available"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="parking"
                required
                onChange={handleChange}
                value={formData.parking}
              />
            </div>

{/* ------- */}
<div className="flex flex-row justify-between p-5 gap-5 items-center">
              <div className="flex-1">
              <h1 className="text-2xl flex-1 pl-40">
                property price in digits:
                <br />
                <span className="text-green-500 text-sm">
                  currency: INR
                </span>{" "}
              </h1>
              </div>
            <div className="flex flex-row gap-5 flex-wrap flex-1">
              <input
                type="number"
                id="Price"
                min="1"
                max="100000000"
                required
                className="p-3 border-black border-2 rounded-lg m-auto flex-1"
                onChange={handleChange}
                value={formData.Price}
              />
              
              </div>
            </div>
{/* ---------- */}


            <div className="flex flex-row justify-between p-5 gap-5 items-center">
              <div className="flex-1">
              <h1 className="text-2xl flex-1 pl-40">
                property price:
                <br />
                <span className="text-green-500 text-sm">
                  currency: INR
                </span>{" "}
              </h1>
              </div>
            <div className="flex flex-row gap-5 flex-wrap flex-1">
              <input
                type="text"
                id="regularPrice"
                min="1"
                max="1000"
                required
                className="p-3 border-black border-2 rounded-lg m-auto flex-1"
                onChange={handleChange}
                value={formData.regularPrice}
              />
              <input
                type="text"
                placeholder="price tag e.g Cr, Lakhs"
                id="regularPrice_tag"
                required
                className="p-3 border-black border-2 rounded-lg m-auto flex-1"
                onChange={handleChange}
                value={formData.regularPrice_tag}
              />
              </div>
            </div>
              {/* ========= */}
              <div className="flex flex-row justify-between p-5 gap-5">
              <div className="flex-1"><h1 className="text-2xl flex-1 pl-40 ">Amenities: </h1></div>
              <div className="flex flex-row gap-5 flex-wrap flex-1">
              <input
                type="text"
                placeholder="amenities_1"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="amenities1"
                required
                onChange={handleChange}
                value={formData.amenities1}
              />
              <input
                type="text"
                placeholder="amenities_2"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="amenities2"
                required
                onChange={handleChange}
                value={formData.amenities2}
              />
              <input
                type="text"
                placeholder="amenities_3"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="amenities3"
                required
                onChange={handleChange}
                value={formData.amenities3}
              />
              <input
                type="text"
                placeholder="amenities_4"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="amenities4"
                required
                onChange={handleChange}
                value={formData.amenities4}
              />
              <input
                type="text"
                placeholder="amenities_5"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="amenities5"
                required
                onChange={handleChange}
                value={formData.amenities5}
              />
              <input
                type="text"
                placeholder="amenities_6"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="amenities6"
                required
                onChange={handleChange}
                value={formData.amenities6}
              />
              <input
                type="text"
                placeholder="amenities_7"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="amenities7"
                required
                onChange={handleChange}
                value={formData.amenities7}
              />
              <input
                type="text"
                placeholder="amenities_8"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="amenities8"
                required
                onChange={handleChange}
                value={formData.amenities8}
              />
              <input
                type="text"
                placeholder="amenities_9"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="amenities9"
                required
                onChange={handleChange}
                value={formData.amenities9}
              />
              <input
                type="text"
                placeholder="amenities_10"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="amenities10"
                required
                onChange={handleChange}
                value={formData.amenities10}
              />
              <input
                type="text"
                placeholder="amenities_11"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="amenities11"
                required
                onChange={handleChange}
                value={formData.amenities11}
              />
              <input
                type="text"
                placeholder="amenities_12"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="amenities12"
                required
                onChange={handleChange}
                value={formData.amenities12}
              />
              <input
                type="text"
                placeholder="amenities_13"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="amenities13"
                required
                onChange={handleChange}
                value={formData.amenities13}
              />
              <input
                type="text"
                placeholder="amenities_14"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="amenities14"
                required
                onChange={handleChange}
                value={formData.amenities14}
              />
              <input
                type="text"
                placeholder="amenities_15"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="amenities15"
                required
                onChange={handleChange}
                value={formData.amenities15}
              />
            </div>
            </div>

              {/* ========= */}
              {/* ------------- */}
               <div className="flex flex-row justify-between p-5 gap-5">
              <div className="flex-1"><h1 className="text-2xl flex-1 pl-40 ">Key features: </h1></div>
              <div className="flex flex-row gap-5 flex-wrap flex-1">
              <input
                type="text"
                placeholder="key_feature_1"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="key_feature1"
                required
                onChange={handleChange}
                value={formData.key_feature1}
              />
              <input
                type="text"
                placeholder="key_feature_2"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="key_feature2"
                required
                onChange={handleChange}
                value={formData.key_feature2}
              />
              <input
                type="text"
                placeholder="key_feature_3"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="key_feature3"
                required
                onChange={handleChange}
                value={formData.key_feature3}
              />
              <input
                type="text"
                placeholder="key_feature_4"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="key_feature4"
                required
                onChange={handleChange}
                value={formData.key_feature4}
              />
              <input
                type="text"
                placeholder="key_feature_5"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="key_feature5"
                required
                onChange={handleChange}
                value={formData.key_feature5}
              />
              <input
                type="text"
                placeholder="key_feature_6"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="key_feature6"
                required
                onChange={handleChange}
                value={formData.key_feature6}
              />
              <input
                type="text"
                placeholder="key_feature_7"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="key_feature7"
                required
                onChange={handleChange}
                value={formData.key_feature7}
              />
              <input
                type="text"
                placeholder="key_feature_8"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="key_feature8"
                required
                onChange={handleChange}
                value={formData.key_feature8}
              />
              <input
                type="text"
                placeholder="key_feature_9"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="key_feature9"
                required
                onChange={handleChange}
                value={formData.key_feature9}
              />
              <input
                type="text"
                placeholder="key_feature_10"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="key_feature10"
                required
                onChange={handleChange}
                value={formData.key_feature10}
              />
              <input
                type="text"
                placeholder="key_feature_11"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="key_feature11"
                required
                onChange={handleChange}
                value={formData.key_feature11}
              />
              <input
                type="text"
                placeholder="key_feature_12"
                className="border-black border-2 p-3 rounded-lg m-auto flex-1 "
                id="key_feature12"
                required
                onChange={handleChange}
                value={formData.key_feature12}
              />
            </div>
              </div>
              <div className="flex flex-row p-5 gap-5 items-center">
                <h1 className="text-2xl pl-40 flex-1">Offer on property: </h1>
                <div className="flex gap-2 flex-1 m-auto">
                  <input
                    type="checkbox"
                    id="offer"
                    className="w-10 border-black border-2"
                    onChange={handleChange}
                    checked={formData.offer}
                  />
                  <span>if applicable click checkbox</span>
                </div>
              </div>
            </div>
            {formData.offer && (
              <div className="flex flex-row justify-between p-5 gap-5 items-center">
                <h1 className="text-2xl flex-1 pl-40">
                  Discounted price:
                  <br />
                  <span className="text-sm text-green-500">
                    currency: INR
                  </span>{" "}
                </h1>
                <input
                  type="number"
                  id="discountPrice"
                  min="100"
                  max="1000000000"
                  required
                  className="p-3 border-black border-2 rounded-lg m-auto flex-1"
                  onChange={handleChange}
                  value={formData.discountPrice}
                />
              </div>
            )}
          
          
          {error && <p className="text-red-700 text-sm text-center">{error}</p>}
          <button
            disabled={loading || uploading}
            className="p-4 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80 m-auto sm:w-96"
          >
            {loading ? "creating..." : "Create listing"}
          </button>
          
        </form>
      </main>
    </div>
  );
}
