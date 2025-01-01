import React, { useState } from "react";

import { Link, NavLink , useLocation } from "react-router-dom";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";


function Finalfooter() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const location = useLocation()

 
 
  
  return (
    <div>
      <div className="w-full h-full grid place-items-center mb-[30px] lg:mb-[20px] xl:mb-[20px] ">
        <div className=" w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] mt-[-80px] sm:mt-[80px]">
        <div className="sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px]  2xl:w-[1150px] sm:h-[1px] bg-[#DCDCDC] lg:mt-[60px] lg:mb-[0px]"></div>
          <div className=" grid place-items-center sm:place-items-start sm:grid-cols-2 md:grid-cols-4 mt-[40px] sm:gap-x-[170px] md:gap-x-[140px] lg:gap-x-[205px] xl:gap-x-[230px] 2xl:gap-x-[250px]">
          
            <div className="hidden sm:block w-[80px] h-[40px] sm:w-[140px] sm:h-[206px] py-[20px] sm:py-[0px] ">
                
              <h1 id="footer-h1" className="text-[16px] sm:text-[13px] xl:text-[16px] " >Company</h1>
              <ul id="footer-p1" className=" hidden sm:block mt-[20px] xl:mt-[30px] text-[11px] xl:text-[13px] md:grid lg:gap-y-[2px]">
              <a href="/about/aboutus"><li className={`hover:text-[#0904F2] cursor-pointer ${location.pathname === "/about/aboutus" ? "text-[#0904F2]" : ""}`}>About us</li></a>     
              <a href="/about/whychooseus"><li className={`hover:text-[#0904F2] cursor-pointer ${location.pathname === "/about/whychooseus" ? "text-[#0904F2]" : ""}`}> Our Services</li></a>
                <li className="hover:text-[#0904F2] cursor-pointer">Company History</li>
                <a href="/about/joinus"><li className={`hover:text-[#0904F2] cursor-pointer ${location.pathname === "/about/joinus" ? "text-[#0904F2]" : ""}`}> Join Our Team</li></a>
               
              </ul>
            </div>
           
            <div className="hidden sm:block w-[70px] h-[40px] sm:w-[230px] sm:h-[260px] py-[20px] sm:py-[0px] md:ml-[-25px]  ">
              <h1 id="footer-h1" className="text-[16px] sm:text-[13px] xl:text-[16px]">Services</h1>
              <ul id="footer-p1" className="hidden sm:block mt-[20px] xl:mt-[30px]  text-[11px] xl:text-[13px] md:grid lg:gap-y-[2px]">
              <a href="/service/softwaredevelopment/mobileapplicationdevelopment"><li className={`hover:text-[#0904F2] cursor-pointer ${location.pathname === "/service/softwaredevelopment/mobileapplicationdevelopment" ? "text-[#0904F2]" : ""}`}>iOS app development</li></a>
                <a href="/service/softwaredevelopment/mobileapplicationdevelopment"><li className={`hover:text-[#0904F2] cursor-pointer ${location.pathname === "/service/softwaredevelopment/mobileapplicationdevelopment" ? "text-[#0904F2]" : ""}`}> Android app development</li></a>
                <a href="/service/softwaredevelopment/customsoftwaredevelopment"><li className={`hover:text-[#0904F2] cursor-pointer ${location.pathname === "/service/softwaredevelopment/customsoftwaredevelopment" ? "text-[#0904F2]" : ""}`}>Software development</li></a>
                <li className="hover:text-[#0904F2] cursor-pointer"> Flutter app development</li>
                <li className="hover:text-[#0904F2] cursor-pointer"> React native app development </li>
                <a href="/service/socialmedia/ottdevelopment"><li className={`hover:text-[#0904F2] cursor-pointer ${location.pathname === "/service/socialmedia/ottdevelopment" ? "text-[#0904F2]" : ""}`}>OTT App Development</li></a>
                <a href="/service/socialmedia/socialmediaplatformdevelopment"><li className={`hover:text-[#0904F2] cursor-pointer ${location.pathname === "/service/socialmedia/socialmediaplatformdevelopment" ? "text-[#0904F2]" : ""}`}>Social Media App Development</li></a>
                <a href="/service/webapp/ecommercedevelopment"><li className={`hover:text-[#0904F2] cursor-pointer ${location.pathname === "/service/webapp/ecommercedevelopment" ? "text-[#0904F2]" : ""}`}>E-Commerce Development</li></a>
              </ul>
            </div>
            
            <div className="hidden sm:block w-[80px] h-[40px] sm:w-[120px] sm:h-[275px] py-[20px] sm:py-[0px] md:ml-[45px] ">
              <h1 id="footer-h1" className="text-[16px] sm:text-[13px] xl:text-[16px]">Industries</h1>
              <ul id="footer-p1" className="hidden sm:block mt-[20px] xl:mt-[30px]  text-[11px] xl:text-[13px] md:grid lg:gap-y-[2px]">
                <li className="hover:text-[#0904F2] cursor-pointer">Healthcare</li>
                <li className="hover:text-[#0904F2] cursor-pointer"> On demand</li>
                <li className="hover:text-[#0904F2] cursor-pointer">Finance</li>
                <li className="hover:text-[#0904F2] cursor-pointer"> Social networking </li>
                <li className="hover:text-[#0904F2] cursor-pointer"> Entertainment</li>
                <li className="hover:text-[#0904F2] cursor-pointer"> Restaurant </li>
                <li className="hover:text-[#0904F2] cursor-pointer"> Real estate </li>
                <li className="hover:text-[#0904F2] cursor-pointer"> Gaming</li>
                <li className="hover:text-[#0904F2] cursor-pointer">Education</li>
                <li className="hover:text-[#0904F2] cursor-pointer">Aviation</li>
                <li className="hover:text-[#0904F2] cursor-pointer">Agriculture</li>
              </ul>
            </div>
            
            <div className=" hidden sm:block w-[80px] h-[40px] sm:w-[97px] sm:h-[91px] py-[20px] sm:py-[0px]  ">
              <h1 id="footer-h1" className="text-[16px] sm:text-[13px] xl:text-[16px]">Resources</h1>
              <ul id="footer-p1" className=" hidden sm:block mt-[20px] xl:mt-[30px]  text-[11px] xl:text-[13px] md:grid lg:gap-y-[2px]">
                <li className="hover:text-[#0904F2] cursor-pointer">Blog</li>
              </ul>
            </div>
            
            

            <List>
            <div className="sm:hidden    ">

        <Accordion
          open={open === 1}
          
        >
          <div className="h-[1px] w-[333px] sm:w-[730px] md:w-[950px] bg-[#E4E4E4] mt-[20px]"></div>
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 py-2 "
            >
              <ListItemPrefix></ListItemPrefix>
              <Typography
                color="blue-gray"
                className=" font-medium text-[16px]"
              >
                Company
              </Typography>
            </AccordionHeader>
          </ListItem>
          <div className="h-[1px] w-[333px] sm:w-[730px] md:w-[950px] bg-[#E4E4E4]"></div>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem className={`font-medium text-[14px] grid place-items-center hover:text-[#0904F2] cursor-pointer ${location.pathname === "/about/aboutus" ? "text-[#0904F2]" : ""}`}>
                
                <a href="/about/aboutus">About Us</a>
              </ListItem>
              <ListItem className={`font-medium text-[14px] mt-[-20px] grid place-items-center hover:text-[#0904F2] cursor-pointer ${location.pathname === "/about/whychooseus" ? "text-[#0904F2]" : ""}`}>
                
                <a href="/about/whychooseus">
                Our Services
                </a>
              </ListItem>
              <ListItem className="font-medium text-[14px] mt-[-20px] grid place-items-center hover:text-[#0904F2] cursor-pointer">
               
                <p >Company History</p>
              </ListItem>
              <ListItem className={`font-medium text-[14px] mt-[-20px] grid place-items-center hover:text-[#0904F2] cursor-pointer ${location.pathname === "/about/joinus" ? "text-[#0904F2]" : ""}`}>
               
                <a href="/about/joinus">Join Our Team </a>
                
              </ListItem>
             
              <div className="h-[1px] w-[333px] sm:w-[730px] md:w-[950px] bg-[#E4E4E4] mt-[5px]"></div>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 2}
          
        >
          
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 py-2  "
            >
              <ListItemPrefix></ListItemPrefix>
              <Typography
                color="blue-gray"
                className=" font-medium text-[16px]"
              >
                Services
              </Typography>
            </AccordionHeader>
          </ListItem>
          <div className="h-[1px] w-[333px] sm:w-[730px] md:w-[950px] bg-[#E4E4E4]"></div>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem className={`font-medium text-[14px] grid place-items-center hover:text-[#0904F2] cursor-pointer ${location.pathname === "/service/softwaredevelopment/mobileapplicationdevelopment" ? "text-[#0904F2]" : ""}`}>
                
                <a href="/service/softwaredevelopment/mobileapplicationdevelopment">iOS app development</a>
              </ListItem>
              <ListItem className={`font-medium text-[14px] mt-[-20px] grid place-items-center hover:text-[#0904F2] cursor-pointer ${location.pathname === "/service/softwaredevelopment/mobileapplicationdevelopment" ? "text-[#0904F2]" : ""}`}>
                
                <a href="/service/softwaredevelopment/mobileapplicationdevelopment">
                Android app development
                </a>
              </ListItem>
              <ListItem className={`font-medium text-[14px] mt-[-20px] grid place-items-center hover:text-[#0904F2] cursor-pointer ${location.pathname === "/service/softwaredevelopment/customsoftwaredevelopment"? "text-[#0904F2]" : ""}`}>
               
                <a href="/service/softwaredevelopment/customsoftwaredevelopment" >Software development</a>
              </ListItem>
              <ListItem className="font-medium text-[14px] mt-[-20px] grid place-items-center hover:text-[#0904F2] cursor-pointer">
               
                <p>Flutter app development</p>
              </ListItem>
              <ListItem className="font-medium text-[14px] mt-[-20px] grid place-items-center hover:text-[#0904F2] cursor-pointer">
               
                <p> React native app development</p>
              </ListItem>
              <ListItem className={`font-medium text-[14px] mt-[-20px] grid place-items-center hover:text-[#0904F2] cursor-pointer ${location.pathname === "/service/socialmedia/ottdevelopment" ? "text-[#0904F2]" : ""}`}>
               
                <a href="/service/socialmedia/ottdevelopment">OTT App Development</a>
              </ListItem>
              <ListItem className={`font-medium text-[14px] mt-[-20px] grid place-items-center hover:text-[#0904F2] cursor-pointer ${location.pathname === "/service/socialmedia/socialmediaplatformdevelopment" ? "text-[#0904F2]" : ""}`}>
               
                <a href="/service/socialmedia/socialmediaplatformdevelopment">Social Media App Development</a>
              </ListItem>
              <ListItem className={`font-medium text-[14px] mt-[-20px] grid place-items-center hover:text-[#0904F2] cursor-pointer ${location.pathname === "/service/webapp/ecommercedevelopment" ? "text-[#0904F2]" : ""}`}>
               
                <a href="/service/webapp/ecommercedevelopment">E-Commerce Development</a>
              </ListItem>
             
              <div className="h-[1px] w-[333px] sm:w-[730px] md:w-[950px] bg-[#E4E4E4] mt-[5px]"></div>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 3}
          
        >
         
          <ListItem className="p-0" selected={open === 3}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="border-b-0 py-2 "
            >
              <ListItemPrefix></ListItemPrefix>
              <Typography
                color="blue-gray"
                className=" font-medium text-[16px]"
              >
               Industries
              </Typography>
            </AccordionHeader>
          </ListItem>
          <div className="h-[1px] w-[333px] sm:w-[730px] md:w-[950px] bg-[#E4E4E4]"></div>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem className="font-medium text-[14px] grid place-items-center hover:text-[#0904F2] cursor-pointer">
                
                <p>Healthcare</p>
              </ListItem>
              <ListItem className="font-medium text-[14px] mt-[-20px] grid place-items-center hover:text-[#0904F2] cursor-pointer">
                
                <p>
                On demand
                </p>
              </ListItem>
              <ListItem className="font-medium text-[14px] mt-[-20px] grid place-items-center hover:text-[#0904F2] cursor-pointer">
               
                <p >Finance</p>
              </ListItem>
              <ListItem className="font-medium text-[14px] mt-[-20px] grid place-items-center hover:text-[#0904F2] cursor-pointer">
               
                <p>Social networking</p>
              </ListItem>
              <ListItem className="font-medium text-[14px] mt-[-20px] grid place-items-center hover:text-[#0904F2] cursor-pointer">
               
                <p>Entertainment</p>
              </ListItem>
              <ListItem className="font-medium text-[14px] mt-[-20px] grid place-items-center hover:text-[#0904F2] cursor-pointer">
               
                <p>Restaurant</p>
              </ListItem>
              
              <ListItem className="font-medium text-[14px] mt-[-20px] grid place-items-center hover:text-[#0904F2] cursor-pointer">
               
                <p>Real estate</p>
              </ListItem>
              <ListItem className="font-medium text-[14px] mt-[-20px] grid place-items-center hover:text-[#0904F2] cursor-pointer">
               
                <p>Education</p>
              </ListItem>
              <ListItem className="font-medium text-[14px] mt-[-20px] grid place-items-center hover:text-[#0904F2] cursor-pointer">
               
                <p>Aviation</p>
              </ListItem>
             
              <ListItem className="font-medium text-[14px] mt-[-20px] grid place-items-center hover:text-[#0904F2] cursor-pointer">
               
               <p>Agriculture</p>
             </ListItem>
             <div className="h-[1px] w-[333px] sm:w-[730px] md:w-[950px] bg-[#E4E4E4] mt-[5px]"></div>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 4}
          
        >
          
          <ListItem className="p-0" selected={open === 4}>
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className="border-b-0 py-2 "
            >
              <ListItemPrefix></ListItemPrefix>
              <Typography
                color="blue-gray"
                className=" font-medium text-[16px]"
              >
               Resources
              </Typography>
            </AccordionHeader>
          </ListItem>
          <div className="h-[1px] w-[333px] sm:w-[730px] md:w-[950px] bg-[#E4E4E4]"></div>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem className="font-medium text-[14px] grid place-items-center hover:text-[#0904F2] cursor-pointer">
                
                <p>Blog</p>
              </ListItem>
              
             
             
            </List>
          </AccordionBody>
        </Accordion>
        </div>
        </List>
            
            
          </div>
          <div className=" sm:hidden mt-[15px] ">
                      <div className="flex gap-[60px] ">
                        <img src="/images/linkedin 1.svg"></img>
                        
                        <a target="_blank" href="https://www.instagram.com/mntechgroup/">
                <img src="/images/insta.svg" />
              </a>
              <a target="_blank" href="https://www.facebook.com/profile.php?id=100094066146720">
                <img src="/images/fb.svg" />
              </a>
              <a target="_blank" href="https://www.pinterest.com/mntechgroup/">
                <img src="/images/pintrest.svg" />
              </a>

              <a target="_blank" href="https://www.youtube.com/@MNTechgroupOfficial">
                <img src="/images/youtube.svg" />
              </a>
                      </div>
                    </div>
                    <div className="w-full grid place-items-center text-[12px] sm:hidden mt-[30px]">
                        <p id="terms" className="mt-[15px]">© 2020 MN IT Solution. All rights reserved</p>
                    </div>
          <div className="sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px]  2xl:w-[1150px] sm:h-[1px] bg-[#DCDCDC]   xl:mt-[60px]"></div>
          <div className="mt-[20px] md:mt-[30px] lg:mt-[20px] xl:mt-[20px] sm:flex text-[12px] xl:text-[13px] hidden ">
            <p id="terms" className=" sm:mr-[175px]  md:mr-[345px] lg:mr-[515px] xl:mr-[545px] 2xl:mr-[645px]">© 2020 MN IT Solution. All rights reserved</p>
            <div className="hidden sm:block place-items-end">
                      <div className="flex sm:gap-[20px] lg:gap-[30px] xl:gap-[40px] ">
                      <img src="/images/linkedin 1.svg"></img>
                       
                      <a  target="_blank" href="https://www.instagram.com/mntechgroup/"><img src="/images/insta.svg" /></a>
                <a  target="_blank" href="https://www.facebook.com/profile.php?id=100094066146720"><img src="/images/fb.svg" /></a>
                <a  target="_blank" href="https://www.pinterest.com/mntechgroup/"><img src="/images/pintrest.svg" /></a>
                <a  target="_blank" href="https://www.youtube.com/@MNTechgroupOfficial"><img src="/images/youtube.svg" /></a>
                      </div>
                    </div>
                    
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finalfooter;
