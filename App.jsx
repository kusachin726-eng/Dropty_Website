import "./App.css";
import About from "./components/About";
import ExclusiveSection from "./components/ExclusiveSection";
import InstantQuote from "./components/InstantQuote";
import MobileServices from "./components/MobileServices";

import OfferServices from "./components/OfferServices";
import OurServices from "./components/OurServices";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Questions from "./components/Questions";
import RouteConfig from "./route/RouteConfig";
import PickUpServices from "./components/PickUpServices";

function App() {
  return (
    <>
      {/* <RouteConfig /> */}
         <Header />
      <OfferServices />
      <OurServices />
      <PickUpServices/>
      <ExclusiveSection /> 
      <InstantQuote /> 
      <MobileServices />
      <Questions />
      <Footer />
    </>
  );
}

export default App;
