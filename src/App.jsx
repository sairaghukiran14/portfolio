import React, { useRef } from "react";
import "./css/mediaqueries.css";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiShadcnui } from "react-icons/si";
import {
  FaHtml5,
  FaGithub,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import avator from "./Images/page.png";
import page2 from "./Images/page2.png";
import { GradientText, MorphingText } from "./animations/TextAnimationDemo";
// import projects from "./projects";
const imagesearch =
  "https://res.cloudinary.com/dmqz317kh/image/upload/v1749726599/imagesearch_p9gvc8.png";
const tonnechat =
  "https://res.cloudinary.com/dmqz317kh/image/upload/v1749726593/tonnechat_nhp9an.png";
const summariser =
  "https://res.cloudinary.com/dmqz317kh/image/upload/v1749726592/sumarier_fef4ms.png";
const rayban =
  "https://res.cloudinary.com/dmqz317kh/image/upload/v1749726598/rayban_b4he6j.png";
  const invoice =
  "https://res.cloudinary.com/dmqz317kh/image/upload/v1750019399/Screenshot_2025-06-15_at_11.34.55_AM_c5vmv3.png";
  const travel =
    "https://res.cloudinary.com/dmqz317kh/image/upload/v1750019400/Screenshot_2025-06-15_at_3.40.40_PM_fnwe95.png";
  
const alphavimatechnolgiesLogo =
  "https://media.licdn.com/dms/image/v2/C510BAQF7VQBWBOx7SA/company-logo_200_200/company-logo_200_200/0/1630625180685/dsi_consulting_logo?e=1754524800&v=beta&t=v9oh0Nh1L2nsDL-8vmg0_X6XyUDWvQe0JKSlnVZgxUw";

const App = () => {
  const contactRef = useRef(null);
 

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="mainSection min-h-screen text-white min-w-[100vw]">
      <div className="navbarSection flex justify-between items-center border-gray-500 w-[90%] mx-auto p-4 border-b">
        <div className="logo flex justify-center items-center">
          <span className="text-2xl font-semibold">asrkiran</span>
        </div>
        <div className="contactme ">
          <button
            className="px-8 py-3 rounded-4xl bg-blue-950 border border-blue-800 cursor-pointer hover:bg-blue-900"
            onClick={scrollToContact}
          >
            Contact me
          </button>
        </div>
      </div>
      <div className="">
        <div className="heroSection flex justify-center items-center p-8 min-h-[70vh] ">
          <div className="heroMainContent flex flex-col justify-center items-center p-8 gap-4">
            {/* <h1 className="S1">An Amazing</h1> */}
            <h1 className="mainHead text-7xl font-semibold">
              <MorphingText
                texts={[
                  "An Amazing",
                  "An Awesome",
                  "An Incredible",
                  "A Fantastic",
                ]}
                className="morphingtext sm:text-6xl text-shadow-blue-400 text-4xl"
                interval={3000}
              />
            </h1>
            <h1 className="text-7xl font-semibold text-center">
              Javascript Developer
            </h1>
            <h6 className="text-center w-[60%]">
              Hi 👋. My name is Sai Raghu Kiran Avula, and I am a Javascript
              developer living in india & working remotely with the whole world.
            </h6>
            {/* <button className="cta1 mt-3 rounded-4xl bg-black border border-slate-800 hover:bg-slate-900 cursor-pointer w-56 text-white p-3.5">
              Ship stuff with me
            </button> */}
            {/* rainbow button */}
            <button class="group relative inline-block items-center justify-center overflow-hidden rounded-4xl px-8 py-4 font-medium text-indigo-600 shadow-2xl hover:cursor-pointer mt-5 hover:scale-105 transition-all duration-1500">
              <span class="ease absolute left-0 top-0 -ml-3 -mt-10 h-40 w-40 rounded-full bg-blue-500 blur-md transition-all duration-700"></span>
              <span class="ease absolute inset-0 h-full w-full transition duration-700 group-hover:rotate-180">
                <span class="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-purple-500 blur-md"></span>
                <span class="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-blue-600 blur-md"></span>
                <span class="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-sky-500 blur-md"></span>
                <span class="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-green-500 blur-md"></span>
                <span class="absolute bottom-0 right-0 -mr-10 h-24 w-24 rounded-full bg-blue-500 blur-md"></span>
                <span class="absolute bottom-0 right-0 -mr-20 h-24 w-24 rounded-full bg-blue-500 blur-md"></span>
              </span>
              <span class="relative text-white"> Ship stuff with me</span>
            </button>
          </div>
          <div className="AvatarHighlight"></div>
        </div>
        <div className="projectSection grid grid-cols-2 gap-12 p-10 w-[80%] mx-auto ">
          <div className="Individualproject relative border border-blue-950 rounded-2xl p-6 flex flex-col justify-between items-start gap-6 bg-white/15 backdrop-blur-[20px] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
            <div className="projectimage text-5xl text-center font-semibold flex justify-center items-center bg-cyan-950  rounded-xl h-74 w-full">
              <img
                src={tonnechat}
                alt=""
                className="rounded-xl w-full h-full cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://github.com/sairaghukiran14/tennochat",
                    "_blank"
                  )
                }
              />
            </div>
            <div className="descript flex flex-col justify-center items-start gap-3 w-full">
              <div className="projectShortDescription">
                A Mern Chat Application with real-time messaging, user
                authentication, and a modern UI.
              </div>
              <div className="projectHeader text-4xl font-semibold">
                TonneChat
              </div>
            </div>
            <div className="border-t border-gray-500 p-4 pt-8 w-full flex justify-between items-center">
              <div className="techStackUsed flex gap-2 ">
                <div className="1">
                  <FaReact className="w-6 h-6" />
                </div>
                <div className="1">
                  <FaJsSquare className="w-6 h-6" />
                </div>
                <div className="1">
                  <SiMongodb className="w-6 h-6" />
                </div>
                <div className="1">
                  <SiExpress className="w-6 h-6" />
                </div>
                <div className="1">
                  <TbBrandSocketIo className="w-6 h-6" />
                </div>
                <img
                  src={avator}
                  alt=""
                  className="avator hidden w-52 absolute -top-52 right-0"
                />
              </div>
              <div className="githublink">
                <div className="tonnechat">
                  <FaGithub
                    className="w-6 h-6 cursor-pointer hover:scale-110 transition-all"
                    onClick={() =>
                      window.open(
                        "https://github.com/sairaghukiran14/tennochat",
                        "_blank"
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="Individualproject border border-blue-950 rounded-2xl p-6 flex flex-col justify-between items-start gap-6 bg-white/15 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[20px] ">
            <div className="projectimage text-5xl text-center font-semibold flex justify-center items-center bg-cyan-950  rounded-xl h-74 w-full">
              <img
                src={summariser}
                alt=""
                className="rounded-xl w-full h-full cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://articlesummarizerusing-ai.vercel.app/",
                    "_blank"
                  )
                }
              />
            </div>
            <div className="descript flex flex-col justify-center items-start gap-3 w-full">
              <div className="projectShortDescription">
                A React-based application that summarises articles using AI
              </div>
              <div className="projectHeader text-4xl font-semibold">
                Article Summariser
              </div>
            </div>

            <div className="border-t border-gray-500 p-4 pt-8 w-full flex justify-between items-center">
              <div className="techStackUsed flex gap-2 ">
                <div className="1">
                  <FaReact className="w-6 h-6" />
                </div>
                <div className="1">
                  <FaJsSquare className="w-6 h-6" />
                </div>
                <div className="1">
                  <RiTailwindCssFill className="w-6 h-6" />
                </div>
              </div>
              <div className="githublink">
                <div className="1">
                  <FaGithub
                    className="w-6 h-6 cursor-pointer hover:scale-110 transition-all"
                    onClick={() =>
                      window.open(
                        "https://github.com/sairaghukiran14/articlesummarizerusingAI",
                        "_blank"
                      )
                    }
                  />
                </div>
              </div>
            </div>
            <img
              src={avator}
              alt=""
              className="avator w-52 absolute -top-52 right-0"
            />
          </div>
          <div className="Individualproject border border-blue-950 rounded-2xl p-6 flex flex-col justify-between items-start gap-6 bg-white/15 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[20px] ">
            <div className="projectimage text-5xl text-center font-semibold flex justify-center items-center bg-cyan-950  rounded-xl h-74 w-full">
              <img
                src={imagesearch}
                alt=""
                className="rounded-xl w-full h-full cursor-pointer"
                onClick={() =>
                  window.open("https://isa-app.vercel.app/", "_blank")
                }
              />
            </div>
            <div className="descript flex flex-col justify-center items-start gap-3 w-full">
              <div className="projectShortDescription">
                A real-time image search application using the Unsplash API.
              </div>
              <div className="projectHeader text-4xl font-semibold">
                ImageSearch
              </div>
            </div>

            <div className="border-t border-gray-500 p-4 pt-8 w-full flex justify-between items-center">
              <div className="techStackUsed flex gap-2 ">
                <div className="1">
                  <FaReact className="w-6 h-6" />
                </div>
                <div className="1">
                  <FaJsSquare className="w-6 h-6" />
                </div>
                <div className="1">
                  <RiTailwindCssFill className="w-6 h-6" />
                </div>
              </div>
              <div className="githublink">
                <div className="1">
                  <FaGithub
                    className="w-6 h-6 cursor-pointer hover:scale-110 transition-all"
                    onClick={() =>
                      window.open(
                        "https://github.com/sairaghukiran14/ISA_App",
                        "_blank"
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="Individualproject border border-blue-950 rounded-2xl p-6 flex flex-col justify-between items-start gap-6 bg-white/15 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[20px] ">
            <div className="projectimage text-5xl text-center font-semibold flex justify-center items-center bg-cyan-950  rounded-xl h-74 w-full">
              <img
                src={rayban}
                alt=""
                className="rounded-xl w-full h-full cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://sheryjsanimatedwebsite.vercel.app/",
                    "_blank"
                  )
                }
              />
            </div>
            <div className="descript flex flex-col justify-center items-start gap-3 w-full">
              <div className="projectShortDescription">
                A landing page for RayBan, showcasing sleek animations.
              </div>
              <div className="projectHeader text-4xl font-semibold">
                RayBan Landing page
              </div>
            </div>

            <div className="border-t border-gray-500 p-4 pt-8 w-full flex justify-between items-center">
              <div className="techStackUsed flex gap-2 ">
                <div className="1">
                  <FaHtml5 className="w-6 h-6" />
                </div>
                <div className="1">
                  <RiTailwindCssFill className="w-6 h-6" />
                </div>
                <div className="1">
                  <FaJsSquare className="w-6 h-6" />
                </div>
              </div>
              <div className="githublink">
                <div className="1">
                  <FaGithub
                    className="w-6 h-6 cursor-pointer hover:scale-110 transition-all"
                    onClick={() =>
                      window.open(
                        "https://github.com/sairaghukiran14/sheryjsanimatedwebsite",
                        "_blank"
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="Individualproject border border-blue-950 rounded-2xl p-6 flex flex-col justify-between items-start gap-6 bg-white/15 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[20px] ">
            <div className="projectimage text-5xl text-center font-semibold flex justify-center items-center bg-cyan-950  rounded-xl h-74 w-full">
              <img
                src={invoice}
                alt=""
                className="rounded-xl w-full h-full cursor-pointer"
                onClick={() =>
                  window.open("https://hasa-invoice.vercel.app/", "_blank")
                }
              />
            </div>
            <div className="descript flex flex-col justify-center items-start gap-3 w-full">
              <div className="projectShortDescription">
                An app that allows you to generate invoices and download them as
                PDFs.
              </div>
              <div className="projectHeader text-4xl font-semibold">
                Hasa Invoice
              </div>
            </div>

            <div className="border-t border-gray-500 p-4 pt-8 w-full flex justify-between items-center">
              <div className="techStackUsed flex gap-2 ">
                <div className="1">
                  <FaReact className="w-6 h-6" />
                </div>
                <div className="1">
                  <FaJsSquare className="w-6 h-6" />
                </div>
                <div className="1">
                  <RiTailwindCssFill className="w-6 h-6" />
                </div>
              </div>
              <div className="githublink">
                <div className="1">
                  <FaGithub
                    className="w-6 h-6 cursor-pointer hover:scale-110 transition-all"
                    onClick={() =>
                      window.open(
                        "https://github.com/sairaghukiran14/HasaInvoice",
                        "_blank"
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="Individualproject border border-blue-950 rounded-2xl p-6 flex flex-col justify-between items-start gap-6 bg-white/15 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[20px] ">
            <div className="projectimage text-5xl text-center font-semibold flex justify-center items-center bg-cyan-950  rounded-xl h-74 w-full">
              <img
                src={travel}
                alt=""
                className="rounded-xl w-full h-full cursor-pointer"
                onClick={() =>
                  window.open("https://travelguru-psi.vercel.app/", "_blank")
                }
              />
            </div>
            <div className="descript flex flex-col justify-center items-start gap-3 w-full">
              <div className="projectShortDescription">
                A landing page for Travel planner, showcasing responsivness.
              </div>
              <div className="projectHeader text-4xl font-semibold">
                TravelGuru
              </div>
            </div>

            <div className="border-t border-gray-500 p-4 pt-8 w-full flex justify-between items-center">
              <div className="techStackUsed flex gap-2 ">
                <div className="1">
                  <FaReact className="w-6 h-6" />
                </div>
                <div className="1">
                  <FaJsSquare className="w-6 h-6" />
                </div>
                <div className="1">
                  <RiTailwindCssFill className="w-6 h-6" />
                </div>
              </div>
              <div className="githublink">
                <div className="1">
                  <FaGithub
                    className="w-6 h-6 cursor-pointer hover:scale-110 transition-all"
                    onClick={() =>
                      window.open(
                        "https://github.com/sairaghukiran14/TravelGuruLandingpage",
                        "_blank"
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="experienceSection p-10">
        {/* <h6 className="text-center text-xl font-semibold p-4">Experience</h6> */}
        <div className="exBox flex justify-between items-center rounded-2xl p-10 w-[80%] mx-auto h-[20vh]border-none bg-white/15 backdrop-blur-[1px] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
          <div className="leftSide flex justify-start items-center gap-4">
            <img
              src={alphavimatechnolgiesLogo}
              alt=""
              className="w-35 rounded-2xl"
            />

            <div>
              <p className="text-2xl font-semibold">Associate Engineer </p>
              <p>Alphavima Technologies</p>
            </div>
          </div>
          <div className="rightSide">
            <div className="techStackUsed flex gap-2 ">
              <div className="1">
                <FaReact className="w-6 h-6" />
              </div>
              <div className="1">
                <FaJsSquare className="w-6 h-6" />
              </div>
              <div className="1">
                <RiTailwindCssFill className="w-6 h-6" />
              </div>
              <div className="1">
                <BiLogoTypescript className="w-6 h-6" />
              </div>
              <div className="1">
                <SiShadcnui className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutmeSection flex flex-col justify-center items-center p-10 h-[55vh] gap-6 font-semibold ">
        <h6>ABOUT ME</h6>
        <div className="aboutme flex justify-space-between items-center gap-10 ">
          <img
            src={page2}
            alt=""
            className="w-52 h-52 rounded-4xl  hover:translate-2.5 transition-all hover:scale-105 cursor-pointer"
          />
          <h1 className="text-5xl font-semibold w-[65vw] leading-20 ">
            I'm a full-stack MERN developer passionate about building seamless,
            bug-free user experiences across both front-end and back-end
            systems.
          </h1>
        </div>
      </div>

      <div className="tech flex justify-center items-center p-10 min-h-[60vh]">
        <div className="techKnown grid grid-cols-3 gap-8 p-10 m-auto w-[90%] min-h-[90%] -mr-5 ">
          <div className="techOne flex flex-col justify-center items-start">
            <p>
              Here is a little bit about languages and technologies, that I am
              currently using.
            </p>
          </div>
          <div className="techOne flex flex-col justify-center items-start">
            <p>Nailing</p>
            <h2 className="text-4xl font-semibold">Javascript</h2>
          </div>
          <div className="techOne flex flex-col justify-center items-start">
            <p>Killing</p>
            <h2 className="text-4xl font-semibold">Typescript</h2>
          </div>
          <div className="techOne flex flex-col justify-center items-start">
            <p>Loving</p>
            <h2 className="text-4xl font-semibold">Tailwind</h2>
          </div>
          <div className="techOne flex flex-col justify-center items-start">
            <p>Mastering</p>
            <h2 className="text-4xl font-semibold">React.js</h2>
          </div>
          <div className="techOne flex flex-col justify-center items-start">
            <p>Using</p>
            <h2 className="text-4xl font-semibold">MySQL</h2>
          </div>
          <div className="techOne flex flex-col justify-center items-start">
            <p>Doing</p>
            <h2 className="text-4xl font-semibold">Node.js</h2>
          </div>
          <div className="techOne flex flex-col justify-center items-start">
            <p>Crushing</p>
            <h2 className="text-4xl font-semibold">MongoDB</h2>
          </div>
          <div className="techOne flex flex-col justify-center items-start">
            <button className="github bg-blue-950 border border-blue-900 rounded-4xl px-6 py-3">
              Check out my Github
            </button>
          </div>
        </div>
      </div>
      <div className="stripLoopSection"></div>
      <div
        ref={contactRef}
        className="contactSection flex flex-col justify-center items-center p-10 h-[65vh] gap-8 font-semibold "
      >
        <h6>CONTACT ME</h6>
        <h2 className="text-5xl">Ready to develop your next big thing?</h2>
        <div className="Socials flex justify-around items-center p-4 w-[60%]">
          <div className="linkedIn flex flex-col justify-center items-center gap-3 p-4">
            <h2 className="text-3xl">WhatsApp</h2>
            <h5>+91 8332020170</h5>
            <button
              className="px-6 py-3 bg-green-800 border border-green-600 rounded-4xl cursor-pointer hover:bg-green-700 transition-all duration-1000"
              onClick={() =>
                window.open("https://wa.me/918332020170", "_blank")
              }
            >
              Chat on WhatsApp
            </button>
          </div>
          <div className="linkedIn flex flex-col justify-center items-center gap-3 p-4">
            <h2 className="text-3xl">LinkedIn</h2>
            <h5>in/avulasairaghukiran</h5>
            <button
              className="px-6 py-3 bg-blue-800 border border-blue-600 rounded-4xl cursor-pointer hover:bg-blue-700 transition-all duration-1000"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/avulasairaghukiran/",
                  "_blank"
                )
              }
            >
              Visit my LinkedIn
            </button>
          </div>
        </div>
      </div>
      <div className="footerSection border-t border-gray-500 w-[90%] mx-auto p-6 flex justify-between items-center">
        <div className="leftFooter">
          <p>
            Made with ❤️ by <span className=" font-semibold">asrkiran</span>
          </p>
          <p className="text-sm">
            © 2023 Sai Raghu Kiran Avula. All rights reserved.
          </p>
        </div>
        <div className="contactme ">
          <button className="px-8 py-3 rounded-4xl bg-blue-950 border border-blue-800 cursor-pointer hover:bg-blue-900">
            Contact me
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
