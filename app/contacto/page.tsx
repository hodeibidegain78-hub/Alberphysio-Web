'use client';

import { MapPin, Phone, MessageCircle, Clock, Mail } from 'lucide-react';

export default function ContactoPage() {
  return (
    <div className="pt-32 pb-0 min-h-screen flex flex-col bg-slate-50">
      <div className="max-w-7xl mx-auto px-10 w-full mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-12">
          Contacto y Ubicación
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1 space-y-10">
            <div>
              <h3 className="flex items-center text-lg font-semibold text-slate-900 mb-4">
                <MapPin className="w-5 h-5 mr-3 text-slate-500" /> Dirección
              </h3>
              <p className="text-slate-600 ml-8 leading-relaxed">
                Urkixo Zumarkalea, 69<br />
                48013 Bilbao, Bizkaia<br />
                <span className="text-sm bg-slate-100 px-2 py-1 rounded inline-block mt-2">A 2 mins de Metro Indautxu</span>
              </p>
            </div>

            <div>
              <h3 className="flex items-center text-lg font-semibold text-slate-900 mb-4">
                <Phone className="w-5 h-5 mr-3 text-slate-500" /> Teléfono
              </h3>
              <p className="text-slate-600 ml-8">
                <a href="tel:+34623980447" className="hover:text-slate-900 transition-colors">623 98 04 47</a>
              </p>
            </div>

            <div>
              <h3 className="flex items-center text-lg font-semibold text-slate-900 mb-4">
                <Clock className="w-5 h-5 mr-3 text-slate-500" /> Horario
              </h3>
              <p className="text-slate-600 ml-8 leading-relaxed">
                Lunes a Viernes<br />
                Consultar disponibilidad por cita previa.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <a 
                href="https://wa.me/34623980447" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center px-6 py-4 bg-[#25D366] text-white font-bold text-[11px] uppercase tracking-[0.1em] hover:bg-[#20BE5C] transition-colors rounded-xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contactar por WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 h-[500px] bg-slate-100 border border-slate-200 rounded-3xl overflow-hidden w-full relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.698056024982!2d-2.9439600845347204!3d43.25883018596639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e4fd74187019f%3A0xe5f86edc5dc329fa!2sAlameda%20de%20Urquijo%2C%2069%2C%2048013%20Bilbao%2C%20Biscay!5e0!3m2!1sen!2ses!4v1700000000000!5m2!1sen!2ses" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Mapa de la Clínica Alberphysio"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
