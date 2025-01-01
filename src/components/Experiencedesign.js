import React from "react";
import { Link } from "react-router-dom";
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

function Experiencedesign() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div>
      <div className="w-full h-full grid place-items-center">
        <div className=" md:flex  w-[333px] sm:w-[580px] md:w-[750px]  lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] mt-[30px] md:mt-[47px]  ">
          <div className="hidden sm:block w-[539px] md:w-[450px] xl:w-[500px] 2xl:w-[539px] h-[400px] md:h-[500px] py-[10px]">
            <img className="" src="/images/webdesignprofile.svg"></img>
          </div>
          <div className="sm:hidden   py-[10px]">
            <img
              className=""
              src="/images/responsivewebdesignprofile.svg"
            ></img>
          </div>
          <div className=" w-[333px] sm:text-center md:text-start sm:w-[580px] md:w-[460px] lg:w-[430px] h-[430px] sm:h-[385px] md:h-[500px] md:ml-[50px] lg:ml-[80px] xl:ml-[120px] 2xl:ml-[170px] mt-[30px] sm:mt-[-20px] md:mt-[1px] ">
            <div>
              <p1 id="experiencepagesection1-p1">User Experience Design</p1>
              <h1
                id="experiencepagesection1-h1"
                className="mt-[14px] text-[24px] sm:text-[30px] md:text-[35px] lg:text-[45px] leading-normal md:leading-[50px] lg:leading-[60px]"
              >
                Mobile App User Interface & Experience Design
              </h1>
              <p id="experiencepagesection1-p2" className="mt-[20px]">
                User Interface (UI) design refers to the process of creating the
                visual layout and interactive elements of a digital product or
                application that users interact with. It encompasses the design
                of all the visual and interactive elements that users see and
                use on a screen, such as buttons, menus, forms, icons,
                typography, colors, and more.
              </p>
              <Link to="/service/design/userexperiencedesign/help">
                <button className="w-[150px] h-[55px] bg-[#0904F2] mt-[40px] rounded-[10px]">
                  <p id="experiencepagesection1-btn">Any Help?</p>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] mt-[0px] bg-[#EFEEEE]"></div>

        {/* section2 start */}

        <div className="   w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] mt-[20px] sm:mt-[40px] md:mt-[65px] lg:mt-[65px] ">
          <h1
            id="experiencepagesection2-h1"
            className="leading-normal md:leading-[60px]"
          >
            Our preferred approach to User Experience Design.
          </h1>
          <div className="mt-[20px] sm:mt-[50px] sm:grid grid-cols-3   sm:gap-x-5 md:gap-x-11 lg:gap-x-10">
            <div className=" h-[307px] sm:h-[230px] md:h-[280px] lg:h-[307px] bg-[#FAFAFF] rounded-[14px] p-[45px] px-[45px] sm:p-[0px] sm:px-[0px] md:p-[30px] md:px-[35px] lg:p-[40px] lg:px-[45px]">
              <p id="experiencepagesection2-number">01</p>
              <p id="experiencepagesection2-p1" className="mt-[23px]">
                Discover
              </p>
              <p id="experiencepagesection2-p2" className="w-[100px] mt-[14px]">
                User Research User Surveys User Personas User Stories
              </p>
            </div>
            <div className="mt-[20px] sm:mt-[0px]  h-[307px] sm:h-[230px] md:h-[280px] lg:h-[307px] bg-[#FAFAFF] rounded-[14px] p-[45px] px-[45px] sm:p-[0px] sm:px-[0px] md:p-[30px] md:px-[35px] lg:p-[40px] lg:px-[45px]">
              <p id="experiencepagesection2-number">02</p>
              <p id="experiencepagesection2-p1" className="mt-[23px]">
                Define
              </p>
              <p id="experiencepagesection2-p2" className="w-[180px] mt-[14px]">
                Information Architecture Site Maps Empathy Mapping User Journey
                Map
              </p>
            </div>
            <div className="mt-[20px] sm:mt-[0px]  h-[307px] sm:h-[230px] md:h-[280px] lg:h-[307px] bg-[#FAFAFF] rounded-[14px] p-[45px] px-[45px] sm:p-[0px] sm:px-[0px] md:p-[30px] md:px-[35px] lg:p-[40px] lg:px-[45px]">
              <p id="experiencepagesection2-number">03</p>
              <p id="experiencepagesection2-p1" className="mt-[23px]">
                Deliver
              </p>
              <p id="experiencepagesection2-p2" className="w-[160px] mt-[14px]">
                Paper prototyping High Fidelity Mockups Invision Prototype
              </p>
            </div>
          </div>
        </div>

        {/* section3 start */}

        <div className="   w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] mt-[20px] sm:mt-[70px] md:mt-[65px] lg:mt-[100px] 2xl:mt-[125px] ">
          <div>
            <img
              className="hidden sm:block rounded-xl w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1146px]"
              src="/images/expereincebg.svg"
            ></img>
            <img
              className="rounded-xl w-[333px] sm:hidden"
              src="/images/responsiveexperencebg.svg"
            ></img>
          </div>
        </div>

        {/* section4 start */}

        <div className="   w-[333px] sm:w-[580px] md:w-[750px] lg:w-[960px] xl:w-[1050px] 2xl:w-[1150px] mt-[20px] sm:mt-[70px] md:mt-[65px] lg:mt-[80px] 2xl:mt-[120px] mb-[120px] sm:mb-[0px]">
          <div className="lg:flex ">
            <div className="w-[333px] sm:w-[580px] md:w-[750px] lg:w-[425px] xl:w-[390px]  lg:h-[500px] xl:h-[500px] 2xl:h-[500px] 2xl:w-[382px]  ">
              <h1
                id="experiencepagesection4-h1"
                className="sm:text-center lg:text-none lg:text-start text-[24px] sm:text-[45px] lg:text-[40px] xl:text-[43px] 2xl:text-[45px] sm:leading-[60px]"
              >
                Frequently asked questions
              </h1>
            </div>
            <div className=" md:ml-[90px] lg:ml-[0px]">
              <div className="sm:w-[580px] md:w-[560px] lg:w-[560px] 2xl:w-[586px]   mt-[30px] lg:mt-[0px] lg:py-[10px] xl:py-[5px] 2xl:py-[0px] lg:ml-[60px] xl:ml-[120px] 2xl:ml-[175px]  ">
                <Accordion
                  open={open === 1}
                  style={{ borderBottom: "1px solid  #E0E0E0" }}
                  icon={<Icon id={1} open={open} />}
                >
                  <AccordionHeader
                    className="border-none  text-[16px] font-medium"
                    onClick={() => handleOpen(1)}
                  >
                    What is UI design?
                  </AccordionHeader>
                  <AccordionBody className="text-[14px] font-normal">
                    UI design is the process of creating the visual layout and
                    interactive elements of a digital product or application to
                    ensure an intuitive and visually appealing user experience.
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={open === 2}
                  style={{ borderBottom: "1px solid  #E0E0E0" }}
                  icon={<Icon id={2} open={open} />}
                >
                  <AccordionHeader
                    className="border-none text-[16px] font-medium"
                    onClick={() => handleOpen(2)}
                  >
                    What is the difference between UI and UX design?
                  </AccordionHeader>
                  <AccordionBody className="text-[14px] font-normal">
                    UI (User Interface) design focuses on the visual and
                    interactive elements of a product, while UX (User
                    Experience) design is concerned with the overall user
                    journey, including usability, accessibility, and user
                    satisfaction. UI is about how it looks, and UX is about how
                    it
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={open === 3}
                  style={{ borderBottom: "1px solid  #E0E0E0" }}
                  icon={<Icon id={3} open={open} />}
                >
                  <AccordionHeader
                    className="border-none text-[16px] font-medium"
                    onClick={() => handleOpen(3)}
                  >
                    What are the key principles of good UI design?
                  </AccordionHeader>
                  <AccordionBody className="text-[14px] font-normal">
                    <ul className="ml-[16px]  list-disc ">
                      <li>
                        Clarity: Ensure that the interface is clear and easy to
                        understand, with intuitive navigation and well-organized
                        content..
                      </li>

                      <li>
                        {" "}
                        Consistency: Maintain a consistent visual style, layout,
                        and interaction patterns throughout the interface to
                        provide a cohesive user experience.
                      </li>
                    </ul>
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={open === 4}
                  style={{ borderBottom: "1px solid  #E0E0E0" }}
                  icon={<Icon id={4} open={open} />}
                >
                  <AccordionHeader
                    className="border-none text-[16px] font-medium"
                    onClick={() => handleOpen(4)}
                  >
                    What tools are commonly used in UI design?
                  </AccordionHeader>
                  <AccordionBody className="text-[14px] font-normal">
                    <ul className="ml-[16px]  list-disc ">
                      MN Techgroup's UI designers employ a range of tools to
                      craft user interfaces that are both visually appealing and
                      functionally effective. Among the frequently utilized UI
                      design tools are:"
                      <li>
                        {" "}
                        Adobe XD: A comprehensive UI/UX design and prototyping
                        tool.
                      </li>
                      <li>
                        {" "}
                        Sketch: A vector-based design tool for macOS, popular
                        among designers.
                      </li>
                      <li>
                        Figma: A web-based collaborative design tool for
                        creating and sharing designs.
                      </li>
                      <li>
                        Adobe Photoshop: Used for image editing and creating
                        visual elements.
                      </li>
                      <li>
                        {" "}
                        InVision: A prototyping and collaboration tool for
                        designing interactive UIs.
                      </li>
                      <li>
                        {" "}
                        Axure RP: A tool for creating highly interactive
                        prototypes.{" "}
                      </li>
                      <li>
                        {" "}
                        Balsamiq: A wireframing tool for quickly sketching out
                        UI concepts.
                      </li>
                      <li>
                        {" "}
                        Zeplin: A tool for collaborating between designers and
                        developers by providing design specs and assets.
                      </li>
                      <li>
                        {" "}
                        Marvel: A simple prototyping tool for creating
                        interactive mockups.
                      </li>
                      <li>
                        {" "}
                        Adobe Illustrator: Useful for creating vector-based
                        graphics and icons.
                      </li>
                    </ul>
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={open === 5}
                  style={{ borderBottom: "1px solid  #E0E0E0" }}
                  icon={<Icon id={5} open={open} />}
                >
                  <AccordionHeader
                    className="border-none text-[16px] font-medium"
                    onClick={() => handleOpen(5)}
                  >
                    What is the UI design process??
                  </AccordionHeader>
                  <AccordionBody className="text-[14px] font-normal">
                    <ul className="ml-[16px]  list-disc ">
                      <li>
                        Research and Planning: Understand user needs, define
                        goals, and plan the layout and visual elements.
                      </li>
                      <li>
                        {" "}
                        Design and Iteration: Create the user interface,
                        considering usability and aesthetics, and iterate
                        through feedback to refine the design.
                      </li>
                    </ul>
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={open === 6}
                  style={{ borderBottom: "1px solid  #E0E0E0" }}
                  icon={<Icon id={6} open={open} />}
                >
                  <AccordionHeader
                    className="border-none text-[16px] font-medium"
                    onClick={() => handleOpen(6)}
                  >
                    How do you ensure a responsive UI design?
                  </AccordionHeader>
                  <AccordionBody className="text-[14px] font-normal">
                    <ul className="ml-[16px]  list-disc ">
                      <li>
                        Use flexible layouts and grids to adapt to different
                        screen sizes.
                      </li>
                      <li>
                        Employ media queries to adjust styles and content based
                        on the user's device and screen dimensions.
                      </li>
                    </ul>
                   
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={open === 7}
                  style={{ borderBottom: "1px solid  #E0E0E0" }}
                  icon={<Icon id={7} open={open} />}
                >
                  <AccordionHeader
                    className="border-none text-[16px] font-medium"
                    onClick={() => handleOpen(7)}
                  >
                    What is a wireframe, and why is it important?
                  </AccordionHeader>
                  <AccordionBody className="text-[14px] font-normal">
                    A wireframe is a simplified visual representation of a web
                    page or app's layout, showing the structure and content
                    placement. It's essential because it helps visualize and
                    plan the design's structure and user flow before investing
                    in detailed design and development, saving time and
                    resources.
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={open === 8}
                  style={{ borderBottom: "1px solid  #E0E0E0" }}
                  icon={<Icon id={8} open={open} />}
                >
                  <AccordionHeader
                    className="border-none text-[16px] font-medium"
                    onClick={() => handleOpen(8)}
                  >
                    What is a prototype, and how does it aid in UI design?
                  </AccordionHeader>
                  <AccordionBody className="text-[14px] font-normal">
                    A prototype is a working model of a digital product,
                    allowing designers and stakeholders to interact with it to
                    test functionality and gather feedback before development.
                    It aids in UI design by providing a tangible representation
                    of the user interface, helping identify usability issues and
                    refining the design.
                  </AccordionBody>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiencedesign;
