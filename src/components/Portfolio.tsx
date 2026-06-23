import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const categories = ['All', 'Wedding', 'Photography', 'Videography', 'Web & Design'];

const projects = [
  { id: 1, title: 'Intimate Sacred Promise', category: 'Wedding', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, title: 'Corporate Branding', category: 'Web & Design', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop' },
  { id: 3, title: 'Fashion Editorial', category: 'Photography', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop' },
  { id: 4, title: 'Cinematic Reel', category: 'Videography', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop' },
  { id: 5, title: 'Aesthetic Web App', category: 'Web & Design', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop' },
  { id: 6, title: 'Outdoor Ceremony', category: 'Wedding', image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<{id: number, title: string, category: string, image: string} | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-12 md:py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4 md:gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-400 font-medium tracking-[0.2em] uppercase text-xs mb-2 md:mb-4"
            >
              Portofolio
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-display"
            >
              Karya Terbaik Kami
            </motion.h3>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap gap-3 sm:gap-4 hide-scrollbar w-full md:w-auto"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] sm:text-xs md:text-sm tracking-wider uppercase pb-1 border-b-2 transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === cat 
                    ? 'border-gold-400 text-white' 
                    : 'border-transparent text-gray-500 hover:text-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-6">
                  <p className="text-gold-400 text-[9px] md:text-[10px] tracking-[0.2em] uppercase mb-1 md:mb-2 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.category}
                  </p>
                  <h4 className="text-white font-display text-base md:text-xl lg:text-2xl transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {project.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-8 md:mt-12 text-center">
          <button className="border border-white/20 hover:border-gold-400 hover:text-gold-400 transition-colors px-6 md:px-8 py-2 md:py-2.5 tracking-widest uppercase text-xs font-medium">
            Lihat Lebih Banyak
          </button>
        </div>

      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] bg-black/90 p-4 sm:p-8 flex items-center justify-center backdrop-blur-sm"
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors"
            >
              <X size={24} className="md:w-[32px] md:h-[32px]" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full max-h-[70vh] md:max-h-[80vh] object-contain rounded-sm"
              />
              <div className="text-center mt-4 md:mt-6">
                <p className="text-gold-400 text-[10px] md:text-xs tracking-[0.2em] uppercase mb-1 md:mb-2">
                  {selectedProject.category}
                </p>
                <h4 className="text-white font-display text-xl md:text-2xl">
                  {selectedProject.title}
                </h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
