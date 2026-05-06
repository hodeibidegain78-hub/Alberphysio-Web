'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const OPINIONES = [
  {
    author: "María L.",
    role: "Corredora amateur",
    text: "Gran profesionalidad y trato cercano. Acudí con una fascitis plantar que llevaba arrastrando meses y desde la primera sesión noté la mejoría con el plan de ejercicios propuesto."
  },
  {
    author: "Jon A.",
    role: "Post-operatorio",
    text: "Un seguimiento personalizado de 10. Alberto no solo me ayudó a recuperar la movilidad del hombro, sino que me dio la seguridad para volver a entrenar fuerza sin miedo."
  },
  {
    author: "Ane R.",
    role: "Trabajo de oficina",
    text: "He pasado por muchas clínicas en Bilbao y sin duda me quedo aquí. No te despachan en 20 minutos, te escuchan y van a la raíz del problema lumbar que tenía."
  },
  {
    author: "Mikel G.",
    role: "Jugador de Pádel",
    text: "Llegué por una epicondilitis aguda. Tratamiento manual excelente combinado con ecografía para ver la evolución real. Recomiendo Alberphysio al 100%."
  },
  {
    author: "Sara V.",
    role: "Crossfitera",
    text: "Mejoría desde la primera sesión tras un esguince duro. Lo mejor es que te enseña a conocer tu propio cuerpo y a no depender siempre del fisio."
  },
  {
    author: "David E.",
    role: "Paciente crónico",
    text: "Por primera vez alguien me explicó por qué me dolía la espalda de verdad. Profesional, implicado y muy claro en las pautas."
  }
];

export default function OpinionesPage() {
  const firstRow = OPINIONES.slice(0, 3);
  const secondRow = OPINIONES.slice(3, 6);

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2);
  };

  return (
    <div className="pt-32 pb-32 min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 text-yellow-500 mb-6 bg-white py-2 px-4 rounded-full shadow-sm border border-slate-100"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-700 ml-2">93+ Reseñas Verificadas</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 mb-6 leading-[1.1]"
          >
            Pacientes que ya han recuperado <br className="hidden md:block"/>
            <span className="font-medium">su calidad de vida</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Descubre las historias de personas que confiaron en Alberphysio para superar el dolor y retomar sus actividades en Bilbao.
          </motion.p>
        </div>

        {/* First Row of Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 text-left">
          {firstRow.map((opinion, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col h-full border border-slate-100 relative group overflow-hidden"
            >
              <Quote className="w-24 h-24 text-slate-50 absolute -top-4 -right-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
              
              <div className="flex text-yellow-400 mb-8 relative z-10">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              
              <p className="text-slate-700 leading-relaxed text-[15px] font-medium mb-10 flex-1 relative z-10">
                &quot;{opinion.text}&quot;
              </p>
              
              <div className="flex items-center space-x-4 relative z-10 pt-6 border-t border-slate-50">
                <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 font-semibold tracking-wider text-sm shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                  {getInitials(opinion.author)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 leading-none mb-1.5">{opinion.author}</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 leading-none">{opinion.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Confianza / Trust Split Section */}
        <div className="my-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* IZQUIERDA: Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[4/5] lg:aspect-[3/4] max-w-lg mx-auto lg:max-w-none rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] group"
          >
            <Image
              src="https://i.ibb.co/DH3HSPNg/Foto-confianza.jpg"
              alt="Alberto Pinilla trabajando de cerca con deportistas"
              fill
              className="object-cover object-[center_30%] scale-105 transition-transform duration-1000 group-hover:scale-110 contrast-[1.1] saturate-[1.1]"
              referrerPolicy="no-referrer"
            />
            {/* Overlay sutil para editorial premium */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent mix-blend-multiply opacity-80 transition-opacity duration-500 group-hover:opacity-60" />
            <div className="absolute inset-0 bg-slate-900/5 backdrop-contrast-125 opacity-20" />
          </motion.div>

          {/* DERECHA: Texto de Confianza */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center px-4 md:px-0"
          >
            <div className="flex items-center space-x-2 mb-6">
               <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="text-sm font-semibold text-slate-900 mt-0.5">5,0 / 5</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 mb-6 leading-[1.15]">
              Fisioterapia cercana y <br className="hidden md:block"/><span className="font-medium">enfocada en resultados reales</span>
            </h2>

            <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-8 max-w-xl">
              He acompañado a todo tipo de personas, desde deportistas de alto rendimiento hasta personas con dolor crónico. El objetivo siempre es el mismo: ir a la raíz del problema y devolverte la confianza en tu cuerpo.
            </p>

            <ul className="space-y-6 mb-12">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold text-[11px] mt-1 mr-5">1</span>
                <div>
                  <p className="font-semibold text-slate-900 text-lg mb-1">Valoración exhaustiva</p>
                  <p className="text-slate-500 leading-relaxed font-light">Entendemos el porqué anatómico y biomecánico antes de tratar.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold text-[11px] mt-1 mr-5">2</span>
                <div>
                  <p className="font-semibold text-slate-900 text-lg mb-1">Aplicación precisa</p>
                  <p className="text-slate-500 leading-relaxed font-light">Terapia manual experta y readaptación deportiva a medida.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold text-[11px] mt-1 mr-5">3</span>
                <div>
                  <p className="font-semibold text-slate-900 text-lg mb-1">Autonomía del paciente</p>
                  <p className="text-slate-500 leading-relaxed font-light">Te damos las herramientas para no depender del fisioterapeuta.</p>
                </div>
              </li>
            </ul>

            <div className="pt-8 border-t border-slate-100 flex items-center gap-12">
              <div>
                <p className="text-3xl font-light text-slate-900 mb-1">90<span className="text-slate-400 font-bold">+</span></p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Pacientes recuperados</p>
              </div>
              <div className="w-px h-12 bg-slate-100"></div>
              <div>
                <p className="text-3xl font-light text-slate-900 mb-1">100<span className="text-slate-400 font-bold">%</span></p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Atención personalizada</p>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Second Row of Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
          {secondRow.map((opinion, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col h-full border border-slate-100 relative group overflow-hidden"
            >
              <Quote className="w-24 h-24 text-slate-50 absolute -top-4 -right-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
              
              <div className="flex text-yellow-400 mb-8 relative z-10">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              
              <p className="text-slate-700 leading-relaxed text-[15px] font-medium mb-10 flex-1 relative z-10">
                &quot;{opinion.text}&quot;
              </p>
              
              <div className="flex items-center space-x-4 relative z-10 pt-6 border-t border-slate-50">
                <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 font-semibold tracking-wider text-sm shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                  {getInitials(opinion.author)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 leading-none mb-1.5">{opinion.author}</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 leading-none">{opinion.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
