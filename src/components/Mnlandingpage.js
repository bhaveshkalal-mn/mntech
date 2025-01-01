import React, { useState } from "react";
import { Link } from "react-router-dom";


import "swiper/swiper.min.css";

const Comp1 = () => {
  return (
    <>
      <div className=" w-[375px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] mt-[40px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[74px]  lg:flex">
        <div className=" w-[329px] sm:w-[450px] md:w-[750px]  lg:w-[520px] xl:w-[550px] 2xl:w-[616px] lg:h-[350px]">
          <div className="md:mt-[40px] lg:mt-[30px] px-[28px] sm:px-[0px] ">
            <h1
              id="mnlandingsection1-h1"
              className=" text-[26px] sm:text-[40px] md:text-[50px] lg:text-[45px] xl:text-[50px]  leading-normal md:leading-[70px] lg:leading-[65px] xl:leading-[70px] 2xl:leading-[75px]"
            >
              Elevate Your Digital Experience with Our IT Expertise
            </h1>
            <p
              id="mnlandingsection1-p1"
              className="mt-[20px] md:mt-[23px] text-[11px] sm:text-[16px]"
            >
              Delivering custom software solutions that drive your business
              forward. Experience innovation, reliability, and excellence with
              our expert services.
            </p>
            <Link to='/mnlandingpage/viewourservice'>
            <p
              id="mnlandingsection1-view"
              className="flex 2xl:mt-[62px]  lg:mt-[40px] md:mt-[40px] mt-[30px] text-[16px] md:text-[18px] "
            >
              View Our Services
              <div className="w-[30px] lg:w-[35px] h-[30px] lg:h-[35px] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="ml-[12px] mt-[3px]"
                >
                  <path
                    d="M21.4879 12.6594H0V11.3406H21.4879L11.0901 0.942857L12 0L24 12L12 24L11.0901 23.0571L21.4879 12.6594Z"
                    fill="#0904F2"
                  />
                </svg>
              </div>
            </p>
            </Link>
          </div>
        </div>

        <div className="hidden lg:block    lg:w-[370px]  lg:h-[415px] xl:w-[404px]  xl:h-[438px] 2xl:w-[404px]  2xl:h-[454px] lg:ml-[70px] xl:ml-[130px] ">
          <img src="/images/landingpagemodel.svg"></img>
        </div>
        <div className="hidden md:block lg:hidden">
          <div className=" md:grid place-items-center  h-full w-full ">
            <div className="  md:w-[300px]  md:h-[450x] lg:w-[370px]  lg:h-[415px] xl:w-[404px]  xl:h-[438px] 2xl:w-[404px]  2xl:h-[454px] lg:ml-[80px] xl:ml-[130px] ">
              <img src="/images/landingpagemodel.svg"></img>
            </div>
          </div>
        </div>
        <div className="md:hidden ">
          <div className="w-full h-full grid place-items-center mt-[30px]">
            <div className="md:w-[300px] md:h-[400px] ">
              <img src="/images/landingpagemodel2.svg"></img>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px]">
        <div
          id="mnlandingsection1-border"
          className=" md:w-[750px] lg:w-[980px] xl:w-[1070px]  2xl:w-[1170px] h-[1px] "
        ></div>
      </div>
    </>
  );
};
const Comp2 = () => {
  return (
    <>
      <div className=" w-[375px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] mt-[40px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[74px]  lg:flex">
        <div className=" w-[329px] sm:w-[450px] md:w-[750px]  lg:w-[535px] xl:w-[610px]  2xl:w-[602px] lg:h-[350px]">
          <div className="md:mt-[40px] lg:mt-[30px] px-[28px] sm:px-[0px] ">
            
            <h1
              id="mnlandingsection1-h1"
              className=" text-[26px] sm:text-[40px] md:text-[50px] lg:text-[43px] xl:text-[46px] 2xl:text-[50px]  leading-normal md:leading-[70px] lg:leading-[65px] xl:leading-[70px] 2xl:leading-[75px]"
            >
              Our Vision, Our Innovation: Mobile App Development Experts
            </h1>
            <p className="w-[300px] sm:w-[450px] md:w-[499px] mt-[20px] md:mt-[23px] text-[11px] sm:text-[14px] font-medium">
            Unlock the potential of your business with our top-tier mobile app development service. Crafted for success, designed for you.
            </p>
            <Link to='/mnlandingpage/readmore'>
            <p
              id="mnlandingsection1-view"
              className="flex lg:mt-[62px] md:mt-[40px] mt-[30px] text-[16px] md:text-[18px] "
            >
              Read More
              <div className="w-[30px] lg:w-[35px] h-[30px] lg:h-[35px] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="ml-[12px] mt-[3px]"
                >
                  <path
                    d="M21.4879 12.6594H0V11.3406H21.4879L11.0901 0.942857L12 0L24 12L12 24L11.0901 23.0571L21.4879 12.6594Z"
                    fill="#0904F2"
                  />
                </svg>
              </div>
            </p>
            </Link>
          </div>
        </div>

        <div className="hidden lg:block    lg:w-[370px]  lg:h-[415px] xl:w-[404px]  xl:h-[438px] 2xl:w-[404px]  2xl:h-[454px] lg:ml-[50px] xl:ml-[119px] 2xl:ml-[148px] ">
          <img
            className="mt-[25px] xl:mt-[45px] 2xl:mt-[28px]"
            src="/images/mnlandingpagehappymillan.svg"
          ></img>
        </div>
        <div className="hidden md:block lg:hidden">
          <div className=" md:grid place-items-center  h-full w-full ">
            <div className="  md:w-[300px]  md:h-[450x] lg:w-[370px]  lg:h-[415px] xl:w-[404px]  xl:h-[438px] 2xl:w-[404px]  2xl:h-[454px] lg:ml-[80px] xl:ml-[130px] ">
              <img src="/images/happymillanprofile.svg"></img>
            </div>
          </div>
        </div>
        <div className="md:hidden ">
          <div className="w-full h-full grid place-items-center mt-[30px]">
            <div className="md:w-[300px] md:h-[400px] ">
              <img
                className="h-[180px]"
                src="/images/responsivehappymillanprofile.svg"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px]">
        <div
          id="mnlandingsection1-border"
          className=" md:w-[750px] lg:w-[980px] xl:w-[1070px]  2xl:w-[1170px] h-[1px] "
        ></div>
      </div>
    </>
  );
};

