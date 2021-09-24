import React from "react";
import MainArticle from "../Componenets/MainArticle";
import Categories from "../Componenets/Categories";
import FeaturedProd from "../Componenets/FeaturedProd";
import LatestProd from "../Componenets/LatestProd";
import SpecialPromo from "../Componenets/SpecialPromo";
import Feedback from "../Componenets/Feedback";
import ContactUs from "../Componenets/ContactUs";
import Brands from "../Componenets/Brands";


function Home() {
    

  return (
    <div>
      <MainArticle/>
      <Categories/>
      <FeaturedProd/>
      <LatestProd/>
      <SpecialPromo/>
      <Feedback/>
      <ContactUs/>
      <Brands/>
    </div>
    
  );
}

export default Home;
