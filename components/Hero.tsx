import React from 'react';
import { ArrowRight, BarChart2, Copy, Check } from 'lucide-react';

const Hero: React.FC = () => {
  const contractAddress = "0xace83580f50bfa71359bdaeacf7a0b588a1d7777";
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/2.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-buddha-dark via-transparent to-buddha-dark"></div>
        <div className="absolute inset-0 bg-radial-gradient from-buddha-red-dark/40 to-buddha-dark/90"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center relative">
        
        {/* Logo in Hero */}
        <div className="mb-8 flex justify-center animate-fade-in">
             <div className="relative">
                <div className="absolute -inset-4 bg-buddha-gold/20 rounded-full blur-xl"></div>
                <img 
                    src="/1.png" 
                    alt="Logo" 
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-buddha-gold/30 shadow-[0_0_30px_rgba(212,175,55,0.2)] relative z-10"
                />
             </div>
        </div>

        <div className="mb-6 inline-block">
            <span className="py-1 px-3 border border-buddha-gold/50 rounded-full text-buddha-gold text-xs tracking-[0.2em] uppercase bg-black/50 backdrop-blur-sm">
                BSC 币安智能链
            </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-calligraphy text-transparent bg-clip-text bg-gold-gradient drop-shadow-lg mb-6 animate-fade-in-up">
          斗战胜佛
        </h1>
        
        <p className="text-xl md:text-3xl font-serif text-gray-300 mb-2 font-light">
          我佛慈悲 · 普渡众生
        </p>
        
        <p className="text-sm md:text-base text-gray-500 mb-8 italic tracking-widest uppercase">
          Buddha of Victory, may the Buddha’s mercy be with us.
        </p>

        {/* Contract Address Box */}
        <div className="flex justify-center mb-10">
            <div 
                onClick={handleCopy}
                className="cursor-pointer group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-buddha-gold/30 rounded-full px-4 py-2 md:px-6 md:py-3 transition-all duration-300 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:border-buddha-gold"
            >
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                    <span className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-wider">合约地址:</span>
                    <span className="text-buddha-gold font-mono text-sm md:text-base break-all">
                        {contractAddress}
                    </span>
                </div>
                <div className="pl-3 border-l border-white/10 text-buddha-gold/70 group-hover:text-buddha-gold">
                    {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                </div>
                {/* Tooltip text for Copy */}
                <span className="hidden md:inline text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                   {copied ? '已复制' : '点击复制'}
                </span>
            </div>
        </div>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-12 leading-relaxed">
          凝聚共识，共铸辉煌。<br className="md:hidden" />
          基于币安智能链（BSC）构建的去中心化社区代币。<br/>
          <span className="text-buddha-gold font-bold">持币即挖矿，自动分红 BNB。</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contracts"
            className="group relative px-8 py-4 bg-gold-gradient rounded-sm overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-transform hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors"></div>
            <span className="relative text-buddha-red-dark font-bold text-lg flex items-center gap-2">
              立即购买 <ArrowRight size={20} />
            </span>
          </a>
          
          <a 
            href="#community"
            className="px-8 py-4 border border-buddha-gold text-buddha-gold rounded-sm hover:bg-buddha-gold/10 transition-colors duration-300 font-bold text-lg tracking-wide"
          >
            加入社区
          </a>

           <a 
            href="#"
            className="px-8 py-4 border border-gray-700 text-gray-400 rounded-sm hover:border-gray-500 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <BarChart2 size={18}/> 查看图表
          </a>
        </div>
      </div>
      
      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-buddha-dark to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
