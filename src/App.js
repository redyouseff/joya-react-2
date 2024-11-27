import React from "react";
import "./App.css";
import Header from "./component/Header.tsx";
import Footer from "./component/Footer.tsx";
import Page from "./pages/page.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./pages/Services.jsx";
import ContactPage from "./component/Contact/ContectPage.jsx";
import AboutPage from "./component/About/AboutPage.tsx";
import Projects from "./component/projectsSection/Projects.jsx";
import Features from "./component/projectsSection/Featuress/Features.jsx";
import OffPlan from "./component/projectsSection/offplan/offplan/OffPlan.jsx"
import OffPlan2 from "./component/projectsSection/offplan/offplan/OffPlan2.jsx";
import Features2 from "./component/projectsSection/Featuress/Features2.jsx";
import Luxury from "./component/projectsSection/luxury/Luxury.jsx";
import Blog from "./component/Blogs/blog.jsx";
import SpecificBlog from "./component/Blogs/SpesificBlog.jsx";
import EmailInputScreen from "./pages/EmailPage.jsx";
import LoginComponent from "./pages/LoginPage.jsx";
import Properties from "./pages/Dashboard.jsx";


function App() {
  return (
    <BrowserRouter>
     
        <Header />
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Contact" element={<ContactPage />} /> 
          <Route path="/About" element={<AboutPage />} /> 
          <Route path="/Projects" element={<Projects />} /> 
          <Route path="/Projects/Features" element={<Features />} /> 
          <Route path="/Projects/Features2/:id" element={<Features2 />} /> 
          <Route path="/Projects/Off-Plan" element={< OffPlan/>} />
          <Route path="/Projects/Off-Plan2/:id" element={< OffPlan2/>} />
          <Route path="/Projects/Luxury" element={< Luxury/>} />
          <Route path="/Blog" element={< Blog/>} />
          <Route path="/SpecificBlog/:id" element={< SpecificBlog/>} />
          <Route path="/email" element={< EmailInputScreen/>} />
          <Route path="/login" element={< LoginComponent/>} />
          <Route path="/Properties" element={< Properties/>} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
