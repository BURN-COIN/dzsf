import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Tokenomics from './components/Tokenomics';
import Dividends from './components/Dividends';
import Contracts from './components/Contracts';
import Community from './components/Community';
import Footer from './components/Footer';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '主页', href: '#hero' },
    { name: '经济模型', href: '#tokenomics' },
    { name: '分红机制', href: '#dividends' },
    { name: '合约地址', href: '#contracts' },
    { name: '加入社区', href: '#community' },
  ];

  return (
    <div className="font-serif min-h-screen bg-oriental-pattern text-gray-200 overflow-x-hidden selection:bg-buddha-red selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-buddha-red-dark/95 backdrop-blur-md shadow-lg border-b border-buddha-red' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img 
                src="/1.png" 
                alt="Logo" 
                className="h-10 w-10 rounded-full border border-buddha-gold/50 shadow-lg"
              />
              <span className="font-calligraphy text-2xl text-buddha-gold tracking-wider">斗战胜佛</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-300 hover:text-buddha-gold transition-colors duration-200 text-sm tracking-widest uppercase font-bold"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-buddha-gold hover:text-white p-2"
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-buddha-red-dark border-b border-buddha-gold/20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-buddha-gold hover:bg-buddha-red"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <Tokenomics />
        <Dividends />
        <Contracts />
        <Community />
      </main>

      <Footer />
    </div>
  );
};

export default App;
