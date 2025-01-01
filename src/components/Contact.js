import React from "react";
import emailjs from "emailjs-com";
import { Input } from "@material-tailwind/react";


function Contact() {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm("service_jifj1y1", "template_2t2v6hd", e.target, "lZ5atB2ijXg4NHxvN").then(res=>{console.log(res);}).catch(err=> console.log(err));
  }
 
  return (
    <div>
      <div className="w-full h-full grid place-items-center">
        <div className=" w-[333px] sm:w-[580px] md:w-[750px]  lg:w-[960px] xl:w-[1050px] 2xl:w-[1130px] mt-[40px] lg:mt-[0px] ">
          <img
            src="/images/contactprofile.svg"
            className="hidden lg:block sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1130px] mt-[45px] h-[250px] sm:h-[350px] rounded-xl"
          ></img>
          <img
            src="/images/contactresponsiveprofile.svg"
            className="lg:hidden w-[333px] sm:w-[580px] md:w-[750px]  rounded-xl "
          ></img>

          <div className="relative mt-[-50px] sm:mt-[-55px] md:mt-[-60px] ml-[10px] lg:mt-[-70px] xl:mt-[-90px] lg:ml-[30px]">
            <button className="w-[200px] h-[44px] sm:w-[200px] lg:w-[220px] xl:w-[250px] lg:h-[50px] xl:h-[60px] rounded-[11px] text-[14px] xl:text-[16px] bg-[#0904F2] text-white ">
              Send us your requirement
            </button>
          </div>
        </div>

        {/* section2 start */}

        <div className="  md:flex w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1130px] mt-[40px] sm:mt-[70px] md:mt-[100px] lg:mt-[120px] ">
          <div className="w-[333px] sm:w-[580px] md:w-[320px] lg:w-[420px] xl:w-[519px] h-[350px] md:h-[450px]  md:mr-[70px] lg:mr-[100px] xl:mr-[80px] 2xl:mr-[145px]">
            <div className=" ">
              <h1
                id="contactsection2-h1"
                className="w-[333px] sm:w-[auto] md:w-[320px] lg:w-[auto] text-[24px] sm:text-[35px] md:text-[28px] lg:text-[35px] xl:text-[43px] leading-normal xl:leading-[50px]"
              >
                Our skilled teams are ready to assist. Feel free to reach out.
              </h1>
            </div>
            <div className="  mt-[15px]">
              <p
                id="contactsection2-p1"
                className=" lg:w-[400px] text-[16px] sm:text-[14px] xl:text-[16px] "
              >
                Have your inquiries addressed by our business development experts
              </p>
            </div>
            <div className="grid md:place-items-center lg:place-items-start mt-[15px]">
              <div className="md:text-center lg:text-start sm:w-[450px] md:w-[320px] lg:w-[370px] xl:w-[431px] h-[1px] mt-[10px] sm:mt-[25px] xl:mt-[30px] bg-[#DBDBDB]"></div>
            </div>
            <div className=" ">
              <h1 className=" text-[14px] sm:text-[13px] xl:text-[14px] font-semibold mt-[25px] xl:mt-[30px]">
                Website{" "}
              </h1>

              <p className="flex lg:flex-none text-[16px] sm:text-[14px] xl:text-[15px] font-medium">
                www.mntecgroup.com
              </p>

              <h1 className="text-[14px] sm:text-[13px] xl:text-[14px] font-semibold mt-[25px] xl:mt-[30px]">
                Email{" "}
              </h1>
              <p className="text-[16px] sm:text-[14px] xl:text-[15px] font-medium">
                contact@mntecgroup.com
              </p>
            </div>
          </div>
          <div className="py-[20px] w-[333px] sm:w-[440px] md:w-[400px] lg:w-[440px] xl:w-[460px] h-[450px] ">
            <div>
              <h1 className="text-[14px] sm:text-[13px] md:text-[12px] lg:text-[13px] xl:text-[14px] font-semibold">
                Request a proposal
              </h1>
              <form onSubmit={sendEmail}>
              <div className="">
                
                 <input className="focus:outline-none p-[13px] px-[15px] mt-[20px] sm:mt-[15px] w-[332px] sm:w-[435px] md:w-[360px]  lg:w-[435px] xl:w-[455px] h-[50px] bg-[#F9F9F9] rounded-[8px] text-[14px] md:text-[13px] lg:text-[14px] xl:text-[15px] font-medium " type="text" name="name" placeholder="Name"></input> 
                
              </div>
              <div className="flex">
                <div className="">
                  <input className="focus:outline-none p-[13px] px-[15px]  mt-[20px] w-[160px] sm:w-[205px] md:w-[170px] lg:w-[205px] xl:w-[214px] h-[50px] bg-[#F9F9F9] rounded-[8px] mr-[12px] sm:mr-[23px] md:mr-[20px] lg:mr-[23px] text-[14px] md:text-[13px] lg:text-[14px] xl:text-[15px] font-medium " type="email" name="user_email"  placeholder="Email address">
                    
                  </input>
                </div>
                <div id="contact_number" className="">
                  <input className="focus:outline-none p-[13px] px-[15px]  mt-[20px] w-[160px] sm:w-[205px] md:w-[170px] lg:w-[205px] xl:w-[218px] h-[50px] bg-[#F9F9F9] rounded-[8px] text-[14px] md:text-[13px] lg:text-[14px] xl:text-[15px] font-medium" type="tel" name="Contact no"  placeholder="Contact No" >
                    
                  </input>
                </div>
                
              </div>
              <div className="">
                <input className="focus:outline-none p-[13px] px-[15px] mt-[20px]  w-[332px] sm:w-[435px] md:w-[360px]  lg:w-[435px]  xl:w-[455px] h-[50px] bg-[#F9F9F9] rounded-[8px] text-[14px] md:text-[13px] lg:text-[14px] xl:text-[15px] font-medium" name="Budget" placeholder=" Enter your budget">
                 
                </input>
              </div>
              <div className="">
                <textarea className="focus:outline-none p-[13px] px-[15px]  mt-[20px]  w-[332px] sm:w-[435px] md:w-[360px]  lg:w-[435px]  xl:w-[455px] h-[110px] bg-[#F9F9F9] rounded-[8px] text-[14px] md:text-[13px] lg:text-[14px] xl:text-[15px] font-medium" type="text" name="Description" placeholder="Project description">
                  
                </textarea>
              </div>
              <div className=" mt-[13px] w-[332px] sm:w-[455px] md:w-[380px] lg:w-[455px] text-center">
                <p className="text-[12px] sm:text-[11px] md:text-[10px] lg:text-[11px] xl:text-[12px] font-medium ">
                  Your idea is 100% protected by our non disclosure agreement.
                </p>
              </div>
              <div className="flex">
                
                <button className="flex p-[13px] px-[15px] sm:px-[20px] mt-[16px] w-[184px] sm:w-[221px] md:w-[180px] lg:w-[221px] xl:w-[231px] h-[50px] bg-[#F9F9F9] border-2 border-[blue] rounded-[8px] mr-[20px] sm:mr-[40px]">
                
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="20"
                    viewBox="0 0 11 20"
                    fill="none"
                  >
                    <path
                      d="M5.5 20C3.98333 20 2.6875 19.4792 1.6125 18.4375C0.5375 17.3958 0 16.1167 0 14.6V3.85C0 2.78333 0.379167 1.875 1.1375 1.125C1.89583 0.375 2.80833 0 3.875 0C4.95833 0 5.875 0.375 6.625 1.125C7.375 1.875 7.75 2.79167 7.75 3.875V13.725C7.75 14.3583 7.53333 14.8958 7.1 15.3375C6.66667 15.7792 6.13333 16 5.5 16C4.86667 16 4.33333 15.7625 3.9 15.2875C3.46667 14.8125 3.25 14.25 3.25 13.6V3.8H4.25V13.675C4.25 14.0417 4.37083 14.3542 4.6125 14.6125C4.85417 14.8708 5.15 15 5.5 15C5.85 15 6.14583 14.875 6.3875 14.625C6.62917 14.375 6.75 14.075 6.75 13.725V3.85C6.75 3.05 6.47083 2.375 5.9125 1.825C5.35417 1.275 4.675 1 3.875 1C3.075 1 2.39583 1.275 1.8375 1.825C1.27917 2.375 1 3.05 1 3.85V14.65C1 15.8667 1.44167 16.8958 2.325 17.7375C3.20833 18.5792 4.26667 19 5.5 19C6.75 19 7.8125 18.575 8.6875 17.725C9.5625 16.875 10 15.8333 10 14.6V3.8H11V14.575C11 16.0917 10.4625 17.375 9.3875 18.425C8.3125 19.475 7.01667 20 5.5 20Z"
                      fill="black"
                    />
                  </svg>

                  <p  className="text-[13px] sm:text-[15px] md:text-[13px] lg:text-[15px] font-sans sm:font-medium ml-[10px] sm:ml-[28px] md:ml-[10px] lg:ml-[30px] xl:ml-[36px] 2xl:ml-[36px]">
                   Attach Document
                  </p>
               

                </button>
                <button className="p-[10px] px-[0px] mt-[16px] w-[187px] md:w-[155px] lg:w-[187px] xl:w-[187px] h-[50px] bg-[#0904F2] rounded-[10px]">
                 
                  <div className="text-[15px] font-medium text-center py-[4px] text-[white]">
                    Send
                  </div>
                 
                </button>
                
              </div>
              </form>
            </div>
          </div>
        </div>

        {/* section3 start */}
        <div className="  flex w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1130px] mt-[80px]  lg:mt-[160px] mb-[40px] ">
          <div className="sm:flex mt-[10px] sm:mt-[0px] w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1130px] h-[550px] sm:h-[151px] xl:h-[157px] ">
            <div
              id="contactsection3-h1"
              className=" w-[333px] sm:w-[180px] md:w-[230px] lg:w-[342px] h-[145px]  mr-[0px] md:mr-[20px] lg:mr-[30px] xl:mr-[80px] 2xl:mr-[100px] text-[40px] sm:text-[22px] md:text-[28px] lg:text-[39px] xl:text-[42px] 2xl:text-[45px]"
            >
              MN Techgroup around the Globe
            </div>
            <div className="mt-[20px] sm:mt-[0px] w-[333px] h-[1.5px] sm:w-[1px] xl:w-[1.5px] sm:h-[137px] xl:h-[140px] bg-[#0904F2]"></div>
            <div className="grid place-items-center sm:place-items-start">
              <div className=" py-[30px] xl:py-[25px] mt-[10px] sm:mt-[0px] sm:ml-[5px] sm:mr-[5px] md:ml-[30px] md:mr-[30px]  lg:ml-[60px] lg:mr-[50px] xl:ml-[70px] xl:mr-[60px] 2xl:ml-[90px] 2xl:mr-[94px]">
                <h1 className="text-[28px] sm:text-[18px] xl:text-[28px] font-semibold">India</h1>
                <p className=" xl:text-[16px] font-sans lg:font-medium">
                  Gandhinagar, Gujarat
                </p>
               
                <p className="xl:text-[16px] font-sans lg:font-medium sm:mt-[5px] xl:mt-[7px]">
                  contact@mntecgroup.com
                </p>
              </div>
            </div>
            <div className="mt-[20px] sm:mt-[0px] w-[333px] h-[1.5px] sm:w-[1px] lg:w-[1.1px] xl:w-[1.5px] sm:h-[137px] xl:h-[140px] bg-[#0904F2]"></div>
            <div className="grid place-items-center sm:place-items-start">
              <div className="py-[30px] xl:py-[25px] mt-[10px] sm:mt-[0px] sm:ml-[5px] md:ml-[40px] lg:ml-[66px] xl:ml-[80px] 2xl:ml-[90px]">
                <h1 className="text-[28px] sm:text-[18px] xl:text-[28px] font-semibold">Malaysia</h1>
                <p className="xl:text-[16px] font-sans lg:font-medium">
                  Selonagor, Kualalumpur
                </p>
                
                <p className="xl:text-[16px] font-sans lg:font-medium sm:mt-[5px] xl:mt-[7px] ">
                  contact@mntecgroup.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
