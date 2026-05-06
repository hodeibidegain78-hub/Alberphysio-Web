'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Star, ArrowRight, ChevronDown, CheckCircle2, Clock, CalendarCheck } from 'lucide-react';
import { useState } from 'react';

const FAQS = [
  {
    q: '¿Cuánto dura una sesión?',
    a: 'Las sesiones tienen una duración aproximada de 50-60 minutos, permitiendo un tiempo adecuado para valoración, tratamiento y pautado de ejercicios.'
  },
  {
    q: '¿Trabajas con deportistas?',
    a: 'Sí, somos especialistas en recuperación de lesiones deportivas y readaptación funcional para volver a la práctica deportiva de forma segura.'
  },
  {
    q: '¿Es necesaria derivación médica?',
    a: 'No es estrictamente necesaria. Al ser profesionales sanitarios de primera intención, podemos evaluar y tratar sin derivación previa, aunque colaboramos con médicos especialistas si el caso lo requiere.'
  },
  {
    q: '¿Cómo reservar cita?',
    a: 'Puedes reservar contactando por teléfono, a través de WhatsApp o mediante el formulario de contacto en esta misma plataforma web. Contestamos en menos de 24 horas.'
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-24">
      {/* Hero Section */}
      <div className="p-6 md:p-8 pt-6">
        <section className="relative h-[85vh] min-h-[600px] bg-slate-900 rounded-3xl overflow-hidden flex flex-col justify-end p-8 md:p-16 text-white max-w-[1400px] mx-auto">
          {/* USER: Replace the src with your own actual photo of Alberto working with a patient */}
          <Image
            src="/Paciente%202%20buena%20foto%20para%20debajo%20de%20encabezado.jpg"
            alt="Alberto trabajando con paciente"
            fill
            priority
            className="object-cover opacity-50 contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10" />
          
          <div className="relative z-20 w-full max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-6 tracking-tight"
            >
              Fisioterapia en Bilbao con <br className="hidden md:block"/><span className="font-medium">atención personalizada</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl font-light"
            >
              Especialistas en dolor muscular, lesiones deportivas y recuperación funcional en el centro de Indautxu.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link 
                href="/contacto" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold text-xs uppercase tracking-widest transition-colors text-center hover:bg-slate-100"
              >
                Reservar ahora
              </Link>
              <a 
                href="https://wa.me/34623980447" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest transition-colors text-center backdrop-blur-sm"
              >
                Atención por WhatsApp
              </a>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Confianza / Trust Section */}
      <section className="py-12 max-w-[1400px] mx-auto px-6 md:px-8 w-full">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 items-start md:items-center">
          <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-center md:items-start mb-4 md:mb-0">
            <div className="flex text-yellow-500 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <p className="text-2xl font-semibold text-slate-900 tracking-tight">5,0</p>
            <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-1">+90 Reseñas Reales</p>
          </div>
          
          <div className="flex flex-col items-center md:items-start p-4 border border-slate-200 rounded-2xl bg-white">
            <Clock className="w-5 h-5 text-slate-900 mb-3" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-1">Rápido</h3>
            <p className="text-[11px] text-slate-500 font-medium">Respuesta en &lt; 24h</p>
          </div>

          <div className="flex flex-col items-center md:items-start p-4 border border-slate-200 rounded-2xl bg-white">
            <CheckCircle2 className="w-5 h-5 text-slate-900 mb-3" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-1">Dedicación</h3>
            <p className="text-[11px] text-slate-500 font-medium">Atención personalizada</p>
          </div>

          <div className="flex flex-col items-center md:items-start p-4 border border-slate-200 rounded-2xl bg-white">
            <CalendarCheck className="w-5 h-5 text-slate-900 mb-3" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-1">Agilidad</h3>
            <p className="text-[11px] text-slate-500 font-medium">Sin listas de espera</p>
          </div>
          
          <div className="flex flex-col justify-center h-full pl-0 md:pl-6">
             <Link href="#experiencia" className="text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-slate-500 transition-colors inline-flex items-center">
               Saber más <ArrowRight className="w-4 h-4 ml-2" />
             </Link>
          </div>
        </div>
      </section>

      {/* Visual / Experiencia Grid */}
      <section id="experiencia" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">La Experiencia</h2>
              <h3 className="text-3xl md:text-5xl font-light tracking-tight text-slate-900 leading-[1.1]">
                Instalaciones modernas y <span className="font-medium">tecnología de vanguardia</span>
              </h3>
            </div>
            <p className="max-w-md text-slate-600 font-medium leading-relaxed text-sm">
              En Alberphysio combinamos la terapia manual especializada con herramientas avanzadas como la ecografía musculoesquelética para ofrecerte los mejores resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-[auto] gap-4 md:gap-6 h-auto md:h-[600px]">
            {/* Image 1: Camilla / Consulta */}
            <div className="md:col-span-5 md:row-span-2 relative rounded-3xl overflow-hidden min-h-[300px] md:min-h-0 bg-slate-100 group">
              <Image 
                src="/Mejor%20foto%20camilla.jpg" 
                alt="Consulta de fisioterapia" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-flex bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  La Consulta
                </span>
              </div>
            </div>

            {/* Image 2: Alberto trabajando / Tratamiento manual */}
            <div className="md:col-span-7 md:row-span-1 relative rounded-3xl overflow-hidden min-h-[250px] md:min-h-0 bg-slate-100 group">
              <Image 
                src="/Paciente%201%20boca%20abajo.jpg" 
                alt="Tratamiento manual" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-end">
                <span className="inline-flex bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Tratamiento Manual
                </span>
              </div>
            </div>

            {/* Image 3: Ecografía */}
            <div className="md:col-span-3 md:row-span-1 relative rounded-3xl overflow-hidden min-h-[250px] md:min-h-0 bg-slate-100 group">
              <Image 
                src="/Haciendo%20resonancia.jpg" 
                alt="Ecografía" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-flex bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Ecografía MSK
                </span>
              </div>
            </div>

            {/* Image 4: Readaptación / Ejercicio */}
            <div className="md:col-span-4 md:row-span-1 relative rounded-3xl overflow-hidden min-h-[250px] md:min-h-0 bg-slate-900 group flex items-center justify-center p-8 text-center">
              <div className="relative z-10 w-full max-w-xs">
                <p className="text-xl font-light text-white leading-relaxed">
                  &quot;No solo tratamos síntomas, trazamos planes de ruta para tu bienestar a largo plazo.&quot;
                </p>
                <Link href="/sobre-alberto" className="inline-block mt-6 text-[10px] font-bold tracking-widest uppercase text-slate-400 hover:text-white transition-colors border-b border-slate-700 pb-1">
                  Conocer Metodología
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Alberto Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="order-2 lg:order-1 relative">
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden">
                {/* USER: Replace this src with Alberto's portrait looking at the camera */}
                <Image
                  src="/Albero%20Pinilla.png"
                  alt="Alberto Pinilla"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Trust Badge Floating */}
              <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white p-6 rounded-3xl shadow-xl max-w-xs hidden sm:block">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Colegiado 4493</p>
                <p className="text-sm font-semibold text-slate-900 leading-tight">Fisioterapeuta diplomado enfocado en el trato humano.</p>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">El Profesional</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 leading-[1.1] mb-8">
                Alberto Pinilla
              </h3>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light mb-10 max-w-xl">
                <p>
                  Especializado en recuperación funcional y dolor, ofrezco un <strong className="font-medium text-slate-900">enfoque cercano y honesto</strong>. Mi pasión es entender qué genera tu molestia, no solo apagarla temporalmente.
                </p>
                <p>
                  Con extensa experiencia en el <strong className="font-medium text-slate-900">trabajo con deportistas</strong>, adapto los ritmos del deporte de alto rendimiento a tu día a día, garantizando una recuperación segura y una readaptación efectiva.
                </p>
                <p>
                  Entrar en la clínica significa recibir el 100% de mi atención durante la sesión, aplicando el razonamiento clínico más actual a tu situación particular.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
                <div className="border border-slate-200 bg-white rounded-2xl p-6 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Especialidad</p>
                  <p className="font-semibold text-slate-900">Deportiva & Readaptación</p>
                </div>
                <div className="border border-slate-200 bg-white rounded-2xl p-6 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Visión</p>
                  <p className="font-semibold text-slate-900">Trato 100% Personalizado</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 text-center">Dudas comunes</h2>
          <h3 className="text-3xl font-light tracking-tight text-slate-900 mb-12 text-center">
            Preguntas frecuentes
          </h3>
          
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-slate-50 rounded-2xl border transition-colors ${openFaq === idx ? 'border-slate-300' : 'border-transparent'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                >
                  <span className="font-medium text-slate-900 pr-8">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-slate-600 leading-relaxed text-sm">
                    {faq.a}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
