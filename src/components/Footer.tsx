export default function Footer() {
  return (
    <footer
      id="contact"
      className="
        w-full
        border-t border-white/10
        bg-[#010f1f]
        py-6
        transition-transform
        duration-200
        hover:-translate-y-1
      "
    >

      <div
        className="
          mx-auto flex max-w-1200px
          flex-col items-center
          justify-between
          gap-4 px-6
          md:flex-row
        "
      >

        <div
          className="
            text-center
            font-mono text-xs
            tracking-wider
            text-[#d4e4fa]
            md:text-left
          "
        >
          © 2026 Irfan Nabilla Arifin.
        </div>

        <div
          className="
            flex flex-wrap
            justify-center gap-5
            font-mono text-sm
            text-[#c6c6cd]
          "
        >

          <a
            href="#"
            className="transition hover:text-[#7bd0ff]"
          >
            GitHub
          </a>

          <a
            href="#"
            className="transition hover:text-[#7bd0ff]"
          >
            LinkedIn
          </a>

          <a
            href="#"
            className="transition hover:text-[#7bd0ff]"
          >
            Twitter
          </a>

          <a
            href="#"
            className="transition hover:text-[#7bd0ff]"
          >
            Back to Top
          </a>

        </div>

      </div>

    </footer>
  );
}