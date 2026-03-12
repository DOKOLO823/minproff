"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
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
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

/* --- ANIMATIONS SPECTACULAIRES --- */

const menuVariants: Variants = {
  // Ajoute le type ici
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  // Ajoute le type ici
  closed: { opacity: 0, x: 50 },
  open: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const fadeInUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Gestion précise du hash pour le focus des liens
  useEffect(() => {
    const handleUpdateActive = () => {
      const hash = window.location.hash || "";
      setActiveSection(hash);
    };

    window.addEventListener("hashchange", handleUpdateActive);
    window.addEventListener("load", handleUpdateActive);
    handleUpdateActive();

    return () => {
      window.removeEventListener("hashchange", handleUpdateActive);
      window.removeEventListener("load", handleUpdateActive);
    };
  }, []);

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

          {/* Nav Desktop */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-all duration-300 font-bold relative pb-1 ${
                  activeSection === link.href
                    ? "text-orange-700"
                    : "text-gray-500 hover:text-orange-700"
                }`}
              >
                {link.name}
                {activeSection === link.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-700"
                  />
                )}
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
            className="md:hidden p-2 z-[160] relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* On ne garde que le menu burger ici car le "X" est à l'intérieur du menu maintenant */}
            {!isMenuOpen && <Menu size={28} className="text-gray-900" />}
          </button>
        </div>
      </nav>

      {/* --- MENU MOBILE SPECTACULAIRE --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[150] bg-white flex flex-col p-8 md:hidden"
          >
            {/* Header du Menu avec bouton Fermer */}
            <div className="flex justify-between items-center mb-12">
              <span className="font-bold text-xl tracking-tight text-orange-700">
                Menu.
              </span>

              {/* Bouton Fermer Professionnel */}
              <motion.button
                variants={itemVariants} // L'icône apparaîtra avec une petite animation
                onClick={() => setIsMenuOpen(false)}
                className="p-3 bg-gray-50 hover:bg-orange-50 text-gray-900 hover:text-orange-700 rounded-xl transition-colors border border-gray-100 shadow-sm"
              >
                <X size={24} strokeWidth={2.5} />
              </motion.button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <motion.div key={link.name} variants={itemVariants}>
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`group flex items-center justify-between text-4xl font-black uppercase tracking-tighter transition-all ${
                        isActive
                          ? "text-orange-700 pl-4"
                          : "text-gray-900 hover:text-orange-600"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        {isActive && (
                          <div className="w-2 h-8 bg-orange-700 rounded-full" />
                        )}
                        {link.name}
                      </div>
                      {/* <ArrowRight
                        className={`transition-transform duration-300 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                        size={24}
                      /> */}
                    </a>
                  </motion.div>
                );
              })}

              <motion.div variants={itemVariants} className="mt-8">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full py-6 bg-orange-700 text-white text-center rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-orange-800 transition-transform active:scale-95"
                >
                  Contactez-moi <Mail size={24} />
                </a>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-auto pb-8 text-center"
            >
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                © 2026 Nze Mekou
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- (Inchangée comme demandé) */}
      <section className="relative min-h-[90vh] isolate flex items-center pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="../assets/images/code1.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            style={{ backgroundColor: "#111827" }}
          />
          <div className="absolute inset-0 bg-gray-900/70 z-0" />
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex-[1.2] text-center md:text-left z-10"
            >
              <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-6 mt-6">
                Salut, je m'appelle <br />
                <span className="text-orange-500">Nze Mekou.</span>
              </h1>
              <div className="md:hidden w-full max-w-[260px] mx-auto mb-8">
                <div className="aspect-square bg-gray-800 rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl">
                  <img
                    src="../assets/images/nze/nze.jpg"
                    alt="Nze Mekou Mobile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Développeur Fullstack passionné, je transforme vos idées en
                <span className="font-semibold text-white px-1">
                  {" "}
                  solutions numériques robustes{" "}
                </span>
                conçues pour répondre aux défis réels de votre secteur.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <a
                  href="#portfolio"
                  className="w-full sm:w-auto px-8 py-4 bg-orange-600 text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-orange-700 transition-all group"
                >
                  Voir mes travaux{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <div className="flex items-center gap-2 px-4 py-2.5 border border-white/10 rounded-full text-[11px] md:text-sm font-bold text-gray-300 bg-white/5 backdrop-blur-sm whitespace-nowrap overflow-hidden">
                  <Award className="w-4 h-4 md:w-5 h-5 text-orange-500 shrink-0" />
                  <span className="truncate">
                    Gagnant Hackathon Talent Innovant
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:block flex-1 max-w-md"
            >
              <div className="aspect-square bg-gray-800 rounded-[3rem] overflow-hidden border-[12px] border-white/5 shadow-2xl relative group">
                <img
                  src="../assets/images/nze/nze.jpg"
                  alt="Nze Mekou Desktop"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- EXPERTISE SECTION --- */}
      <section id="expertise" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          {/* Titre avec animation au scroll explicite */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16 text-center md:text-left"
          >
            <h2 className="text-xs font-black text-orange-700 uppercase tracking-[0.3em] mb-3">
              Compétences
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
              Mon Expertise Technique
            </h3>
            <div className="h-1.5 w-20 bg-orange-600 mt-6 rounded-full mx-auto md:mx-0"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ExpertiseCard
              icon={<Code2 />}
              title="Dév. Informatique"
              desc="Maîtrise du langage C et des algorithmes complexes pour des performances optimales."
            />
            <ExpertiseCard
              icon={<Layout />}
              title="Web Development"
              desc="Création d'interfaces intuitives et réactives avec Next.js et écosystèmes modernes."
            />
            <ExpertiseCard
              icon={<Database />}
              title="Bases de Données"
              desc="Conception d'architectures de données robustes sous MySQL et PostgreSQL."
            />
            <ExpertiseCard
              icon={<Wrench />}
              title="Solutions Locales"
              desc="Développement d'outils sur mesure répondant aux besoins spécifiques du terrain."
            />
          </div>
        </div>
      </section>

      {/* --- SECTION EXPÉRIENCE ET ENGAGEMENT PROFESSIONNEL --- */}
      <section
        id="experience"
        className=" bg-white px-6 border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto">
          {/* Titre de section aligné sur le style global */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16 text-center md:text-left"
          >
            <h2 className="text-xs font-black text-orange-700 uppercase tracking-[0.3em] mb-3">
              Parcours & Engagement
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
              L'ingénierie pour les réalités locales
            </h3>
            <div className="h-1.5 w-20 bg-orange-600 mt-6 rounded-full mx-auto md:mx-0"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* COLONNE GAUCHE (5/12) : LA VISION RÉDACTIONNELLE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-5 flex flex-col"
            >
              <div className="relative border-l-4 border-orange-600 pl-6 md:pl-8 mb-10 bg-gray-50/50 py-8 rounded-r-2xl">
                <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed italic">
                  "Au cours de ma formation et de mes stages, j'ai participé à
                  la conception de projets informatiques orientés vers la
                  gestion de données et les applications web locales."
                </p>
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg">
                <p>
                  Je travaille notamment sur des systèmes numériques visant à{" "}
                  <span className="text-gray-900 font-semibold">
                    améliorer la gestion d’informations
                  </span>{" "}
                  dans différents contextes.
                </p>
                <p>
                  Mon approche combine{" "}
                  <span className="text-gray-900 font-semibold text-orange-700">
                    rigueur technique et pragmatisme
                  </span>
                  , en mettant l'accent sur des piliers fondamentaux :
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 pt-2">
                  {[
                    "Solutions Intuitives",
                    "Fonctionnalité Optimale",
                    "Adaptation Locale",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-bold text-gray-800 uppercase tracking-tight"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 flex items-baseline gap-3">
                <span className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter">
                  03
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-900 uppercase tracking-widest">
                    Années
                  </span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">
                    D'Expertise Terrain
                  </span>
                </div>
              </div>
            </motion.div>

            {/* COLONNE DROITE (7/12) : COMPÉTENCES MÉTIERS - Cards Professionnelles */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {[
                {
                  title: "Analyse & Conception",
                  desc: "Élaboration de cahiers des charges techniques et modélisation d'architectures numériques optimisées pour les problématiques complexes.",
                  icon: <Layout className="w-5 h-5 md:w-6 h-6" />,
                },
                {
                  title: "Gestion de Données",
                  desc: "Mise en place de schémas relationnels robustes et gestion de flux critiques pour garantir l'intégrité et la sécurité des données.",
                  icon: <Database className="w-5 h-5 md:w-6 h-6" />,
                },
                {
                  title: "Ingénierie Pratique",
                  desc: "Maîtrise complète des cycles de développement, du prototypage à la mise en production de solutions locales performantes.",
                  icon: <Wrench className="w-5 h-5 md:w-6 h-6" />,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUp}
                  className="group relative bg-white border border-gray-100 p-6 md:p-10 hover:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col sm:flex-row gap-6 md:gap-8 items-start rounded-2xl"
                >
                  {/* Container Icône */}
                  <div className="shrink-0 p-4 bg-gray-50 text-gray-700 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 rounded-xl">
                    {item.icon}
                  </div>

                  <div className="flex-grow">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-orange-700 transition-colors">
                      {item.title}
                    </h4>
                    <div className="h-1 w-12 bg-orange-600/20 group-hover:w-20 group-hover:bg-orange-600 mb-4 transition-all duration-500"></div>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed italic">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO SECTION --- */}
      <section id="portfolio" className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          {/* Titre avec animation au scroll explicite */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16 text-center md:text-left"
          >
            <h2 className="text-xs font-black text-orange-700 uppercase tracking-[0.3em] mb-3">
              Réalisations
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
              Projets Sélectionnés
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Projet 1 : Santé & Social */}
            <ProjectCard
              images={[
                "../assets/images/nze/s1.jpeg",
                "../assets/images/nze/s2.jpeg", // Image secondaire pour le test
                "../assets/images/nze/s3.jpeg", // Image tertiaire pour le test
              ]}
              category="Santé & Social"
              title="Suivi Maternel Rural"
              desc="Une solution logicielle conçue pour les zones à connectivité limitée, permettant aux sages-femmes du Grand-Nord de digitaliser le suivi des patientes et d'anticiper les risques médicaux."
              tags={["C#", "SQLite", "Bootstrap"]}
            />

            {/* Projet 2 : Gestion Commerciale */}
            <ProjectCard
              images={[
                "../assets/images/nze/b1.jpeg",
                "../assets/images/nze/b2.jpeg",
              ]}
              category="Gestion Commerciale"
              title="Gestion de Boutique"
              desc="Plateforme complète de gestion de stock en temps réel avec système de facturation automatisé, optimisée pour les commerçants locaux souhaitant sécuriser leurs transactions."
              tags={["PHP", "MySQL", "JavaScript"]}
            />
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- (Inchangée) */}
      <section
        id="contact"
        className="py-24 px-6 bg-gray-900 text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto text-center md:text-left">
          {/* Contenu contact existant... */}
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
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-orange-500 border border-white/10">
                    <Mail size={20} />
                  </div>
                  <a
                    href="mailto:nzemekoualandany@gmail.com"
                    className="hover:text-orange-500 transition-colors"
                  >
                    nzemekoualandany@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 justify-center md:justify-start">
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
              <p className="text-gray-400 text-sm mb-8">
                Réponse rapide garantie via WhatsApp.
              </p>
              <a
                href="https://wa.me/237654092698"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full max-w-[280px]"
              >
                <button className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-500/10">
                  <MessageCircle size={20} /> <span>WhatsApp</span>
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

/* --- SOUS-COMPOSANTS REVISITÉS --- */

function ExpertiseCard({ icon, title, desc }: any) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      // Design sérieux : bordure fine, ombre très légère, accent orange discret au survol
      className="relative bg-white p-8 rounded-2xl border border-gray-100 border-orange-500/30 transition-all duration-300 hover:shadow-xl group overflow-hidden"
    >
      {/* Petit indicateur visuel au survol */}
      <div className="absolute top-0 left-0 w-1 h-0 bg-orange-600 h-full transition-all duration-300" />

      <div className="mb-6 w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-gray-700 bg-orange-600 text-white transition-all duration-300">
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <h4 className="font-bold text-xl mb-3 text-gray-900">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function ProjectCard({ images, category, title, desc, tags }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  React.useEffect(() => {
    if (images.length <= 1 || showModal) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length, showModal]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="group bg-white rounded-[1.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-orange-500/20 transition-all duration-500 flex flex-col h-full"
      >
        {/* Image / Carousel Section */}
        <div className="relative h-72 w-full overflow-hidden bg-gray-100 group/img">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              initial={{ opacity: 0.8, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0.8, x: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full h-full object-cover"
              alt={`${title} - ${currentIndex}`}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />

          {/* Bouton Zoom */}
          <button
            onClick={() => setShowModal(true)}
            className="absolute top-4 right-4 p-2.5 backdrop-blur-md rounded-full shadow-lg translate-y-2 opacity-100 translate-y-0 transition-all duration-300 bg-orange-600 text-white z-20"
          >
            <Maximize2 size={18} />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 bg-white/20 hover:bg-white text-white hover:text-orange-600 rounded-full backdrop-blur-sm opacity-0 group-hover/img:opacity-100 transition-all z-20"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-white/20 hover:bg-white text-white hover:text-orange-600 rounded-full backdrop-blur-sm opacity-0 group-hover/img:opacity-100 transition-all z-20"
              >
                <ChevronRight size={20} />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                {images.map((_: any, idx: number) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(idx);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? "bg-orange-500 w-5" : "bg-white/50 w-1.5"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Card Content */}
        <div className="p-8 border-t border-gray-50 flex-grow">
          <span className="text-orange-700 text-[10px] font-black uppercase tracking-[0.2em] mb-3 block">
            {category}
          </span>
          <h4 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-orange-700 transition-colors">
            {title}
          </h4>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3 italic">
            {desc}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag: string) => (
              <span
                key={tag}
                className="text-[10px] bg-gray-50 text-gray-500 px-3 py-1.5 rounded-lg border border-gray-100 font-bold uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* --- MODAL ZOOM AMELIORE --- */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setShowModal(false)}
          >
            {/* Bouton Fermer (Fonctionnel) */}
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[210]"
              onClick={() => setShowModal(false)}
            >
              <X size={40} />
            </button>

            <div
              className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Côté Gauche : Image & Navigation */}
              <div className="md:w-2/3 bg-gray-100 relative flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
                <img
                  src={images[currentIndex]}
                  className="w-full h-full object-contain"
                  alt="View"
                />

                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 p-2 bg-black/20 hover:bg-orange-600 text-white rounded-full transition-all"
                    >
                      <ChevronLeft size={32} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 p-2 bg-black/20 hover:bg-orange-600 text-white rounded-full transition-all"
                    >
                      <ChevronRight size={32} />
                    </button>
                    {/* Bulles sous l'image dans le modal */}
                    <div className="absolute bottom-6 flex gap-2">
                      {images.map((_: any, idx: number) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          className={`h-2.5 rounded-full transition-all ${idx === currentIndex ? "bg-orange-600 w-8" : "bg-black/20 w-2.5"}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Côté Droit : Infos complètes avec Scroll */}
              <div className="md:w-1/3 p-8 md:p-12 flex flex-col h-full bg-white overflow-y-auto">
                <span className="text-orange-700 text-xs font-black uppercase tracking-widest mb-4">
                  {category}
                </span>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {title}
                </h3>

                <div className="flex-grow">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-tighter mb-2">
                    Description du projet
                  </h4>
                  <p className="text-gray-600 leading-relaxed italic mb-8">
                    {desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-tighter mb-4">
                    Technologies utilisées
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-50 text-orange-800 px-4 py-2 rounded-xl font-bold border border-orange-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
