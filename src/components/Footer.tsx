export default function Footer() {
  return (
    <footer className="bg-[#020202] py-6 md:py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          
          <div className="flex items-center">
            <a href="#" className="font-display text-lg md:text-2xl font-bold tracking-widest text-white">
              NASMMORY<span className="text-gold-400">.</span>
            </a>
          </div>

          <div className="flex gap-4 sm:gap-6 text-[10px] sm:text-sm text-gray-500 uppercase tracking-widest">
            <a href="#services" className="hover:text-gold-400 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-gold-400 transition-colors">Portfolio</a>
          </div>

          <p className="text-[10px] md:text-xs text-gray-600 tracking-wider text-center md:text-left">
            &copy; {new Date().getFullYear()} NASMMORY Studio.<br className="block sm:hidden" /> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
