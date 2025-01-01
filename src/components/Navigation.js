import React, { useState } from "react";

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
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
import { Link, NavLink, useLocation } from "react-router-dom";







function Navigation() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };


  const mobileList = (
    <>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""
                }`}
            />
          }
        >
          <div className="h-[1px] w-[333px] sm:w-[730px] md:w-[950px] bg-[#E4E4E4] mt-[20px]"></div>
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 py-3 "
            >
              <ListItemPrefix></ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-bold text-[18px]"
              >
                About
              </Typography>
            </AccordionHeader>
          </ListItem>
          <div className="h-[1px] w-[333px] sm:w-[730px] md:w-[950px] bg-[#E4E4E4]"></div>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem className="font-semibold text-[14px]">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5  " />
                </ListItemPrefix>
                <a href="/about/aboutus">About Us</a>
              </ListItem>
              <ListItem className="font-semibold text-[14px]">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5 " />
                </ListItemPrefix>
                <a href="/about/whychooseus">
                  Why Choose Us?
                </a>
              </ListItem>
              <ListItem className="font-semibold text-[14px]">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5 " />
                </ListItemPrefix>
                <a href="/about/joinus">Join Us</a>
              </ListItem>
              <ListItem className="font-semibold text-[14px]">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5 " />
                </ListItemPrefix>
                <a href="/about/missonvision">Mission & Vision </a>
              </ListItem>
              <ListItem className="font-semibold text-[14px]">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5 " />
                </ListItemPrefix>
                <a href="/about/howwework">
                  How We Work?
                </a>
              </ListItem>
              <ListItem className="font-semibold text-[14px]">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5 " />
                </ListItemPrefix>
                What Client Says?
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion >

        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""
                }`}
            />
          }
        >

          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 py-3 "
            >
              <ListItemPrefix></ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-bold text-[18px]"
              >
                Service
              </Typography>
            </AccordionHeader>
          </ListItem>
          <div className="h-[1px] w-[333px] sm:w-[730px] md:w-[950px] bg-[#E4E4E4]"></div>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem className="font-semibold text-[14px]">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5  " />
                </ListItemPrefix>
                <a href="/service/design/userinterfacedesign">User Interface Design</a>
              </ListItem>
              <ListItem className="font-semibold text-[14px]">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5 " />
                </ListItemPrefix>
                <a href="/service/design/userexperiencedesign">
                  User Experience Design
                </a>
              </ListItem>
              <ListItem className="font-semibold text-[14px]">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5  " />
                </ListItemPrefix>
                <a href="/service/softwaredevelopment/customsoftwaredevelopment">Custom Software Development</a>
              </ListItem>
              <ListItem className="font-semibold text-[14px]">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5  " />
                </ListItemPrefix>
                <a href="/service/softwaredevelopment/webapplicationdevelopment">Web Application Development</a>
              </ListItem>
              <ListItem className="font-semibold text-[14px]">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5  " />
                </ListItemPrefix>
                <a href="/service/softwaredevelopment/mobileapplicationdevelopment">Mobile Application Development</a>
              </ListItem>
              <ListItem className="font-semibold text-[14px]">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5  " />
                </ListItemPrefix>
                <a href="/service/socialmedia/socialmediaplatformdevelopment">Social Media Platform Development</a>
              </ListItem>
              <ListItem className="font-semibold text-[14px]">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5  " />
                </ListItemPrefix>
                <a href="/service/socialmedia/ottdevelopment">OTT Development</a>
              </ListItem>
              <ListItem className="font-semibold text-[14px]">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5  " />
                </ListItemPrefix>
                <a href="/service/webapp/customsoftwaredevelopment">Custom application development</a>
              </ListItem>
              <ListItem className="font-semibold text-[14px]">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5  " />
                </ListItemPrefix>
                <a href="/service/webapp/ecommercedevelopment">E-Commerce development</a>
              </ListItem>
              <ListItem className="font-semibold text-[14px]">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5  " />
                </ListItemPrefix>
                <a href="/service/webapp/websitedevelopmentandmaintenance">Website development and maintenance</a>
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 3}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 3 ? "rotate-180" : ""
                }`}
            />
          }
        >

          <ListItem className="p-0" selected={open === 3}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="border-b-0 py-3 "
            >
              <ListItemPrefix></ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-bold text-[18px]"
              >
                Products
              </Typography>
            </AccordionHeader>
          </ListItem>
          <div className="h-[1px] w-[333px] sm:w-[730px] md:w-[950px] bg-[#E4E4E4]"></div>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem className="font-semibold text-[14px]">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5  " />
                </ListItemPrefix>
                <a href="/product/happymillan">Happymillan</a>
              </ListItem>
              <ListItem className="font-semibold text-[14px]">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5 " />
                </ListItemPrefix>
                <a href="/product/proVend">
                  Provend
                </a>
              </ListItem>
              <ListItem className="font-semibold text-[14px]">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5 " />
                </ListItemPrefix>
                <a href="/product/adsindia">
                  Adsindia
                </a>
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 4}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 4 ? "rotate-180" : ""
                }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 4}>
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className="border-b-0 py-3"
            >
              <ListItemPrefix></ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-bold text-[18px]"
              >
                <a href="Join">Join Us</a>
              </Typography>
            </AccordionHeader>
          </ListItem>
          <div className="h-[1px] w-[333px] sm:w-[730px] md:w-[950px] bg-[#E4E4E4]"></div>
        </Accordion>

        <Accordion
          open={open === 5}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 5 ? "rotate-180" : ""
                }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 5}>
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className="border-b-0 py-3"
            >
              <ListItemPrefix></ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-bold text-[18px]"
              >
                <a href="Contact">
                  Contact
                </a>
              </Typography>
            </AccordionHeader>
          </ListItem>
          <div className="h-[1px] w-[333px] sm:w-[730px] md:w-[950px] bg-[#E4E4E4]"></div>
        </Accordion>
      </List>
    </>
  );

  const options = ["one", "two", "three"];

  const customStyles = {
    control: {
      border: "none", // Remove the border
      boxShadow: "none", // Remove the box-shadow
      

      "&:hover": {
        border: "none", // Remove border on hover
        
      },
    },
    // Add more custom styles for other components if needed
  };

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

const location = useLocation();
  const [isHovered, setHovered] = useState({
    design: 0
  });

  const [design, setdesign] = useState(true)
  const [softwaredev, setsoftwaredev] = useState(false)
  const [itsupport, setitsupport] = useState(false)
  const [socialmedia, setsocialmedia] = useState(false)
  const [webapp, setwebapp] = useState(false)
  const [itconsulting, setitconsulting] = useState(false)


  const EnterDesignSection = () => {
    setdesign(true);
    setsoftwaredev(false);
    setitsupport(false);
    setsocialmedia(false);
    setwebapp(false);
    setitconsulting(false);


  };
  const EnterSoftwaredevSection = () => {
    setsoftwaredev(true);
    setdesign(false);
    setitsupport(false);
    setsocialmedia(false);
    setwebapp(false);
    setitconsulting(false);


  };

  const ItSupportSection = () => {
    setitsupport(true)
    setdesign(false);
    setsoftwaredev(false);
    setsocialmedia(false);
    setwebapp(false);
    setitconsulting(false);

  }

  const SocialmediaSection = () => {
    setsocialmedia(true);
    setitsupport(false)
    setdesign(false);
    setsoftwaredev(false);
    setwebapp(false);
    setitconsulting(false);
  }
  const WebappSection = () => {
    setwebapp(true);
    setitsupport(false)
    setdesign(false);
    setsoftwaredev(false);
    setsocialmedia(false);
    setitconsulting(false);
  }
  const ItconsultingSection = () => {
    setitconsulting(true);
    setitsupport(false)
    setdesign(false);
    setsoftwaredev(false);
    setsocialmedia(false);
    setwebapp(false);

  }

  const [matrimony, setmatrimony] = useState(true)
  const [sales, setsales] = useState(false)

  const MatrimonySection = () => {
    setmatrimony(true)
    setsales(false)
  }

  const SalesSection = () => {
    setsales(true)
    setmatrimony(false)

  }

  const [showMenu, setShowMenu] = useState(false);
  const [showServiceMenu, setshowServiceMenu] = useState(false);

  const AboutMouseEnter = () => {
    setShowMenu(true);
    setshowServiceMenu(false)
  };
  const ServiceMouseEnter = () => {
    setShowMenu(false);
    setshowServiceMenu(true)
  };
  const ServiceMouseLeave = () => {
    setshowServiceMenu(false)
  };

  const AboutMouseLeave = () => {
    
    setShowMenu(false);
  };


  const navList = (
    <ul className="mb-2 mt-3 flex flex-col gap-7 lg:mb-none lg:mt-none lg:flex-row lg:items-center lg:gap-3">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="mr-[25px]  w-full lg:w-auto md:mb-3 border-b border-t lg:border-none mt-[19px] lg:mt-[-1px] p-[17px] lg:p-[0px]  font-semibold lg:font-normal"
      >
            <Button
             onMouseEnter={AboutMouseEnter}
             onMouseLeave={AboutMouseLeave}
              variant="text"
              style={{color : showMenu ? "#0904F2" : ""}}
              className={`about hover:text-[#0904F2] flex items-center gap-3 text-[#000] text-[15.5px] 2xl:text-[15.6px] font-normal capitalize tracking-normal ${location.pathname.startsWith("/about") ? "text-[#0904F2]" : "text-[black]"} `}

            >
              About

            </Button>
          <div onMouseEnter={AboutMouseEnter}  onMouseLeave={AboutMouseLeave} style={{display:showMenu ? "" : "none"}} className=" absolute boxshadow animate-none bg-[white] left-0 w-full h-[380px] lg:place-items-center  overflow-visible lg:grid">
            <div className="lg:w-[93%] xl:w-[84%] 2xl:w-[1280px] h-[380px] ">
              <div className="flex mt-[51px]">
                <h1 className="mt-[5px] text-[28px] font-semibold">About Us</h1>
                <div className="ml-[130px] w-[1px] h-[200px] xl:h-[240px] bg-[#EDEDED]"></div>
                <div className="mt-[10px] ml-[52px] h-[150px] grid grid-cols-2 gap-x-[82px]   ">
                  <a href="/about/aboutus" >
                    <h1 className={`${location.pathname === "/about/aboutus" ? "text-[#0904F2]" : ""} text-[16px] hover:text-[#0904F2] font-semibold h-[24px]`}>
                      About Us
                    </h1>
                  </a>
                  <a href="/about/missonvision">
                    <h1 className={`${location.pathname === "/about/missonvision" ? "text-[#0904F2]" : ""} text-[16px] hover:text-[#0904F2] font-semibold h-[24px]`}>
                      Misson & Vision
                    </h1>
                  </a>
                  <a href="/about/whychooseus">
                    <h1 className={`${location.pathname === "/about/whychooseus" ? "text-[#0904F2]" : ""} text-[16px] hover:text-[#0904F2] font-semibold h-[24px]`}>
                      Why Choose Us?
                    </h1>
                  </a>
                  <a href ="/about/howwework">
                    <h1 className={`${location.pathname === "/about/howwework" ? "text-[#0904F2]" : ""} text-[16px] hover:text-[#0904F2] font-semibold h-[24px]`}>
                      How We Work?
                    </h1>
                  </a>
                  <a href="/about/joinus">
                    <h1 className={`${location.pathname === "/about/joinus" ? "text-[#0904F2]" : ""} text-[16px] hover:text-[#0904F2] font-semibold h-[24px]`}>
                      Join Us
                    </h1>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </Typography>


      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="mr-[25px] w-full lg:w-auto md:mb-3   mt-[19px] lg:mt-[-1px] p-[17px] lg:p-[0px]  font-semibold lg:font-normal"
      >
        
            <Button
              variant="text"
              style={{color : showServiceMenu ? "#0904F2" : ""}}
              onMouseEnter={ServiceMouseEnter}
              onMouseLeave={ServiceMouseLeave}
              className={` flex hover:text-[#0904F2] items-center gap-3 text-[#000] text-[15.5px] 2xl:text-[15.6px] font-normal capitalize tracking-normal ${location.pathname.startsWith("/service") ? "text-[#0904F2]" : "text-[black]"}`}
            >
              Service
            </Button>
           
            	
           
          <div onMouseEnter={ServiceMouseEnter} onMouseLeave={ServiceMouseLeave} style={{display:showServiceMenu ? "" : "none"}} className="absolute left-0 boxshadow  hidden bg-[white] w-full h-[482px] lg:place-items-center  overflow-visible lg:grid">
            <div className=" lg:w-[93%] xl:w-[84%] 2xl:w-[1285px] h-[380px] ">
              <div className="flex mt-[20px]">
                <div className=" w-[220px]">
               
                  <h1
                    onMouseEnter={EnterDesignSection}
                    className={`${!design ? ""  : "text-[#0904F2]"} text-[16px] mr-[0px]  w-[220px] font-semibold h-[24px] hover:text-[#0904F2]`}>
                    Design</h1>


                  <h1 onMouseEnter={EnterSoftwaredevSection} className={`${!softwaredev ? ""  : "text-[#0904F2]"} w-full   text-[16px] font-semibold h-[24px] mt-[43px] hover:text-[#0904F2]`}>
                    Software Development
                  </h1>
                  
                  <h1 onMouseEnter={SocialmediaSection} className={`${!socialmedia ? ""  : "text-[#0904F2]"} text-[16px] font-semibold h-[24px] mt-[42px] hover:text-[#0904F2]`}>
                    Social Media
                  </h1>
                  <h1 onMouseEnter={WebappSection} className={`${!webapp ? ""  : "text-[#0904F2]"} text-[16px] font-semibold h-[24px] mt-[42px] hover:text-[#0904F2]`}>
                    Web/App
                  </h1>
                  
                </div>
                <div className=" xl:ml-[20px] 2xl:ml-[70px] w-[1px] h-[230px] bg-[#EDEDED]"></div>
                {/* Design start */}
                <div className={`${design ? "" : "hidden"} mt-[10px] ml-[22px]  xl:ml-[30px]   gap-x-[82px]`}>
                  <a href="/service/design/userinterfacedesign">
                    <div>
                      <div className="flex">
                        <img src="/images/UserInterfaceDesign.svg"></img>
                        <h1 className="text-[16px] font-semibold h-[24px]  ml-[30px] hover:text-[#0904F2]">
                          User Interface Design
                        </h1>
                      </div>
                      <p className="text-[10px] font-medium mt-[5px] ml-[52px]">
                      Professional user interface design services to enhance user experiences and engagement
                      </p>
                    </div>
                  </a>
                  <a href="/service/design/userexperiencedesign">
                    <div className="mt-[30px] ">
                      <div className="flex">
                        <img src="/images/Experience Design.svg"></img>
                        <h1 className="text-[16px] font-semibold h-[24px]  ml-[25px] hover:text-[#0904F2]">
                          User Experience Design
                        </h1>
                      </div>
                      <p className="text-[10px] font-medium mt-[5px] ml-[53px]">
                      Expert user experience design services for intuitive and engaging digital products
                      </p>
                    </div>
                  </a>
                </div>
                <div className={`${design ? "" : "hidden"} lg:ml-[30px]  xl:ml-[60px] 2xl:ml-[140px] w-[1px] h-[230px] bg-[#EDEDED]`}></div>
                <div className={`${design ? "" : "hidden"} w-[270px] mt-[70px] lg:ml-[30px] xl:ml-[40px] 2xl:ml-[50px]`}>
                  <h1 className=" lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-bold text-[#121213] ">
                    We provide exclusive services for your business
                  </h1>
                  <a href="/service/design/consultourexpert">
                    <div className="flex">

                      <p className="mt-[35px] text-[18px] xl:text-[20px] text-[#0904F2] font-bold">Consult Our Expert</p>
                      <img src="/images/rightarrayblue.svg" className="mt-[33px] ml-[25px]"></img>

                    </div>
                  </a>
                </div>
                {/* Design end */}

                {/* Software Development start */}

                <div className={`${softwaredev ? "" : "hidden"} mt-[10px] ml-[22px] xl:ml-[30px]   gap-x-[80px]`}>
                  <a href="/service/softwaredevelopment/customsoftwaredevelopment">
                    <div>
                      <div className="flex">
                        <img src="/images/servicemenu/Custom Software Development.svg"></img>
                        <h1 className="text-[16px] font-semibold h-[24px]  ml-[30px] hover:text-[#0904F2]">
                        Custom Software Development
                        </h1>
                      </div>
                      <p className="text-[10px] w-[430px] font-medium mt-[5px] ml-[52px]">
                      Tailored custom software development solutions to meet your unique business needs.
                      </p>
                    </div>
                  </a>
                  <a href="/service/softwaredevelopment/webapplicationdevelopment">
                    <div className="mt-[30px] ">
                      <div className="flex">
                        <img src="/images/servicemenu/Web Application Development.svg"></img>
                        <h1 className="text-[16px] font-semibold h-[24px]  ml-[25px] hover:text-[#0904F2]">
                          Web Application Development
                        </h1>
                      </div>
                      <p className="text-[10px] w-[430px] font-medium mt-[5px] ml-[53px]">
                      Comprehensive web application development expertise for responsive, scalable, and user-friendly solutions
                      </p>
                    </div>
                  </a>
                  <a href="/service/softwaredevelopment/mobileapplicationdevelopment">
                    <div className="mt-[30px] ">
                      <div className="flex">
                        <img src="/images/servicemenu/Mobile Application Developer.svg"></img>
                        <h1 className="text-[16px] font-semibold h-[24px]  ml-[40px] hover:text-[#0904F2]">
                          Mobile Application Development
                        </h1>
                      </div>
                      <p className="text-[10px] w-[430px] font-medium mt-[5px] ml-[53px]">
                      Mobile application development for cutting-edge, user-friendly apps on iOS and Android platforms
                      </p>
                    </div>
                  </a>
                </div>

                {/* Software Development end */}


                {/* IT support start */}
                <div className={`${itsupport ? "" : "hidden"} mt-[10px] ml-[20px] xl:ml-[52px]   gap-x-[80px]`}>
                  
                    <div>
                      <div className="flex">
                        <img src="/images/servicemenu/IT Consulting.svg"></img>
                        <h1 className="text-[16px] font-semibold h-[24px]  ml-[30px] hover:text-[#0904F2]">
                          IT Consulting
                        </h1>
                      </div>
                      <p className="text-[10px] w-[430px] font-medium mt-[5px] ml-[52px]">
                        Trust our top minds to eliminate workflow pain points,
                        implement new tech & app.
                      </p>
                    </div>
                  
                  
                    <div className="mt-[30px] ">
                      <div className="flex">
                        <img src="/images/servicemenu/IT Project Management.svg"></img>
                        <h1 className="text-[16px] font-semibold h-[24px]  ml-[25px]">
                          IT Project Management
                        </h1>
                      </div>
                      <p className="text-[10px] w-[430px] font-medium mt-[5px] ml-[53px]">
                        Trust our top minds to eliminate workflow pain points,
                        implement new tech & app.
                      </p>
                    </div>
                  
                </div>

                {/* IT support end */}

                {/* social media start */}
                <div className={`${socialmedia ? "" : "hidden"} mt-[10px] ml-[22px] xl:ml-[30px]   gap-x-[82px]`}>
                  <a href="/service/socialmedia/socialmediaplatformdevelopment">
                    <div>
                      <div className="flex">
                        <img src="/images/servicemenu/Social Media Platform Development.svg"></img>
                        <h1 className="text-[16px] font-semibold h-[24px]  ml-[30px] hover:text-[#0904F2]">
                          Social Media Platform Development
                        </h1>
                      </div>
                      <p className="text-[10px] w-[271px] font-medium mt-[5px] ml-[52px]">
                      End-to-end social media platform development, creating engaging digital communities for your audience
                      </p>
                    </div>
                  </a>
                  <a href="/service/socialmedia/ottdevelopment">
                  <div className="mt-[30px] ">
                      <div className="flex">
                      <img src="/images/servicemenu/Social Media Platform Development.svg"></img>
                        <h1 className="text-[16px] font-semibold h-[24px]  ml-[30px] hover:text-[#0904F2]">
                        OTT Platform Development
                        </h1>
                      </div>
                      <p className="text-[10px] w-[271px] font-medium mt-[5px] ml-[52px]">
                      Expert OTT platform development to deliver seamless streaming experiences
                      </p>
                    </div>
                  </a>
                </div>
                {/* social media end */}

                {/* Web/App start */}

                <div className={`${webapp ? "" : "hidden"} mt-[10px] ml-[22px] xl:ml-[30px]   gap-x-[82px]`}>
                  <a href="/service/webapp/customsoftwaredevelopment">
                    <div >
                      <div className="flex">
                        <img src="/images/servicemenu/Custom application development.svg"></img>
                        <h1 className="text-[16px] font-semibold h-[24px]  ml-[30px] hover:text-[#0904F2]">
                          Custom application development
                        </h1>
                      </div>
                      <p className="text-[10px] w-[430px] font-medium mt-[5px] ml-[54px]">
                      ailored custom application development to meet your specific business requirements, enhancing efficiency and productivity
                      </p>
                    </div>
                  </a>
                  <a href ="/service/webapp/ecommercedevelopment">
                    <div className="mt-[30px] ">
                      <div className="flex">
                        <img src="/images/servicemenu/E-Commerce development.svg"></img>
                        <h1 className="text-[16px] font-semibold h-[24px]  ml-[30px] hover:text-[#0904F2]">
                          E-Commerce development
                        </h1>
                      </div>
                      <p className="text-[10px] w-[430px] font-medium mt-[5px] ml-[52px]">
                      Comprehensive e-commerce development solutions to boost your online retail presence and sales.
                      </p>
                    </div>
                  </a>
                  <a href ="/service/webapp/websitedevelopmentandmaintenance">
                    <div className="mt-[30px] ">
                      <div className="flex">
                        <img src="/images/servicemenu/Website development and maintenance.svg"></img>
                        <h1 className="text-[16px] font-semibold h-[24px]  ml-[27px] hover:text-[#0904F2]">
                          Website development and maintenance
                        </h1>
                      </div>
                      <p className="text-[10px] w-[430px] font-medium mt-[5px] ml-[54px]">
                      Professional website development and ongoing maintenance to ensure your digital presence remains secure and up-to-date
                      </p>
                    </div>
                  </a>
                  
                    <div className="mt-[30px] ">
                      <div className="flex">
                        <img className="ml-[2px]" src="/images/servicemenu/Saas products.svg"></img>
                        <h1 className="text-[16px] font-semibold h-[24px]  ml-[27px] hover:text-[#0904F2]">
                          SaaS products
                        </h1>
                      </div>
                      <p className="text-[10px] w-[430px] font-medium mt-[5px] ml-[54px]">
                        Building and delivering innovative SaaS products to streamline your business operations and drive efficiency.
                      </p>
                    </div>
                  

                </div>

                {/* Web/App end */}

                {/* IT Consulting start */}

                <div className={`${itconsulting ? "" : "hidden"} mt-[10px] ml-[20px] xl:ml-[52px]   gap-x-[82px]`}>
                  
                    <div>
                      <div className="flex">
                        <img src="/images/servicemenu/Digital Transformation.svg"></img>
                        <h1 className="text-[16px] font-semibold h-[24px]  ml-[30px]">
                          Digital Transformation
                        </h1>
                      </div>
                      <p className="text-[10px] w-[271px] font-medium mt-[5px] ml-[52px]">
                        Trust our top minds to eliminate workflow pain points,
                        implement new tech & app.
                      </p>
                    </div>
                 
                  
                    <div className="mt-[30px] ">
                      <div className="flex">
                        <img src="/images/servicemenu/Software Development and Integration.svg"></img>
                        <h1 className="text-[16px] font-semibold h-[24px]  ml-[25px]">
                          Software Development and Integration
                        </h1>
                      </div>
                      <p className="text-[10px] w-[271px] font-medium mt-[5px] ml-[53px]">
                        Trust our top minds to eliminate workflow pain points,
                        implement new tech & app.
                      </p>
                    </div>
                  
                </div>

                {/* IT Consulting end */}

              </div>
            </div>
          </div>
       
      </Typography>

   {/* page is under construction start   */}

   <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className=" mr-[18px] w-full lg:w-auto md:mb-3 border-b  lg:border-none p-[3px] lg:p-[0px] font-medium lg:font-normal"
      >
        <Button
          variant="text"
          className="flex hover:text-[#0904F2] items-center gap-3 text-[#000] xl:text-[#232222] 2xl:text-[#000] text-[13.8px] xl:text-[14.5px] 2xl:text-[14.5px]  font-normal capitalize tracking-normal "
        >
          <NavLink to="comingsoon">
            
          Products
           
          </NavLink>
        </Button>

      </Typography>

{/* page is under construction finish   */}
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="mr-[18px] w-full lg:w-auto md:mb-3 border-b border-t lg:border-none mt-[19px] lg:mt-[-1px] p-[17px] lg:p-[0px]  font-medium lg:font-normal"
      > */}
        
        {/* <SpeedDial>
          <SpeedDialHandler> */}
            {/* <Button
              variant="text"
              className={`flex  items-center gap-3 text-[#000] text-[15.5px] 2xl:text-[15.6px] font-normal  capitalize tracking-normal  ${location.pathname.startsWith("/product") ? "text-[#0904F2]" : "text-[black]"} `}
            >
              Products
            </Button> */}
          {/* </SpeedDialHandler> */}
          {/* <SpeedDialContent className="boxshadow  hidden bg-[white] w-full h-[482px] lg:place-items-center  overflow-visible lg:grid">
            <div className="lg:w-[960px] xl:w-[1060px] 2xl:w-[1290px] h-[380px] ">
              <div className="flex mt-[20px]">
                <div className=" w-[220px]">

                  <h1 onMouseEnter={MatrimonySection} className={`${!matrimony ? ""  : "text-[#0904F2]"} text-[16px] font-semibold h-[24px] hover:text-[#0904F2]`}>
                    Matrimony & Dating</h1>


                  <h1 onMouseEnter={SalesSection} className={`${!sales ? ""  : "text-[#0904F2]"} w-full text-[16px] font-semibold h-[24px] mt-[43px] hover:text-[#0904F2]`}>
                    Sales & Marketing
                  </h1>
                  <h1 className={`text-[16px] font-semibold h-[24px] mt-[42px] hover:text-[#0904F2]`}>
                    Finance
                  </h1>
                  <h1 className="text-[16px] font-semibold h-[24px] mt-[42px] hover:text-[#0904F2]">
                    Human Resource
                  </h1>
                  <h1 className="text-[16px] font-semibold h-[24px] mt-[42px] hover:text-[#0904F2]">
                    Social Media
                  </h1>
                  <h1 className="text-[16px] font-semibold h-[24px] mt-[42px] hover:text-[#0904F2]">
                    Video Streaming
                  </h1>
                </div>
                <div className=" xl:ml-[90px] 2xl:ml-[90px] w-[1px] h-[353px] bg-[#EDEDED]"></div> */}
                {/* Matrimony & Dating start */}
                {/* <a href="/product/dating/hppymillan" className={matrimony ? "" : "hidden"}>
                  <div className="mt-[10px] ml-[20px] xl:ml-[52px]  gap-x-[82px]   ">
                    <div className="w-[100px] h-[100px] border-[1px] border-[#0904F2] rounded-[14px]">
                      <img src="/images/products/product happymillan logo.svg" className=" px-[12px] mt-[40px]"></img>
                    </div>
                    <h1 className="mt-[20px] text-[16px] font-semibold ">Happy Milan</h1>
                    <p className="w-[228px] mt-[10px] text-[12px] font-normal">Trust our top minds to eliminate workflow pain points, implement new tech & app.</p>
                    <div className="flex mt-[15px]">
                      <img src="/images/products/productsgroupicon.svg"></img>
                      <div className="w-[1px] h-[17px] ml-[14px]  bg-[#DFDFDF]"></div>
                      <p className="ml-[14px] text-[12px] font-normal">10M + Downloads</p>
                    </div>
                  </div>
                </a> */}
                {/* Matrimony & Dating end */}

                {/* Sales & Marketing start */}
                {/* <a href="/product/sales/proVend" className={sales ? "" : "hidden"}>
                  <div className="mt-[10px] ml-[20px] xl:ml-[52px]  gap-x-[82px]   ">
                    <div className="w-[100px] h-[100px] border-[1px] border-[#0904F2] rounded-[14px]">
                      <img src="/images/products/product provend logo.svg" className=" px-[12px] mt-[40px]"></img>
                    </div>
                    <h1 className="mt-[20px] text-[16px] font-semibold ">ProVend</h1>
                    <p className="w-[228px] mt-[10px] text-[12px] font-normal">Trust our top minds to eliminate workflow pain points, implement new tech & app.</p>
                    <div className="flex mt-[15px]">
                      <img src="/images/products/productsgroupicon.svg"></img>
                      <div className="w-[1px] h-[17px] ml-[14px]  bg-[#DFDFDF]"></div>
                      <p className="ml-[14px] text-[12px] font-normal">10M + Downloads</p>
                    </div>
                  </div>
                </a>

                <a href="/product/sales/adsindia" className={sales ? "" : "hidden"}>
                  <div className="mt-[10px] ml-[20px] xl:ml-[52px]  gap-x-[82px]   ">
                    <div className="w-[100px] h-[100px] border-[1px] border-[#0904F2] rounded-[14px]">
                      <img src="/images/adsindia.svg" className=" px-[8px] mt-[40px]"></img>
                    </div>
                    <h1 className="mt-[20px] text-[16px] font-semibold ">AdsIndia</h1>
                    <p className="w-[228px] mt-[10px] text-[12px] font-normal">Trust our top minds to eliminate workflow pain points, implement new tech & app.</p>
                    <div className="flex mt-[15px]">
                      <img src="/images/products/productsgroupicon.svg"></img>
                      <div className="w-[1px] h-[17px] ml-[14px]  bg-[#DFDFDF]"></div>
                      <p className="ml-[14px] text-[12px] font-normal">10M + Downloads</p>
                    </div>
                  </div>
                </a> */}
                {/* Sales & Marketing end */}

              {/* </div>
            </div>
          </SpeedDialContent>
        </SpeedDial> */}
      {/* </Typography> */}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className=" mr-[18px] w-full lg:w-auto md:mb-3 border-b  lg:border-none p-[3px] lg:p-[0px] font-medium lg:font-normal"
      >
        <Button
          variant="text"
          className="flex hover:text-[#0904F2] items-center gap-3 text-[#000] xl:text-[#232222] 2xl:text-[#000] text-[13.8px] xl:text-[14.5px] 2xl:text-[14.5px]  font-normal capitalize tracking-normal "
        >
          <NavLink to="Join">
            
            Join us
           
          </NavLink>
        </Button>

      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className=" md:mb-3 border-b  lg:border-none p-[3px] lg:p-[0px] font-semibold lg:font-normal"
      >
        <Button
          variant="text"
          className="flex hover:text-[#0904F2] items-center gap-3 text-[#000] xl:text-[#232222] 2xl:text-[#000] text-[13.8px] xl:text-[14.5px] 2xl:text-[14.5px] font-normal capitalize tracking-normal "
        >
          <NavLink to="Contact">
            Contact
          </NavLink>
        </Button>
      </Typography>
    </ul>
  );

  const [activediv, setactivediv] = useState(false);
  return (
    <>
      <Navbar className="sticky border-0 top-0 z-10 h-full w-full rounded-none  py-2 px-4  lg:py-4 ">
        <div className="border-none flex items-center justify-between text-blue-gray-900  lg:ml-[10px] xl:ml-[80px] 2xl:ml-[100px]  lg:mr-[10px] xl:mr-[90px] 2xl:mr-[100px]">
          <Typography className="mr-4  cursor-pointer md:mb-2 mt-[20px] lg:mt-[0px]">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="165"
                height="28"
                viewBox="0 0 165 28"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M37.7746 1.01818H5.49818C3.02395 1.01818 1.01818 3.02395 1.01818 5.49818V22.5018C1.01818 24.9761 3.02395 26.9818 5.49818 26.9818H37.7746C40.2488 26.9818 42.2546 24.9761 42.2546 22.5018V5.49818C42.2546 3.02395 40.2488 1.01818 37.7746 1.01818ZM5.49818 0C2.46162 0 0 2.46162 0 5.49818V22.5018C0 25.5384 2.46162 28 5.49818 28H37.7746C40.8111 28 43.2727 25.5384 43.2727 22.5018V5.49818C43.2727 2.46162 40.8111 0 37.7746 0H5.49818Z"
                  fill="#0904F2"
                />
                <path
                  d="M23.0719 6.99805V21.3544H19.0806V13.433L16.3723 21.3544H13.0326L10.3039 13.3719V21.3544H6.31262V6.99805H11.1388L14.7432 16.3246L18.2661 6.99805H23.0719Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.8234 21.3544H26.6765H27.6946V20.3362V15.1748V13.3311L28.7128 14.8682L33.0096 21.3544H35.9826H37.0008V20.3362V8.01623V6.99805H35.9826H34.0277H33.0096V8.01623V13.2632V15.1231L31.9914 13.5666L27.6946 6.99805H24.8234V8.01623H27.144L32.1575 15.6805L34.0277 18.5396V15.1231V8.01623H35.9826V20.3362H33.5564L28.5435 12.7688L26.6765 9.95044V13.3311V20.3362H24.8234V21.3544Z"
                  fill="#0904F2"
                />
                <path
                  d="M61.2164 6.78402V9.61767H57.3693V21.3039H53.8324V9.61767H49.9852V6.78402H61.2164Z"
                  fill="black"
                />
                <path
                  d="M73.871 15.347C73.871 15.678 73.8504 16.0227 73.809 16.3812H65.8044C65.8596 17.0982 66.0871 17.6498 66.487 18.0359C66.9007 18.4082 67.404 18.5943 67.9969 18.5943C68.8794 18.5943 69.493 18.222 69.8377 17.4774H73.6021C73.4091 18.2358 73.0575 18.9184 72.5473 19.5251C72.0509 20.1318 71.4235 20.6075 70.6651 20.9523C69.9067 21.297 69.0587 21.4694 68.121 21.4694C66.9903 21.4694 65.9837 21.228 65.1012 20.7454C64.2187 20.2628 63.5292 19.5734 63.0328 18.6771C62.5364 17.7808 62.2882 16.7328 62.2882 15.5332C62.2882 14.3335 62.5295 13.2856 63.0122 12.3893C63.5086 11.493 64.198 10.8035 65.0805 10.3209C65.963 9.83829 66.9765 9.59699 68.121 9.59699C69.2379 9.59699 70.2307 9.8314 71.0994 10.3002C71.9681 10.7691 72.6438 11.4378 73.1264 12.3065C73.6228 13.1752 73.871 14.1887 73.871 15.347ZM70.2514 14.4163C70.2514 13.8095 70.0446 13.3269 69.6309 12.9684C69.2172 12.6099 68.7001 12.4306 68.0796 12.4306C67.4867 12.4306 66.9834 12.603 66.5697 12.9477C66.1699 13.2925 65.9216 13.782 65.8251 14.4163H70.2514Z"
                  fill="black"
                />
                <path
                  d="M75.0337 15.5332C75.0337 14.3335 75.275 13.2856 75.7576 12.3893C76.254 11.493 76.9366 10.8035 77.8053 10.3209C78.6878 9.83829 79.6944 9.59699 80.8251 9.59699C82.2729 9.59699 83.4795 9.97618 84.4447 10.7346C85.4237 11.493 86.0649 12.5616 86.3683 13.9405H82.6039C82.2867 13.058 81.6731 12.6168 80.763 12.6168C80.1149 12.6168 79.5979 12.8719 79.2118 13.3821C78.8257 13.8785 78.6326 14.5955 78.6326 15.5332C78.6326 16.4708 78.8257 17.1948 79.2118 17.7049C79.5979 18.2014 80.1149 18.4496 80.763 18.4496C81.6731 18.4496 82.2867 18.0083 82.6039 17.1258H86.3683C86.0649 18.4771 85.4237 19.5389 84.4447 20.3111C83.4657 21.0833 82.2591 21.4694 80.8251 21.4694C79.6944 21.4694 78.6878 21.228 77.8053 20.7454C76.9366 20.2628 76.254 19.5734 75.7576 18.6771C75.275 17.7808 75.0337 16.7328 75.0337 15.5332Z"
                  fill="black"
                />
                <path
                  d="M95.3546 9.63835C96.6784 9.63835 97.7401 10.0796 98.5399 10.9621C99.3397 11.8308 99.7396 13.0305 99.7396 14.561V21.3039H96.2233V15.0368C96.2233 14.2646 96.0234 13.6648 95.6235 13.2373C95.2236 12.8098 94.6859 12.5961 94.0102 12.5961C93.3345 12.5961 92.7968 12.8098 92.3969 13.2373C91.997 13.6648 91.7971 14.2646 91.7971 15.0368V21.3039H88.2602V5.99805H91.7971V11.3137C92.1556 10.8035 92.6451 10.3968 93.2656 10.0934C93.8861 9.79003 94.5825 9.63835 95.3546 9.63835Z"
                  fill="black"
                />
                <path
                  d="M106.582 9.59699C107.396 9.59699 108.106 9.76245 108.713 10.0934C109.333 10.4243 109.809 10.8587 110.14 11.3965V9.76245H113.677V21.2832C113.677 22.345 113.463 23.3033 113.036 24.1582C112.622 25.0269 111.981 25.7164 111.112 26.2266C110.257 26.7368 109.188 26.9919 107.906 26.9919C106.196 26.9919 104.81 26.5851 103.749 25.7715C102.687 24.9718 102.08 23.8824 101.928 22.5035H105.424C105.534 22.9448 105.796 23.2895 106.21 23.5377C106.624 23.7997 107.134 23.9307 107.741 23.9307C108.471 23.9307 109.05 23.717 109.478 23.2895C109.919 22.8758 110.14 22.2071 110.14 21.2832V19.6492C109.795 20.187 109.319 20.6282 108.713 20.9729C108.106 21.3039 107.396 21.4694 106.582 21.4694C105.631 21.4694 104.769 21.228 103.997 20.7454C103.225 20.249 102.611 19.5527 102.156 18.6564C101.715 17.7463 101.494 16.6983 101.494 15.5125C101.494 14.3266 101.715 13.2856 102.156 12.3893C102.611 11.493 103.225 10.8035 103.997 10.3209C104.769 9.83829 105.631 9.59699 106.582 9.59699ZM110.14 15.5332C110.14 14.6507 109.892 13.9543 109.395 13.4441C108.913 12.9339 108.32 12.6788 107.616 12.6788C106.913 12.6788 106.313 12.9339 105.817 13.4441C105.334 13.9405 105.093 14.63 105.093 15.5125C105.093 16.395 105.334 17.0982 105.817 17.6222C106.313 18.1324 106.913 18.3875 107.616 18.3875C108.32 18.3875 108.913 18.1324 109.395 17.6222C109.892 17.112 110.14 16.4157 110.14 15.5332Z"
                  fill="black"
                />
                <path
                  d="M119.772 11.686C120.186 11.0517 120.703 10.5553 121.324 10.1968C121.944 9.82451 122.634 9.63835 123.392 9.63835V13.3821H122.42C121.537 13.3821 120.876 13.5751 120.434 13.9612C119.993 14.3335 119.772 14.9954 119.772 15.9468V21.3039H116.235V9.76245H119.772V11.686Z"
                  fill="black"
                />
                <path
                  d="M130.336 21.4694C129.205 21.4694 128.185 21.228 127.275 20.7454C126.379 20.2628 125.669 19.5734 125.145 18.6771C124.634 17.7808 124.379 16.7328 124.379 15.5332C124.379 14.3473 124.641 13.3062 125.165 12.41C125.689 11.4999 126.406 10.8035 127.316 10.3209C128.226 9.83829 129.247 9.59699 130.378 9.59699C131.508 9.59699 132.529 9.83829 133.439 10.3209C134.349 10.8035 135.066 11.4999 135.59 12.41C136.114 13.3062 136.376 14.3473 136.376 15.5332C136.376 16.719 136.107 17.767 135.569 18.6771C135.045 19.5734 134.321 20.2628 133.397 20.7454C132.487 21.228 131.467 21.4694 130.336 21.4694ZM130.336 18.4082C131.012 18.4082 131.584 18.16 132.053 17.6636C132.536 17.1672 132.777 16.457 132.777 15.5332C132.777 14.6093 132.542 13.8992 132.074 13.4028C131.619 12.9064 131.053 12.6582 130.378 12.6582C129.688 12.6582 129.116 12.9064 128.661 13.4028C128.206 13.8854 127.978 14.5955 127.978 15.5332C127.978 16.457 128.199 17.1672 128.64 17.6636C129.095 18.16 129.661 18.4082 130.336 18.4082Z"
                  fill="black"
                />
                <path
                  d="M149.649 9.76245V21.3039H146.112V19.7319C145.753 20.2421 145.264 20.6558 144.643 20.9729C144.037 21.2763 143.361 21.428 142.616 21.428C141.734 21.428 140.955 21.2349 140.279 20.8488C139.604 20.449 139.08 19.8767 138.707 19.1321C138.335 18.3875 138.149 17.5119 138.149 16.5053V9.76245H141.665V16.0296C141.665 16.8018 141.865 17.4016 142.265 17.829C142.665 18.2565 143.202 18.4702 143.878 18.4702C144.568 18.4702 145.112 18.2565 145.512 17.829C145.912 17.4016 146.112 16.8018 146.112 16.0296V9.76245H149.649Z"
                  fill="black"
                />
                <path
                  d="M155.726 11.3965C156.071 10.8587 156.547 10.4243 157.153 10.0934C157.76 9.76245 158.47 9.59699 159.284 9.59699C160.235 9.59699 161.097 9.83829 161.869 10.3209C162.641 10.8035 163.248 11.493 163.689 12.3893C164.144 13.2856 164.372 14.3266 164.372 15.5125C164.372 16.6983 164.144 17.7463 163.689 18.6564C163.248 19.5527 162.641 20.249 161.869 20.7454C161.097 21.228 160.235 21.4694 159.284 21.4694C158.484 21.4694 157.774 21.3039 157.153 20.9729C156.547 20.642 156.071 20.2146 155.726 19.6906V26.8057H152.189V9.76245H155.726V11.3965ZM160.773 15.5125C160.773 14.63 160.525 13.9405 160.028 13.4441C159.546 12.9339 158.946 12.6788 158.229 12.6788C157.526 12.6788 156.926 12.9339 156.429 13.4441C155.947 13.9543 155.706 14.6507 155.706 15.5332C155.706 16.4157 155.947 17.112 156.429 17.6222C156.926 18.1324 157.526 18.3875 158.229 18.3875C158.932 18.3875 159.532 18.1324 160.028 17.6222C160.525 17.0982 160.773 16.395 160.773 15.5125Z"
                  fill="black"
                />
              </svg>
            </Link>
          </Typography>
          <div className=" navsize flex items-center gap-6">
            <div

              className="mr-4 hidden  text-[black] lg:block" >{navList}  </div>
             <Link to="button">
            <button
              variant="gradient"
              onClick={() => setactivediv(!activediv)}
              className="text-center w-[107px] h-[40px] hidden lg:mb-[3px] lg:inline-block rounded-lg  bg-[#0904F2] text-[white]"
            >
              <span className="font-normal">Get Quote</span>
            </button>
            </Link>
            <IconButton
              variant="text"
              className=" lg:mt-[0px] text-[black] ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden "
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6 text-[black]"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[black]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav} className="mobilenav text-[black]">
          {mobileList}
          <Link to="button">
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            className="mb-4 mt-2 bg-[#0904F2] rounded-md"
          >
            <span className="mobilenav2">Get Quote</span>
          </Button>
          </Link>
        </MobileNav>
      </Navbar>
    </>
  );
}

export default Navigation;
