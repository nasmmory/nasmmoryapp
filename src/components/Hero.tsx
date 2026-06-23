import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gold-500/10 rounded-full blur-[100px] md:blur-[120px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-16 md:mt-0">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight mb-4 tracking-tight text-white"
        >
          Abadikan Hari Ini,<br />
          <span className="text-gold-500">Kenang Nanti.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gray-400 text-sm lg:text-base max-w-2xl mx-auto mb-8 font-light leading-relaxed px-4 sm:px-0"
        >
          Menghidupkan visi Anda melalui lensa kreatif kami. Kami menyediakan layanan komprehensif mulai dari fotografi, videografi, hingga pengembangan platform digital.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center w-full sm:w-auto px-4"
        >
          <a
            href="#portfolio"
            className="bg-gold-500 hover:bg-gold-400 text-black px-6 md:px-6 py-3.5 md:py-3 rounded-full font-bold transition-all flex items-center justify-center gap-2 group w-full sm:w-auto text-sm border border-transparent shadow-[0_0_20px_rgba(255,153,0,0.3)] hover:shadow-[0_0_25px_rgba(255,153,0,0.5)]"
          >
            Lihat Karya Kami
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
