"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faServer,
  faWandSparkles,
  faArrowUp,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import data from "@/data";
import langs from "@/lang/langs";
import Link from "next/link";

function MyWork() {
  const lang = "ua";

  return (
    <div className="relative text-gray-200" id="projects">
      <div className="absolute left-[-11rem] pointer-events-none top-32 opacity-40 rounded-lg w-2/5 bg-[#06B6D4] blur-[140px] h-[60vh]"></div>
      <div className="absolute right-4 lg:right-[-9rem] pointer-events-none top-3 opacity-30 rounded-lg w-2/5 bg-[#EAB308] blur-[140px] h-[60vh]"></div>
      <h2 className="text-4xl font-semibold">{langs[lang].projects}</h2>
      <div className="flex flex-col md:flex-row justify-between">
        <p className="mt-3 lg:w-[500px]">{langs[lang].projectsDesc}</p>
        <div className="flex justify-end flex-row gap-x-10 overflow-x-scroll hide-scrollbar mt-3 md:mt-0">
          <button className="flex items-center">
            <FontAwesomeIcon
              icon={faPalette}
              className="mr-2 text-yellow-500"
            />
            <h6>{langs[lang].frontend}</h6>
          </button>
          <button className="flex items-center">
            <FontAwesomeIcon icon={faServer} className="mr-2 text-cyan-500" />
            <h6>{langs[lang].backend}</h6>
          </button>
          <button className="flex items-center">
            <FontAwesomeIcon
              icon={faWandSparkles}
              className="mr-2 text-blue-500"
            />
            <h6>Fullstack</h6>
          </button>
        </div>
      </div>
      {/* Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {data.projects.map((project) => {
          // Project

          return (
            <div key={project.alias} className="flex flex-col items-center">
              <div className="w-full max-h-[562px]">
                <Image
                  className="rounded-xl object-cover object-top pos-relative"
                  src={project.img}
                  fill
                  alt=""
                />
              </div>
              <hr
                style={{ height: 1 }}
                className="w-full mt-4 mb-2 border-none bg-gray-300 bg-opacity-50"
              />
              <div className="w-full flex justify-between">
                <p className="text-gray-300 text-sm max-w-[73%] leading-6">
                  {project.title}
                </p>
                <Link
                  href="/projects/ecolife"
                  className="flex text-gray-600 justify-center items-center rounded-full min-w-[48px] min-h-[48px] max-w-[48px] max-h-[48px] bg-[#6f848e] rotate-45"
                >
                  <FontAwesomeIcon icon={faArrowUp} className="text-[17px]" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-12">
        <Link
          href="/projects"
          className="flex flex-row bg-[#6C4BEF] rounded-xl py-4 px-12 items-center text-sm border-solid border-[1px] border-slate-50"
        >
          {langs[lang].more}
          <FontAwesomeIcon className="text-gray-50 ml-3" icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
}

export default MyWork;
