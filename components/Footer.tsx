import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white text-slate-500 py-16 border-t border-slate-200 mt-12">
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="text-2xl font-bold tracking-tight uppercase text-slate-900 mb-4 inline-block">
            Alber<span className="text-slate-400">physio</span>
          </Link>
          <p className="text-xs font-semibold leading-relaxed max-w-xs uppercase tracking-widest text-slate-400 mt-2">
            Fisioterapia avanzada y recuperación funcional en el centro de Bilbao.
          </p>
        </div>
        
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-6">Navegación</h4>
          <ul className="space-y-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
            <li><Link href="/" className="hover:text-slate-600 transition-colors">Inicio</Link></li>
            <li><Link href="/servicios" className="hover:text-slate-600 transition-colors">Servicios</Link></li>
            <li><Link href="/lesiones" className="hover:text-slate-600 transition-colors">Lesiones Tratadas</Link></li>
            <li><Link href="/sobre-alberto" className="hover:text-slate-600 transition-colors">Sobre Alberto</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-6">Legal</h4>
          <ul className="space-y-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
            <li><Link href="#" className="hover:text-slate-600 transition-colors">Aviso Legal</Link></li>
            <li><Link href="#" className="hover:text-slate-600 transition-colors">Política de Privacidad</Link></li>
            <li><Link href="#" className="hover:text-slate-600 transition-colors">Política de Cookies</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-6">Contacto</h4>
          <ul className="space-y-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
            <li>Urkixo Zumarkalea, 69</li>
            <li>48013 Bilbao, Bizkaia</li>
            <li>
              <a href="tel:+34623980447" className="hover:text-slate-600 transition-colors text-slate-900 mt-4 inline-block">
                623 98 04 47
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-10 mt-16 pt-8 border-t border-slate-100 text-[10px] uppercase font-bold tracking-widest text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Alberphysio. Todos los derechos reservados.</p>
        <p>Alberto Pinilla - Fisioterapeuta Colegiado Nº 4493</p>
      </div>
    </footer>
  );
}
