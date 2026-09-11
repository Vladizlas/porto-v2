import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Mini-POS",
    description:
      "Mini-POS merupakan aplikasi kasir sederhana yang dirancang untuk membantu proses transaksi penjualan dan pengelolaan data toko secara terkomputerisasi. Aplikasi ini mencakup fitur pengelolaan produk, transaksi penjualan, stok barang, serta pencatatan dan monitoring data transaksi.",

    technologies: ["Next.js", "Tailwind.css", "GitHub"],
    large: true,
    accent: "blue" as const,
  },
  {
    title: "Administrasi Legal & KPR Developer Perumahan",
    description:
      "Menjadi penghubung antara developer, konsumen, bank, dan notaris/PPAT agar proses pembelian rumah, khususnya melalui KPR, berjalan lancar dari sisi administrasi dan legalitas.",

    technologies: ["Microsoft Office", "Google Workspace", "Sistem Perbankan"],
    accent: "green" as const,
  },
  {
    title: "Digital Marketing",
    description:
      "Bertanggung jawab dalam merencanakan, menjalankan, dan mengoptimalkan strategi pemasaran digital untuk meningkatkan brand awareness, menjangkau target audiens, serta menghasilkan leads dan penjualan melalui berbagai platform digital.",
    technologies: ["Canva", "Adobe", "Capcut"],
    accent: "blue" as const,
  },

];

export default function FeaturedWork() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-1200px px-6 py-20"
    >

      <header className="mb-12">
        <h2 className="
          mb-4 text-4xl font-bold
          tracking-tight text-[#d4e4fa]
        ">
          Featured Projects
        </h2>
      </header>

      <div className="
        grid grid-cols-1
        gap-6
        md:grid-cols-2
        lg:grid-cols-3
      ">

        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}

      </div>

    </section>
  );
}