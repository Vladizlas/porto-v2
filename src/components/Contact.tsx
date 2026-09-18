"use client";

import { useState } from "react";

type ContactItem = {
  title: string;
  value: string;
  href?: string;
  external?: boolean;
};

const contacts: ContactItem[] = [
  {
    title: "Email",
    value: "irfannabilla77@gmail.com",
    href: "mailto:irfannabilla77@gmail.com",
  },
  {
    title: "GitHub",
    value: "github.com/Vladizlas/",
    href: "https://github.com/Vladizlas/",
    external: true,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/irfan-nabilla-51a2b827a/",
    href: "https://www.linkedin.com/in/irfan-nabilla-51a2b827a/",
    external: true,
  },
  {
    title: "WhatsApp",
    value: "081374528681",
    href: "https://wa.me/6281374528681",
    external: true,
  },
];

function ContactCard({
  contact,
  onWhatsAppClick,
}: {
  contact: ContactItem;
  onWhatsAppClick: () => void;
}) {
  const content = (
    <>
      <h3 className="text-lg font-semibold text-gray-900">
        {contact.title}
      </h3>

      <p className="mt-2 text-gray-600">{contact.value}</p>
    </>
  );

  // Jika WhatsApp, buka dialog
  if (contact.title === "WhatsApp") {
    return (
      <button
        type="button"
        onClick={onWhatsAppClick}
        className="rounded-xl border border-gray-200 bg-white p-6 text-left transition hover:bg-gray-50"
      >
        {content}
      </button>
    );
  }

  return (
    <a
      href={contact.href}
      target={contact.external ? "_blank" : undefined}
      rel={contact.external ? "noopener noreferrer" : undefined}
      className="rounded-xl border border-gray-200 bg-white p-6 transition hover:bg-gray-50"
    >
      {content}
    </a>
  );
}

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="contact" className="border-t ">
      <div className="mx-auto max-w-6xl px-6 py-24">

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Mari Terhubung
          </h2>

          <p className="mt-6 text-lg leading-8 text-white">
            Jika ingin berdiskusi, berkolaborasi, atau mengetahui lebih lanjut
            tentang saya dan project yang saya kerjakan, silakan hubungi saya.
          </p>
        </div>

        {/* Info Grid */}
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
          {contacts.map((contact) => (
            <ContactCard
              key={contact.title}
              contact={contact}
              onWhatsAppClick={() => setIsOpen(true)}
            />
          ))}
        </div>
      </div>

      {/* Contact Form Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6">
          <div className="w-full max-w-3xl rounded-2xl bg-white p-8 shadow-xl md:p-10">

            {/* Contact Form */}
            <form className="space-y-6">

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Enter your name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-gray-900"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Enter your email address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-gray-900"
                />
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Describe your project
                </label>

                <textarea
                  id="project"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-gray-900"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700"
                >
                  Send Message
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </section>
  );
}