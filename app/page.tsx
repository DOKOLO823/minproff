"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Users,
  Heart,
  Shield,
  Globe,
  Award,
} from "lucide-react";

const MinproffLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Couleurs : Vert profond pour le sérieux, Rouge pour l'accentuation institutionnelle
  const colors = {
    primary: "text-emerald-900",
    accent: "bg-emerald-700",
    hover: "hover:bg-emerald-800",
    flagRed: "bg-red-600",
    flagYellow: "bg-yellow-400",
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* 1. Header Image (Bandeau Officiel) */}
      <div className="w-full bg-white border-b border-gray-200">
        <div className="w-full md:max-w-7xl mx-auto px-1 py-2 flex md:justify-between md:items-center">
          <img
            src="../assets/images/minproff.jpeg"
            alt="Logo MINPROFF"
            className="w-full md:w-auto h-34 md:h-16"
          />
          <div className="hidden md:block text-right">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
              République du Cameroun
            </p>
            <p className="text-xs italic text-gray-400">
              Paix - Travail - Patrie
            </p>
          </div>
        </div>
      </div>

      {/* 2. Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-extrabold text-xl tracking-tighter text-emerald-900">
                MINPROFF
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {[
                "Le Ministère",
                "Missions",
                "Programmes",
                "Actualités",
                "Documentation",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
              <button
                className={`${colors.accent} text-white px-5 py-2 rounded-sm text-sm font-semibold ${colors.hover} transition-all shadow-md`}
              >
                Contactez-nous
              </button>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Le Ministère", "Missions", "Programmes", "Actualités"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50 rounded-md"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
          </div>
        )}
      </nav>

      {/* 3. Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="../assets/images/hero.jpg"
            className="w-full h-full object-cover brightness-[0.3]"
            alt="Hero Background"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl text-white">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-1 bg-yellow-400"></div>
              <span className="uppercase tracking-widest text-sm font-bold text-yellow-400">
                Institutionnel
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Promouvoir la Femme, <br />
              <span className="text-emerald-400">Protéger la Famille.</span>
            </h1>
            <p className="text-lg text-slate-200 mb-8 leading-relaxed">
              Le Ministère de la Promotion de la Femme et de la Famille œuvre
              pour l'égalité des chances et le renforcement des socles sociaux
              du Cameroun.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-emerald-900 px-8 py-4 rounded-sm font-bold flex items-center hover:bg-emerald-50 transition-all group">
                Découvrir nos actions
                <ChevronRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>
              <button className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-sm font-bold hover:bg-white/10 transition-all">
                Plan d'Action 2026
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Missions (Cards) */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Missions Régaliennes
          </h2>
          <div className="h-1.5 w-20 bg-emerald-700 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users size={32} />,
              title: "Protection Sociale",
              desc: "Assurer l'épanouissement des familles et le respect des droits fondamentaux.",
            },
            {
              icon: <Award size={32} />,
              title: "Promotion de la Femme",
              desc: "Renforcement des capacités économiques et autonomisation des femmes.",
            },
            {
              icon: <Shield size={32} />,
              title: "Égalité des Genres",
              desc: "Lutte contre toutes les formes de discriminations et de violences.",
            },
          ].map((mission, idx) => (
            <div
              key={idx}
              className="bg-white p-10 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-emerald-700 mb-6 bg-emerald-50 w-16 h-16 flex items-center justify-center rounded-lg italic">
                {mission.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">
                {mission.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{mission.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Présentation Institutionnelle */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Texte à Gauche */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-emerald-900 leading-tight">
                Ministère de la Promotion de la Femme et de la Famille
                (MINPROFF)
                <span className="block text-lg font-medium text-emerald-600 mt-2 italic">
                  Ministry of Women's Empowerment and the Family
                </span>
              </h2>

              <div className="prose prose-emerald text-slate-700 leading-relaxed text-justify space-y-4">
                <p>
                  Le{" "}
                  <strong>
                    Ministère de la Promotion de la Femme et de la Famille
                    (MINPROFF)
                  </strong>{" "}
                  occupe une place stratégique au sein de l’État camerounais. Il
                  est responsable de l’élaboration et de la mise en œuvre de la
                  politique du Gouvernement en matière de promotion de la femme,
                  de protection de l'enfant et de la famille.
                </p>
                <p className="hidden md:block">
                  Le MINPROFF conçoit et coordonne les politiques relatives à
                  l'égalité des chances, en lien permanent avec les partenaires
                  au développement et les autres départements ministériels. Ses
                  missions fondamentales incluent l'amélioration constante du
                  statut juridique et social de la femme, ainsi que le
                  renforcement de la cohésion familiale.
                </p>

                <hr className="border-emerald-100 my-6" />

                <p className="italic text-slate-500 text-sm">
                  The Ministry (MINPROFF) holds a strategic position. It is
                  responsible for the implementation of government policy on
                  women's empowerment and family protection, ensuring the
                  improvement of women's legal and social status across the
                  nation.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 px-4 py-2 border border-emerald-100 hover:bg-emerald-100 transition-all">
                  Télécharger l'Organigramme
                </button>
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 px-4 py-2 border border-emerald-100 hover:bg-emerald-100 transition-all">
                  Guide de l'Usager
                </button>
              </div>
            </div>

            {/* Logo à Droite */}
            <div className="relative flex justify-center items-center p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-inner overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
              <img
                src="../assets/images/minproff.jpeg"
                alt="Sceau de la République"
                className="relative z-10 w-full max-w-sm drop-shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-4 text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">
                République du Cameroun
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos Projets */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-2">
              {/* <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">
                Portfolio
              </span> */}
              <h2 className="text-3xl font-bold text-slate-900">Nos projets</h2>
              <div className="h-1 w-12 bg-emerald-600"></div>
            </div>
            {/* <button className="text-sm font-bold text-emerald-800 hover:underline">
              Voir tous les projets
            </button> */}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Projet d'Appui à l'Entrepreneuriat Féminin",
                zone: "National",
                img: "../assets/images/card.jpg",
                status: "En cours",
              },
              {
                title: "Modernisation des Centres de Promotion (CPFF)",
                zone: "Zones Rurales",
                img: "../assets/images/card.jpg",
                status: "Phase 2",
              },
              {
                title: "Programme de Lutte contre les VBG",
                zone: "Septentrion & Est",
                img: "../assets/images/card.jpg",
                status: "Prioritaire",
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-sm overflow-hidden border border-slate-200 hover:border-emerald-300 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-700 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-tighter">
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-[10px] font-bold text-emerald-600 mb-3 uppercase tracking-widest">
                    <Globe size={12} className="mr-2" /> {project.zone}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <button className="flex items-center text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-emerald-800 transition-all">
                    Détails du projet{" "}
                    <ChevronRight size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Actualités (Modern Grid) */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold">Dernières Actualités</h2>
              <p className="text-slate-500 mt-2">
                Suivez les activités du Ministère sur le terrain.
              </p>
            </div>
            <button className="hidden md:block text-emerald-800 font-bold border-b-2 border-emerald-800 pb-1">
              Voir tout
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src="../assets/images/hero.jpg"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="News"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] px-2 py-1 font-bold uppercase">
                    Important
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-slate-400 mb-2">07 Mars 2026</p>
                  <h4 className="font-bold text-slate-800 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    Célébration de la Journée Internationale de la Femme à
                    Yaoundé
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Nous Contacter */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-emerald-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            {/* Côté Gauche : Informations de Contact */}
            <div className="md:w-1/3 bg-emerald-800 p-10 md:p-12 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">
                  Nous Contacter
                </h2>
                <p className="text-emerald-100/80 mb-10 leading-relaxed">
                  Nos services sont à votre écoute pour toute demande
                  d'information ou assistance relative aux droits de la femme et
                  de la famille.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-700/50 p-3 rounded-lg">
                      <Globe size={20} className="text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                        Siège Social
                      </p>
                      <p className="text-sm">
                        Immeuble Ministériel N°1, Yaoundé, Cameroun
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-700/50 p-3 rounded-lg">
                      <Users size={20} className="text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                        Email Officiel
                      </p>
                      <p className="text-sm">contact@minproff.gov.cm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-emerald-700">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400">
                  Horaires d'ouverture
                </p>
                <p className="text-sm mt-2">Lundi - Vendredi : 07h30 - 15h30</p>
              </div>
            </div>

            {/* Côté Droit : Le Formulaire (Version Corrigée) */}
            <div className="md:w-2/3 bg-white p-6 md:p-10">
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Nom */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-black uppercase tracking-wider text-slate-700">
                      Nom Complet
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Dokolo Yvan"
                      className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-sm focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/5 outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-black uppercase tracking-wider text-slate-700">
                      Adresse Email
                    </label>
                    <input
                      type="email"
                      placeholder="yvan.zolataire@exemple.cm"
                      className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-sm focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/5 outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Téléphone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-black uppercase tracking-wider text-slate-700">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      placeholder="+237 6XX XX XX XX"
                      className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-sm focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/5 outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Objet */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-black uppercase tracking-wider text-slate-700">
                      Objet de la demande
                    </label>
                    <div className="relative">
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-sm focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/5 outline-none appearance-none transition-all cursor-pointer">
                        <option>Information Générale</option>
                        <option>Protection de la Famille</option>
                        <option>Appui à l'Entrepreneuriat</option>
                        <option>Signalement / VBG</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ChevronRight size={14} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-black uppercase tracking-wider text-slate-700">
                    Votre Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Décrivez votre demande avec précision..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-sm focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/5 outline-none transition-all resize-none placeholder:text-slate-400"
                  ></textarea>
                </div>

                {/* Bouton Envoyer */}
                <div className="pt-2">
                  <button className="whitespace-nowrap inline-flex items-center gap-3 bg-emerald-700 text-white px-8 py-4 rounded-md font-bold uppercase text-[11px] tracking-[0.15em] hover:bg-emerald-800 active:scale-95 transition-all shadow-lg shadow-emerald-900/10">
                    Envoyer le formulaire
                    <ChevronRight size={16} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-6 italic">MINPROFF</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Le Ministère de la Promotion de la Femme et de la Famille est
              l'organe du gouvernement chargé de la mise en œuvre de la
              politique nationale en matière de promotion de la femme.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-emerald-400">
              Liens Utiles
            </h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Portail Gouvernemental
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Projets en cours
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation PDF
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Plan Stratégique
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-emerald-400">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li>Yaoundé, Cameroun</li>
              <li>Email: contact@minproff.cm</li>
              <li>Tél: +237 222 XX XX XX</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-emerald-400">
              Newsletter
            </h4>
            <div className="flex">
              <input
                type="email"
                placeholder="votre email"
                className="bg-slate-800 border-none px-4 py-2 w-full text-sm focus:ring-1 ring-emerald-500 outline-none"
              />
              <button className="bg-emerald-700 px-4 py-2">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pt-8 flex flex-col md:row justify-between items-center text-xs text-slate-500">
          <p>
            © 2026 Ministère de la Promotion de la Femme et de la Famille. Tous
            droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <div className="flex space-x-1">
              <div className="w-2 h-4 bg-emerald-600"></div>
              <div className="w-2 h-4 bg-red-600"></div>
              <div className="w-2 h-4 bg-yellow-400"></div>
            </div>
            <span>Designed for Excellence</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MinproffLanding;
