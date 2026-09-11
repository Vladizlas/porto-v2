import profileImage from "../image/foto.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex min-h-614px items-center justify-center px-6 py-16">
      <div
        className="
          group relative w-full max-w-6xl
          overflow-hidden rounded-xl
          border border-white/10
          bg-[#0d1c2d]/80
          p-8
          shadow-2xl
          backdrop-blur-xl
          md:p-12
        "
      >
        {/* Hover Background */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-[#7bd0ff]/5
            opacity-0
            transition-opacity duration-500
            group-hover:opacity-100
          "
        />

        <div className="relative z-10 grid items-center gap-12 md:grid-cols-2">

          {/* Text */}
          <div className="text-center md:text-left">
            <h1
              className="
                text-4xl font-bold
                leading-tight tracking-tight
                text-[#d4e4fa]
                md:text-5xl
              "
            >
              Irfan Nabilla Arifin
            </h1>

            <h2
            className="
                text-4xl font-bold
                leading-tight tracking-tight
                text-cyan-300
                md:text-2xl
              "
            >
              Full Stack Developer & Staff Admin
            </h2>

            <p
              className="
                mt-6 max-w-2xl
                text-base leading-relaxed
                text-[#c6c6cd]
                md:text-lg
              "
            >
              Bertanggung jawab dalam merancang, mengembangkan, menguji, dan memelihara aplikasi web secara end-to-end, baik pada sisi frontend maupun backend.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <a
                href="#projects"
                className="
                  rounded bg-[#7bd0ff]
                  px-6 py-3
                  font-mono text-xs font-bold
                  text-[#051424]
                  transition
                  hover:shadow-[0_0_20px_rgba(123,208,255,0.4)]
                "
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="
                  rounded border border-[#7bd0ff]
                  px-6 py-3
                  font-mono text-xs font-bold
                  text-[#7bd0ff]
                  transition
                  hover:bg-[#7bd0ff]/10
                "
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Foto */}
          <div className="flex justify-center md:justify-end">
            <div
              className="
                rounded-2xl
                border-2 border-[#7bd0ff]/60
                p-2
                shadow-[0_0_30px_rgba(123,208,255,0.15)]
                transition duration-500
                hover:border-[#7bd0ff]
                hover:shadow-[0_0_40px_rgba(123,208,255,0.3)]
              "
            >
              <Image
                src={profileImage}
                alt="Profile"
                className="
                  h-64 w-64
                  rounded-xl
                  object-cover
                  md:h-60 md:w-50
                "
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