function Mnlandingpage() {
  const [OurSlide, setOurSlide] = useState(1);

  const RenderComp = () => {
    switch (OurSlide) {
      case 1:
        return <Comp1 />;
      case 2:
        return <Comp2 />;
      case 3:
        return <Comp1 />;
      default:
        return null;
    }
  };

  return (
    <>
      <div>
        <div className="w-full h-full grid place-items-center">
          {/* section1 start */}
          {RenderComp()}
          <div className=" w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px]">
            <div
              id="mnlandingsection1-border"
              className=" md:w-[750px] lg:w-[980px] xl:w-[1070px]  2xl:w-[1170px] h-[1px] "
            ></div>
            <div
              id="slide1"
              className="hidden lg:block md:mt-[-290px] lg:mt-[-265px] xl:mt-[-280px] 2xl:mt-[-290px] lg:ml-[10px] xl:ml-[0px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="106"
                height="18"
                viewBox="0 0 106 18"
                fill="none"
              >
                <circle
                  cx="9"
                  cy="9"
                  r="9"
                  onClick={() => setOurSlide(3)}
                  transform="rotate(-90 9 9)"
                  fill={OurSlide === 3 ? "#0904f2" : "#EEEEFF"}
                />
                <circle
                  cx="53"
                  cy="9"
                  r="9"
                  transform="rotate(-90 53 9)"
                  onClick={() => setOurSlide(2)}
                  fill={OurSlide === 2 ? "#0904f2" : "#EEEEFF"}
                />
                <circle
                  cx="97"
                  cy="9"
                  r="9"
                  onClick={() => setOurSlide(1)}
                  transform="rotate(-90 97 9)"
                  fill={OurSlide === 1 ? "#0904f2" : "#EEEEFF"}
                />
              </svg>
            </div>
            <div className="w-full grid place-items-center relative ">
              <div className="mr-[80px] sm:mr-[50px]  mt-[30px] ">
                <div id="slide11" className="lg:hidden ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="18"
                    viewBox="0 0 106 18"
                    fill="none"
                  >
                    <circle
                      cx="9"
                      cy="9"
                      onClick={() => setOurSlide(1)}
                      r="9"
                      fill={OurSlide === 1 ? "#0904f2" : "#EEEEFF"}
                    />
                    <circle
                      cx="53"
                      cy="9"
                      onClick={() => setOurSlide(2)}
                      r="9"
                      fill={OurSlide === 2 ? "#0904f2" : "#EEEEFF"}
                    />
                    <circle
                      cx="97"
                      cy="9"
                      onClick={() => setOurSlide(3)}
                      r="9"
                      fill={OurSlide === 3 ? "#0904f2" : "#EEEEFF"}
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* section2 start */}

          <div className=" w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] mt-[-60px] sm:mt-[-50px] md:mt-[-40px] lg:mt-[90px] xl:mt-[100px] 2xl:mt-[119px]  lg:flex">
            <div className="lg:w-[560px] lg:h-[413px] xl:w-[550px] 2xl:w-[550px] xl:h-[413px] py-[20px]">
              <h1
                id="mnlandingection2-h1"
                className="text-[18px] sm:text-[26px] md:text-[30px] lg:text-[28px] xl:text-[32px] 2xl:text-[34px]"
              >
                At MN Techgroup we understand that technology is at the heart of
                modern business operations.{" "}
              </h1>
              <p
                id="mnlandingection2-p1"
                className="mt-[20px] md:mt-[25px] text-[10px] sm:text-[12px] md:text-[13px] xl:text-[14px] "
              >
                At TechLaunch Solutions, we understand that technology is at the
                heart of modern business operations. Our team of skilled
                professionals combines their expertise with the latest industry
                trends to offer tailored solutions that address the unique needs
                of each client.
              </p>
              <Link to="/mnlandingpage/section2/readmore">
              <p
                id="mnlandingsection1-view"
                className="flex  lg:mt-[40px] md:mt-[30px] mt-[20px]  md:text-[18px] lg:text-[14px]  xl:text-[18px] "
              >
                Read More
                <div className="w-[30px] md:w-[35px] lg:w-[30px]  xl:w-[35px] h-[30px] xl:h-[35px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="ml-[12px] mt-[3px]"
                  >
                    <path
                      d="M21.4879 12.6594H0V11.3406H21.4879L11.0901 0.942857L12 0L24 12L12 24L11.0901 23.0571L21.4879 12.6594Z"
                      fill="#0904F2"
                    />
                  </svg>
                </div>
              </p>
              </Link>
            </div>

            <div className="hidden b lg:block w-[329px] h-[297px] lg:w-[434px] lg:h-[370px] xl:h-[400px] 2xl:h-[413px] bg-[#0904F2] lg:ml-[120px] xl:ml-[170px]  rounded-[14px] p-[20px] lg:p-[55px] lg:px-[50px] xl:p-[65px] xl:px-[60px] 2xl:p-[78px]">
              <div id="mnlandingsection2part2" className="flex">
                <p className="">14+</p>
                <p
                  id="mnlandingsection2part2prgh"
                  className="ml-[71px] mt-[8px] "
                >
                  PROJECTS <br />
                  COMPLETED
                </p>
              </div>
              <div id="mnlandingsection2part2" className="flex ">
                <p className="mt-[30px]">05+</p>
                <p
                  id="mnlandingsection2part2prgh"
                  className="ml-[62px] mt-[40px] "
                >
                  YEARS OF <br /> EXPERIENCE
                </p>
              </div>
              <div id="mnlandingsection2part2" className="flex ">
                <p className="mt-[30px] ">09+</p>
                <p
                  id="mnlandingsection2part2prgh"
                  className="ml-[62px] mt-[40px]"
                >
                  SATISFIED CLIENTS <br />
                  ON 24 COUNTRIES
                </p>
              </div>
            </div>

            <div className="w-full h-full lg:hidden grid place-items-center ">
              <div className=" w-[329px] h-[297px] sm:w-[400px] sm:h-[350px] lg:w-[434px] lg:h-[370px] xl:h-[400px] 2xl:h-[413px] bg-[#0904F2] lg:ml-[110px] xl:ml-[150px]  rounded-[14px] p-[20px] px-[25px] sm:p-[40px] sm:px-[50px] lg:p-[55px] lg:px-[50px] xl:p-[70px] xl:px-[75px] 2xl:p-[78px]">
                <div id="mnlandingsection2part2" className="flex">
                  <p className="">14+</p>
                  <p
                    id="mnlandingsection2part2prgh"
                    className="ml-[71px] mt-[10px] sm:mt-[8px]"
                  >
                    PROJECTS <br />
                    COMPLETED
                  </p>
                </div>
                <div id="mnlandingsection2part2" className="flex ">
                  <p className="mt-[30px]">05+</p>
                  <p
                    id="mnlandingsection2part2prgh"
                    className="ml-[62px] mt-[42px] sm:mt-[40px]"
                  >
                    YEARS OF <br /> EXPERIENCE
                  </p>
                </div>
                <div id="mnlandingsection2part2" className="flex ">
                  <p className="mt-[30px] ">09+</p>
                  <p
                    id="mnlandingsection2part2prgh"
                    className="ml-[62px] mt-[40px]"
                  >
                    SATISFIED CLIENTS <br />
                    ON 24 COUNTRIES
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* section3 start */}

          <div className=" w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] mt-[60px] sm:mt-[70px]  md:mt-[80px] lg:mt-[90px] xl:mt-[100px] 2xl:mt-[119px]  flex">
            <div className="w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] lg:h-[550px] xl:h-[732px] bg-[#F9F9FF] rotate-[-0.179deg] rounded-[14px]">
              <div className=" w-full grid place-items-center">
                <p
                  id="mnlandingsection3-p1"
                  className="mt-[30px] lg:mt-[5px] xl:mt-[50px] 2xl:mt-[70px]"
                >
                  We can help you
                </p>
                <h1
                  id="mnlandingsection3-h1"
                  className="w-[300px] sm:w-[400px] md:w-[650px] lg:w-[650px] xl:w-[695px] mt-[10px] xl:mt-[25px] 2xl:mt-[30px] md:leading-[50px] xl:leading-[60px] text-[18px] sm:text-[20px] md:text-[40px] xl:text-[45px]"
                >
                  We provide exclusive services for your business
                </h1>
              </div>
              <div className="hidden sm:block">
                <div className="p-[25px]   grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-[40px] md:mt-[45px] xl:mt-[70px] 2xl:mt-[80px] sm:px-[60px] md:px-[90px] lg:px-[70px] sm:gap-x-20 md:gap-x-24 lg:gap-y-0 xl:gap-y-2 2xl:gap-y-4 lg:gap-x-32 xl:gap-x-[170px] 2xl:gap-x-[230px]">
                  
                  <div className="  w-[200px] h-[200px] ">
                  <Link to="/mnlandingpage/softwaredevelopment">
                    <img src="/images/Vector2.svg"></img>
                    <h1
                      id="mnlandingsection3-h2"
                      className="mt-[18px] text-[18px] sm:text-[16px] xl:-text[18px]"
                    >
                      Software Development
                    </h1>
                    <p id="mnlandingsection3-p2" className="mt-[8px]">
                      Trust our top minds to eliminate
                      <br /> workflow pain points, implement new <br />
                      tech & app.
                    </p>
                    </Link>
                  </div>
                  
                  <div className=" w-[200px] h-[200px] ">
                    <img src="/images/Vector4.svg"></img>
                    <h1
                      id="mnlandingsection3-h2"
                      className="mt-[18px] text-[18px] sm:text-[16px] xl:-text[18px]"
                    >
                      UI/UX
                    </h1>
                    <p id="mnlandingsection3-p2" className="mt-[8px]">
                      Trust our top minds to eliminate
                      <br /> workflow pain points, implement new
                      <br /> tech & app.
                    </p>
                  </div>
                  <div className=" w-[200px] h-[200px] ">
                  <Link to="/mnlandingpage/socialmedia">
                    <img src="/images/Vector5.svg"></img>
                    <h1
                      id="mnlandingsection3-h2"
                      className="mt-[18px] text-[18px] sm:text-[16px]xl:-text[18px]"
                    >
                      Social Media
                    </h1>
                    <p id="mnlandingsection3-p2" className="mt-[8px]">
                      Trust our top minds to eliminate
                      <br /> workflow pain points, implement new
                      <br /> tech & app.
                    </p>
                    </Link>
                  </div>
                  <div className="w-[200px] h-[200px] ">
                  <Link to="/mnlandingpage/webapp">
                    <img src="/images/Vector6.svg"></img>
                    <h1
                      id="mnlandingsection3-h2"
                      className="mt-[18px] text-[18px] sm:text-[16px] xl:-text[18px]"
                    >
                      Web/App
                    </h1>
                    <p id="mnlandingsection3-p2" className="mt-[8px]">
                      Trust our top minds to eliminate
                      <br /> workflow pain points, implement new
                      <br />
                      tech & app.
                    </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-[25px] sm:hidden grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-[60px] md:mt-[45px] xl:mt-[70px] 2xl:mt-[80px] sm:px-[60px] md:px-[90px] lg:px-[70px] sm:gap-x-20 md:gap-x-24 lg:gap-y-0 xl:gap-y-2 2xl:gap-y-4 lg:gap-x-32">
                
                <div className="w-[300px] h-[160px] ">
                  <Link to="/mnlandingpage/softwaredevelopment">
                  <img src="/images/Vector2.svg"></img>
                  <h1
                    id="mnlandingsection3-h2"
                    className="mt-[18px] text-[18px] sm:text-[16px] xl:-text[18px]"
                  >
                    Software Development
                  </h1>
                  <p id="mnlandingsection3-p2" className="mt-[8px]">
                    Trust our top minds to eliminate workflow pain points,
                    <br /> implement new tech & app.
                  </p>
                  </Link>
                </div>
                
                <div className="w-[300px] h-[160px] ">
                  <img src="/images/Vector4.svg"></img>
                  <h1
                    id="mnlandingsection3-h2"
                    className="mt-[18px] text-[18px] sm:text-[16px] xl:-text[18px]"
                  >
                    UI/UX
                  </h1>
                  <p id="mnlandingsection3-p2" className="mt-[8px]">
                    Trust our top minds to eliminate workflow pain points,
                    <br /> implement new tech & app.
                  </p>
                </div>
                <div className="w-[300px] h-[160px]  ">
                <Link to="/mnlandingpage/socialmedia">
                  <img src="/images/Vector5.svg"></img>
                  <h1
                    id="mnlandingsection3-h2"
                    className="mt-[18px] text-[18px] sm:text-[16px]xl:-text[18px]"
                  >
                    Social Media
                  </h1>
                  <p id="mnlandingsection3-p2" className="mt-[8px]">
                    Trust our top minds to eliminate workflow pain points,
                    <br /> implement new tech & app.
                  </p>
                  </Link>
                </div>
                <div className="w-[300px] h-[160px]  ">
                <Link to="/mnlandingpage/webapp">
                  <img src="/images/Vector6.svg"></img>
                  <h1
                    id="mnlandingsection3-h2"
                    className="mt-[18px] text-[18px] sm:text-[16px] xl:-text[18px]"
                  >
                    Web/App
                  </h1>
                  <p id="mnlandingsection3-p2" className="mt-[8px]">
                    Trust our top minds to eliminate workflow pain points,
                    <br /> implement new tech & app.
                  </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* section4 start */}
          <div>
            <div
              id="mnlandingsection4-border"
              className="p-[10px] sm:p-[20px] sm:px-[30px] md:p-[30px] md:px-[40px] lg:p-[40px] w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] h-[430px]  sm:h-[550px]  lg:h-[400px] xl:h-[465px] mt-[60px] sm:mt-[70px]  md:mt-[80px] lg:mt-[90px] xl:mt-[100px] 2xl:mt-[105px] mb-[90px] sm:mb-[0px]  lg:flex"
            >
              <div className="max-sm:text-center max-md:text-center max-lg:text-center lg:text-start grid place-items-center lg:place-items-start lg:w-[372px]">
                <p
                  id="mnlandingsection4-p1"
                  className="text-[12px] sm:text-[15px] xl:text-[18px]"
                >
                  Why Choose Us?
                </p>
                <div className=" ">
                  <p
                    id="mnlandingsection4-h1"
                    className="mt-[15px] lg:mt-[20px] text-[18px] sm:text-[28px] xl:text-[34px] px-[30px] sm:px-[50px] md:px-[0px] text-[#0904F2] md:text-[#000]"
                  >
                    Boost your business with new tech
                  </p>
                  <p
                    id="mnlandingsection4-p2"
                    className="mt-[12px]  text-[10px] sm:text-[14px] "
                  >
                    Our team can assist you in transforming your business
                    through latest tech capabilities to stay ahead of the curve.
                  </p>
                </div>
               
                
              </div>

              <div className="w-[300px] sm:w-[400px] md:w-[480px] mt-[40px] sm:mt-[20px] md:mt-[30px]  md:ml-[85px] lg:w-[620px] lg:mt-[0px] sm:ml-[55px] lg:ml-[100px] xl:w-[600px] xl:ml-[50px] xl:mt-[10px] 2xl:w-[620px] 2xl:ml-[100px]">
                <img src="/images/Group 1296.svg"></img>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
}

export default Mnlandingpage;
