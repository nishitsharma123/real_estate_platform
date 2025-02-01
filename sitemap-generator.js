// import { SitemapStream, streamToPromise } from "sitemap";
// import { writeFileSync } from "fs";
// import { join } from "path";
// // import { get } from "axios";

// const BASE_URL = "https://www.ibuyr.in"; // Replace with your actual domain

// // ✅ Static Routes (Public Only, No Admin Pages)
// const staticRoutes = [
//   "/",
//   "/about",
//   "/contact-us",
//   "/faq",
//   "/search",
//   "/sign-in",
//   "/sign-up",
//   "/property-dashboard",
//   "/propvalue",
//   "/term&condition",
//   "/listing/:listingId",
//   "/price-prediction",
// ];

// // ❌ Excluded Routes (Admin-Only Pages)
// // "/admin-dashboard"
// // "/user-management"
// // "/site-settings"

// async function getListings() {
//   try {
//     const response = await fetch("https://www.ibuyr.in/api/listing/get"); // Replace with actual API
//     return response.data.map((listing) => `/listing/${listing.id}`);
//   } catch (error) {
//     console.error("❌ Error fetching listings:", error);
//     return [];
//   }
// }

// async function generateSitemap() {
//   const listings = await getListings();
//   const allRoutes = [...staticRoutes, ...listings];

//   const stream = new SitemapStream({ hostname: BASE_URL });

//   allRoutes.forEach((route) => {
//     stream.write({ url: route, changefreq: "daily", priority: 0.8 });
//   });

//   stream.end();
//   const sitemap = await streamToPromise(stream).then((data) => data.toString());

//   // Save sitemap.xml in the public folder
//   writeFileSync(join(__dirname, "public", "sitemap.xml"), sitemap);

//   console.log("✅ Sitemap generated successfully!");
// }

// generateSitemap().catch(console.error);
// sitemap-generator.js

// Import required modules using ES Modules syntax
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";
import { SitemapStream, streamToPromise } from "sitemap";

// Set up __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Your website's base URL (replace with your actual domain)
const BASE_URL = "https://www.ibuyr.in";

// Define public (static) routes that you want search engines to index
const staticRoutes = [
  "/",
  "/about",
  "/contact-us",
  "/faq",
  "/search",
  "/sign-in",
  "/sign-up",
  "/property-dashboard",
  "/propvalue",
  "/term&condition",
  "/listing/:listingId",
  "/price-prediction",
];

// Function to fetch dynamic listings from your API
async function getListings() {
  try {
    // Replace the URL below with your actual API endpoint
    const response = await axios.get("https://www.ibuyr.in/api/listing/get");

    // Log the data to check its structure (remove or comment out in production)
    console.log("API Response Data:", response.data);

    // Ensure the data is an array before mapping
    if (response.data && Array.isArray(response.data)) {
      return response.data.map((listing) => `/listing/${listing._id}`);
    } else {
      console.error("❌ Listing data is not an array or is missing.");
      return [];
    }
  } catch (error) {
    console.error("❌ Error fetching listings:", error);
    return [];
  }
}

// Main function to generate the sitemap
async function generateSitemap() {
  // Fetch dynamic routes (listings)
  const listings = await getListings();

  // Combine static routes and dynamic listings
  const allRoutes = [...staticRoutes, ...listings];

  // Create a new SitemapStream with your hostname
  const stream = new SitemapStream({ hostname: BASE_URL });

  // Write each route into the stream
  allRoutes.forEach((route) => {
    stream.write({ url: route, changefreq: "daily", priority: 0.8 });
  });

  // End the stream
  stream.end();

  // Convert the stream to a string (the final XML sitemap)
  const sitemap = await streamToPromise(stream).then((data) => data.toString());

  // Define the output path (ensure you have a /public folder)
  const outputPath = path.join(__dirname, "public", "sitemap.xml");

  // Write the sitemap XML to the file system
  fs.writeFileSync(outputPath, sitemap);

  console.log("✅ Sitemap generated successfully at", outputPath);
}

// Run the sitemap generation
generateSitemap();
