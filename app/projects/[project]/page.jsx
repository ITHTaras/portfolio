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
          <div className="max-md:mt-4 relative h-[80vh] w-full">
            <Image
              className="object-contain"
              fill
              alt=""
              src="/images/ecolife_1.jpg"
            />
          </div>
          <div className="max-md:mt-4 relative h-[80vh] w-full">
            <Image
              className="object-contain"
              fill
              alt=""
              src="/images/ecolife_2.jpg"
            />
          </div>
          <div className="max-md:mt-4 relative h-[80vh] w-full">
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
  } else if (project && project.alias === "real-estate") {
    return (
      <div className="px-8 md:px-20 md:grid md:grid-cols-12 md:gap-4 h-[80vh]">
        <div className="relative w-full h-full col-span-9">
          <Image className="object-contain" src={project.img} fill alt="" />
        </div>
        <div className=""></div>
      </div>
    );
  } else if (project && project.alias === "intrusion-alarm") {
    return (
      <div className="px-8 md:px-20">
        <div className="md:grid md:grid-cols-12 md:gap-4 lg:h-[80vh]">
          <div className="relative max-md:h-[70vh] w-full col-span-5">
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
                Ein Einbruchsalarm überprüft ständig die Lage des Reed-Kontaktes
                und schaltet dementsprechend ein. Externe Bauteile (der Summer,
                Transistor eines logischen Gatters, das Potentiometer und
                dazugehörige Festwiderstände) wurden auf einer Lochrasterplatte
                gelötet. Zum Ausschalten muss eine vierstellige Kennnummer
                mithilfe eines Infrarotpults eingegeben werden. Während der
                Eingabe werden die Kennziffern auf einem LCD-Bildschirm
                abgebildet, der mithilfe des transistorisierten Logikgatters
                ein- oder ausgeschaltet wird. Die Komponenten werden durch einen
                Arduino UNO R3 Mikrocontroller gesteuert. Mehr Informationen
                über die einzelnen Bauteile finden Sie in einem Ordner mit dem
                Namen "include" in meinem GitHub-Repository, dessen Link unten
                auf der Website zu finden ist.
              </p>
            ) : (
              <p className="text-slate-200 mt-3 lg:w-[500px]">
                An intrusion alarm continuously checks the state of a Reed
                sensor. Some components (passive buzzer, transistor of a logic
                gate, potentiometer and corresponding fixed resistors) were
                soldered onto a perfboard. By inputting a code consisting of
                four digits using an infrared controller, the alarm can be
                switched off. The state of the input is displayed on an LCD
                screen, which will be turned off when not needed, using
                transistor logic. This project uses an Arduino UNO R3
                microcontroller. You will find more details about the components
                in the image in the /include folder in my GitHub repository,
                which is linked in the footer of the website.
              </p>
            )}
          </div>
        </div>
        <div className="mt-10 h-[240vh] md:h-[100vh] md:flex md:gap-5 md:justify-between">
          <div className="max-md:mt-4 relative h-[80vh] w-full">
            <Image
              className="object-contain"
              fill
              alt=""
              src="/images/intrusion-alarm_final.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default project;
