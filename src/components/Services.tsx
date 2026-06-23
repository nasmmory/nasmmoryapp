import { motion } from 'motion/react';
import { Camera, Video, Film, MonitorSmartphone, Code2, PenTool } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Photography',
    description: 'Dokumentasi komersial, potret, dan produk dengan sentuhan artistik dan pencahayaan presisi.'
  },
  {
    icon: Video,
    title: 'Videography',
    description: 'Produksi sinematik untuk company profile, event, dan dokumenter dengan resolusi 4K.'
  },
  {
    icon: Camera, // re-use or change if needed, maybe heart for wedding? Let's keep it simple.
    title: 'Wedding & Event',
    description: 'Mengabadikan momen sakral dan selebrasi dengan gaya modern dan elegan.'
  },
  {
    icon: Film,
    title: 'Video Editing',
    description: 'Post-produksi profesional, color grading, dan motion graphics untuk hasil akhir memukau.'
  },
  {
    icon: MonitorSmartphone,
    title: 'Digital Invitation',
    description: 'Undangan web interaktif yang elegan, responsif, dan mudah dibagikan untuk acara spesial Anda.'
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    description: 'Desain identitas visual, branding, dan materi promosi yang mengkomunikasikan nilai perusahaan.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-400 font-medium tracking-[0.2em] uppercase text-xs mb-2 md:mb-4"
          >
            Layanan Kami
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-display mb-3 md:mb-4"
          >
            Solusi Kreatif Menyeluruh
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm lg:text-base text-gray-400 font-light px-2"
          >
            Satu pintu untuk ragam kebutuhan multimedia dan integrasi digital Anda. Menghasilkan karya berkelas untuk personal maupun brand.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#0f0f0f] p-5 lg:p-6 border border-white/5 hover:border-gold-500/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 flex items-center justify-center rounded-sm mb-3 lg:mb-4 text-gold-400 group-hover:bg-gold-500 group-hover:text-black transition-colors duration-300">
                  <service.icon strokeWidth={1.5} size={20} className="md:w-[24px] md:h-[24px]" />
                </div>
                <h4 className="text-base md:text-lg font-display mb-1 md:mb-2 text-white">{service.title}</h4>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
