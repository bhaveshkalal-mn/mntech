

import Navigation from "./components/Navigation";

import Finalfooter from "./components/Finalfooter";

import {  Route, Routes } from "react-router-dom";


import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Happymillan from './components/Happymillan';
import Provend from './components/Provend';

import Adsindia from "./components/Adsindia";
import Mnlandingpage from "./components/Mnlandingpage";
import Aboutus from "./components/Aboutus";
import Experiencedesign from "./components/Experiencedesign";
import Interfacedesign from "./components/Interfacedesign";
import Joinus from "./components/Joinus";
import Contact from "./components/Contact";

import Whychooseuspage from "./components/Whychooseuspage";

import Workprocess from "./components/Workprocess";
import Mission_visionpage from "./components/Mission&visionpage";
import Software_devlopment from "./components/Software_devlopment";
import Web_app_page from "./components/Web_app_page";
import Website_development_and_maintenance from "./components/Website_development_and_maintenance";
import Mobile_App_Development from "./components/Mobile_App_Development";
import E_commerce_developmen from "./components/E_commerce_developmen";
import Social_media_platform_development from "./components/Social_media_platform_development";
import Ott_development from "./components/Ott_development";
import "./App.css";
import Coming_soon from "./components/Coming_soon";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};





function App() {
  return (
    <>
   
   

    
    
    <Navigation/>
    <ScrollToTop/>
      
    <Routes>
      <Route path="/" element={<Mnlandingpage/>}></Route>
      <Route path="/mnlandingpage/viewourservice" element={<Software_devlopment/>}></Route>
      <Route path="/mnlandingpage/readmore" element={<Mobile_App_Development/>}></Route>
      <Route path="/mnlandingpage/section2/readmore" element={<Aboutus/>}></Route>
      <Route path="/mnlandingpage/softwaredevelopment" element={<Software_devlopment/>}></Route>
      <Route path="/mnlandingpage/socialmedia" element={<Social_media_platform_development/>}></Route>
      <Route path="/mnlandingpage/webapp" element={<Web_app_page/>}></Route>
      <Route path="/about/aboutus" element={<Aboutus/>}></Route>
      <Route path="/footer/aboutus" element={<Aboutus/>}></Route>
      <Route path="/aboutus/softwaredevelopment" element={<Software_devlopment/>} ></Route>
      <Route path="/aboutus/socialmedia" element={<Social_media_platform_development/>} ></Route>
      <Route path="/aboutus/webapp" element={<Web_app_page/>} ></Route>
      <Route path="/about/whychooseus" element={<Whychooseuspage/>}></Route>
      <Route path="/about/howwework" element={<Workprocess/>}></Route>
      <Route path="/about/joinus" element={<Joinus/>}></Route>
      <Route path="/about/missonvision" element={<Mission_visionpage/>}></Route>
      <Route path="/service/design/userinterfacedesign" element={<Interfacedesign/>}></Route>
      <Route path="/service/design/userexperiencedesign" element={<Experiencedesign/>}></Route>
      <Route path="/service/design/consultourexpert" element={<Contact/>}></Route>
      <Route path="/service/softwaredevelopment/customsoftwaredevelopment" element={<Software_devlopment/>}></Route>
      <Route path="/service/softwaredevelopment/webapplicationdevelopment" element={<Web_app_page/>}></Route>
      <Route path="/service/softwaredevelopment/mobileapplicationdevelopment" element={<Mobile_App_Development/>}></Route>
      <Route path="/service/socialmedia/socialmediaplatformdevelopment" element={<Social_media_platform_development/>}></Route>
      <Route path="/service/socialmedia/ottdevelopment" element={<Ott_development/>}></Route>
      <Route path="/service/webapp/customsoftwaredevelopment" element={<Software_devlopment/>}></Route>
      <Route path="/service/webapp/ecommercedevelopment" element={<E_commerce_developmen/>}></Route>
      <Route path="/service/webapp/websitedevelopmentandmaintenance" element={<Website_development_and_maintenance/>}></Route>
      <Route path="/product/dating/hppymillan" element={<Happymillan/>}></Route>
      <Route path="/product/sales/proVend" element={<Provend/>}></Route>
      <Route path="/product/sales/adsindia" element={<Adsindia/>}></Route>
      <Route path="/product/happymillan" element={<Happymillan/>}></Route>
      <Route path="/product/proVend" element={<Provend/>}></Route>
      <Route path="/product/adsindia" element={<Adsindia/>}></Route>

      <Route path="/about/aboutus/happymillan" element={<Happymillan/>}></Route>
      <Route path="/about/aboutus/adsindia" element={<Adsindia/>}></Route>
      <Route path="/about/aboutus/provend" element={<Provend/>}></Route>
      
      
      <Route path="/service/webapp/websitedevelopmentandmaintenance/help" element={<Contact/>}></Route>
      <Route path="/service/design/userexperiencedesign/help" element={<Contact/>}></Route>
      <Route path="/service/design/userinterfacedesign/help" element={<Contact/>}></Route>
      <Route path="/service/softwaredevelopment/mobileapplicationdevelopment/help" element={<Contact/>}></Route>
      <Route path="/service/socialmedia/socialmediaplatformdevelopment/help" element={<Contact/>}></Route>
      <Route path="/service/webapp/customsoftwaredevelopment/help" element={<Contact/>}></Route>
      <Route path="/service/softwaredevelopment/customsoftwaredevelopment/help" element={<Contact/>}></Route>
      <Route path="/service/webapp/ecommercedevelopment/help" element={<Contact/>}></Route>

     <Route path="/comingsoon" element={<Coming_soon/>}></Route>
      <Route path="/Join" element={<Joinus/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/button" element={<Contact/>}></Route>
     
      
    </Routes>
    
    
    <Finalfooter/>

    
     
      


    

    </>
  );
}

export default App;
