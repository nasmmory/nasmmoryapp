import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-12 md:py-32 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop" 
                alt="Photography Studio" 
                className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -inset-2 md:-inset-4 border border-white/10 z-0 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-gold-400 font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-2 md:mb-4">Tentang NASMMORY</h2>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-display mb-4 md:mb-8 leading-tight">
              Lebih dari sekadar <br/><span className="text-white/50">visual.</span>
            </h3>
            
            <div className="space-y-4 md:space-y-6 text-gray-400 font-light leading-relaxed text-xs md:text-base">
              <p>
                NASMMORY adalah agensi digital kreatif dan studio multimedia yang berdedikasi untuk merekam momen dan mewujudkan ide cemerlang. Kami percaya setiap cerita memiliki keindahan yang pantas untuk diabadikan dengan sempurna.
              </p>
              <p>
                Dengan pendekatan modern dan profesional, tim kami menggabungkan keahlian teknis dengan kepekaan artistik. Mulai dari dokumentasi pernikahan yang intim, video komersial yang memukau, hingga identitas digital (website & desain) yang kuat.
              </p>
            </div>

            <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 border-t border-white/10 pt-6 md:pt-8">
              <div>
                <h4 className="text-base md:text-xl font-display mb-1 md:mb-2 text-white">Visi</h4>
                <p className="text-[11px] md:text-sm text-gray-500">Menjadi mitra kreatif utama yang menghidupkan cerita melalui kualitas visual tanpa kompromi.</p>
              </div>
              <div>
                <h4 className="text-base md:text-xl font-display mb-1 md:mb-2 text-white">Misi</h4>
                <p className="text-[11px] md:text-sm text-gray-500">Menyediakan layanan multimedia terintegrasi dengan sentuhan personal dan inovasi tiada henti.</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
