import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { useParams } from "react-router-dom";
export default function CreateListing() {
  const [files, setFiles] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [formData, setFormData] = useState({
    imageUrls: [],
    name: "",
    description: "",
    address: "",
    type: "rent",
    bedrooms: 1,
    bathrooms: 1,
    regularPrice: 0,
    discountPrice: 0,
    offer: false,
    parking: false,
    furnished: false,
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

useEffect(()=>{
    const fetchListing = async () => {
        const listingId = params.listingId;
        const res = await fetch(`/api/listing/get/${listingId}`);
        const data = await res.json();
        if(data.success===false){
            // setError(data.message);
            console.log(data.message);
            return;
        }
        setFormData(data);
        console.log(formData);
    }
    fetchListing();
}, []);


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
      const res = await fetch(`/api/listing/update/${params.listingId}`, {
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
    <div className="absolute bg-blue-100 w-screen min-h-screen">
      <main className="p-3 max-w-6xl mx-auto bg-blue-100 mt-20 ">
        {/* <h1 className="text-green-600 text-3xl text-center font-mono font-bold ">
          Admin access granted
        </h1> */}
        <h1 className="text-3xl font-semibold text-center my-7 ">
          update Listing
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4"
        >
          <div className="flex flex-col gap-4 flex-1">
            <input
              type="text"
              placeholder="name"
              className="border-black border-2 p-3 rounded-lg"
              id="name"
              maxLength="620"
              minLength="10"
              required
              onChange={handleChange}
              value={formData.name}
            />
            <input
              type="text"
              placeholder="description"
              className="border-black border-2 p-3 rounded-lg"
              id="description"
              required
              onChange={handleChange}
              value={formData.description}
            />
            <input
              type="text"
              placeholder="address"
              className="border-black border-2 p-3 rounded-lg"
              id="address"
              required
              onChange={handleChange}
              value={formData.address}
            />

            <div className=" flex gap-6 flex-wrap">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="sale"
                  className="w-5 border-black border-2"
                  onChange={handleChange}
                  checked={formData.type === "sale"}
                />
                <span>Sell</span>
              </div>

              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="rent"
                  className="w-5 border-black border-2"
                  onChange={handleChange}
                  checked={formData.type === "rent"}
                />
                <span>Rent</span>
              </div>

              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="parking"
                  className="w-5 "
                  onChange={handleChange}
                  checked={formData.parking}
                />
                <span>Parking spot</span>
              </div>

              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="furnished"
                  className="w-5"
                  onChange={handleChange}
                  checked={formData.furnished}
                />
                <span>Furnished</span>
              </div>

              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="offer"
                  className="w-5"
                  onChange={handleChange}
                  checked={formData.offer}
                />
                <span>Offer</span>
              </div>
            </div>

            <div className="flex gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="bedrooms"
                  min="1"
                  max="10"
                  required
                  className="p-3 border-black border-2 rounded-lg"
                  onChange={handleChange}
                  value={formData.bedrooms}
                />
                <span>Beds</span>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="bathrooms"
                  min="1"
                  max="10"
                  required
                  className="p-3 border-black border-2 rounded-lg"
                  onChange={handleChange}
                  value={formData.bathrooms}
                />
                <span>Baths</span>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="regularPrice"
                  min="100"
                  max="1000000000"
                  required
                  className="p-3 border-black border-2 rounded-lg"
                  onChange={handleChange}
                  value={formData.regularPrice}
                />
                <div className="text-center">
                  <p>Regular price</p>
                  <span className="text-xs">($ /month)</span>
                </div>
              </div>
              {formData.offer && (
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    id="discountPrice"
                    min="100"
                    max="1000000000"
                    required
                    className="p-3 border-black border-2 rounded-lg"
                    onChange={handleChange}
                    value={formData.discountPrice}
                  />
                  <div className="text-center">
                    <p>Discounted price</p>
                    <span className="text-xs">($ /month)</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-4">
            <p className="font-semibold">
              Images:
              <span className="font-normal text-gray-600 ml-2">
                The first image will be cover image (max 6 images allowed)
              </span>
            </p>

            <div className="flex gap-4">
              <input
                onChange={(e) => setFiles(e.target.files)}
                className="p-3 border border-gray-300 rounded w-full"
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
            <p className="text-red-700 text-sm">
              {imageUploadError && imageUploadError}
            </p>

            {formData.imageUrls &&
              formData.imageUrls.length > 0 &&
              formData.imageUrls.map((url, index) => (
                <div
                  key={url}
                  className="flex flex-row justify-between p-3 rounded-3xl border-2  border-blue-500"
                >
                  <img
                    src={url}
                    alt="listing image"
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="p-1 rounded-lg text-red-700  bg-blue-200 my-auto hover:opacity-75"
                  >
                    Remove
                  </button>
                </div>
              ))}

            <button
              disabled={loading || uploading}
              className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
            >
              {loading ? "updating..." : "Update listing"}
            </button>
            {error && <p className="text-red-700 text-sm">{error}</p>}
          </div>
        </form>
      </main>
    </div>
  );
}
