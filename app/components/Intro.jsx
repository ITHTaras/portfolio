"use client";
import langs from "@/lang/langs";
import Image from "next/image";
import { useGlobalContext } from "../context/store";

function Intro() {
  const { lang } = useGlobalContext();

  const scrolly = () => {
    const elem = document.getElementById("projects");

    window.scrollTo({
      top: elem.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-first-section flex flex-col items-center">
      <div className="flex flex-col lg:flex-row text-gray-200 justify-start items-center">
        <Image
          className="rounded-full object-contain lg:mr-24"
          width={400}
          height={400}
          src="/images/my-photo.jpg"
          alt=""
        />
        <div className="lg:ml-8 mt-10 max-lg:text-center">
          <h6 className="text-xl">{langs[lang].hi}</h6>
          <h2 className="text-5xl mt-3">Taras Hornik</h2>
          <p className="xs:max-lg:w-3/5 xs:max-lg:mx-auto mt-3 text-lg text-slate-200 w-full xl:w-3/5">
            {langs[lang].aboutMe}
          </p>
        </div>
      </div>
      <button
        onClick={scrolly}
        className="w-14 h-14 rounded-full flex justify-center items-center mt-20 bg-white/20 drop-shadow-[0_0_20px_rgba(240,237,253,0.78)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-6 h-6 fill-gray-50 "
        >
          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
        </svg>
      </button>
    </div>
  );
}

export default Intro;
