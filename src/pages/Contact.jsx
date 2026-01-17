import React from "react";
import MapBanner from "../components/Banner";
import contact from "../img/contact_us.jpg";

// pages/Contact.jsx  ou  components/ContactSection.jsx
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode integrar com Formspree, EmailJS, backend próprio, etc.
    console.log("Formulário enviado:", formData);
    alert("Mensagem enviada! Em breve entraremos em contacto.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Contacte-nos
          </h1>
          <p className="mt-5 text-xl text-gray-600 max-w-3xl mx-auto">
            Tem dúvidas sobre mapas, levantamentos, cursos ou serviços
            geoespaciais? Estamos prontos para ajudar. Fale connosco!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Formulário - ocupa 2 colunas em desktop */}
          <div className="lg:col-span-2 bg-white shadow-xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Envie-nos uma mensagem
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Digite o seu nome"
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+244 xxx xxx xxxx"
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seuemail@exemplo.com"
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Como podemos ajudar você hoje?"
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-blue-700 text-white font-semibold shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de contacto */}
          <div className="space-y-8">
            {/* Card de Contacto */}
            <div className="bg-white shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Informações de Contacto
              </h3>

              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="text-blue-600 text-xl mt-1">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">
                      Telefone
                    </p>
                    <p className="text-lg text-gray-900">+244 (xxx) xxx-xxxx</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-blue-600 text-xl mt-1">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <a
                      href="mailto:info@geoes42.ao"
                      className="text-lg text-blue-700 hover:text-blue-800 transition"
                    >
                      info@geoes42.ao
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-blue-600 text-xl mt-1">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">
                      Localização
                    </p>
                    <p className="text-lg text-gray-900">Luanda, Angola</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horário */}
            <div className="bg-white shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Horário de Atendimento
              </h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex justify-between">
                  <span>Segunda a Sexta-feira:</span>
                  <span className="font-medium">08:00 – 17:00</span>
                </p>
                {/* Caso exista fim de semana, pode adicionar aqui */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <Contact />
    </>
  );
}
