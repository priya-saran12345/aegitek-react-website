// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
// import Hero from "./components/Hero.jsx";
// import Contact from "./components/Contact.jsx";
// import AutoSlide from "./components/AutoSlide.jsx";
// import About from "./components/About.jsx";
// import Footer from "./components/Footer.jsx";
// import ServicePge from "./components/ServicePge.jsx";
// import WhyChooseUs from "./components/WhyChooseUs.jsx";
// import Team from "./components/Team.jsx";
// import PagesPage from "./pages/PagesPage.jsx";
// import CareerPage from "./pages/CareerPage.jsx";
// import ContactPage from "./pages/ContactPage.jsx";
// import AboutPage from "./pages/AboutPage.jsx";
// import DairyErp from "./pages/DairyErp.jsx";
// import SoftwareDevelopment from "./pages/SoftwareDevelopment.jsx";
// import WebMobileApp from "./pages/WebMobileApp.jsx";
// import ITConsultancy from "./pages/ITConsultancy.jsx";
// import AiMi from "./pages/AiMi.jsx";
// import DigitalMarketing from "./pages/DigitalMarketing.jsx";
// import TrainingInternship from "./pages/TrainingInternship.jsx";
// import MilkErp from "./pages/MilkErp.jsx";
// import ErpNext from "./pages/ErpNext.jsx";
// import MilkTrail from "./pages/MilkTrail.jsx";

// const HomePage = () => (
//   <>
//     <Hero />
//     <About />
//     <ServicePge/>
//     <AutoSlide />
//     <WhyChooseUs />
//     <Team/>
//     <Contact />
//   </>
// );

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         {/* Main Pages */}
//         <Route path="/" element={<HomePage />} />
//         <Route path="/AboutPage" element={<AboutPage />} />
//         <Route path="/Career" element={<CareerPage />} />
//         <Route path="/Contact" element={<ContactPage />} />
        
//         {/* Services Routes - Updated to match BraintechHeader hrefs */}
//         <Route path="/services/Dairy-ERP" element={<DairyErp />} />
//         <Route path="/services/Software-Development" element={<SoftwareDevelopment />} />
//         <Route path="/services/Web-Mobile-App" element={<WebMobileApp />} />
//         <Route path="/services/IT-Consultancy" element={<ITConsultancy />} />
//         <Route path="/services/AI-ML" element={<AiMi />} />
//         <Route path="/services/Digital-Marketing" element={<DigitalMarketing />} />
//         <Route path="/services/Training-Internship" element={<TrainingInternship />} />
        
//         {/* Pages Routes - These should match your PagesPage dropdown items */}
// <Route path="/products/milk-matrix-erp" element={<MilkErp />} />
// <Route path="/products/erp-next" element={<ErpNext />} />
// <Route path="/products/milk-trail" element={<MilkTrail />} />
// <Route path="/products" element={<PagesPage />} />
        
//         {/* Legacy routes - keeping for backward compatibility */}
//         <Route path="/About" element={<About />} />
//         <Route path="/Pages" element={<PagesPage />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;









import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Homepage components
import Hero from "./components/Hero";
import ServicePge from "./components/ServicePge";
import About from "./components/About";
import AutoSlide from "./components/AutoSlide";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";

// Pages
import AboutPage from "./pages/AboutPage";
import CareerPage from "./pages/CareerPage";
import ContactPage from "./pages/ContactPage";

// Services Pages
import DairyErp from "./pages/DairyErp";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import WebMobileApp from "./pages/WebMobileApp";
import ITConsultancy from "./pages/ITConsultancy";
import AiMi from "./pages/AiMi";
import DigitalMarketing from "./pages/DigitalMarketing";
import TrainingInternship from "./pages/TrainingInternship";

// Product Pages
import MilkErp from "./pages/MilkErp";
import ErpNext from "./pages/ErpNext";
import MilkTrail from "./pages/MilkTrail";
// import FakeVoice from "./pages/FakeVoice";
const HomePage = () => (
  <>
    <Hero />
    <ServicePge />
    <About />
    <AutoSlide />
    <WhyChooseUs />
    <Contact />
  </>
);

const App = () => {
  return (
    <Router>
            <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/Career" element={<CareerPage />} />
        <Route path="/Contact" element={<ContactPage />} />

        {/* Services Routes */}
        <Route path="/services/Dairy-ERP" element={<DairyErp />} />
        <Route path="/services/Software-Development" element={<SoftwareDevelopment />} />
        <Route path="/services/Web-Mobile-App" element={<WebMobileApp />} />
        <Route path="/services/IT-Consultancy" element={<ITConsultancy />} />
        <Route path="/services/AI-ML" element={<AiMi />} />
        <Route path="/services/Digital-Marketing" element={<DigitalMarketing />} />
        <Route path="/services/Training-Internship" element={<TrainingInternship />} />

        {/* Products Routes */}
        <Route path="/products/milk-matrix-erp" element={<MilkErp />} />
        <Route path="/products/erp-next" element={<ErpNext />} />
        <Route path="/products/milk-trail" element={<MilkTrail />} />
        {/* <Route path="/products/fake-voice" element={<FakeVoice />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
