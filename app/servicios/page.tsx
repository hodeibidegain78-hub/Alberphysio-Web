'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';

const SERVICES = [
  {
    title: 'Fisioterapia Deportiva',
    description: 'Diagnóstico, tratamiento y prevención de lesiones musculares y articulares derivadas de la práctica deportiva. Orientado a la pronta y segura recuperación del deportista.',
    img: '/images/Paciente%201.jpg'
  },
  {
    title: 'Dolor Lumbar y Espalda',
    description: 'Abordaje integral de discopatías, hernias, ciáticas y lumbalgias de larga evolución, combinando terapia manual y ejercicio terapéutico específico.',
    img: '/images/Paciente%201%20boca%20abajo.jpg'
  },
  {
    title: 'Cervicalgia y Cuello',
    description: 'Tratamiento de contracturas, latigazo cervical y cefaleas tensionales provocadas por estrés o malas posturas prolongadas.',
    img: '/images/Foto%20confianza.jpg'
  },
  {
    title: 'Hombro y Manguito Rotador',
    description: 'Rehabilitación de tendinopatías y calcificaciones, bursitis e inestabilidades para recuperar el rango de movimiento completo sin dolor.',
    img: '/images/Paciente%203%20.jpg'
  },
  {
    title: 'Rodilla y Tendinitis',
    description: 'Tratamientos específicos para tendinopatía rotuliana, síndrome de la cintilla iliotibial, esguinces de ligamentos cruzados y meniscopatías.',
    img: '/images/Camilla%201.jpg'
  },
  {
    title: 'Ecografía Musculoesquelética',
    description: 'Evaluación ecográfica en tiempo real para visualizar el estado exacto de tendones, músculos y ligamentos, mejorando la precisión del diagnóstico.',
    img: '/images/Haciendo%20resonancia.jpg'
  },
  {
    title: 'Ejercicio Terapéutico',
    description: 'Prescripción de movimiento bajo supervisión para crear adaptaciones en el tejido, revertir atrofias y mejorar la funcionalidad a largo plazo.',
    img: '/images/Desde%20fuera.jpg'
  },
  {
    title: 'Rehabilitación Funcional',
    description: 'Acompañamiento en el paso final entre la camilla de tratamiento y el retorno de forma segura a tu disciplina o vida diaria habitual.',
    img: '/images/Foto%20interior%202.jpg'
  }
];

export default function ServiciosPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-10">
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Ofrecemos un modelo de fisioterapia actualizado, donde la terapia manual se complementa con la 
            precisión de la ecografía y el aval del ejercicio terapéutico para brindarte una recuperación completa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {SERVICES.map((servicio, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group border border-slate-200 overflow-hidden bg-white rounded-3xl flex flex-col sm:flex-row"
            >
              <div className="relative h-56 sm:h-auto sm:w-2/5 overflow-hidden">
                <Image
                  src={servicio.img}
                  alt={servicio.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 sm:w-3/5 flex flex-col justify-center">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">{servicio.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {servicio.description}
                </p>
                <Link 
                  href="/contacto" 
                  className="mt-auto inline-flex font-bold uppercase tracking-widest text-[10px] text-slate-900 hover:text-slate-600 transition-colors"
                >
                  Pedir cita
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
