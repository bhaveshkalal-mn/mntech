import React from "react";


function Workprocess() {
  return (
    <div>
      <div className="w-full h-full grid place-items-center">
        <div className=" w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] ">
          <img
            src="/images/workprocessbg.svg"
            className="hidden sm:block rounded-2xl sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1100px] 2xl:w-[1150px] mt-[45px]"
          ></img>
          <img src="/images/workprocessresponsivebg.svg"
          className="sm:hidden rounded-2xl"
          ></img>
          <div className="relative mt-[-50px] sm:mt-[-55px] md:mt-[-60px] ml-[10px] lg:mt-[-80px] xl:mt-[-90px] lg:ml-[30px]">
            <button className="w-[139px] h-[44px] lg:w-[140px] xl:w-[153px] lg:h-[50px] xl:h-[60px] rounded-[11px] bg-[#0904F2] text-white ">
              Work Process
            </button>
          </div>
        </div>

        {/* section2 start */}
        <div className=" mt-[40px] sm:mt-[70px] md:mt-[100px] lg:mt-[120px] md:flex w-[333px] sm:w-[580px]  md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] sm:flex ">
          <div className="  lg:w-[900px] lg:h-[350px] xl:w-[600px]  2xl:w-[550px]  rounded-[11px] text-white ">
            <p
              id="workprocesssection2-p1"
              className="lg:mb-[25px] mb-[20px] lg:mt-[17px] "
            >
              Our Work Process
            </p>
            <h1 id="workprocesssection2-h1" className="lg:mb-[25px] mb-[15px] text-[30px] md:text-[35px] lg:text-[45px] sm:leading-[40px] md:leading-[55px]">
              When we strive to become better than we are, everything around us
              becomes better too.
            </h1>
            <p id="workprocesssection2-p2" className="lg:mb-[10px ">
              But must explain to you how all this mistaken idea of denounc
              pleasure and praising pain was born
            </p>
          </div>
          <div className="sm:w-[700px] md:w-[900px] lg:w-[595px] lg:h-[350px] xl:w-[570px]  2xl:w-[550px]  rounded-[11px]  text-white">
            <div className="grid place-items-center p-[30px] md:ml-[10px] lg:ml-[80px] xl:ml-[120px] 2xl:ml-[80px]">
              <img src="/images/workprocessimg2.svg"></img>
            </div>
          </div>
        </div>

        <div className=" mt-[40px] sm:mt-[70px] md:mt-[100px] lg:mt-[100px] md:flex w-[333px] sm:w-[580px]  md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px]">
          <div className="grid  sm:grid-cols-3 lg:grid-cols-5 sm:gap-4 sm:gap-y-8 md:gap-y-8 lg:gap-y-0 md:gap-24 lg:gap-3 xl:gap-9 2xl:gap-14 ">
            <div className="w-[333px] sm:w-[179px] sm:h-[150px] ">
                <div className="grid place-items-center sm:place-items-start">
              <img src="/images/Research.svg"></img>
              <div className="mt-[35px]">
                <h1 id="workprocesssection2-h2">1. Research</h1>
                </div>
                <p id="workprocesssection2-p3" className="mt-[25px]">
                  Gathering Information from all around
                </p>
              </div>
            </div>
            <div className=" w-[333px] sm:w-[179px] sm:h-[150px] mt-[40px] sm:mt-[0px] ">
            <div className="grid place-items-center sm:place-items-start">
              <img src="/images/Plan.svg"></img>
              <div className="mt-[35px]">
                <h1 id="workprocesssection2-h2">2. Plan</h1>
                </div>
                <p id="workprocesssection2-p3" className="mt-[25px]">
                  Effective strategies for favorable outcomes
                </p>
              </div>
            </div>
            <div className="w-[333px] sm:w-[179px] sm:h-[150px] mt-[40px] sm:mt-[0px] ">
            <div className="grid place-items-center sm:place-items-start">
              <img src="/images/Implement.svg"></img>
              <div className="mt-[35px]">
                <h1 id="workprocesssection2-h2">3. Implement</h1>
                </div>
                <p id="workprocesssection2-p3" className="mt-[25px]">
                  Timely execution as per the plan
                </p>
              </div>
            </div>
            <div className="w-[333px] sm:w-[179px] sm:h-[150px] mt-[40px] sm:mt-[0px]">
            <div className="grid place-items-center sm:place-items-start">
              <img src="/images/Test and Deliver.svg"></img>
              <div className="mt-[35px]">
                <h1 id="workprocesssection2-h2">4. Test and Deliver</h1>
                </div>
                <p id="workprocesssection2-p3" className="mt-[25px]">
                  Making a successful launch
                </p>
              </div>
            </div>
            <div className="w-[333px] sm:w-[179px] sm:h-[150px] mt-[40px] sm:mt-[0px]">
            <div className="grid place-items-center sm:place-items-start">
              <img src="/images/Optimize.svg"></img>
              <div className="mt-[35px]">
                <h1 id="workprocesssection2-h2">5. Optimize</h1>
                </div>
                <p id="workprocesssection2-p3" className="mt-[25px]">
                  Steadyily climbing up the Hill
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* section3 start */}
        <div className=" bg-[#F8F8F8] rounded-[14px] p-[20px] px-[30px]  sm:py-[50px] sm:px-[30px] md:px-[60px] mt-[50px] sm:mt-[75px]  lg:mt-[95px]   h-[140px] sm:h-[300px] md::h-[341px] lg:h-[330px] xl:h-[341px] w-[333px] sm:w-[580px]  md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] mb-[80px] sm:mb-[-10px]">
          <div className="flex">
            <div>
              <p
                id="whychooseussection7-p1"
                className="text-[10px] sm:text-[14px]"
              >
                Get consultation
              </p>

              <h1
                id="whychooseussection7-h1"
                className=" w-[178px] sm:w-[350px] sm:h-[110px] md:w-[668px] md:h-[110px] mt-[5px] sm:mt-[25px] text-[14px] sm:text-[20px]  md:text-[34px] leading-normal sm:leading-[40px] md:leading-[55px]"
              >
                Need Consultation About Digital Solutions ?
              </h1>

              <button
                id="whychooseussection7-btn"
                className="w-[65px] h-[22px] sm:w-[151px] sm:h-[50px] mt-[20px] sm:mt-[15px] md:mt-[28px] rounded-[5px] sm:rounded-[10px]"
              >
                <h1
                  id="whychooseussection7-btnp1"
                  className="text-[8px] sm:text-[12px]"
                >
                  GET STARTED
                </h1>
              </button>
            </div>
            <div className="xl:ml-[50px] 2xl:ml-[100px] ml-[20px] sm:ml-[0px] mt-[7px] sm:mt-[-20px] md:mt-[7px] xl:mt-[-18px]">
              <img className="hidden sm:block" src="/images/men 1.svg"></img>
              <img className="sm:hidden" src="/images/responsivemen1.svg"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workprocess;
