interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  large?: boolean;
  accent?: "blue" | "green";
}

export default function ProjectCard({
  title,
  description,
  technologies,
  large = false,
  accent = "blue",
}: ProjectCardProps) {

  const green = accent === "green";

  return (
    <article
      className={`
        group flex flex-col overflow-hidden rounded-lg
        border border-white/10
        bg-[#273647]/40
        backdrop-blur-xl
        transition-all duration-300
        hover:scale-[1.02]
        ${large ? "md:col-span-2" : ""}
      `}
    >

      <div className={`
        relative overflow-hidden bg-[#273647]
        ${large ? "h-64 md:h-80" : "h-48"}
      `}>
        
      </div>

      <div className="flex flex-col justify-between p-6">

        <div>

          <h2 className={`
            mb-3 font-semibold
            text-[#d4e4fa]
            ${large ? "text-3xl" : "text-2xl"}
          `}>
            {title}
          </h2>

          <p className="text-justify mb-6 text-sm leading-relaxed text-[#c6c6cd]">
            {description}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">

            {technologies.map((tech) => (
              <span
                key={tech}
                className={`
                  rounded-full border
                  px-3 py-1
                  font-mono text-xs

                  ${
                    green
                      ? "border-[#4edea3]/20 bg-[#4edea3]/10 text-[#4edea3]"
                      : "border-[#7bd0ff]/20 bg-[#7bd0ff]/10 text-[#7bd0ff]"
                  }
                `}
              >
                {tech}
              </span>
            ))}

          </div>
        </div>
      </div>

    </article>
  );
}