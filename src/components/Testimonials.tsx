import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Amanda & Rendy",
    role: "Wedding Client",
    text: "NASMMORY berhasil merekam momen terindah kami dengan sangat sempurna. Tim yang profesional dan hasil video yang sangat sinematik melebihi ekspektasi kami."
  },
  {
    id: 2,
    name: "Sarah Wijaya",
    role: "Marketing Director",
    text: "Pengerjaan company profile sangat rapi dan representatif. Website yang dibuat sangat modern dan elegan. Kombinasi audio visual dan desain yang brilian."
  },
  {
    id: 3,
    name: "Dimas Pratama",
    role: "Event Organizer",
    text: "Sudah bekerja sama untuk beberapa event, NASMMORY selalu tepat waktu, responsif dan memberikan kualitas foto yang tajam. Sangat direkomendasikan!"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));

  return (
    <section className="py-12 md:py-24 bg-[#050505]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <Quote className="w-6 h-6 md:w-10 md:h-10 text-white/10 mx-auto mb-4 md:mb-6" />
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold-400 font-medium tracking-[0.2em] uppercase text-xs mb-6 md:mb-10"
        >
          Cerita Mereka
        </motion.h2>

        <div className="relative h-auto min-h-[220px] sm:min-h-[180px] md:min-h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-x-0"
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-display leading-relaxed mb-4 md:mb-6 italic px-2">
                "{testimonials[current].text}"
              </p>
              <div>
                <h4 className="text-white font-medium uppercase tracking-wider text-xs">{testimonials[current].name}</h4>
                <p className="text-gray-500 text-[10px] md:text-xs mt-1">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 md:gap-4 mt-6 md:mt-8">
          <button 
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
