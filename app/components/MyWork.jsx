"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faMicrochip,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import { projects } from "@/data";
import langs from "@/lang/langs";
import Link from "next/link";
import { useGlobalContext } from "../context/store";
import { useState } from "react";

function MyWork() {
  const { lang } = useGlobalContext();
  const [category, setCategory] = useState(false);

  return (
    <div className="relative text-gray-200" id="projects">
      <h1 className="text-4xl font-semibold">
        {lang === "de" ? "Projekte" : "My Work"}
      </h1>
      <div className="flex flex-col md:flex-row justify-between">
        <p className="mt-3 lg:w-[500px]">{langs[lang].projectsDesc}</p>
        <div className="flex justify-start min-md:self-end gap-x-10 overflow-x-scroll hide-scrollbar mt-3 md:mt-0">
          <button
            onClick={() => setCategory("electronics")}
            className="flex items-center"
          >
            <FontAwesomeIcon
              icon={faMicrochip}
              className="mr-2 text-yellow-500"
            />
            <h6>{langs[lang].electronics}</h6>
          </button>
          <button
            onClick={() => setCategory("fullstack")}
            className="flex items-center"
          >
            <FontAwesomeIcon icon={faPalette} className="mr-2 text-blue-500" />
            <h6>Fullstack</h6>
          </button>
        </div>
      </div>
      {/* Projects */}
      <div className="flex max-lg:flex-col lg:grid lg:grid-cols-3 gap-8 mt-8 sm:max-md:px-24 md:max-lg:px-36">
        {(category
          ? projects.filter((project) => project.cat === category)
          : projects
        ).map((project) => {
          // Project

          if (project.alias === "ecolife") {
            return (
              <Link
                href={project.url}
                key={project.alias}
                className="flex flex-col items-center"
              >
                <div className="w-full h-[562px] lg:h-full max-h-[562px] relative">
                  <Image
                    className="rounded-xl object-cover object-top"
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
                    {langs[lang].ecolife}
                  </p>
                  <h2 className="flex text-gray-600 justify-center items-center rounded-full min-w-[48px] min-h-[48px] max-w-[48px] max-h-[48px] bg-[#6f848e] rotate-45">
                    <FontAwesomeIcon icon={faArrowUp} className="text-[17px]" />
                  </h2>
                </div>
              </Link>
            );
          } else if (project.alias === "real-estate") {
            return (
              <Link
                href={project.url}
                key={project.alias}
                className="flex flex-col items-center col-span-2 h-fit"
              >
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
                    {langs[lang].realestate}
                  </p>
                  <h2 className="flex text-gray-600 justify-center items-center rounded-full min-w-[48px] min-h-[48px] max-w-[48px] max-h-[48px] bg-[#6f848e] rotate-45">
                    <FontAwesomeIcon icon={faArrowUp} className="text-[17px]" />
                  </h2>
                </div>
              </Link>
            );
          } else if (project.alias === "intrusion-alarm") {
            return (
              <Link
                href={project.url}
                key={project.alias}
                className="flex flex-col items-center col-span-2 h-fit"
              >
                <div className="w-full h-[562px] max-h-[562px]">
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
                    {langs[lang].intrusionAlarm}
                  </p>
                  <h2 className="flex text-gray-600 justify-center items-center rounded-full min-w-[48px] min-h-[48px] max-w-[48px] max-h-[48px] bg-[#6f848e] rotate-45">
                    <FontAwesomeIcon icon={faArrowUp} className="text-[17px]" />
                  </h2>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}

export default MyWork;
