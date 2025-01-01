import React, { useState } from "react";
import emailjs from "emailjs-com";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function CustomModal({ isOpen, onClose }) {
  
  return (
    isOpen ? <>

      <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>

        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Disagree</Button>
          <Button onClick={onClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </> : <>
    </>
  );
}

function Joinus() {
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveTab(1)
  };

  const [activeTab, setActiveTab] = useState(1);

  const HandleTabclick = () => {
    setActiveTab(activeTab + 1);
  };
 
  const renderTabContent = () => {
    function sendEmail(e){
      e.preventDefault();
      //service_qin20qc","template_lvvch6b

          emailjs.sendForm("service_zqkcodh", "template_akafirl", e.target, "lZ5atB2ijXg4NHxvN").then(res=>{console.log(res);} , setActiveTab(activeTab + 1)).catch(err=> console.log(err));

    }
    
    switch (activeTab) {
      case 1:
        return <>
        
          <div className="ml-[10px] sm:ml-[27px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[27px] mt-[10px] sm:mt-[10px]  xl:mt-[15px]">
            <div className=" lg:mt-[15px]">
              <h1 className="text-[20px] sm:text-[22px] lg:text-[18px] xl:text-[22px] 2xl:text-[24px] font-bold">Mobile App Developer</h1>
              <div className="flex">
              <p className="text-[11px] lg:text-[12px] font-medium leading-[20px] mt-[3px] xl:mt-[5px]">Experience : 1 year or more    </p>
              <div className="mt-[6px] xl:mt-[8px] ml-[8px] w-[1px] xl:w-[1.5px] h-[15px] bg-[#CDCDCD]"></div>
              <div><p className="ml-[8px] text-[11px] lg:text-[12px] font-medium leading-[20px] mt-[3px] xl:mt-[5px]">Work : Remotely  </p></div>
              <div className="mt-[6px] xl:mt-[8px] ml-[8px] w-[1.5px] h-[15px] bg-[#CDCDCD]"></div>
              <div><p className="ml-[8px] text-[11px] lg:text-[12px] font-medium leading-[20px] mt-[3px] xl:mt-[5px]">  Time : Mon-Fri</p></div>
              </div>
            </div>
            <div className="w-[290px] sm:w-[360px] md:w-[360px]  lg:w-[420px] xl:w-[450px]  h-[1px]  mt-[15px] 2xl:mt-[25px] bg-[#E9E9E9]"></div>
             
             <div className="mt-[15px] xl:mt-[20px] w-[290px] sm:w-[360px] md:w-[360px]  lg:w-[435px] xl:w-[450px]">
              <h1 className="text-[12px] lg:text-[11px] xl:text-[12px] font-semibold leading-[20px]">Key Skills & Behaviours:</h1>
              <ul className="ml-[16px] mt-[10px] list-disc">
                <li className="text-[12px] lg:text-[11px] xl:text-[12px] font-medium leading-[20px]">Professional experience working with native iOS and Android and hybrid (Flutter) platforms.</li>
                <li className="text-[12px] lg:text-[11px] xl:text-[12px] font-medium leading-[20px]">Proficiency and familiarity with the following programming languages: Flutter(Dart), Java, JS, JSON. SQL Lite</li>
                <li className="text-[12px] lg:text-[11px] xl:text-[12px] font-medium leading-[20px]">Architect, build and maintain excellent in native iOS and Android & Flutter applications with clean code.</li>
                <li className="text-[12px] lg:text-[11px] xl:text-[12px] font-medium leading-[20px]">Familiarity with SwiftLint, iOS Lifecycle, API Handling, Unit Test and Integration Test for mobile applications.</li>
                <li className="text-[12px] lg:text-[11px] xl:text-[12px] font-medium leading-[20px]">Developing strong quantitative skills.</li>
                <li className="text-[12px] lg:text-[11px] xl:text-[12px] font-medium leading-[20px]">Driven, hungry for knowledge, responsible, mature and independent.</li>
                <li className="text-[12px] lg:text-[11px] xl:text-[12px] font-medium leading-[20px]">Perform full life-cycle development.</li>
                
              </ul>
              </div>
              <div className="mt-[15px] xl:mt-[40px]">
              <h1 className="text-[12px] lg:text-[11px] xl:text-[12px] font-semibold leading-[20px]">Education</h1>
              <ul className="ml-[16px] mt-[10px] list-disc">
                <li className="text-[12px] lg:text-[11px] xl:text-[12px] font-medium leading-[20px]">BCA or relevant</li>
                </ul>
             </div>
  
             <button onClick={activeTab>=3 ? handleClose :  ()=> setActiveTab(activeTab + 1)}  className=" mt-[20px] sm:mt-[30px] lg:mt-[10px] xl:mt-[30px] w-[290px] sm:w-[360px] md:w-[360px]  lg:w-[435px] xl:w-[450px] h-[50px] sm:h-[55px] lg:h-[45px] xl:h-[55px] rounded-[10px] bg-[#0904F2] text-[16px] font-medium text-[white]">
             Send Your CV
            </button>
            
          </div>
        
      </>
      case 2:
        return <>
       
          <div className="ml-[10px] sm:ml-[27px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[27px] mt-[10px] sm:mt-[10px]  xl:mt-[15px]">
          <div className="flex lg:mt-[20px]">
            <h2 id="model-h2" className="text-[16px] sm:text-[20px] lg:text-[18px] xl:text-[20px]">Submit Your CV</h2>
            <button onClick={handleClose}  className="w-[80px] h-[20px]">
            <img className="ml-[145px] sm:ml-[185px] lg:ml-[260px] xl:ml-[275px]" src="/images/cancle.svg"></img>
          </button>
            
          </div>
          <form onSubmit={sendEmail}>
          <div className=" mt-[20px] sm:mt-[45px] lg:mt-[20px] xl:mt-[30px] 2xl:mt-[45px]">
            <p className="text-[14px] font-medium">Full Name</p>
            <input type="text" name="name" className="mt-[10px] px-[10px] focus:outline-none border-1 border-[#CDCDCD] w-[290px] sm:w-[360px] md:w-[360px]  lg:w-[420px] xl:w-[450px] h-[45px] sm:h-[50px] lg:h-[45px] xl:h-[50px] rounded-[8px]"></input>
          </div>
          <div className="mt-[20px] sm:mt-[30px] lg:mt-[20px] xl:mt-[30px]">
            <div  className="text-[14px] font-medium">
              Enter your Email/mobile number
            </div>
            <input   type="email" name="user_email"className="mt-[10px]  px-[10px] focus:outline-none border-1 border-[#CDCDCD] w-[290px] sm:w-[360px] md:w-[360px]  lg:w-[420px] xl:w-[450px] h-[45px] sm:h-[50px] lg:h-[45px] xl:h-[50px] rounded-[8px]"></input>
          </div>
          <div className="sm-[20px] mt-[30px] lg:mt-[20px] xl:mt-[30px]">
            <div  className="text-[14px] font-medium">Applying For?</div>
            <select type="select" name="select"
              className="select mt-[10px] relative  px-[10px] focus:outline-none border-1   border-[#CDCDCD] w-[290px] sm:w-[360px] md:w-[360px]  lg:w-[420px] xl:w-[450px] h-[45px] sm:h-[50px] lg:h-[45px] xl:h-[50px] rounded-[8px]"
              variant="static"
              Label="Select"
              
            >
              
              <option>Select</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
           <img className=" absolute mt-[-25px] sm:mt-[-30px] lg:mt-[-28px] xl:mt-[-30px] 2xl:mt-[-30px] ml-[260px] sm:ml-[325px] lg:ml-[385px] xl:ml-[415px]   " src="/images/downarray1.svg"></img>
          </div>
          <div id="model-h1" className="relative text-start mt-[20px] sm:mt-[30px] lg:mt-[20px] xl:mt-[30px]">
            Attach a CV
          </div>
          
          <button    className="mt-[20px] sm:mt-[30px] lg:mt-[20px] xl:mt-[30px] w-[290px] sm:w-[360px] md:w-[360px]  lg:w-[435px] xl:w-[450px] h-[50px] sm:h-[55px] lg:h-[50px] xl:h-[55px] rounded-[10px] bg-[#0904F2] text-[16px] font-medium text-[white]">
            Submit
          </button>
          </form>
        </div>
        
        </>;
      case 3:
        return <>
           <div className="ml-[10px] sm:ml-[27px] lg:ml-[30px] xl:ml-[40px] 2xl:ml-[27px] mt-[10px] sm:mt-[10px]  xl:mt-[15px]">
         
         <div className="">
         <div className=" grid place-items-center mt-[100px] sm:mt-[125px] md:mt-[120px] lg:mt-[105px] xl:mt-[140px] 2xl:mt-[145px] w-[290px] sm:w-[360px] md:w-[360px]  lg:w-[435px] xl:w-[450px]">
            <img src="/images/thanks right.svg"></img>
            <h1 className="text-[18px] sm:text-[22px] xl:text-[24px] font-semibold mt-[35px]">Thank you for applying!</h1>
            <p className=" text-center text-[13px] sm:text-[15px] xl:text-[16px] font-medium mt-[15px]">We’ll review your application and contact you for an interview within two weeks if you skills are a match.</p>
            <button onClick={activeTab>=3 ? handleClose :  ()=> setActiveTab(activeTab + 1)} className=" mt-[25px] sm:mt-[30px] lg:mt-[30px] xl:mt-[30px] w-[130px] sm:w-[150px]  h-[50px] sm:h-[60px] lg:h-[55px] xl:h-[60px] rounded-[10px] bg-[#0904F2] text-[18px] font-medium text-[white]">
         Okay
        </button>
          </div>
          </div>
         

         
        
      </div>
        </>;

    }
  };


  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setActiveTab2(1)
  };

  const [activeTab2, setActiveTab2] = useState(1);

  const HandleTabclick2 = () => {
    setActiveTab(activeTab + 1);
  };

  const renderTabContent2 = () => {
    switch (activeTab2) {
      case 1:
        return <>
        
          <div className="ml-[10px] sm:ml-[27px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[27px] mt-[10px] sm:mt-[10px]  xl:mt-[15px]">
            <div className=" lg:mt-[15px]">
              <h1 className="text-[20px] sm:text-[22px] lg:text-[18px] xl:text-[22px] 2xl:text-[24px] font-bold">Software Tester</h1>
              <div className="flex">
              <p className="text-[11px] lg:text-[12px] font-medium leading-[20px] mt-[3px] xl:mt-[5px]">Experience : 1 year or more    </p>
              <div className="mt-[6px] xl:mt-[8px] ml-[8px] w-[1px] xl:w-[1.5px] h-[15px] bg-[#CDCDCD]"></div>
              <div><p className="ml-[8px] text-[11px] lg:text-[12px] font-medium leading-[20px] mt-[3px] xl:mt-[5px]">Work : Remotely  </p></div>
              <div className="mt-[6px] xl:mt-[8px] ml-[8px] w-[1.5px] h-[15px] bg-[#CDCDCD]"></div>
              <div><p className="ml-[8px] text-[11px] lg:text-[12px] font-medium leading-[20px] mt-[3px] xl:mt-[5px]">  Time : Mon-Fri</p></div>
              </div>
            </div>
            <div className="w-[290px] sm:w-[360px] md:w-[360px]  lg:w-[420px] xl:w-[450px]  h-[1px]  mt-[15px] 2xl:mt-[25px] bg-[#E9E9E9]"></div>
             
             <div className="mt-[15px] xl:mt-[20px] w-[290px] sm:w-[360px] md:w-[360px]  lg:w-[435px] xl:w-[450px]">
              <h1 className="text-[12px] lg:text-[11px] xl:text-[12px] font-semibold leading-[20px]">Key Skills & Behaviours:</h1>
              <ul className="ml-[16px] mt-[10px] list-disc">
                <li className="text-[12px] lg:text-[11px] xl:text-[12px] font-medium leading-[20px]">Professional experience working with native iOS and Android and hybrid (Flutter) platforms.</li>
                <li className="text-[12px] lg:text-[11px] xl:text-[12px] font-medium leading-[20px]">Proficiency and familiarity with the following programming languages: Flutter(Dart), Java, JS, JSON. SQL Lite</li>
                <li className="text-[12px] lg:text-[11px] xl:text-[12px] font-medium leading-[20px]">Architect, build and maintain excellent in native iOS and Android & Flutter applications with clean code.</li>
                <li className="text-[12px] lg:text-[11px] xl:text-[12px] font-medium leading-[20px]">Familiarity with SwiftLint, iOS Lifecycle, API Handling, Unit Test and Integration Test for mobile applications.</li>
                <li className="text-[12px] lg:text-[11px] xl:text-[12px] font-medium leading-[20px]">Developing strong quantitative skills.</li>
                <li className="text-[12px] lg:text-[11px] xl:text-[12px] font-medium leading-[20px]">Driven, hungry for knowledge, responsible, mature and independent.</li>
                <li className="text-[12px] lg:text-[11px] xl:text-[12px] font-medium leading-[20px]">Perform full life-cycle development.</li>
                
              </ul>
              </div>
              <div className="mt-[15px] xl:mt-[40px]">
              <h1 className="text-[12px] lg:text-[11px] xl:text-[12px] font-semibold leading-[20px]">Education</h1>
              <ul className="ml-[16px] mt-[10px] list-disc">
                <li className="text-[12px] lg:text-[11px] xl:text-[12px] font-medium leading-[20px]">BCA or relevant</li>
                </ul>
             </div>
  
             <button onClick={activeTab2>=3 ? handleCloseModal :  ()=> setActiveTab2(activeTab2 + 1)}  className=" mt-[20px] sm:mt-[30px] lg:mt-[10px] xl:mt-[30px] w-[290px] sm:w-[360px] md:w-[360px]  lg:w-[435px] xl:w-[450px] h-[50px] sm:h-[55px] lg:h-[45px] xl:h-[55px] rounded-[10px] bg-[#0904F2] text-[16px] font-medium text-[white]">
             Send Your CV
            </button>
            
          </div>
        
      </>
      case 2:
        return <>
          <div className="ml-[10px] sm:ml-[27px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[27px] mt-[10px] sm:mt-[10px]  xl:mt-[15px]">
          <div className="flex lg:mt-[20px]">
            <h2 id="model-h2" className="text-[16px] sm:text-[20px] lg:text-[18px] xl:text-[20px]">Submit Your CV</h2>
            <button onClick={handleCloseModal}  className="w-[80px] h-[20px]">
            <img className="ml-[145px] sm:ml-[185px] lg:ml-[260px] xl:ml-[275px]" src="/images/cancle.svg"></img>
          </button>
            
          </div>
          <div className=" mt-[20px] sm:mt-[45px] lg:mt-[20px] xl:mt-[30px] 2xl:mt-[45px]">
            <p className="text-[14px] font-medium">Full Name</p>
            <input className="mt-[10px] px-[10px] focus:outline-none border-1 border-[#CDCDCD] w-[290px] sm:w-[360px] md:w-[360px]  lg:w-[420px] xl:w-[450px] h-[45px] sm:h-[50px] lg:h-[45px] xl:h-[50px] rounded-[8px]"></input>
          </div>
          <div className="mt-[20px] sm:mt-[30px] lg:mt-[20px] xl:mt-[30px]">
            <p className="text-[14px] font-medium">
              Enter your Email/mobile number
            </p>
            <input className="mt-[10px]  px-[10px] focus:outline-none border-1 border-[#CDCDCD] w-[290px] sm:w-[360px] md:w-[360px]  lg:w-[420px] xl:w-[450px] h-[45px] sm:h-[50px] lg:h-[45px] xl:h-[50px] rounded-[8px]"></input>
          </div>
          <div className="sm-[20px] mt-[30px] lg:mt-[20px] xl:mt-[30px]">
            <p className="text-[14px] font-medium">Applying For?</p>
            <select
              className="select mt-[10px] relative  px-[10px] focus:outline-none border-1   border-[#CDCDCD] w-[290px] sm:w-[360px] md:w-[360px]  lg:w-[420px] xl:w-[450px] h-[45px] sm:h-[50px] lg:h-[45px] xl:h-[50px] rounded-[8px]"
              variant="static"
              Label="Select"
              
            >
              
              <option>Select</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
           <img className=" absolute mt-[-25px] sm:mt-[-30px] lg:mt-[-28px] xl:mt-[-30px] 2xl:mt-[-30px] ml-[260px] sm:ml-[325px] lg:ml-[385px] xl:ml-[415px]   " src="/images/downarray1.svg"></img>
          </div>
          <h1 id="model-h1" className="relative text-start mt-[20px] sm:mt-[30px] lg:mt-[20px] xl:mt-[30px]">
            Attach a CV
          </h1>
          <button onClick={activeTab2>=3 ? handleCloseModal :  ()=> setActiveTab2(activeTab2 + 1)}  className="mt-[20px] sm:mt-[30px] lg:mt-[20px] xl:mt-[30px] w-[290px] sm:w-[360px] md:w-[360px]  lg:w-[435px] xl:w-[450px] h-[50px] sm:h-[55px] lg:h-[50px] xl:h-[55px] rounded-[10px] bg-[#0904F2] text-[16px] font-medium text-[white]">
            Submit
          </button>
          
        </div>
        </>;
      case 3:
        return <>
           <div className="ml-[10px] sm:ml-[27px] lg:ml-[30px] xl:ml-[40px] 2xl:ml-[27px] mt-[10px] sm:mt-[10px]  xl:mt-[15px]">
         
         <div className="">
         <div className=" grid place-items-center mt-[100px] sm:mt-[125px] md:mt-[120px] lg:mt-[105px] xl:mt-[140px] 2xl:mt-[145px] w-[290px] sm:w-[360px] md:w-[360px]  lg:w-[435px] xl:w-[450px]">
            <img src="/images/thanks right.svg"></img>
            <h1 className="text-[18px] sm:text-[22px] xl:text-[24px] font-semibold mt-[35px]">Thank you for applying!</h1>
            <p className=" text-center text-[13px] sm:text-[15px] xl:text-[16px] font-medium mt-[15px]">We’ll review your application and contact you for an interview within two weeks if you skills are a match.</p>
            <button onClick={activeTab2>=3 ? handleCloseModal :  ()=> setActiveTab2(activeTab2 + 1)} className=" mt-[25px] sm:mt-[30px] lg:mt-[30px] xl:mt-[30px] w-[130px] sm:w-[150px]  h-[50px] sm:h-[60px] lg:h-[55px] xl:h-[60px] rounded-[10px] bg-[#0904F2] text-[18px] font-medium text-[white]">
         Okay
        </button>
          </div>
          </div>   
      </div>
        </>;

    }
  }


  
  return (
    <div>
      <div className="w-full h-full grid place-items-center">
        <div className=" w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] ">
          <img
            src="/images/joinus profile.svg"
            className="hidden lg:block rounded-2xl sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] h-[250px] sm:h-[350px] 2xl:w-[1150px] mt-[45px]"
          ></img>
          <img
            src="/images/joinus responsive.svg"
            className="lg:hidden rounded-2xl w-[333px] sm:w-[580px] md:w-[750px] mt-[30px] "
          ></img>
          <div className="relative mt-[-50px] sm:mt-[-55px] md:mt-[-60px] ml-[10px] lg:mt-[-70px] xl:mt-[-90px] lg:ml-[30px]">
            <button className="w-[150px] h-[44px] lg:w-[170px] xl:w-[205px] lg:h-[50px] xl:h-[60px] rounded-[11px] text-[14px] xl:text-[16px] bg-[#0904F2] text-white ">
              Start Career With Us
            </button>
          </div>
        </div>

        {/* section2 start */}

        <div className="px-[20px] sm:px-[0px] md:flex w-[375px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] mb-[100px] lg:mb-[0px] mt-[60px] sm:mt-[80px] md:mt-[120px] lg:mt-[110px] xl:mt-[130px] 2xl:mt-[140px] ">
          <div className="w-[333px] sm:w-[580px] md:w-[370px] lg:w-[480px] xl:w-[530px] 2xl:w-[580px]  h-[320px] md:h-[400px]  ">
            <h1
              id="joinussectiion1-h1"
              className=" w-[300px] sm:w-full md:w-[350px] lg:w-[460px] xl:w-[500px] text-[24px] sm:text-[32px] xl:text-[34px] lg:mt-[30px]"
            >
              What makes MN Techgroup the right choice?
            </h1>
            <p
              id="joinussectiion1-p1"
              className="w-[336px] sm:w-full xl:w-[510px] mt-[24px]  text-[13px] xl:text-[14px]"
            >
              MN Techgroup promotes a culture of impacting users’ lives with our
              innovations. And we are looking for people who share, understand
              our vision and contribute to it. Our company facilitates an
              environment with open communication, togetherness and equal
              opportunities.
            </p>
            <p
              id="joinussectiion1-p2"
              className="xl:w-[510px] mt-[20px] text-[13px] xl:text-[14px]"
            >
              {" "}
              We’re passionate about constantly expanding and forever keen to
              find dynamic talent. Join us to level up not just the company’s
              benchmarks but your own as well.
            </p>
           
          </div>
          <div className="grid place-items-center ">
            <div className="w-[333px] sm:w-[450px] md:w-[350px] lg:w-[410px] xl:w-[410px] 2xl:w-[420px] h-[330px] sm:h-[420px] md:h-[400px] lg:h-[420px] md:ml-[60px] lg:ml-[95px] xl:ml-[130px] 2xl:ml-[145px] mt-[60px] sm:mt-[0px] ">
              <div className="grid  grid-cols-2 gap-x-[20px] gap-y-[20px] sm:gap-x-[20px] sm:gap-y-[30px] md:gap-y-[20px] lg:gap-x-[30px] lg:gap-y-[30px] mt-[10px]">
                <div
                  id="joinussection2-boxp1"
                  className="w-[156px] h-[147px] sm:w-[190px] sm:h-[180px] md:w-[160px] md:h-[170px] lg:w-[190px] lg:h-[180px] rounded-[14px] text-[15px] sm:text-[16px] md:text-[15px] xl:text-[16px] bg-[#FAFAFF]"
                >
                  <div className="grid place-items-center mt-[50px] sm:mt-[60px]">
                  <img src="/images/Togethernes.svg"></img>
                  <p className="mt-[20px]">
                    Togethernes
                  </p>
                  </div>
                </div>
                <div
                  id="joinussection2-boxp1"
                  className="w-[156px] h-[147px] sm:w-[190px] sm:h-[180px] md:w-[160px] md:h-[170px] lg:w-[190px] lg:h-[180px] rounded-[14px]   text-[15px] sm:text-[16px] md:text-[15px] xl:text-[16px] bg-[#FAFAFF]"
                >
                  <div className="grid place-items-center mt-[50px] sm:mt-[60px]">
                  <img src="/images/Equal Opportunity.svg"></img>
                  <p className="mt-[20px]">
                    Equal Opportunities
                  </p>
                  </div>
                </div>
                <div
                  id="joinussection2-boxp1"
                  className="w-[156px] h-[147px] sm:w-[190px] sm:h-[180px] md:w-[160px] md:h-[170px] lg:w-[190px] lg:h-[180px] rounded-[14px]   text-[15px] sm:text-[16px] md:text-[15px] xl:text-[16px]  bg-[#FAFAFF]"
                >
                  <div className="grid place-items-center mt-[50px] sm:mt-[60px]">
                  <img src="/images/Work Life Balance.svg"></img>
                  <p className="mt-[20px]">
                    Work Life Balance
                  </p>
                  </div>
                </div>
                <div
                  id="joinussection2-boxp1"
                  className="w-[156px] h-[147px] sm:w-[190px] sm:h-[180px] md:w-[160px] md:h-[170px] lg:w-[190px] lg:h-[180px] rounded-[14px]  text-[15px] sm:text-[16px] md:text-[15px] xl:text-[16px]  bg-[#FAFAFF]"
                >
                  <div className="grid place-items-center mt-[50px] sm:mt-[60px]">
                  <img src="/images/Career Growth.svg"></img>
                  <p className="mt-[20px]">
                    Career Growth
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section3 start */}

        <div className="px-[20px] w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] mb-[90px] sm:mb-[30px] lg:mb-[0px] 2xl:mb-[16px]  sm:mt-[20px] md:mt-[50px] lg:mt-[80px] xl:mt-[80px] 2xl:mt-[80px] ">
          <div className="w-full grid place-items-center">
            <div className=" text-center w-[310px] sm:w-[400px] md:w-full ">
              <p id="joinussection3-p1" className="">
              Explore New Openings
              </p>

              <h1
                id="joinussection3-h1"
                className=" mt-[5px] sm:mt-[10px] text-[24px] sm:text-[38px] md:text-[40px] xl:text-[45px] leading-normal sm:leading-[60px]"
              >
                Right place to grow your career life
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[20px] lg:gap-x-[40px] xl:gap-x-[40px] mt-[56px] place-items-center ">
            <div
              id="joinussection3-box"
              className="px-[20px] py-[17px] sm:px-[40px]  sm:py-[30px] lg:p-[0px] lg:px-[25px] xl:px-[30px]  2xl:px-[50px] lg:py-[20px] xl:py-[30px] w-[333px] sm:w-[440px] md:w-[480px] lg:w-[465px] h-[207px] sm:h-full xl:w-[505px]  2xl:w-[550px] "
            >
              <div className=" ">
          <div className=" ">
            <h1 className="text-[24px] font-bold">Mobile App Developer</h1>
            <div className="flex mt-[0px] sm:mt-[5px]">
            <p className="text-[9px] md:text-[12px] font-medium leading-[20px] mt-[5px]">Experience : 1 year or more    </p>
            <div className=" mt-[8px] ml-[8px] w-[1px] xl:w-[1.5px] h-[15px] bg-[#CDCDCD]"></div>
            <div><p className="ml-[8px] text-[9px] sm:text-[12px] font-medium leading-[20px] mt-[5px]">Work : Remotely  </p></div>
            <div className=" mt-[8px] ml-[8px] w-[1.5px] h-[15px] bg-[#CDCDCD]"></div>
            <div><p className="ml-[8px] text-[9px] sm:text-[12px] font-medium leading-[20px] mt-[5px]">  Time : Mon-Fri</p></div>
            </div>
          </div>
          <div className="w-[290px] sm:w-[360px] md:w-[400px]  lg:w-[420px] xl:w-[450px]  h-[1px] mt-[5px] sm:mt-[20px] bg-[#E9E9E9]"></div>
           
           <div className="mt-[5px] sm:mt-[20px] w-[290px] sm:w-[360px] md:w-[360px]  lg:w-[435px] xl:w-[450px]">
            <h1 className="hidden sm:block text-[12px] font-semibold leading-[20px]">Key Skills & Behaviours:</h1>
            <ul className="ml-[16px] mt-[10px] list-disc">
              <li className="text-[9px] sm:text-[12px] font-medium leading-[20px]">Professional experience working with native iOS and Android and hybrid (Flutter) platforms. <button onClick={handleClickOpen} className="text-[#0904F2]"> Read More</button></li>
             
              
            </ul>
            </div>
          
        </div>
              <button
                onClick={handleClickOpen}
                className="mt-[20px] sm:mt-[35px] xl:mt-[30px] w-[86px] sm:w-[98px] h-[36px] sm:h-[45px] lg:w-[90px] lg:h-[40px] xl:w-[98px] xl:h-[45px] text-[12px] sm:text-[14px] lg:text-[13px] xl:text-[14px] rounded-[8px]  bg-[#0904F2] text-[#FFF]"
              >
                Apply
              </button>
              <Dialog
                open={open}
                onClose={handleClose}
                >
                
                  {/* main div */}

                  <div className=" bg-white rounded-lg shadow-lg sm:p-6  lg:p-0 2xl:p-6 h-[460px] sm:h-[585px] md:h-[80%] lg:h-[470px] xl:h-[540px] 2xl:h-[606px] w-[310px] sm:w-[465px] lg:w-[490px] xl:w-[530px] 2xl:w-[554px]">
                    {renderTabContent()}
                   
                  </div>

                  {/* main div */}

                 </Dialog>


            </div>
            <div
              id="joinussection3-box"
              className="px-[20px] py-[17px] sm:px-[40px]  sm:py-[30px] lg:p-[0px] lg:px-[25px] xl:px-[30px]  2xl:px-[50px] lg:py-[20px] xl:py-[30px] w-[333px] sm:w-[440px] md:w-[480px] lg:w-[465px] h-[207px] sm:h-full xl:w-[505px]  2xl:w-[550px] "
            >
             <div className=" ">
          <div className=" ">
            <h1 className="text-[24px] font-bold">Software Tester</h1>
            <div className="flex mt-[0px] sm:mt-[5px]">
            <p className="text-[9px] md:text-[12px] font-medium leading-[20px] mt-[5px]">Experience : 1 year or more    </p>
            <div className=" mt-[8px] ml-[8px] w-[1px] xl:w-[1.5px] h-[15px] bg-[#CDCDCD]"></div>
            <div><p className="ml-[8px] text-[9px] sm:text-[12px] font-medium leading-[20px] mt-[5px]">Work : Remotely  </p></div>
            <div className=" mt-[8px] ml-[8px] w-[1.5px] h-[15px] bg-[#CDCDCD]"></div>
            <div><p className="ml-[8px] text-[9px] sm:text-[12px] font-medium leading-[20px] mt-[5px]">  Time : Mon-Fri</p></div>
            </div>
          </div>
          <div className="w-[290px] sm:w-[360px] md:w-[400px]  lg:w-[420px] xl:w-[450px]  h-[1px] mt-[5px] sm:mt-[20px] bg-[#E9E9E9]"></div>
           
           <div className="mt-[5px] sm:mt-[20px] w-[290px] sm:w-[360px] md:w-[360px]  lg:w-[435px] xl:w-[450px]">
            <h1 className="hidden sm:block text-[12px] font-semibold leading-[20px]">Key Skills & Behaviours:</h1>
            <ul className="ml-[16px] mt-[10px] list-disc">
              <li className="text-[9px] sm:text-[12px] font-medium leading-[20px]">Executes test cases under varying circumstances </li>
              <li className="text-[9px] sm:text-[12px] font-medium leading-[20px]">Documents and evaluates test results. <button onClick={handleClickOpen} className="text-[#0904F2]"> Read More</button></li>
              
            </ul>
            </div>
          
        </div>
              <button
                onClick={handleClickOpenModal}
                className="mt-[20px] sm:mt-[35px] xl:mt-[30px] w-[86px] sm:w-[98px] h-[36px] sm:h-[45px] lg:w-[90px] lg:h-[40px] xl:w-[98px] xl:h-[45px] text-[12px] sm:text-[14px] lg:text-[13px] xl:text-[14px] rounded-[8px]  bg-[#0904F2] text-[#FFF]"
              >
                Apply
              </button>

              <Dialog
                open={openModal}
                onClose={handleCloseModal}
                >
                
                  {/* main div */}

                  <div className=" bg-white rounded-lg shadow-lg sm:p-6  lg:p-0 2xl:p-6 h-[460px] sm:h-[585px] md:h-[80%] lg:h-[470px] xl:h-[540px] 2xl:h-[606px] w-[310px] sm:w-[465px] lg:w-[490px] xl:w-[530px] 2xl:w-[554px]">
                    {renderTabContent2()}
                   
                  </div>

                  {/* main div */}

                 </Dialog>

              
            </div>
            
            
          </div>
        </div>
      </div>

    </div>
  );
}

export default Joinus;


