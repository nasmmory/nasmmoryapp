import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/6281234567890" 
      target="_blank" 
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 group flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="md:w-[28px] md:h-[28px]" />
      
      {/* Optional tooltip */}
      <div className="absolute right-full mr-4 bg-white text-black text-[10px] md:text-xs font-medium px-2 py-1 md:px-3 md:py-1.5 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md hidden sm:block">
        Chat with us!
        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
      </div>
    </motion.a>
  );
}
