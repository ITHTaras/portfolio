"use client";
import Image from "next/image";
import Link from "next/link";
import menu from "../../public/images/menu.png";
import langs from "@/lang/langs";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

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

  const lang = "en";

  return (
    <nav className="container mx-auto px-7 md:px-36 py-9">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl text-slate-50">ITHTaras</h1>
        {/* Features */}
        <div className="hidden lg:flex justify-center items-center">
          <PathLink path="/" text={langs[lang].home} />
          {pathname === "/" ? (
            <>
              <button
                onClick={scrolly}
                className={`nav-link ${
                  pathname === "/projects"
                    ? "pointer-events-none text-gray-100 opacity-20"
                    : "text-gray-300"
                }`}
              >
                {langs[lang].projects}
              </button>
              <h1 className="text-gray-400 mx-6 text-2xl">/</h1>
            </>
          ) : (
            <PathLink path="/projects" text={langs[lang].projects} />
          )}

          <PathLink path="/about" text={langs[lang].about} />
          <PathLink path="/hobbies" text={langs[lang].hobbies} />
        </div>
        {/* Email */}
        <Link href="/feedback" className="hidden lg:block w-14 h-14">
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
        {/* Menu */}
        <button className="flex items-center lg:hidden w-14 h-14">
          <h1 className="mr-4 text-gray-300">Menu</h1>
          <Image src={menu} alt="Menu" width={18} height={16} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
