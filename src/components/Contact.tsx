export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Ingin Diskusi?
          </h2>

          <p className="mt-5 text-slate-400">
            Punya project atau ingin berdiskusi? Kirimkan pesan
            kepada saya.
          </p>
        </div>

        <form className="mt-10 space-y-5">
          <input
            type="text"
            placeholder="Nama"
            className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
          />

          <textarea
            rows={6}
            placeholder="Pesan"
            className="w-full resize-none rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
}