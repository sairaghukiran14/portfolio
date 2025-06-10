import React from "react";
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
import imagesearch from "./Images/imagesearch.png";
import tonnechat from "./Images/tonnechat.png";
import summariser from "./Images/summariser.png";
import rayban from "./Images/rayban.png";

const alphavimatechnolgiesLogo =
  "https://media.licdn.com/dms/image/v2/C510BAQF7VQBWBOx7SA/company-logo_200_200/company-logo_200_200/0/1630625180685/dsi_consulting_logo?e=1754524800&v=beta&t=v9oh0Nh1L2nsDL-8vmg0_X6XyUDWvQe0JKSlnVZgxUw";
const App = () => {
  return (
    <main className=" min-h-screen bg-black text-white">
      <div className="navbarSection flex justify-between items-center border-gray-500 w-[90%] mx-auto p-4 border-b">
        <div className="logo flex justify-center items-center">
          <span className="text-2xl font-semibold">asrkiran</span>
        </div>
        <div className="contactme ">
          <button className="px-8 py-3 rounded-4xl bg-blue-950 border border-blue-800 cursor-pointer hover:bg-blue-900">
            Contact me
          </button>
        </div>
      </div>
      <div className="heroSection flex justify-center items-center p-8 h-[70vh] ">
        <div className="heroMainContent flex flex-col justify-center items-center p-8 gap-4">
          {/* <h1 className="S1">An Amazing</h1> */}
          <h1 className="S2 text-7xl font-semibold">An Aspiring</h1>
          <h1 className="text-7xl font-semibold">Javascript Developer</h1>
          <h6 className="text-center">
            Hi 👋. My name is Sai Raghu Kiran Avula, and I am a Javascript
            developer
            <br />
            living in india & working remotely with the whole world.
          </h6>
          <button className="cta1 mt-3 rounded-4xl bg-slate-950 border border-slate-800 hover:bg-slate-900 cursor-pointer w-56 text-white p-3.5">
            Ship stuff with me
          </button>
        </div>
        <div className="AvatarHighlight"></div>
      </div>
      <div className="projectSection grid grid-cols-2 gap-12 p-10 w-[80%] mx-auto">
        <div className="Individualproject border border-blue-950 rounded-2xl p-6 flex flex-col justify-between items-start gap-6 bg-white/15 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[20px] ">
          <div className="projectimage text-5xl text-center font-semibold flex justify-center items-center bg-cyan-950  rounded-xl h-74 w-full">
            <img src={tonnechat} alt="" className="rounded-xl w-full h-full" />
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
            <img src={summariser} alt="" className="rounded-xl w-full h-full" />
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
        </div>
        <div className="Individualproject border border-blue-950 rounded-2xl p-6 flex flex-col justify-between items-start gap-6 bg-white/15 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[20px] ">
          <div className="projectimage text-5xl text-center font-semibold flex justify-center items-center bg-cyan-950  rounded-xl h-74 w-full">
            <img
              src={imagesearch}
              alt=""
              className="rounded-xl w-full h-full"
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
            <img src={rayban} alt="" className="rounded-xl w-full h-full" />
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
      </div>
      <div className="experienceSection p-10">
        {/* <h6 className="text-center text-xl font-semibold p-4">Experience</h6> */}
        <div className="exBox flex justify-between items-center rounded-2xl p-10 w-[80%] mx-auto h-[20vh] border-b border-gray-500 border border-b-neutral-700">
          <div className="leftSide flex justify-start items-center gap-4">
            <img
              src={alphavimatechnolgiesLogo}
              alt=""
              className="w-35 rounded-2xl"
            />

            <div>
              <p className="text-2xl font-semibold">Associate Engineer in</p>
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
      <div className="aboutmeSection flex flex-col justify-center items-center p-10 h-[75vh] gap-6 font-semibold ">
        <h6>ABOUT ME</h6>
        <h1 className="text-6xl font-semibold w-[65vw] text-center leading-20">
          I'm a full-stack MERN developer passionate about building seamless,
          bug-free user experiences across both front-end and back-end systems.
        </h1>
      </div>

      <div className="tech flex justify-center items-center p-10  h-[70vh]">
        <div className="techKnown grid grid-cols-3 gap-8 p-10 m-auto w-[90%] h-[90%] -mr-5">
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
      <div className="contactSection flex flex-col justify-center items-center p-10 h-[65vh] gap-8 font-semibold ">
        <h6>CONTACT ME</h6>
        <h2 className="text-5xl">Ready to develop your next big thing?</h2>
        <div className="Socials flex justify-around items-center p-4 w-[60%]">
          <div className="linkedIn flex flex-col justify-center items-center gap-3 p-4">
            <h2 className="text-3xl">LinkedIn</h2>
            <h5>in/asrkiran</h5>
            <button className="px-6 py-3 bg-amber-950 border border-amber-900 rounded-4xl">
              Visit my LinkedIn
            </button>
          </div>
          <div className="linkedIn flex flex-col justify-center items-center gap-3 p-4">
            <h2 className="text-3xl">LinkedIn</h2>
            <h5>in/avulasairaghukiran</h5>
            <button
              className="px-6 py-3 bg-amber-950 border border-amber-900 rounded-4xl cursor-pointer hover:bg-amber-900"
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
