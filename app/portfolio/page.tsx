"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Database,
  Layout,
  Wrench,
  Mail,
  Award,
  Phone,
  MessageCircle,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

/* --- ANIMATIONS --- */
const fadeInUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Expertise", href: "#expertise" },
    { name: "Projets", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-[100] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-700 rounded-lg flex items-center justify-center text-white font-bold">
              N
            </div>
            <span className="font-bold text-xl tracking-tight">NzeMekou.</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-orange-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-orange-700 text-white px-5 py-2.5 rounded-full font-bold hover:bg-orange-800 transition-all text-sm"
            >
              Contactez-moi
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-white border-b p-6 flex flex-col gap-4 shadow-xl"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-semibold"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 px-6 overflow-hidden">
        {/* Background Image avec Overlay */}
        <div className="absolute inset-0 -z-10">
          <img src="" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Colonne Gauche : Titre (Toujours en haut) */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex-1 text-center md:text-left z-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                Disponible pour de nouveaux projets
              </div>

              <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-6">
                Salut, je m'appelle <br />
                <span className="text-orange-500">Nze Mekou.</span>
              </h1>

              {/* Photo Mobile (S'affiche ici seulement sur mobile) */}
              <div className="md:hidden w-full max-w-[280px] mx-auto mb-8">
                <div className="aspect-square bg-gray-800 rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl">
                  <img
                    src="image1.jpeg"
                    alt="Nze Mekou"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Développeur Fullstack passionné, je transforme vos idées en
                <span className="font-semibold text-white px-1">
                  solutions numériques robustes
                </span>
                conçues pour répondre aux défis réels de votre secteur.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <a
                  href="#portfolio"
                  className="w-full sm:w-auto px-8 py-4 bg-orange-600 text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-orange-700 transition-all group"
                >
                  Voir mes travaux
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>

                {/* Badge Hackathon (Optimisé pour ne pas wrap brutalement) */}
                <div className="flex items-center gap-2 px-4 py-2.5 border border-white/10 rounded-full text-[11px] md:text-sm font-bold text-gray-300 bg-white/5 backdrop-blur-sm whitespace-nowrap">
                  <Award className="w-4 h-4 md:w-5 h-5 text-orange-500 shrink-0" />
                  Gagnant Hackathon Talent Innovant
                </div>
              </div>
            </motion.div>

            {/* Photo Desktop (Cachée sur mobile) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:block flex-1 max-w-md"
            >
              <div className="aspect-square bg-gray-800 rounded-[3rem] overflow-hidden border-[12px] border-white/5 shadow-2xl relative group">
                <img
                  src="image1.jpeg"
                  alt="Nze Mekou"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- EXPERTISE SECTION --- */}
      <section id="expertise" className="py-24 bg-gray-50/50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-xs font-black text-orange-700 uppercase tracking-[0.3em] mb-3">
              Compétences
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold">
              Mon Expertise Technique
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ExpertiseCard
              icon={<Code2 />}
              title="Dév. Informatique"
              desc="Maîtrise du langage C et des algorithmes complexes."
            />
            <ExpertiseCard
              icon={<Layout />}
              title="Web Development"
              desc="Interfaces modernes avec Next.js et PHP."
            />
            <ExpertiseCard
              icon={<Database />}
              title="Bases de Données"
              desc="Architecture MySQL sécurisée et performante."
            />
            <ExpertiseCard
              icon={<Wrench />}
              title="Solutions Locales"
              desc="Systèmes adaptés aux défis des communautés."
            />
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO SECTION --- */}
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-xs font-black text-orange-700 uppercase tracking-[0.3em] mb-3">
              Réalisations
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold">
              Projets Sélectionnés
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ProjectCard
              img="image3.jpeg"
              category="Santé & Social"
              title="Suivi Maternel Rural"
              desc="Application locale pour les sages-femmes du Grand-Nord."
              tags={["C#", "SQLite", "Bootstrap"]}
            />
            <ProjectCard
              img="image4.jpeg"
              category="Gestion Commerciale"
              title="Gestion de Boutique"
              desc="Système complet de stock et facturation pour commerçants."
              tags={["PHP", "MySQL", "JavaScript"]}
            />
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section
        id="contact"
        className="py-24 px-6 bg-gray-900 text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight italic">
                Prêt à <span className="text-orange-500">innover ?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-orange-500 border border-white/10">
                    <Mail size={20} />
                  </div>
                  <a
                    href="mailto:nzemekoualandany@gmail.com"
                    className="text-sm md:text-lg hover:text-orange-500 transition-colors truncate block"
                  >
                    nzemekoualandany@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-orange-500 border border-white/10">
                    <Phone size={20} />
                  </div>
                  <a
                    href="tel:+237654092698"
                    className="text-lg font-bold hover:text-orange-500 transition-colors"
                  >
                    +237 654 092 698
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 backdrop-blur-md"
            >
              <h3 className="text-xl font-bold mb-2">Discutons en direct</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Réponse rapide garantie pour vos besoins de développement.
              </p>

              <a
                href="https://wa.me/237654092698"
                target="_blank"
                rel="noopener noreferrer"
                className="block max-w-[280px]"
              >
                <button className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-green-500/10">
                  <MessageCircle size={20} className="shrink-0" />
                  <span>WhatsApp</span>
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-gray-900 border-t border-white/5 text-center px-6">
        <p className="text-gray-500 text-[10px] font-medium tracking-widest uppercase italic">
          © 2026 Nze Mekou Alain Dany • Conçu avec passion au Cameroun
        </p>
      </footer>
    </div>
  );
}

/* --- SOUS-COMPOSANTS --- */

function ExpertiseCard({ icon, title, desc }: any) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-white p-8 rounded-3xl border border-gray-100 group hover:border-orange-200 transition-all shadow-sm"
    >
      <div className="mb-6 w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-700 group-hover:bg-orange-700 group-hover:text-white transition-all">
        {icon}
      </div>
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function ProjectCard({ img, category, title, desc, tags }: any) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
    >
      <div className="relative h-60 md:h-72 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-8">
        <span className="text-orange-700 text-[10px] font-black uppercase tracking-widest mb-2 block">
          {category}
        </span>
        <h4 className="text-xl font-bold mb-3">{title}</h4>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">
          {desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag: string) => (
            <span
              key={tag}
              className="text-[9px] bg-gray-100 text-gray-500 px-3 py-1 rounded-full font-bold uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
