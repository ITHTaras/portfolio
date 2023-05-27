"use client";
import langs from "@/lang/langs";

function Intro() {
  const lang = "ua";

  const scrolly = () => {
    const elem = document.getElementById("projects");

    window.scrollTo({
      top: elem.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-first-section flex flex-col items-center">
      <div className="w-[100%] flex flex-col items-center text-center text-gray-200">
        <h2 className="text-5xl leading-[1.1] md:w-[570px]">
          {langs[lang].ue}
        </h2>
        {/* <div className="flex flex-row items-center mt-7">
          <h3 className="border-r-2 pr-4 mr-12 font-semibold text-lg border-r-gray-200">
            Tech Stack
          </h3>
          <div>
            <div className="flex gap-5 liststyle-none">
              {techstacks.map((stack) => {
                return (
                  <Tooltip
                    key={stack.name}
                    text={stack.name}
                    classes="w-[70px] h-auto bg-slate-400 bg-opacity-40 p-4 rounded-full"
                  >
                    <Image
                      className="pos-relative"
                      src={stack.img}
                      alt=""
                      fill
                    />
                  </Tooltip>
                );
              })}
            </div>
          </div>
        </div> */}
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
