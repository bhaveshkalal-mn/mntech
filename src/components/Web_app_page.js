import React from "react";
import { Link } from "react-router-dom";

function Web_app_page() {
  return (
    <div>
      <div className="w-full h-full grid place-items-center">
        <div className=" md:flex  w-[333px] sm:w-[580px] md:w-[750px]  lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] mt-[30px] md:mt-[47px]  ">
          <div className="hidden sm:block w-[539px] md:w-[450px] xl:w-[500px] 2xl:w-[539px] h-[400px] sm:h-[370px]  md:h-[360px] py-[10px]">
            <img
              className=""
              src="/images/webappdevelopment/webappprofile.svg"
            ></img>
          </div>
          <div className="sm:hidden   py-[10px]">
            <img
              className=""
              src="/images/webappdevelopment/responsivewebappprofile.svg"
            ></img>
          </div>
          <div className=" w-[333px] sm:text-center md:text-start sm:w-[580px] md:w-[400px] lg:w-[525px] xl:w-[550px] 2xl:w-[525px] h-[340px] sm:h-[330px] md:h-[360px] md:ml-[30px] lg:ml-[80px] xl:ml-[60px] 2xl:ml-[98px] mt-[30px] sm:mt-[-20px] md:mt-[1px] ">
            <div>
              <p1 className="text-[14px] font-bold">
                Custom Software Development
              </p1>
              <h1 className="mt-[14px]   text-[24px] sm:text-[30px] md:text-[30px] lg:text-[40px] xl:text-[45px] font-bold leading-normal md:leading-[50px] lg:leading-[60px]">
                Web Application Development Services
              </h1>
              <p className="   md:w-[400px] xl:w-[445px] text-[14px] text-[#333] font-medium leading-[20px] mt-[20px]">
                Our web application development services offer cutting-edge
                solutions tailored to your unique business needs, ensuring
                seamless user experiences and robust functionality.
              </p>
              <Link to="/service/webapp/customsoftwaredevelopment/help">
              <button className="w-[150px] h-[55px] bg-[#0904F2] mt-[40px] sm:mt-[30px] rounded-[10px]">
                <p id="experiencepagesection1-btn">Any Help?</p>
              </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] mt-[0px] bg-[#EFEEEE]"></div>

        {/* section2 start */}

        <div className=" md:flex  w-[333px] sm:w-[580px] md:w-[750px]  lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] mt-[30px] md:mt-[63px]  ">
          <div>
            <h1 className="text-[24px] font-bold">
              Services we offer for web development
            </h1>
            <p className="text-[13px] xl:text-[15px] 2xl:text-[16px] font-medium mt-[35px]">
              Programming languages are the foundation of web development,
              allowing developers to build websites and web applications. They
              enable tasks like creating website structure (HTML), styling
              (CSS), interactivity (JavaScript), server-side logic (PHP, Python,
              Ruby), database management (SQL), and more, facilitating the
              entire web development process.
            </p>
            <div className=" mt-[52px] border-[1px] border-[#0904F2] rounded-[14px] lg:h-auto xl:h-auto">
              <div className="grid  md:grid-cols-2 lg:grid-cols-2 gap-x-[35px] md:gap-x-[80px] lg:gap-x-[60px] xl:gap-x-[50px] 2xl:gap-x-[100px] gap-y-[30px] sm:gap-y-[50px] px-[20px]  sm:px-[10px] md:px-[25px] lg:px-[30px] xl:px-[35px] py-[20px] sm:py-[55px]  ">
                <div>
                  <div className="flex">
                    <img src="/images/webappdevelopment/webappservice-1.svg"></img>
                    <h1 className="text-[16px] sm:text-[14px] ml-[20px] md:ml-[35px] font-bold">
                      Custom Web Application Development
                    </h1>
                  </div>
                  <p className="w-[238px] sm:w-[500px]  md:w-[240px] lg:w-[345px] xl:w-[385px] ml-[45px] md:ml-[60px] mt-[17px] text-[12px] sm:text-[12px] lg:text-[11px] xl:text-[12px] font-medium">
                    Unlock your business's full potential with our custom web
                    application development services. We build bespoke web
                    solutions tailored to your specific needs and goals. Our
                    expert team designs, develops, and deploys scalable,
                    user-friendly applications that streamline processes,
                    enhance customer experiences, and drive growth. From concept
                    to delivery, we're dedicated to bringing your vision to life
                    in the digital world
                  </p>
                </div>
                

                <div>
                  <div className="flex">
                    <img src="/images/webappdevelopment/webappservice-2.svg"></img>
                    <h1 className="text-[16px] sm:text-[14px] ml-[20px] md:ml-[35px] font-bold">
                      Web Development and Maintenance
                    </h1>
                  </div>
                  <p className="w-[238px] sm:w-[500px] md:w-[240px] lg:w-[345px] xl:w-[385px] ml-[45px] md:ml-[60px] mt-[17px]  text-[12px] sm:text-[12px] lg:text-[11px] xl:text-[12px] font-medium">
                    Elevate your online presence with our comprehensive web
                    development and maintenance services. Our team specializes
                    in creating cutting-edge websites and ensuring they stay
                    secure and up to date. We handle everything from initial
                    design and development to ongoing maintenance, updates, and
                    performance optimization. Focus on your business while we
                    take care of your digital assets
                  </p>
                </div>
                
                <div>
                  <div className="flex">
                    <img src="/images/webappdevelopment/webappservice-3.svg"></img>
                    <h1 className="text-[16px] sm:text-[14px] ml-[20px] md:ml-[35px] font-bold">
                      Portal Application Development
                    </h1>
                  </div>
                  <p className="w-[238px] sm:w-[500px] md:w-[240px] lg:w-[345px] xl:w-[385px] ml-[45px] md:ml-[60px] mt-[17px]  text-[12px] sm:text-[12px] lg:text-[11px] xl:text-[12px] font-medium">
                    Experience the power of streamlined information management
                    and user engagement with our portal application development
                    services. We create robust, user-friendly portal solutions
                    tailored to your business needs. Our expert team designs,
                    develops, and deploys secure and scalable portal
                    applications, providing seamless access to data and
                    services. Enhance collaboration, efficiency, and user
                    satisfaction with our tailored portal solutions.
                  </p>
                </div>
               

                <div>
                  <div className="flex">
                    <img src="/images/webappdevelopment/webappservice-4.svg"></img>
                    <h1 className="text-[16px] sm:text-[14px] ml-[20px] md:ml-[35px] font-bold">
                      API Development
                    </h1>
                  </div>
                  <p className="w-[238px] sm:w-[500px] md:w-[240px] lg:w-[345px] xl:w-[385px] ml-[45px] md:ml-[60px] mt-[17px]  text-[12px] sm:text-[12px] lg:text-[11px] xl:text-[12px] font-medium">
                    Unlock new possibilities with our API development expertise.
                    We specialize in creating robust and efficient APIs that
                    facilitate seamless data exchange and integration across
                    applications. Our team ensures secure, scalable, and
                    well-documented APIs that empower your software to
                    communicate and interact effectively with external systems,
                    enabling innovation and connectivity in the digital world.
                  </p>
                </div>
                

                <div>
                  <div className="flex">
                    <img src="/images/webappdevelopment/webappservice-5.svg"></img>
                    <h1 className="text-[16px] sm:text-[14px] ml-[20px] md:ml-[35px] font-bold">
                      E-commerce Development
                    </h1>
                  </div>
                  <p className="w-[238px] sm:w-[500px] md:w-[240px] lg:w-[345px] xl:w-[385px] ml-[45px] md:ml-[60px] mt-[17px]  text-[12px] sm:text-[12px] lg:text-[11px] xl:text-[12px] font-medium">
                    Revolutionize your online business with our e-commerce
                    solutions. We offer end-to-end services to create, optimize,
                    and manage your online store. Our expertise spans from
                    custom website development and user-friendly design to
                    secure payment processing and SEO strategies. Elevate your
                    e-commerce game and boost sales with our comprehensive
                    e-commerce solutions.
                  </p>
                </div>
                

                <div>
                  <div className="flex">
                    <img src="/images/webappdevelopment/webappservice-6.svg"></img>
                    <h1 className="text-[16px] sm:text-[14px] ml-[20px] md:ml-[35px] font-bold">
                      Saas Product Development
                    </h1>
                  </div>
                  <p className="w-[238px] sm:w-[500px] md:w-[240px] lg:w-[345px] xl:w-[385px] ml-[45px] md:ml-[60px] mt-[17px]  text-[12px] sm:text-[12px] lg:text-[11px] xl:text-[12px] font-medium">
                    Our SaaS product development services empower businesses to
                    innovate and digitize by crafting cloud-based software
                    solutions. We design, develop, and deploy scalable SaaS
                    products that cater to your unique needs, enabling you to
                    reach a global audience. Our expertise ensures seamless user
                    experiences, data security, and continuous updates, allowing
                    you to focus on growing your business while we handle the
                    technology.
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* section3 start */}

        <div className=" mt-[70px] sm:mt-[70px] md:mt-[100px] lg:mt-[100px]  w-[333px] sm:w-[580px]  md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px]">
          <h1 className="text-center text-[24px] sm:text-[30px] md:text-[34px] font-bold lg:leading-[60px]">
          Our process for web application development
          </h1>
          <div className="grid mt-[80px] md:mt-[100px] sm:grid-cols-3 lg:grid-cols-5 sm:gap-4 sm:gap-y-12 md:gap-y-16 lg:gap-y-0 md:gap-24 lg:gap-[80px] xl:gap-[90px] 2xl:gap-[100px] ">
            <div className="w-[333px] sm:w-[179px] sm:h-[150px] ">
              <div className="grid place-items-center sm:place-items-start">
                <img src="/images/Research.svg"></img>
                <div className="mt-[35px]">
                  <h1 className="text-[16px] xl:text-[18px] font-semibold">
                    1. Research
                  </h1>
                </div>
                <p className="text-[14px] mt-[25px]">
                  Gathering Information from all around
                </p>
              </div>
            </div>
            <div className=" w-[333px] sm:w-[179px] sm:h-[150px] mt-[40px] sm:mt-[0px] ">
              <div className="grid place-items-center sm:place-items-start">
                <img src="/images/Plan.svg"></img>
                <div className="mt-[35px]">
                  <h1 className="text-[16px] xl:text-[18px] font-semibold">
                    2. Plan
                  </h1>
                </div>
                <p className="text-[14px] mt-[25px]">
                  Effective strategies for favorable outcomes
                </p>
              </div>
            </div>
            <div className="w-[333px] sm:w-[179px] sm:h-[150px] mt-[40px] sm:mt-[0px] ">
              <div className="grid place-items-center sm:place-items-start">
                <img src="/images/Implement.svg"></img>
                <div className="mt-[35px]">
                  <h1 className="text-[16px] xl:text-[18px] font-semibold">
                    3. Implement
                  </h1>
                </div>
                <p className="text-[14px] mt-[25px]">
                  Timely execution as per the plan
                </p>
              </div>
            </div>
            <div className="w-[333px] sm:w-[179px] sm:h-[150px] mt-[40px] sm:mt-[0px]">
              <div className="grid place-items-center sm:place-items-start">
                <img src="/images/Test and Deliver.svg"></img>
                <div className="mt-[35px]">
                  <h1 className="text-[16px] xl:text-[18px] font-semibold">
                    4. Test and Deliver
                  </h1>
                </div>
                <p className="text-[14px] mt-[25px]">
                  Making a successful launch
                </p>
              </div>
            </div>
            <div className="w-[333px] sm:w-[179px] sm:h-[150px] mt-[40px] sm:mt-[0px]">
              <div className="grid place-items-center sm:place-items-start">
                <img src="/images/Optimize.svg"></img>
                <div className="mt-[35px]">
                  <h1 className="text-[16px] xl:text-[18px] font-semibold">
                    5. Optimize
                  </h1>
                </div>
                <p className="w-[137px] text-[14px] mt-[25px]">
                  Steadyily climbing up the Hill
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* section4 start */}

        <div className=" mt-[70px] sm:mt-[70px] md:mt-[100px] lg:mt-[100px]  w-[333px] sm:w-[580px]  md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px]">
          <h1 className="text-center text-[24px] sm:text-[34px] font-bold leading-[40px] lg:leading-[60px]">
            Why choose us?
          </h1>
          <div className="mt-[40px] sm:mt-[59px] ">
            <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[30px] md:gap-x-[25px] lg:gap-x-[15px] xl:gap-x-[10px] 2xl:gap-x-[38px] gap-y-[20px] sm:gap-y-[40px] md:gap-y-[25px] lg:gap-y-[15px] xl:gap-y-[7px] 2xl:gap-y-[38px]">
              <div className="w-[333px] sm:w-[259px] md:w-[230px] xl:w-[259px] h-[260px] sm:h-[270px] xl:h-[285px] px-[25px] md:px-[20px] xl:px-[25px] py-[25px] md:py-[20px] xl:py-[25px] rounded-[10px] bg-[#F9F9FF]">
                <img src="/images/webappdevelopment/webappwhychooseus-1.svg"></img>
                <h1 className="text-[14px] mt-[29px] font-bold">Expertise:</h1>
                <p className="w-[276px] sm:w-[211px] md:w-[190px] xl:w-[211px] text-[12px] md:text-[11px] xl:text-[12px] mt-[22px] font-normal ">
                  {" "}
                  Our team comprises highly skilled and experienced web
                  developers who stay at the forefront of industry trends and
                  technologies. We bring a wealth of knowledge and creativity to
                  every project.
                </p>
              </div>

              <div className="w-[333px] sm:w-[259px] md:w-[230px] xl:w-[259px] h-[270px] xl:h-[285px] px-[25px] md:px-[20px] xl:px-[25px] py-[25px] md:py-[20px] xl:py-[25px] rounded-[10px] bg-[#F9F9FF]">
                <img src="/images/webappdevelopment/webappwhychooseus-2.svg"></img>
                <h1 className="text-[14px] mt-[29px] font-bold">
                  Customization
                </h1>
                <p className="w-[276px] sm:w-[211px] md:w-[190px] xl:w-[211px] text-[12px] md:text-[11px] xl:text-[12px] mt-[22px] font-normal ">
                  {" "}
                  We understand that every business is unique. We tailor our web
                  development services to meet your specific needs and
                  objectives, ensuring a solution that aligns perfectly with
                  your vision.
                </p>
              </div>

              <div className="w-[333px] sm:w-[259px] md:w-[230px] xl:w-[259px] h-[270px] xl:h-[285px] px-[25px] md:px-[20px] xl:px-[25px] py-[25px] md:py-[20px] xl:py-[25px] rounded-[10px] bg-[#F9F9FF]">
                <img src="/images/webappdevelopment/webappwhychooseus-3.svg"></img>
                <h1 className="text-[14px] mt-[29px] font-bold">
                  Quality Assurance
                </h1>
                <p className="w-[276px] sm:w-[211px] md:w-[190px] xl:w-[211px] text-[12px] md:text-[11px] xl:text-[12px] mt-[22px] font-normal ">
                  {" "}
                  Our commitment to delivering top-notch quality is unwavering.
                  We adhere to rigorous quality assurance processes to ensure
                  bug-free, reliable, and high-performing web applications.
                </p>
              </div>

              <div className="w-[333px] sm:w-[259px] md:w-[230px] xl:w-[259px] h-[270px] xl:h-[285px] px-[25px] md:px-[20px] xl:px-[25px] py-[25px] md:py-[20px] xl:py-[25px] rounded-[10px] bg-[#F9F9FF]">
                <img src="/images/webappdevelopment/webappwhychooseus-4.svg"></img>
                <h1 className="text-[14px] mt-[29px] font-bold">
                  User-Centric Approach
                </h1>
                <p className="w-[276px] sm:w-[211px] md:w-[190px] xl:w-[211px] text-[12px] md:text-[11px] xl:text-[12px] mt-[22px] font-normal ">
                  {" "}
                  User experience is at the heart of what we do. We prioritize
                  creating intuitive, visually appealing, and responsive web
                  interfaces that delight your audience.
                </p>
              </div>

              <div className="w-[333px] sm:w-[259px] md:w-[230px] xl:w-[259px] h-[270px] xl:h-[285px] px-[25px] md:px-[20px] xl:px-[25px] py-[25px] md:py-[20px] xl:py-[25px] rounded-[10px] bg-[#F9F9FF]">
                <img src="/images/webappdevelopment/webappwhychooseus-5.svg"></img>
                <h1 className="text-[14px] mt-[29px] font-bold">Scalability</h1>
                <p className="w-[276px] sm:w-[211px] md:w-[190px] xl:w-[211px] text-[12px] md:text-[11px] xl:text-[12px] mt-[22px] font-normal ">
                  {" "}
                  Our web applications are designed to grow with your business.
                  We build scalable architectures that can handle increased
                  traffic and evolving requirements.
                </p>
              </div>

              <div className="w-[333px] sm:w-[259px] md:w-[230px] xl:w-[259px] h-[270px] xl:h-[285px] px-[25px] md:px-[20px] xl:px-[25px] py-[25px] md:py-[20px] xl:py-[25px] rounded-[10px] bg-[#F9F9FF]">
                <img src="/images/webappdevelopment/webappwhychooseus-6.svg"></img>
                <h1 className="text-[14px] mt-[29px] font-bold">Security</h1>
                <p className="w-[276px] sm:w-[211px] md:w-[190px] xl:w-[211px] text-[12px] md:text-[11px] xl:text-[12px] mt-[22px] font-normal ">
                  {" "}
                  We take data security seriously. Our web applications are
                  fortified with robust security measures to protect against
                  threats, vulnerabilities, and data breaches.
                </p>
              </div>

              <div className="w-[333px] sm:w-[259px] md:w-[230px] xl:w-[259px] h-[270px] xl:h-[285px] px-[25px] md:px-[20px] xl:px-[25px] py-[25px] md:py-[20px] xl:py-[25px] rounded-[10px] bg-[#F9F9FF]">
                <img src="/images/webappdevelopment/webappwhychooseus-7.svg"></img>
                <h1 className="text-[14px] mt-[29px] font-bold">
                  Ongoing Support
                </h1>
                <p className="w-[276px] sm:w-[211px] md:w-[190px] xl:w-[211px] text-[12px] md:text-[11px] xl:text-[12px] mt-[22px] font-normal ">
                  {" "}
                  We offer post-launch support and maintenance to keep your web
                  application running smoothly and up to date, allowing you to
                  focus on your core business activities.
                </p>
              </div>

              <div className="w-[333px] sm:w-[259px] md:w-[230px] xl:w-[259px] h-[270px] xl:h-[285px] px-[25px] md:px-[20px] xl:px-[25px] py-[25px] md:py-[20px] xl:py-[25px] rounded-[10px] bg-[#F9F9FF]">
                <img src="/images/webappdevelopment/webappwhychooseus-8.svg"></img>
                <h1 className="text-[14px] mt-[29px] font-bold">
                  Cost-Efficiency
                </h1>
                <p className="w-[276px] sm:w-[211px] md:w-[190px] xl:w-[211px] text-[12px] md:text-[11px] xl:text-[12px] mt-[22px] font-normal ">
                  {" "}
                  Our development process is optimized for efficiency, helping
                  you achieve your goals within budget without compromising
                  quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* section5 start */}

        <div className="sm:text-center md:text-start md:flex  w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] mt-[30px] sm:mt-[40px] md:mt-[65px] lg:mt-[100px] xl:mt-[120px] 2xl:mt-[105px] xl:mb-[10px] ">
          <div className=" md:w-[400px] lg:w-[533px] h-[330px] sm:h-[397px]  mr-[60px] xl:mr-[125px] 2xl:mr-[220px]">
            <h1 className="font-bold w-[333px] sm:w-auto md:w-[370px] xl:w-[430px] text-[24px] sm:text-[35px] md:text-[35px] lg:text-[38px] xl:text-[45px] leading-normal sm:leading-[55px] xl:leading-[60px]">
              Our Best Tech for Web Development
            </h1>
            <p className=" hidden sm:block w-[333px] sm:w-auto md:w-[400px] lg:w-[520px] 2xl:w-[613px] text-[14px] md:text-[12px] 2xl:text-[14px] font-medium mt-[20px] lg:mt-[55px]">
            The ideal tool varies based on your design workflow, project needs, and individual choices
            </p>
            <div className=" place-items-center md:place-items-start grid  grid-cols-3 sm:grid-cols-4 gap-y-[30px] sm:gap-y-[60px] md:gap-y-[40px]  lg:gap-y-[50px] xl:gap-y-[60px] gap-x-[20px] lg:gap-x-[40px] xl:gap-x-[60px] 2xl:gap-x-[80px] w-[333px] sm:w-[550px] md:w-[420px] lg:w-[550px] xl:w-[620px] mt-[40px] lg:mt-[55px]">
              <div className="w-[103px] h-[30px]">
                <img src="/images/java.svg"></img>
              </div>
              <div className="w-[103px] h-[30px] ml-[20px] sm:ml-[0px]">
                <img src="/images/php.svg"></img>
              </div>
              <div className="w-[103px] h-[30px] ml-[50px] sm:ml-[0px]">
                <img src="/images/node.svg"></img>
              </div>
              <div className="w-[103px] h-[30px]">
                <img src="/images/pythone.svg"></img>
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

export default Web_app_page;
