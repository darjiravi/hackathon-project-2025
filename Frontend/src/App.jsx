import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SearchSection from "./components/SearchSection/SearchSection";
import Categories from "./components/Categories/Categories";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./Pages/auth/Login";
import Signup from "./Pages/auth/Signup";
import Register from "./Pages/Register";
import FarmerRegistration from "./Pages/auth/FarmerRegistration";
import Footer from "./components/Footer/Footer";
import FAQ from "./Pages/FAQs";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchSection />
      <Categories />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/farmer-registration" element={<FarmerRegistration />} />
        <Route path="/register/sign-up" element={<Signup />} />
        <Route path="/faqs" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;