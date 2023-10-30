"use client";
import { GlobalContext } from "../../context/store";
import { projects } from "@/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useContext } from "react";

function project({ params }) {
  const { lang } = useContext(GlobalContext);
  const project = projects.find((project) => project.alias === params.project);

  if (!project) notFound();

  if (project && project.alias === "ecolife") {
    return (
      <div className="px-8 md:px-20">
        <div className="md:grid md:grid-cols-12 md:gap-4 md:h-[80vh]">
          <div className="relative w-full max-md:h-[70vh] max-h-full col-span-5">
            <Image
              className="object-contain h-[auto!important] max-h-full"
              src={project.img}
              fill
              alt=""
            />
          </div>
          <div className="max-md:mt-8 max-md:text-center max-md:px-6 md:col-span-7">
            {lang == "de" ? (
              <p className="text-slate-200 mt-3 lg:w-[500px]">
                Das App "EcoLife" habe ich als meine zweite wissenschaftliche
                Arbeit gemacht. Es wurde später auch in einem ukrainischen
                Wettbewerb dargestellt{" "}
                <a
                  className="underline text-blue-300"
                  href="/Wettbewerburkunde.pdf"
                >
                  (siehe die Urkunde)
                </a>
                . <br /> Das Ziel der Anwendung - die Umgebung zu verbessern.
                Darüber hinaus kann man sich über verschiedene Arten des Abfalls
                informieren und die Rezyklierungvorschrifte.
              </p>
            ) : (
              <p className="text-slate-200 mt-3 lg:w-[500px]">
                The mobile app "EcoLife" is my second scientific research. A bit
                later it was presented at informatics competition in Ukraine{" "}
                <a
                  className="underline text-blue-300"
                  href="/Wettbewerburkunde.pdf"
                >
                  (see the certificate)
                </a>
                . <br />
                The point of the app is to make the enviroment better. There is
                a possibility to view different types of waste and the
                instructions for utilization of it.
              </p>
            )}
          </div>
        </div>
        <div className="mt-10 h-[240vh] md:h-[100vh] md:flex md:gap-5 md:justify-between">
          <div className="max-md: mt-4 relative h-[80vh] w-full">
            <Image
              className="object-contain"
              fill
              alt=""
              src="/images/ecolife_1.jpg"
            />
          </div>
          <div className="max-md: mt-4 relative h-[80vh] w-full">
            <Image
              className="object-contain"
              fill
              alt=""
              src="/images/ecolife_2.jpg"
            />
          </div>
          <div className="max-md: mt-4 relative h-[80vh] w-full">
            <Image
              className="object-contain"
              fill
              alt=""
              src="/images/ecolife_3.jpg"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="px-8 md:px-20 md:grid md:grid-cols-12 md:gap-4 h-[80vh]">
        <div className="relative w-full h-full col-span-9">
          <Image className="object-contain" src={project.img} fill alt="" />
        </div>
        <div className=""></div>
      </div>
    );
  }
}

export default project;
