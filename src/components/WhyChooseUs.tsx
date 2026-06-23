import { motion } from 'motion/react';
import { Award, Zap, Heart, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Professional Quality',
    desc: 'Hasil akhir premium standar industri.'
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    desc: 'Efisiensi waktu tanpa mengorbankan kualitas.'
  },
  {
    icon: Heart,
    title: 'Customer Satisfaction',
    desc: 'Pelayanan responsif dan kolaboratif.'
  },
  {
    icon: CheckCircle2,
    title: 'Affordable Pricing',
    desc: 'Paket fleksibel sesuai kebutuhan Anda.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-20 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-64 h-64 md:w-80 md:h-80 bg-gold-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          <div className="w-full">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-400 font-medium tracking-[0.2em] uppercase text-xs mb-2 md:mb-3"
            >
              Kenapa NASMMORY?
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-display mb-3 md:mb-5"
            >
              Berkomitmen Pada <br className="hidden md:block" />Kualitas Sempurna
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xs md:text-sm text-gray-400 font-light mb-8 md:mb-12 max-w-2xl mx-auto"
            >
              Kami mengutamakan ketelitian dan sentuhan estetika pada setiap frame dan baris kode yang kami buat, memastikan setiap klien mendapatkan mahakarya digital.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {features.map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex flex-col items-center gap-3 md:gap-4"
                >
                  <div className="text-gold-400 bg-white/5 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-1 md:mb-2">
                    <item.icon size={24} strokeWidth={1.5} className="md:w-[28px] md:h-[28px]" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm md:text-base font-medium mb-1.5 md:mb-2">{item.title}</h4>
                    <p className="text-[11px] md:text-sm text-gray-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
