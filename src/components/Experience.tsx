const experiences = [
  {
    role: "Staff Admin Legal & KPR",
    period: "2023 — 2025",
    company: "PT. Suvarnadwipa Sarana Sejahtera",
    description:
      "Bertanggung jawab dalam mengelola administrasi dokumen legal dan proses pengajuan Kredit Pemilikan Rumah (KPR) konsumen. Posisi ini memastikan seluruh dokumen dan proses administrasi berjalan lengkap, akurat, tertib, serta sesuai dengan prosedur perusahaan dan ketentuan pihak bank. ",
    technologies: ["Microsoft Office", "Google Workspace", "Sistem Perbankan"],
  },

];

export default function Experience() {
  return (
    <div className="glass-panel rounded-lg p-6">

      <h2 className="
        mb-8 flex items-center gap-3
        text-2xl font-semibold
        text-[#d4e4fa]
      ">
        <span className="text-[#7bd0ff]">
          💼
        </span>

        Pengalaman Kerja
      </h2>

      <div className="relative ml-8">

        {experiences.map((experience) => (
          <div
            key={`${experience.role}-${experience.period}`}
            className="
              timeline-item
              relative mb-8
              last:mb-0
            "
          >

            <div className="timeline-line" />

            <div className="
              mb-2 flex flex-col
              gap-1
              md:flex-row
              md:items-baseline
              md:justify-between
            ">

              <h3 className="
                text-lg font-bold
                text-[#d4e4fa]
              ">
                {experience.role}
              </h3>

              <span className="
                font-mono text-sm
                text-[#7bd0ff]
              ">
                {experience.period}
              </span>

            </div>

            <div className="
              mb-3
              font-mono text-xs
              uppercase tracking-wider
              text-[#c6c6cd]
            ">
              {experience.company}
            </div>

            <p className="
              mb-3
              leading-relaxed
              text-[#c6c6cd]
            ">
              {experience.description}
            </p>

            {experience.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">

                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded
                      bg-[#2c3a4c]
                      px-2 py-1
                      font-mono text-xs
                      text-[#d4e4fa]
                    "
                  >
                    {tech}
                  </span>
                ))}

              </div>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}