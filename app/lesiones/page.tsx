'use client';

import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import Image from 'next/image';

const LESIONES = [
  { name: 'Ciática y dolor irradiado', cat: 'Espalda' },
  { name: 'Dolor Lumbar (Lumbalgia)', cat: 'Espalda' },
  { name: 'Cervicalgia y torticolis', cat: 'Cuello' },
  { name: 'Fascitis Plantar', cat: 'Pierna/Pie' },
  { name: 'Tendinitis y tendinosis', cat: 'General' },
  { name: 'Esguinces de tobillo y rodilla', cat: 'Pierna/Pie' },
  { name: 'Contracturas musculares', cat: 'General' },
  { name: 'Dolor de Hombro (Manguito rotador)', cat: 'Brazo' },
  { name: 'Sobrecargas y roturas de fibras', cat: 'Deportiva' },
  { name: 'Epicondilitis (Codo de tenista)', cat: 'Brazo' },
  { name: 'Condromalacia rotuliana', cat: 'Pierna/Pie' },
  { name: 'Bursitis', cat: 'General' }
];

export default function LesionesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Lesiones Tratadas
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            No diagnosticamos etiquetas, diagnosticamos y tratamos alteraciones en tus tejidos y en la forma en la que te mueves. Estas son algunas de las patologías más habituales que tratamos en clínica con éxito.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {LESIONES.map((lesion, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-start gap-3"
              >
                <div className="mt-1 min-w-5">
                  <Check className="w-5 h-5 text-slate-900" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">{lesion.name}</h4>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-0.5">{lesion.cat}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-white border border-slate-200 rounded-3xl italic text-slate-600 text-center text-sm">
            &quot;Si tienes dolor crónico y los abordajes tradicionales no han funcionado, 
            te realizaremos una reevaluación biomecánica completa.&quot;
          </div>
        </div>

        <div className="relative h-[600px] lg:h-full w-full min-h-[500px] rounded-3xl overflow-hidden">
          <Image
            src="/images/Paciente%201.jpg"
            alt="Tratamiento de lesiones fisioterapia"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
}
