const technologies = [
  ["💻", "Microsoft Office"],
  ["📊", "Aplikasi Perbankan"],
  ["☁️", "Google Workspace"],
  ["📱", "Digital Marketing"],
];

export default function Skills() {
  return (
    <section className="mx-auto max-w-1200px px-6 py-16">

      <h2 className="mb-8 text-center text-3xl font-semibold">
        Skills
      </h2>

      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">

        {technologies.map(([icon, name]) => (
          <div
            key={name}
            className="
              group flex min-h-140px
              flex-col items-center justify-center
              gap-3 rounded-lg
              border border-white/10
              bg-[#273647]/40
              p-6
              backdrop-blur-xl
              transition duration-300
              hover:scale-105
              hover:border-[#7bd0ff]/30
            "
          >
            <span className="
              font-mono text-3xl font-bold
              text-[#c6c6cd]
              group-hover:text-[#7bd0ff]
            ">
              {icon}
            </span>

            <span className="font-mono text-xs text-[#d4e4fa]">
              {name}
            </span>
          </div>
        ))}

      </div>

    </section>
  );
}