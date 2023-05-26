import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import MyWork from "./components/MyWork";
import Intro from "./components/Intro";
// import Reviews from "./components/Reviews";

export const metadata = {
  title: "Hornik Taras",
};

export default function Home() {
  return (
    <main
      className="md:container mx-auto
    px-6 lg:px-36 mt-24"
    >
      {/* Intro */}
      <Intro />
      {/* My Work */}
      <MyWork />
      {/* Kind Words 
      <Reviews />*/}
    </main>
  );
}
