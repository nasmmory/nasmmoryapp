import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24 bg-[#0a0a0a] border-t border-white/5 relative">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="block">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display mb-3 md:mb-4 leading-tight">Mari Berkarya Bersama</h3>
            <p className="text-xs md:text-sm text-gray-400 font-light mb-6 md:mb-8 max-w-md mx-auto">
              Mulai langkah awal untuk mewujudkan ide dan konsep visual Anda. Kami siap memberikan konsultasi terbaik.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
