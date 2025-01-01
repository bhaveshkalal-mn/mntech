import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  
  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pl: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function Ott_development() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
      <div className="  w-full h-full grid place-items-center">
        <div className=" md:flex  w-[333px] sm:w-[580px] md:w-[750px]  lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] mt-[30px] md:mt-[47px]  ">
          <div className="hidden  sm:block w-[580px] md:w-[450px] xl:w-[450px] 2xl:w-[462px] h-[400px] sm:h-[480px]   xl:h-[550px] py-[10px]">
            <div className="grid place-items-center">
              <img
                className="h-[450px]"
                src="/images/ott development profile.svg"
              ></img>
            </div>
          </div>
          <div className="sm:hidden py-[10px]">
            <img
              className=""
              src="/images/responsive ott development profile.svg"
            ></img>
          </div>
          <div className="  w-[333px]  md:py-[80px]  sm:text-center md:text-start sm:w-[580px] md:w-[400px] lg:w-[480px] xl:w-[525px] 2xl:w-[520px] h-[350px] sm:h-[330px] md:h-[460px] lg:h-[520px] xl:h-[550px] md:ml-[30px] lg:ml-[90px] xl:ml-[85px] 2xl:ml-[170px] mt-[30px] sm:mt-[10px] md:mt-[1px] ">
            <div>
              <p1 className="text-[14px] font-bold">
                OTT Platform Development Services
              </p1>
              <h1 className="mt-[14px]   text-[24px] sm:text-[30px] md:text-[30px] lg:text-[38px] xl:text-[45px] font-bold leading-normal md:leading-[55px] xl::leading-[60px]">
                OTT Platform Development Services
              </h1>
              <p className=" w-[317px] sm:w-auto md:w-[370px] lg:w-[400px] xl:w-[506px] text-[14px] text-[#333] font-medium leading-[20px] mt-[20px]">
                Over-the-Top (OTT) platforms and apps offer a wide range of
                features to provide users with a seamless and engaging streaming
                experience
              </p>
              <Link to="/service/socialmedia/socialmediaplatformdevelopment/help">
                <button className="w-[150px] h-[55px] bg-[#0904F2] mt-[30px] sm:mt-[30px] rounded-[10px]">
                  <p id="experiencepagesection1-btn">Any Help?</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] mt-[0px] bg-[#EFEEEE]"></div>

        {/* section2 start */}
        <div className="   w-[333px] sm:w-[580px] md:w-[750px]  lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] mt-[30px] md:mt-[60px]  xl:mt-[80px]  ">
          <h1 className=" text-[24px] sm:text-[32px] md:text-[34px] text-center font-bold leading-normal md:leading-[60px]">
            OTT App Development Services We Offer
          </h1>

          <div className="hidden lg:block sm:h-[500px] md:h-[400px] xl:h-[433px] py-[35px] xl:py-[50px]  lg:px-[10px] 2xl:px-[30px] mt-[30px] lg:mt-[50px] xl:mt-[60px] bg-[#0904F2] rounded-[14px] ">
            <Box sx={{ flexGrow: 1, display: "flex", height: 340 }}>
              <Tabs
              
                orientation="vertical"
                variant="normal"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
              >
                
                <Tab
                  className="text-white w-[300px] "
                  label="Custom OTT App Development"
                  {...a11yProps(0)}
                />
                

                <Tab
                  className="text-white w-[224px]  "
                  label="Platform Selection"
                  {...a11yProps(1)}
                />

                <Tab
                  className="text-white w-[198px] "
                  label=" API Enhancement"
                  {...a11yProps(2)}
                />
                <Tab
                  className="text-white w-[343px]"
                  label=" User Authentication and Security"
                  {...a11yProps(3)}
                />
                <Tab
                  className="text-white w-[230px]"
                  label="Feature Integration"
                  {...a11yProps(4)}
                />
                
                <Tab
                  className="text-white w-[308px]"
                  label="Real-time Chat and Messaging"
                  {...a11yProps(5)}
                />
               
                <Tab
                  className="text-white w-[266px]"
                  label="Analytics and Reporting"
                  {...a11yProps(6)}
                />

                <Tab
                  className="text-white w-[400px]"
                  label="Security"
                  {...a11yProps(7)}
                />

                <Tab
                  className="text-white w-[400px]"
                  label="Cross-Platform Compatibility:"
                  {...a11yProps(8)}
                />

                <Tab
                  className="text-white w-[400px]"
                  label="Quality Assurance and Testing"
                  {...a11yProps(9)}
                />

                <Tab
                  className="text-white w-[400px]"
                  label="Updates and Maintenance"
                  {...a11yProps(10)}
                />
                <Tab
                  className="text-white w-[400px]"
                  label="Integration with Third-party Services"
                  {...a11yProps(11)}
                />
              </Tabs>
              <TabPanel value={value} index={0}>
                <div className="mt-[12px] ml-[10px] 2xl:ml-[20px]  lg:w-[500px] xl:w-[590px] ">
                  <h1 className="text-[16px] font-bold text-white">
                    Custom OTT App Development
                  </h1>
                  <p className="text-[14px] mt-[10px] font-medium text-white">
                    Develop customized OTT applications tailored to the specific
                    needs and branding of your clients. This may include
                    video-on-demand (VOD), live streaming, and interactive
                    features
                  </p>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div className="mt-[12px] ml-[10px] 2xl:ml-[20px]  lg:w-[500px] xl:w-[590px] ">
                  <h1 className="text-[16px] font-bold text-white">
                    Platform Selection
                  </h1>
                  <p className="text-[14px] mt-[10px] font-medium text-white">
                    Help clients choose the right platforms and technologies for
                    their OTT apps, such as iOS, Android, web, Smart TV
                    platforms (e.g., Roku, Apple TV, Amazon Fire TV), and gaming
                    consoles (e.g., Xbox, PlayStation).
                  </p>
                </div>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <div className="mt-[12px] ml-[10px] 2xl:ml-[20px]  lg:w-[500px] xl:w-[590px] ">
                  <h1 className="text-[16px] font-bold text-white">
                    UI and UX Design
                  </h1>
                  <p className="text-[14px] mt-[10px] font-medium text-white">
                    Create intuitive and visually appealing UI/UX designs that
                    enhance the user experience and engagement within the app.
                  </p>
                </div>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <div className="mt-[12px] ml-[10px] 2xl:ml-[20px]  lg:w-[500px] xl:w-[590px] ">
                  <h1 className="text-[16px] font-bold text-white">
                    Content Management Systems
                  </h1>
                  <p className="text-[14px] mt-[10px] font-medium text-white">
                    Develop or integrate robust CMS solutions that enable easy
                    content uploading, management, and scheduling for your
                    clients.
                  </p>
                </div>
              </TabPanel>
              <TabPanel value={value} index={4}>
                <div className="mt-[12px] ml-[10px] 2xl:ml-[20px]  lg:w-[500px] xl:w-[590px] ">
                  <h1 className="text-[16px] font-bold text-white">
                    Video Encoding and Transcoding
                  </h1>
                  <p className="text-[14px] mt-[10px] font-medium text-white">
                    Implement video encoding and transcoding solutions to ensure
                    that content can be streamed seamlessly across various
                    devices with different bandwidth capabilities.
                  </p>
                </div>
              </TabPanel>
              <TabPanel value={value} index={5}>
                <div className="mt-[12px] ml-[10px] 2xl:ml-[20px] lg:w-[500px] xl:w-[590px] ">
                  <h1 className="text-[16px] font-bold text-white">
                    Monetization Strategies:
                  </h1>
                  <p className="text-[14px] mt-[10px] font-medium text-white">
                    Help clients monetize their OTT apps through subscription
                    models, pay-per-view, advertising, or a combination of these
                    methods.
                  </p>
                </div>
              </TabPanel>
              <TabPanel value={value} index={6}>
                <div className="mt-[12px] ml-[10px] 2xl:ml-[20px]  lg:w-[500px] xl:w-[590px] ">
                  <h1 className="text-[16px] font-bold text-white">
                    Analytics and Reporting
                  </h1>
                  <p className="text-[14px] mt-[10px] font-medium text-white">
                    Integrate analytics tools to track user engagement, content
                    performance, and viewer behavior, providing valuable
                    insights for content optimization.
                  </p>
                </div>
              </TabPanel>
              <TabPanel value={value} index={7}>
                <div className="mt-[12px] ml-[10px] 2xl:ml-[20px]  lg:w-[500px] xl:w-[590px] ">
                  <h1 className="text-[16px] font-bold text-white">Security</h1>
                  <p className="text-[14px] mt-[10px] font-medium text-white">
                    Implement robust security measures to protect against
                    piracy, unauthorized access, and content theft.
                  </p>
                </div>
              </TabPanel>
              <TabPanel value={value} index={8}>
                <div className="mt-[12px] ml-[10px] 2xl:ml-[20px]  lg:w-[500px] xl:w-[590px] ">
                  <h1 className="text-[16px] font-bold text-white">
                    Cross-Platform Compatibility:
                  </h1>
                  <p className="text-[14px] mt-[10px] font-medium text-white">
                    Ensure that the OTT app functions seamlessly across a wide
                    range of devices and screen sizes.
                  </p>
                </div>
              </TabPanel>

              <TabPanel value={value} index={9}>
                <div className="mt-[12px] ml-[10px] 2xl:ml-[20px]  lg:w-[500px] xl:w-[590px] ">
                  <h1 className="text-[16px] font-bold text-white">
                    Quality Assurance and Testing
                  </h1>
                  <p className="text-[14px] mt-[10px] font-medium text-white">
                    performance testing, and user acceptance testing, to ensure
                    the app functions flawlessly.
                  </p>
                </div>
              </TabPanel>
              <TabPanel value={value} index={10}>
                <div className="mt-[12px] ml-[10px] 2xl:ml-[20px]  lg:w-[500px] xl:w-[590px] ">
                  <h1 className="text-[16px] font-bold text-white">
                    Updates and Maintenance
                  </h1>
                  <p className="text-[14px] mt-[10px] font-medium text-white">
                    Provide ongoing support and maintenance services to keep the
                    app up to date, secure, and compatible with evolving
                    platforms.
                  </p>
                </div>
              </TabPanel>
              <TabPanel value={value} index={11}>
                <div className="mt-[12px] ml-[10px] 2xl:ml-[20px]  lg:w-[500px] xl:w-[590px] ">
                  <h1 className="text-[16px] font-bold text-white">
                    Integration with Third-party Services
                  </h1>
                  <p className="text-[14px] mt-[10px] font-medium text-white">
                    Integrate with third-party services, such as payment
                    gateways, social media platforms, and analytics tools, to
                    enhance the app's functionality.
                  </p>
                </div>
              </TabPanel>
            </Box>
            
          </div>
          <div className=" lg:hidden  lg:h-[400px] xl:h-[433px] xl:py-[45px]  lg:px-[10px] 2xl:px-[30px] mt-[30px] lg:mt-[50px] xl:mt-[60px] ">
            <Accordion open={open === 1} style={{borderBottom:"1px solid  #E0E0E0"}} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                className="border-none text-[16px] font-medium"
                onClick={() => handleOpen(1)}
              >
                Custom OTT App Development
              </AccordionHeader>
              <AccordionBody className="text-[14px] font-normal">
                Develop customized OTT applications tailored to the specific
                needs and branding of your clients. This may include
                video-on-demand (VOD), live streaming, and interactive features
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} style={{borderBottom:"1px solid  #E0E0E0"}} icon={<Icon id={2} open={open} />}>
              <AccordionHeader
                className="border-none text-[16px] font-medium"
                onClick={() => handleOpen(2)}
              >
                Platform Selection
              </AccordionHeader>
              <AccordionBody className="text-[14px] font-normal">
                Help clients choose the right platforms and technologies for
                their OTT apps, such as iOS, Android, web, Smart TV platforms
                (e.g., Roku, Apple TV, Amazon Fire TV), and gaming consoles
                (e.g., Xbox, PlayStation).
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} style={{borderBottom:"1px solid  #E0E0E0"}} icon={<Icon id={3} open={open} />}>
              <AccordionHeader
                className="border-none text-[16px] font-medium"
                onClick={() => handleOpen(3)}
              >
                UI and UX Design
              </AccordionHeader>
              <AccordionBody className="text-[14px] font-normal">
                Create intuitive and visually appealing UI/UX designs that
                enhance the user experience and engagement within the app.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} style={{borderBottom:"1px solid  #E0E0E0"}} icon={<Icon id={4} open={open} />}>
              <AccordionHeader
                className="border-none text-[16px] font-medium"
                onClick={() => handleOpen(4)}
              >
                Content Management Systems
              </AccordionHeader>
              <AccordionBody className="text-[14px] font-normal">
                Develop or integrate robust CMS solutions that enable easy
                content uploading, management, and scheduling for your clients.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 5} style={{borderBottom:"1px solid  #E0E0E0"}} icon={<Icon id={5} open={open} />}>
              <AccordionHeader
                className="border-none text-[16px] font-medium"
                onClick={() => handleOpen(5)}
              >
                Video Encoding and Transcoding
              </AccordionHeader>
              <AccordionBody className="text-[14px] font-normal">
                Implement video encoding and transcoding solutions to ensure
                that content can be streamed seamlessly across various devices
                with different bandwidth capabilities.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 6} style={{borderBottom:"1px solid  #E0E0E0"}} icon={<Icon id={6} open={open} />}>
              <AccordionHeader
                className="border-none text-[16px] font-medium"
                onClick={() => handleOpen(6)}
              >
                Monetization Strategies:
              </AccordionHeader>
              <AccordionBody className="text-[14px] font-normal">
                Help clients monetize their OTT apps through subscription
                models, pay-per-view, advertising, or a combination of these
                methods.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 7} style={{borderBottom:"1px solid  #E0E0E0"}} icon={<Icon id={7} open={open} />}>
              <AccordionHeader
                className="border-none text-[16px] font-medium"
                onClick={() => handleOpen(7)}
              >
                Analytics and Reporting
              </AccordionHeader>
              <AccordionBody className="text-[14px] font-normal">
                Integrate analytics tools to track user engagement, content
                performance, and viewer behavior, providing valuable insights
                for content optimization.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 8} style={{borderBottom:"1px solid  #E0E0E0"}} icon={<Icon id={8} open={open} />}>
              <AccordionHeader
                className="border-none text-[16px] font-medium"
                onClick={() => handleOpen(8)}
              >
                Security
              </AccordionHeader>
              <AccordionBody className="text-[14px] font-normal">
                Implement robust security measures to protect against piracy,
                unauthorized access, and content theft.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 9} style={{borderBottom:"1px solid  #E0E0E0"}} icon={<Icon id={9} open={open} />}>
              <AccordionHeader
                className="border-none text-[16px] font-medium"
                onClick={() => handleOpen(9)}
              >
                Cross-Platform Compatibility:
              </AccordionHeader>
              <AccordionBody className="text-[14px] font-normal">
                Ensure that the OTT app functions seamlessly across a wide range
                of devices and screen sizes.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 10} style={{borderBottom:"1px solid  #E0E0E0"}} icon={<Icon id={10} open={open} />}>
              <AccordionHeader
                className="border-none text-[16px] font-medium"
                onClick={() => handleOpen(10)}
              >
                Quality Assurance and Testing
              </AccordionHeader>
              <AccordionBody className="text-[14px] font-normal">
                Perform rigorous testing, including compatibility testing,
                performance testing, and user acceptance testing, to ensure the
                app functions flawlessly.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 11} style={{borderBottom:"1px solid  #E0E0E0"}} icon={<Icon id={11} open={open} />}>
              <AccordionHeader
                className="border-none text-[16px] font-medium"
                onClick={() => handleOpen(11)}
              >
                Updates and Maintenance
              </AccordionHeader>
              <AccordionBody className="text-[14px] font-normal">
                Provide ongoing support and maintenance services to keep the app
                up to date, secure, and compatible with evolving platforms.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 12} style={{borderBottom:"1px solid  #E0E0E0"}} icon={<Icon id={12} open={open} />}>
              <AccordionHeader
                className=" border-none text-[16px] font-medium"
                onClick={() => handleOpen(12)}
              >
                Integration with Third-party Services
              </AccordionHeader>
              <AccordionBody className="text-[14px] font-normal">
                Integrate with third-party services, such as payment gateways,
                social media platforms, and analytics tools, to enhance the
                app's functionality.
              </AccordionBody>
            </Accordion>
          </div>
        </div>

        {/* section3 start */}

        <div className="grid place-items-center w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] mt-[30px] sm:mt-[100px]  lg:mt-[100px]  ">
          <div className=" grid place-items-center  lg:w-[800px] xl:w-[850px] ">
            <h1 className="text-[24px] sm:text-[30px] md:text-[32px] xl:text-[34px] font-bold text-center">
              Develop a cloud-based application to enhance the streaming
              experience."
            </h1>
          </div>
          <img
            className="hidden sm:block w-[750px] lg:w-full mt-[50px]"
            src="/images/netflix profile.svg"
          ></img>
          <img
            className=" sm:hidden  mt-[50px]"
            src="/images/responsive netfilix profile.svg"
          ></img>
        </div>

        {/* section4 start */}
        <div className="sm:text-center md:text-start md:flex  w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] mt-[30px] sm:mt-[40px] md:mt-[80px] lg:mt-[100px] xl:mt-[120px] 2xl:mt-[120px] xl:mb-[10px] ">
          <div className=" md:w-[400px] lg:w-[533px] h-[400px] sm:h-[380px]  mr-[60px] xl:mr-[125px] 2xl:mr-[220px]">
            <h1 className="font-bold w-[333px] sm:w-auto md:w-[370px] xl:w-[430px] text-[24px] sm:text-[32px] md:text-[35px] lg:text-[38px] xl:text-[45px] leading-normal lg::leading-[55px] xl:leading-[60px]">
              Our Best Tech for Web Development
            </h1>
            <p className="  w-[333px] sm:w-auto md:w-[400px] lg:w-[520px] 2xl:w-[613px] text-[14px] md:text-[12px] 2xl:text-[14px] font-medium mt-[20px] lg:mt-[55px]">
              The ideal tool varies based on your design workflow, project
              needs, and individual choices
            </p>
            <div className=" place-items-center md:place-items-start grid  grid-cols-3 sm:grid-cols-5 gap-y-[30px] sm:gap-y-[35px]  gap-x-[20px] lg:gap-x-[20px]  2xl:gap-x-[50px] w-[333px] sm:w-[550px] md:w-[420px] lg:w-[550px] xl:w-[620px] mt-[40px] lg:mt-[55px]">
              <div className="w-[103px] h-[30px]">
                <img src="/images/java.svg"></img>
              </div>
              <div className="w-[103px] h-[30px] ml-[20px] sm:ml-[0px]">
                <img src="/images/php.svg"></img>
              </div>
              <div className="w-[103px] h-[30px] ml-[50px] sm:ml-[0px]">
                <img src="/images/node.svg"></img>
              </div>
              <div className="w-[103px] h-[30px] ml-[-10px]">
                <img src="/images/pythone.svg"></img>
              </div>
              <div className="hidden sm:block w-[103px] h-[30px]">
                <img src="/images//ruby.svg"></img>
              </div>
              <div className="w-[103px] h-[30px]">
                <img src="/images/vuejs.svg"></img>
              </div>
              <div className="w-[103px] h-[30px]">
                <img src="/images/react.svg"></img>
              </div>
              <div className="w-[103px] h-[30px]">
                <img src="/images/javascript.svg"></img>
              </div>
              <div className="w-[103px] h-[30px] mt-[-5px]">
                <img src="/images/social media platform/mysql.svg"></img>
              </div>
              <div className=" hidden sm:block w-[103px] h-[30px] mt-[6px]">
                <img src="/images/social media platform/angular.svg"></img>
              </div>
              <div className=" sm:hidden w-[103px] h-[30px]">
                <img src="/images/social media platform/angular.svg"></img>
              </div>
            </div>
          </div>
          <div className=" sm:ml-[85px] md:ml-[0px] w-[333px] h-[333px] sm:w-[397px] sm:h-[397px] mb-[80px] sm:mb-[0px]">
            <img src="/images/laptop.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ott_development;
