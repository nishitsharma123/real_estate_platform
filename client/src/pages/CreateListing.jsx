import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

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
    bedrooms: 1, //
    bathrooms: 1, //
    regularPrice: 0, //
    discountPrice: 0, //
    offer: false, //
    parking: false, //
    furnished: false, //
    park: false, //
    gym: false, //
    school: false, //
    publicTransport: false,
    houseArea: 0, //
    parkingArea: 0, //
    parkingType: "", //
    builtYear: 0, //
    houseFace: "", //
    flooringType: "", //
    shops: false, //
  });
  const [imageUploadError, setImageUploadError] = useState(false);
  const handleImageSubmit = (e) => {
    if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
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
      setImageUploadError("You can only upload 6 images per listing");
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
    if (
      e.target.id === "parking" ||
      e.target.id === "furnished" ||
      e.target.id === "offer" ||
      e.target.id === "gym" ||
      e.target.id === "park" ||
      e.target.id === "school" ||
      e.target.id === "shops" ||
      e.target.id === "publicTransport"
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.checked,
      });
    }
    if (
      e.target.type === "number" ||
      e.target.type === "text" ||
      e.target.type === "textarea"
    ) {
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
            <div className="flex flex-row gap-6 mt-5 bg-blue-100 m-10 rounded-3xl">
              {formData.imageUrls &&
                formData.imageUrls.length > 0 &&
                formData.imageUrls.map((url, index) => (
                  <div
                    key={url}
                    className="flex flex-col justify-between p-3 rounded-3xl gap-3"
                  >
                    <img
                      src={url}
                      alt="listing image"
                      className="w-48 h-48 object-cover rounded-3xl"
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
            </div>

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

            <div className="flex flex-row justify-between p-5 gap-5 items-center">
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
            </div>

            <div className="flex flex-row justify-between p-5 gap-5 items-center">
              <h1 className="text-2xl flex-1 pl-40">
                property price:
                <br />
                <span className="text-green-500 text-sm">
                  currency: INR
                </span>{" "}
              </h1>

              <input
                type="number"
                id="regularPrice"
                min="100"
                max="1000000000"
                required
                className="p-3 border-black border-2 rounded-lg m-auto flex-1"
                onChange={handleChange}
                value={formData.regularPrice}
              />
            </div>

            <div className="flex flex-row justify-between p-5 gap-5 items-center">
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
            </div>

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
              <div className="flex flex-row p-5 gap-5 items-center">
                <h1 className="text-2xl pl-40 flex-1">Parking spot: </h1>

                <div className=" flex gap-2 flex-1 m-auto">
                  <input
                    type="checkbox"
                    id="parking"
                    className="w-10 border-black border-2"
                    onChange={handleChange}
                    checked={formData.parking}
                  />
                  <span>if applicable click checkbox</span>
                </div>
              </div>
              {formData.parking && (
                <div>
                  <div className="flex flex-row justify-between p-5 gap-5 items-center">
                    <h1 className="text-2xl flex-1 pl-40">Parking type: </h1>
                    <input
                      type="text"
                      placeholder="on-street / basement / open or covered / reserved / garage or else"
                      className="border-black border-2 p-3 rounded-lg m-auto flex-1"
                      id="parkingType"
                      required
                      onChange={handleChange}
                      value={formData.parkingType}
                    />
                  </div>
                  <div className="flex flex-row justify-between p-5 gap-5 items-center">
                    <h1 className="text-2xl flex-1 pl-40">
                      Parking area:
                      <br />
                      <span className="text-sm text-green-500">
                        Area in square feet
                      </span>{" "}
                    </h1>
                    <input
                      type="number"
                      id="parkingArea"
                      min="1"
                      max="2000"
                      required
                      className="p-3 border-black border-2 rounded-lg m-auto flex-1"
                      onChange={handleChange}
                      value={formData.parkingArea}
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-row p-5 gap-5 items-center">
                <h1 className="text-2xl pl-40 flex-1">furnished: </h1>

                <div className=" flex gap-2 flex-1 m-auto">
                  <input
                    type="checkbox"
                    id="furnished"
                    className="w-10 border-black border-2"
                    onChange={handleChange}
                    checked={formData.furnished}
                  />
                  <span>if applicable click checkbox</span>
                </div>
              </div>

              {/* -------------- */}
              <div className="flex flex-row p-5 gap-5 items-center">
                <h1 className="text-2xl pl-40 flex-1">Gym: </h1>
                <div className="flex gap-2 flex-1 m-auto">
                  <input
                    type="checkbox"
                    id="gym"
                    className="w-10 border-black border-2"
                    onChange={handleChange}
                    checked={formData.gym}
                  />
                  <span>if applicable click checkbox</span>
                </div>
              </div>

              <div className="flex flex-row p-5 gap-5 items-center">
                <h1 className="text-2xl pl-40 flex-1">School: </h1>
                <div className="flex gap-2 flex-1 m-auto">
                  <input
                    type="checkbox"
                    id="school"
                    className="w-10 border-black border-2"
                    onChange={handleChange}
                    checked={formData.school}
                  />
                  <span>if applicable click checkbox</span>
                </div>
              </div>

              <div className="flex flex-row p-5 gap-5 items-center">
                <h1 className="text-2xl pl-40 flex-1">Park: </h1>
                <div className="flex gap-2 flex-1 m-auto">
                  <input
                    type="checkbox"
                    id="park"
                    className="w-10 border-black border-2"
                    onChange={handleChange}
                    checked={formData.park}
                  />
                  <span>if applicable click checkbox</span>
                </div>
              </div>

              <div className="flex flex-row p-5 gap-5 items-center">
                <h1 className="text-2xl pl-40 flex-1">Shops: </h1>
                <div className="flex gap-2 flex-1 m-auto">
                  <input
                    type="checkbox"
                    id="shops"
                    className="w-10 border-black border-2"
                    onChange={handleChange}
                    checked={formData.shops}
                  />
                  <span>if applicable click checkbox</span>
                </div>
              </div>

              <div className="flex flex-row p-5 gap-5 items-center">
                <h1 className="text-2xl pl-40 flex-1">Public transport: </h1>
                <div className="flex gap-2 flex-1 m-auto">
                  <input
                    type="checkbox"
                    id="publicTransport"
                    className="w-10 border-black border-2"
                    onChange={handleChange}
                    checked={formData.publicTransport}
                  />
                  <span>if applicable click checkbox</span>
                </div>
              </div>

              {/* ---------------- */}
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
          </div>
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
