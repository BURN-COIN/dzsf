import React from 'react';
import Section from './ui/Section';
import { Coins, Wallet, BarChart3, Gem } from 'lucide-react';

const Dividends: React.FC = () => {
  return (
    <Section 
      id="dividends" 
      title="分红机制" 
      subtitle="悟空起分 · 财富共享"
      darker
    >
      <div className="relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-buddha-gold/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-buddha-red/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#2a1a08] to-[#1a0f05] rounded-3xl border border-buddha-gold/30 p-8 md:p-12 shadow-[0_0_50px_rgba(212,175,55,0.1)]">
            <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center p-4 bg-buddha-gold/20 rounded-full mb-6 ring-1 ring-buddha-gold/50">
                    <Gem size={48} className="text-buddha-gold" />
                </div>
                <h3 className="text-2xl font-bold text-buddha-gold mb-4">智能合约自动分红</h3>
                <p className="text-gray-400">无需手动领取，系统自动根据交易量触发分红，直接发送 WBNB 到您的钱包。</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Rule 1 */}
                <div className="flex flex-col items-center text-center space-y-4 p-4 rounded-xl hover:bg-white/5 transition duration-300">
                    <div className="bg-buddha-red/20 p-3 rounded-full">
                        <Wallet size={32} className="text-buddha-gold-light" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-white mb-2">持仓门槛</h4>
                        <p className="text-buddha-gold font-mono text-xl">10,000+</p>
                        <p className="text-sm text-gray-500 mt-1">代币数量</p>
                    </div>
                </div>

                {/* Rule 2 */}
                <div className="flex flex-col items-center text-center space-y-4 p-4 rounded-xl hover:bg-white/5 transition duration-300 border-x-0 md:border-x border-white/10">
                    <div className="bg-buddha-red/20 p-3 rounded-full">
                        <Coins size={32} className="text-buddha-gold-light" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-white mb-2">结算货币</h4>
                        <p className="text-buddha-gold font-mono text-xl">WBNB</p>
                        <p className="text-sm text-gray-500 mt-1">Wrapped BNB</p>
                    </div>
                </div>

                {/* Rule 3 */}
                <div className="flex flex-col items-center text-center space-y-4 p-4 rounded-xl hover:bg-white/5 transition duration-300">
                    <div className="bg-buddha-red/20 p-3 rounded-full">
                        <BarChart3 size={32} className="text-buddha-gold-light" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-white mb-2">发放规则</h4>
                        <p className="text-buddha-gold font-mono text-xl">$4.00</p>
                        <p className="text-sm text-gray-500 mt-1">累计价值触发</p>
                    </div>
                </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-white/10 text-center">
                <p className="text-xs text-gray-500">注意：请确保您的钱包中添加了 WBNB 代币合约地址以便查看收益。</p>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Dividends;