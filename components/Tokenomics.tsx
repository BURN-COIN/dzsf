import React from 'react';
import Section from './ui/Section';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { TokenomicData } from '../types';
import { TrendingUp, Flame, Droplets, Megaphone } from 'lucide-react';

const data: TokenomicData[] = [
  { name: 'BNB 分红', value: 1.0, color: '#D4AF37', description: '持有者奖励' }, // Gold
  { name: '自动销毁', value: 1.0, color: '#800020', description: '通缩机制' }, // Deep Red
  { name: '流动性回流', value: 0.8, color: '#4A5568', description: '巩固底池' }, // Slate
  { name: '营销推广', value: 0.2, color: '#CBD5E0', description: '项目发展' }, // Light Grey
];

const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="text-xs font-bold">
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

const Tokenomics: React.FC = () => {
  return (
    <Section 
      id="tokenomics" 
      title="代币经济学" 
      subtitle="极致通缩，持币生息。交易税费仅 3%，每一笔交易都在为社区创造价值。"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Chart Side */}
        <div className="h-[400px] w-full bg-buddha-grey/30 rounded-2xl border border-white/5 relative flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/600/600?blur=10')] opacity-5 rounded-2xl bg-cover"></div>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={140}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F1F1F', borderColor: '#D4AF37', borderRadius: '8px' }}
                itemStyle={{ color: '#E5E5E5' }}
              />
              <Legend verticalAlign="bottom" height={36} iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
          
          {/* Center Text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            <span className="text-4xl font-bold text-white">3%</span>
            <p className="text-xs text-gray-400 uppercase tracking-widest">总税费</p>
          </div>
        </div>

        {/* Details Side */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-buddha-grey/50 p-6 rounded-xl border-l-4 border-buddha-gold hover:bg-buddha-grey transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="text-buddha-gold" />
                <h3 className="text-xl font-bold text-white">1% BNB 分红</h3>
              </div>
              <p className="text-sm text-gray-400">自动分红给所有持有者，持币即可坐享收益。</p>
            </div>

            {/* Card 2 */}
            <div className="bg-buddha-grey/50 p-6 rounded-xl border-l-4 border-buddha-red hover:bg-buddha-grey transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Flame className="text-buddha-red" />
                <h3 className="text-xl font-bold text-white">1% 自动销毁</h3>
              </div>
              <p className="text-sm text-gray-400">代币打入黑洞，总量不断减少，实现极致通缩。</p>
            </div>

            {/* Card 3 */}
            <div className="bg-buddha-grey/50 p-6 rounded-xl border-l-4 border-slate-500 hover:bg-buddha-grey transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Droplets className="text-slate-400" />
                <h3 className="text-xl font-bold text-white">0.8% 流动性</h3>
              </div>
              <p className="text-sm text-gray-400">自动回流底池，加深资金池深度，保障交易稳定。</p>
            </div>

            {/* Card 4 */}
            <div className="bg-buddha-grey/50 p-6 rounded-xl border-l-4 border-gray-300 hover:bg-buddha-grey transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Megaphone className="text-gray-300" />
                <h3 className="text-xl font-bold text-white">0.2% 营销</h3>
              </div>
              <p className="text-sm text-gray-400">用于项目宣发、社区建设及长期运营发展。</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Tokenomics;