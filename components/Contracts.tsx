import React from 'react';
import Section from './ui/Section';
import CopyButton from './ui/CopyButton';
import { FileText, Coins, Flame } from 'lucide-react';
import { ContractItem } from '../types';

const contracts: ContractItem[] = [
  {
    label: '分红合约地址 (Dividend)',
    address: '0xa422ec925e557fdd6621e8184ce22b9687453da1',
    icon: 'copy'
  },
  {
    label: 'WBNB 合约地址',
    address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    icon: 'wallet'
  },
  {
    label: '蝴蝶销毁地址 (Burn)',
    address: '0x00576e4fb32296cd973a0d413d0379609400dead',
    icon: 'burn'
  }
];

const Contracts: React.FC = () => {
  return (
    <Section 
      id="contracts" 
      title="合约信息" 
      subtitle="请认准官方唯一合约地址，并在转账前仔细核对。"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {contracts.map((contract, index) => (
          <div 
            key={index}
            className="group bg-buddha-grey border border-gray-800 p-6 rounded-lg relative overflow-hidden transition-all duration-300 hover:border-buddha-gold/50 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          >
            {/* Hover Glow */}
            <div className="absolute top-0 left-0 w-1 h-full bg-buddha-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full mt-1 md:mt-0 ${
                    contract.icon === 'burn' ? 'bg-red-900/30 text-red-500' : 
                    contract.icon === 'wallet' ? 'bg-blue-900/30 text-blue-500' : 'bg-buddha-gold/10 text-buddha-gold'
                }`}>
                  {contract.icon === 'burn' ? <Flame size={24} /> : 
                   contract.icon === 'wallet' ? <Coins size={24} /> : <FileText size={24} />}
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">{contract.label}</h3>
                  <p className="font-mono text-sm md:text-lg text-white break-all">{contract.address}</p>
                </div>
              </div>
              
              <div className="w-full md:w-auto flex justify-end">
                <CopyButton text={contract.address} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Contracts;