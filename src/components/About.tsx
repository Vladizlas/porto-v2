
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

export default function About() {
  return (
    <section
      id="about"
      className="
        mx-auto
        w-full
        max-w-1200px
        px-6
        py-20
      "
    >

      <div className="
        grid grid-cols-1
        gap-6
        lg:grid-cols-12
      ">

        <div className="
          flex flex-col
          gap-6
          lg:col-span-7
        ">
          <Skills/>
          <Experience />
          <Education />
        </div>
      </div>
    </section>
  );
}