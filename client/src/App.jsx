import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import PredictPrice from "./pages/PriceEvaluate";
import PropertyDashboard from "./pages/PropertyDashboard";
import Contactus from "./pages/Contactus";
import Faq from "./pages/Faq";
import Propvalue from "./pages/Propvalue";
import ShowListing from "./pages/ShowListing";
import UpdateListing from "./pages/UpdateListing";
import Listing from "./pages/Listing";
export default function App() {



  return (
    <BrowserRouter>
    
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/listing/:listingId" element={<Listing />} />

      <Route  element={<PrivateRoute />} >
      <Route path="/profile" element={<Profile />} />
      <Route path="/create-listing" element={<CreateListing />} />
      <Route path="/show-listing" element={<ShowListing />} />
      <Route path="/property-dashboard" element={<PropertyDashboard />} />
      <Route path="/update-listing/:listingId" element={<UpdateListing />} />
      </Route>
      
      <Route path="/price-prediction" element={<PredictPrice />} />
      <Route path="/contact-us" element={<Contactus />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/faq" element={<Faq/>} />
      <Route path="/propvalue" element={<Propvalue/>}/>
      
    </Routes>
   
    </BrowserRouter>
  )
}

