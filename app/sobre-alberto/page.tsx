'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

export default function SobreAlbertoPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative w-full aspect-[4/5] overflow-hidden rounded-3xl"
          >
            <Image
              src="/images/alberto-pinilla.png"
              alt="Alberto Pinilla Fisioterapeuta"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="text-[10px] tracking-widest uppercase text-slate-400 font-bold mb-3">Fisioterapeuta Colegiado Nº 4493</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
              Alberto Pinilla
            </h1>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
              <p>
                Soy un apasionado del movimiento humano. Tras varios años ejerciendo, fundé Alberphysio con 
                una idea clara: huir de la fisioterapia pasiva de &quot;masaje y calor&quot; para ofrecer un enfoque proactivo, 
                individualizado y basado en evidencias reales.
              </p>
              <p>
                Mi especialidad radica en el trabajo con deportistas, desde amateurs hasta profesionales, buscando 
                no solo eliminar el dolor, sino enseñar cómo adaptar la carga de entrenamiento para evitar el 
                quirófano y rehabilitar de manera óptima las funciones estructurales.
              </p>
              <p>
                Entiendo el dolor como algo complejo y multifactorial. Por ello, el tratamiento que ofrezco siempre 
                incluye una valoración exhaustiva clínica, educación sobre la dolencia y ejercicio terapéutico, 
                garantizando una atención dedicada y completamente adaptada a tus ritmos y necesidades.
              </p>
            </div>

            <div className="mt-12 pt-10 border-t border-slate-100 flex flex-col sm:flex-row gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 text-lg mb-2">Compromiso Humano</h4>
                <p className="text-slate-500 text-base">Atención real, escuchando tu historia de dolor y tus objetivos deportivos de vida.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-lg mb-2">Formación Continua</h4>
                <p className="text-slate-500 text-base">Máster en Fisioterapia Deportiva y Especialista en dolor crónico.</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
}
