import "./Experience.css";

import Header from "./Header";
import Stats from "./Stats";
import Timeline from "./Timeline";
import ExperienceCard from "./ExperienceCard";
import Technologies from "./Technologies";
import Responsibilities from "./Responsibilities";
import Growth from "./Growth";

function Experience() {
  return (
   <section id="experience" className="experience-section">

      <div className="container">

        <Header />

        <Stats />

        <Timeline />

        <ExperienceCard />

        <Technologies />

        <Responsibilities />

        <Growth />

      </div>

    </section>
  );
}

export default Experience;