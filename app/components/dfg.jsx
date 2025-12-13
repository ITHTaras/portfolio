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
              <p className="text-slate-200 mt-3 lg:w-125" dangerouslySetInnerHTML={{ __html: projects[0].description[arrayLang] }}></p>
          </div>
        </div>
        <div className="mt-10 h-[240vh] md:h-screen md:flex md:gap-5 md:justify-between">
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
      
    );
  } else if (project && project.alias === "reaction") {
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
                
              </p>
            ) : (
              <p className="text-slate-200 mt-3 lg:w-[500px]">
                The reaction game consists of a simple delay using a NE555 timer.
The timer is activated after the application of the supply voltage and, after a certain period, triggers a second timer operating in an astable mode.
This generates a high frequency signal, which drives a counter and increases the number on a segment display.
As soon as the player presses a button, the counter is reset and the time the player needed is shown.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }