"use client";
import { GlobalContext } from "../../context/store";
import { projects, id } from "@/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { useContext } from "react";

function project({ params }) {
  const { lang } = useContext(GlobalContext);
  let arrayLang = lang === "de" ? 0 : 1;
  const project = projects.find(
    (project) => project.alias === React.use(params).project
  );

  if (!project) notFound();
  else {
    return (
      <div className="px-8 md:px-20">
        <div className="md:grid md:grid-cols-12 md:gap-4">
          <div className="relative w-full max-h-full col-span-5">
            <Image
              className="object-contain h-[auto!important] max-h-full pos-relative"
              src={project.imgs[0]}
              fill
              alt=""
            />
          </div>
          <div className="max-md:mt-8 max-md:text-center max-md:px-6 md:col-span-7">
            <p
              className="text-slate-200 mt-3 lg:w-125"
              dangerouslySetInnerHTML={{
                __html: projects[id[project.alias]].description[arrayLang],
              }}
            ></p>
          </div>
        </div>
        <div className="mt-10 h-[240vh] md:h-screen md:flex md:gap-5 md:justify-between">
          {project.imgs.slice(1).map((img) => {
            return (
              <div key={img} className="max-md:mt-4 relative h-[80vh] w-full">
                <Image className="object-contain" fill alt="" src={img} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default project;
