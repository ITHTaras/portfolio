"use client";
import Image from "next/image";
import Link from "next/link";
import menu from "../../public/images/menu.svg";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useGlobalContext } from "../context/store";
import langs from "@/lang/langs";

function Navbar() {
  const pathname = usePathname();

  const [menuOpened, setMenuOpened] = useState(false);

  const PathLink = (props) => {
    return (
      <>
        <Link
          href={props.path}
          className={`nav-link ${
            pathname === props.path
              ? "pointer-events-none text-gray-100 opacity-20"
              : "text-gray-300"
          }`}
        >
          {props.text}
        </Link>
        <h1 className="text-gray-400 mx-6 text-2xl">/</h1>
      </>
    );
  };

  const scrolly = () => {
    const elem = document.getElementById("projects");
    window.scrollTo({
      top: elem.getBoundingClientRect().top,
      behavior: "smooth",
    });
  };

  const { lang, setLang } = useGlobalContext();

  return (
    <nav className="container mx-auto px-7 md:px-36 py-9">
      {/* Mobile */}
      <div
        className={`${
          menuOpened ? "" : "hidden"
        } text-slate-300 pt-5 bg-gradient-to-b from-gray-900 to-slate-800 fixed left-0 top-0 w-screen h-screen z-[51]`}
      >
        <button className="ml-5 w-16 h-16" onClick={() => setMenuOpened(false)}>
          <img src="/images/x-mark.svg" alt="" />
        </button>
        <div className="w-full mt-3 h-[2px] bg-[#94a3b8]"></div>
        <div className="ml-9 mt-4">
          <h1
            className="mt-4 text-2xl font-semibold"
            onClick={() => setMenuOpened(false)}
          >
            <Link href="/">Home</Link>
          </h1>
          {pathname === "/" ? (
            <button
              onClick={() => {
                scrolly();
                setMenuOpened(false);
              }}
              className="mt-4 text-2xl font-semibold"
            >
              {langs[lang].projects}
            </button>
          ) : (
            <h2 className="mt-4 text-2xl font-semibold text-gray-100 opacity-20">
              {langs[lang].projects}
            </h2>
          )}
        </div>
      </div>
      {/* Desktop */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl text-slate-50">ITHTaras</h1>
        {/* Features */}
        <div className="hidden lg:flex justify-center items-center">
          <PathLink path="/" text={langs[lang].home} />
          {pathname === "/" ? (
            <button onClick={scrolly} className="text-gray-300">
              {langs[lang].projects}
            </button>
          ) : pathname === "/projects/ecolife" ||
            pathname === "/projects/real-estate" ? (
            <h2 className="text-gray-100 opacity-20">{langs[lang].projects}</h2>
          ) : (
            <Link className="text-gray-300 nav-link" href="/">
              {langs[lang].projects}
            </Link>
          )}
        </div>
        {/* Email */}
        <div className="flex items-center justify-center">
          <button
            disabled={lang === "de"}
            onClick={() => setLang("de")}
            className={
              lang === "en"
                ? "text-lg text-gray-300"
                : "text-lg text-gray-100 opacity-30"
            }
          >
            DE
          </button>
          <div className="border-l-2 border-slate-300 h-10 mx-2.5"></div>
          <button
            disabled={lang === "en"}
            onClick={() => setLang("en")}
            className={
              lang === "de"
                ? "text-lg text-gray-300"
                : "text-lg text-gray-100 opacity-30"
            }
          >
            EN
          </button>
          <Link
            href="mailto:tarasgorniko@gmail.com"
            className="hidden lg:block w-14 h-14 lg:ml-9"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="fill-gray-300"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </Link>
        </div>
        {/* Menu */}
        <button
          onClick={() => setMenuOpened(true)}
          className="flex items-center lg:hidden"
        >
          <h1 className="mr-4 text-gray-300">Menu</h1>
          <Image src={menu} alt="Menu" width={27} height={24} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
