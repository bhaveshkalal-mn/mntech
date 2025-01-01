
import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

function Aboutus() {
  const [activeTab, setactiveTab] = useState("social media");
  const data = [
    {
      label: (
        <div>
          <p
            className={` text-[11px] ml-[-12px]  sm:text-[14px] w-[80px] sm:w-[120px] lg:w-[193px] lg:hover:w-[193px]  h-[32px] lg:h-[50px] grid place-items-center rounded-full ${
              activeTab === "social media"
                ? "bg-[blue] text-[white]"
                : "bg-[#F9F9FF] text-[black]"
            }`}
          >
            Social Media
          </p>
        </div>
      ),
      value: "social media",
      curval: "social media",
      desc: (
        <div className="w-[323px] h-[181px] lg:w-[249px] lg:h-[234px] rounded-[14px] border-[1px] border-[#0904F2] bg-[#FCFCFF]  mt-[20px] p-[30px] ml-[-20px] sm:ml-[-22px] md:ml-[-10px] lg:ml-[-23px] mb-[60px] lg:mb-[0px]">
          <img src="/images/happy millan.svg"></img>
          <div className="w-[260px] sm:w-[265px] md:w-[303px] lg:w-[198px] h-[1px] bg-[#E3E3E3] mt-[10px] lg:mt-[30px]"></div>
          <p id="section5happymillan-p1" className="mt-[13px] text-start">
            Happy Milan
          </p>
          <p id="section5happymillan-p2" className="mt-[12px] text-start">
            Trust our top minds to eliminate workflow pain points, implement new
            tech & app.
          </p>
          <div className="">
            <Link to="/about/aboutus/happymillan">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className=" ml-[260px] lg:ml-[180px] mt-[20px] "
              >
                <path
                  d="M21.4879 12.6594H0V11.3406H21.4879L11.0901 0.942857L12 0L24 12L12 24L11.0901 23.0571L21.4879 12.6594Z"
                  fill="#0904F2"
                />
              </svg>
            </Link>
          </div>
        </div>
      ),
    },
    {
      label: (
        <div>
          <p
            className={`text-[11px] ml-[-5px] 2xl:ml-[-20px] sm:text-[14px] w-[100px] sm:w-[130px] h-[32px] lg:h-[50px] rounded-full grid place-items-center lg:w-[193px]    ${
              activeTab === "sales & marketing"
                ? "bg-[blue] text-[white]"
                : "bg-[#F9F9FF] text-[black]"
            }`}
          >
            Sales & Marketing
          </p>
        </div>
      ),
      value: "sales & marketing",
      curval: "sales & marketing",
      desc: (
        <div className="md:flex">
          <div className="w-[323px] h-[181px] lg:w-[249px] lg:h-[234px] border-[1px] border-[#0904F2] rounded-[14px] bg-[#FCFCFF] mt-[20px] p-[30px] ml-[-20px] sm:ml-[-22px] md:ml-[-10px]   lg:ml-[-22px] ">
            <img src="/images/adsindia.svg"></img>
            <div className="w-[260px] sm:w-[303px] lg:w-[198px] h-[1px] bg-[#E3E3E3] mt-[10px] lg:mt-[30px]"></div>
            <p id="section5happymillan-p1" className="mt-[13px] text-start">
              Ads India
            </p>
            <p id="section5happymillan-p2" className="mt-[12px] text-start">
              Trust our top minds to eliminate workflow pain points, implement
              new tech & app.
            </p>
            <div className="">
              <Link to="/about/aboutus/adsindia">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="ml-[260px] lg:ml-[180px] mt-[20px] "
                >
                  <path
                    d="M21.4879 12.6594H0V11.3406H21.4879L11.0901 0.942857L12 0L24 12L12 24L11.0901 23.0571L21.4879 12.6594Z"
                    fill="#0904F2"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="w-[323px] h-[181px] lg:w-[249px] lg:h-[234px] rounded-[14px] border-[1px] border-[#0904F2] bg-[#FCFCFF] mt-[20px] p-[30px] md:ml-[30px] ml-[-20px] sm:ml-[-30px] mb-[60px] lg:mb-[0px]">
            <img src="/images/provend.svg"></img>
            <div className="w-[260px] sm:w-[303px] lg:w-[198px] h-[1px] bg-[#E3E3E3] mt-[10px] lg:mt-[30px]"></div>
            <p id="section5happymillan-p1" className="mt-[13px] text-start">
              ProVend, India
            </p>
            <p id="section5happymillan-p2" className="mt-[12px] text-start">
              Trust our top minds to eliminate workflow pain points, implement
              new tech & app.
            </p>
            <div className="">
              <Link to="/about/aboutus/provend">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="ml-[260px] lg:ml-[180px] mt-[20px] "
                >
                  <path
                    d="M21.4879 12.6594H0V11.3406H21.4879L11.0901 0.942857L12 0L24 12L12 24L11.0901 23.0571L21.4879 12.6594Z"
                    fill="#0904F2"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ),
    },

    {
      label: (
        <div>
          <p
            className={`text-[11px] sm:text-[14px] w-[100px] sm:w-[130px] h-[32px] lg:h-[50px] rounded-full grid place-items-center lg:w-[193px]  text-[white]" : "bg-[#F9F9FF] text-[black] "}`}
          >
            Video Streaming
          </p>
        </div>
      ),
      value: "video streaming",
    },

    {
      label: (
        <div>
          <p
            className={`text-[11px] sm:text-[14px] w-[100px] sm:w-[130px] h-[32px] lg:h-[50px] 2xl:ml-[20px] rounded-full grid place-items-center lg:w-[193px]  text-[white]" : "bg-[#F9F9FF] text-[black]"}`}
          >
            Human Resource
          </p>
        </div>
      ),
      value: "human resource",
    },

    {
      label: (
        <div>
          <p
            className={`text-[11px] sm:text-[14px] w-[100px] sm:w-[130px] h-[32px] lg:h-[50px] ml-[-35px] 2xl:ml-[0px] rounded-full grid place-items-center lg:w-[193px]  text-[white]" : "bg-[#F9F9FF] text-[black]"}`}
          >
            Finance
          </p>
        </div>
      ),
      value: "finance",
    },
  ];

  return (
    <>
      <div>
        <div className="w-full h-full grid place-items-center">
          <div className=" w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] mt-[40px] lg:mt-[0px] ">
            <img
              src="/images/aboutus profile.svg"
              className="hidden lg:block sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] mt-[45px] h-[250px] sm:h-[350px] rounded-xl"
            ></img>
            <img
              src="/images/aboutresponsive.svg"
              className="lg:hidden sm:w-[580px] md:w-[750px]  rounded-xl "
            ></img>

            <div className="relative mt-[-50px] sm:mt-[-50px] md:mt-[-60px] ml-[10px] lg:mt-[-80px] xl:mt-[-80px] lg:ml-[30px]">
              <button className="w-[139px] h-[44px] lg:w-[140px] xl:w-[153px] lg:h-[50px] xl:h-[60px] rounded-[11px] bg-[#0904F2] text-white ">
                Who are you?
              </button>
            </div>
          </div>

          {/* section2 start */}
          <div className="  mt-[50px] sm:mt-[70px] md:mt-[100px] lg:mt-[120px] md:flex w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px]  ">
            <div className=" p-[20px] lg:p-[25px] lg:w-[700px] lg:h-[474px] xl:w-[595px]  2xl:w-[595px]  rounded-[11px] bg-[#0904F2] text-white">
              <p
                id="aboutussection2-p1"
                className="lg:mb-[25px] mb-[20px] lg:mt-[17px] "
              >
                Who we are?
              </p>
              <h1  className="text-[23px] xl:text-[24px] font-bold  leading-normal lg:mb-[25px] mb-[15px]">
                MNTechgroup is Unlocking the limitless potential of technology
                to drive efficiency, productivity, and success for businesses of
                all sizes.
              </h1>
              <p id="aboutussection2-p2" className="lg:mb-[10px]">
                At MNTechgroup Solutions, we recognize the central role of
                technology in contemporary business operations. Our team of
                proficient experts melds their knowledge with the latest
                industry advancements to provide customized solutions tailored
                to each client's distinct requirements.
              </p>

              <p id="aboutussection2-p2" className="">
                We offer an extensive array of services encompassing software
                development, system integration, cloud computing, and
                cybersecurity, all aimed at enhancing efficiency, productivity,
                and fostering growth. Our solutions are adaptable and versatile,
                facilitating seamless integration with current infrastructure
                and accommodating future expansion.
              </p>
            </div>
            <div className="lg:p-[30px]  lg:w-[450px] xl:w-[550] lg:h-[474px]   rounded-[11px]  text-white ">
              <div className="h-full w-full  flex  place-items-center  ">
                <div className=" ">
                  <div className=" mt-[20px] ml-[15px] sm:ml-[20px] lg:ml-[50px] mr-[10px] lg:mr-[10px] mb-[10px] w-[150px] h-[100px] ">
                    <h1 id="aboutussection2-h1box">8+</h1>
                    <p id="aboutussection2-p1box">Digital Products </p>
                  </div>
                  <div className=" ml-[15px]  sm:ml-[20px] lg:ml-[50px] mr-[10px] lg:mr-[20px]  w-[150px] h-[100px]">
                    <h1 id="aboutussection2-h1box">45+ </h1>
                    <p id="aboutussection2-p1box">Project Completed </p>
                  </div>
                </div>
                <div className="">
                  <div className=" mt-[20px]  ml-[20px] lg:ml-[50px] mr-[10px] lg:mr-[10px] mb-[10px]  w-[150px] h-[100px]">
                    <h1 id="aboutussection2-h1box">10+</h1>
                    <p id="aboutussection2-p1box">Years of Experience </p>
                  </div>
                  <div className="  ml-[20px] lg:ml-[50px] lg:mr-[20px]  w-[150px] h-[100px]">
                    <h1 id="aboutussection2-h1box">34+</h1>
                    <p id="aboutussection2-p1box"> Satisfied Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* section3 start */}
          <div className="  mt-[60px] lg:mt-[100px] w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px]  2xl:w-[1150px] ">
            <div>
              <h1
                id="aboutussection3-h1"
                className="grid place-items-center lg:place-items-start mb-[15px]"
              >
                Our Core Values
              </h1>
              <div className="w-full h-full md:flex lg:mt-[40px]">
                <div className="lg:w-[370px] xl:w-[400px] lg:h-[241px] lg:ml-[10px] lg:mr-[25px] bg-[#FCFCFF] rounded-[10px] p-[35px] ">
                  <p className="text-[15px] xl:text-[16px] font-bold mt-[5px] mb-[20px]">
                    Innovation
                  </p>
                  <p className="text-[14px] xl:text-[16px] font-medium">
                    MN Techgroup is committed to fostering continuous
                    innovation, striving to lead in technology by creating and
                    offering cutting-edge solutions to their clients.
                  </p>
                </div>
                <div className="lg:w-[370px] xl:w-[400px] lg:h-[241px] lg:mr-[25px] bg-[#FCFCFF] rounded-[10px] p-[35px] ">
                  <p className="text-[15px] xl:text-[16px] font-bold mt-[5px] mb-[20px]">
                    Quality
                  </p>
                  <p className="text-[14px] xl:text-[16px] font-medium">
                    At MN Techgroup, our primary focus is on delivering
                    top-notch software and services, consistently exceeding
                    industry benchmarks and surpassing our clients'
                    expectations.
                  </p>
                </div>
                <div className="lg:w-[370px] xl:w-[400px] lg:h-[241px] lg:mr-[20px] bg-[#FCFCFF] rounded-[10px] p-[35px] ">
                  <p className="text-[15px] xl:text-[16px] font-bold mt-[5px] mb-[20px]">
                    Customer-Centric Approach
                  </p>
                  <p className="text-[14px] xl:text-[16px] font-medium">
                    We prioritize customer satisfaction, tailor solutions,
                    provide exceptional support, and build lasting relationships
                    for their success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* section4 start */}
          <div className=" mt-[90px] w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px]  2xl:w-[1150px] lg:flex mb-[80px] md:mb-[20px] lg:mb-[0px]">
            <div className="w-[333px] sm:w-[580px] md:w-[750px] lg:w-[400px] xl:w-[590px] 2xl:w-[500px]">
              <h1
                id="aboutussection4-h1"
                className="sm:mt-[20px] grid place-items-center lg:place-items-start"
              >
                How can we help you?
              </h1>
              <p
                
                className="text-[14px] xl:text-[16px] font-medium mt-[30px] grid place-items-center lg:place-items-start"
              >
                How can we help you? At MN Techgroup, our passionate team of
                designers is dedicated to staying at the forefront of web
                design, creating engaging and user-friendly websites that set
                your business apart.
              </p>
              <p
                id="aboutussection4-p2"
                className="mt-[32px] grid place-items-center lg:place-items-start"
              >
                Our team of dedicated and experienced experts is focused on
                providing innovative solutions customized to meet your unique
                requirements.
              </p>
            </div>
            <div className="lg:w-[500px] xl:w-[600px]  lg:ml-[30px] xl:ml-[80px] ">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5  lg:py-[17px] xl:p-[18px] ">
                <div className=" lg:w-[150px] lg:h-[100px] mt-[50px] lg:mt-[0px]  grid place-items-center">
                  <img src="/images/Vector1.svg" className="mb-[15px] "></img>
                  <h1 id="it-size">IT Consulting</h1>
                </div>
                <div className="lg:w-[150px] lg:h-[100px] mt-[50px] lg:mt-[0px] lg:ml-[15px] grid place-items-center">
                  <img src="/images/Vector4.svg" className="mb-[15px] "></img>
                  <h1 id="it-size" className="ml-[-5px]">
                    UI/UX
                  </h1>
                </div>
                <Link to="/aboutus/softwaredevelopment">
                  <div className="lg:w-[150px] lg:h-[100px] lg:ml-[15px] grid place-items-center">
                    <img
                      src="/images/Vector2.svg"
                      className="mb-[15px] md:mt-[45px] lg:mt-[0px] "
                    ></img>
                    <h1 id="it-size">Software Development</h1>
                  </div>
                </Link>
                <Link to="/aboutus/socialmedia">
                  <div className="lg:w-[150px] lg:h-[100px] grid place-items-center">
                    <img src="/images/Vector5.svg" className="mb-[15px] "></img>
                    <h1 id="it-size">Social Media</h1>
                  </div>
                </Link>

                <div className="lg:w-[150px] lg:h-[100px] lg:ml-[15px] grid place-items-center">
                  <img src="/images/Vector3.svg" className="mb-[15px] "></img>
                  <h1 id="it-size">IT Support</h1>
                </div>
                <Link to="/aboutus/webapp">
                  <div className="lg:w-[150px] lg:h-[100px] lg:ml-[15px] grid place-items-center">
                    <img src="/images/Vector6.svg" className="mb-[15px] "></img>
                    <h1 id="it-size">Web/App</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="lg:w-[960px] xl:w-[1050px]  2xl:w-[1150px] lg:h-[1px] bg-[#DDDCFF] lg:mt-[90px] lg:mb-[0px]"></div> */}

          {/* section5 start */}
          {/* <div className="  mt-[90px] w-[333px] sm:w-[580px] md:w-[750px]  lg:w-[960px] xl:w-[1050px]  2xl:w-[1150px] ">
            <div>
              <h1
                id="aboutussection5-h1"
                className="grid place-items-center lg:place-items-start"
              >
                Our Products
              </h1>
              <p
                id="aboutussection5-p1"
                className="mt-[15px] grid place-items-center lg:place-items-start "
              >
                Explore how our products can enhance and simplify your everyday
                tasks.
              </p>
            </div>
            <div className=" lg:mt-[50px] mt-[30px] relative ">
              <Tabs value="social media">
                <TabsHeader
                  className="bg-[#f9f9ff] h-[32px] lg:h-[50px] rounded-full "
                  indicatorProps={{
                    className: "bg-transform shadow-none !text-gray-900",
                  }}
                >
                  {data.map(({ label, value }) => (
                    <Tab
                      key={value}
                      value={value}
                      onClick={() => setactiveTab(value)}
                    >
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody>
                  {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                      {desc}
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Aboutus;