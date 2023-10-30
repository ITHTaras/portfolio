import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import MyWork from "./components/MyWork";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <main
      className="lg:container mx-auto
    px-8 xl:px-36 mt-16"
    >
      <Intro />
      <MyWork />
    </main>
  );
}
