import React from 'react';
import Section from './ui/Section';
import { Users, Video, ExternalLink, Send, Twitter } from 'lucide-react';
import { MeetingInfo } from '../types';

const meetings: MeetingInfo[] = [
  { title: '主会场', id: '163-782-026' },
  { title: '分会场 I', id: '682-9315-6180' },
  { title: '分会场 II', id: '377-7642-7876' },
];

const Community: React.FC = () => {
  return (
    <Section 
      id="community" 
      title="社区与会议" 
      subtitle="佛门道场 · 共识会议"
      darker
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
        {/* Meetings Column */}
        <div className="bg-buddha-grey/40 p-8 rounded-2xl border border-white/5 hover:border-buddha-gold/30 transition-all duration-300">
          <div className="flex items-center gap-3 mb-8">
            <Video className="text-buddha-gold" size={32} />
            <h3 className="text-2xl font-bold text-white font-serif">每日共识会议</h3>
          </div>
          
          <div className="space-y-4">
            {meetings.map((meeting, idx) => (
              <div key={idx} className="flex justify-between items-center p-4 bg-black/40 rounded-lg border border-white/5">
                <span className="text-gray-400 font-bold">{meeting.title}</span>
                <span className="font-mono text-buddha-gold text-lg tracking-wider">{meeting.id}</span>
              </div>
            ))}
          </div>
          
          <p className="mt-6 text-sm text-gray-500 italic text-center">
            欢迎加入我们的每日会议，聆听布道，共商大计。
          </p>
        </div>

        {/* Socials Column */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="bg-gradient-to-r from-[#0088cc]/20 to-transparent p-6 rounded-2xl border border-[#0088cc]/30 hover:bg-[#0088cc]/10 transition duration-300">
            <a 
              href="https://t.me/WUKONGX72" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#0088cc] p-3 rounded-full text-white">
                  <Send size={24} className="-ml-0.5 mt-0.5" /> 
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-[#0088cc] transition-colors">Telegram</h4>
                  <p className="text-sm text-gray-400">@WUKONGX72</p>
                </div>
              </div>
              <ExternalLink className="text-gray-500 group-hover:text-white transition-colors" />
            </a>
          </div>

          <div className="bg-gradient-to-r from-white/10 to-transparent p-6 rounded-2xl border border-white/20 hover:bg-white/5 transition duration-300">
            <a 
              href="https://twitter.com/bnb_world_peace" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="bg-black p-3 rounded-full text-white border border-gray-600">
                  <Twitter size={24} fill="white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">Twitter (X)</h4>
                  <p className="text-sm text-gray-400">@WUKONGX10086</p>
                </div>
              </div>
              <ExternalLink className="text-gray-500 group-hover:text-white transition-colors" />
            </a>
          </div>

          <div className="bg-buddha-gold/10 p-6 rounded-2xl border border-buddha-gold/20 text-center">
             <h4 className="text-buddha-gold font-bold mb-2">社区愿景</h4>
             <p className="text-sm text-gray-400 leading-relaxed">
               这是一个完全去中心化的社区。我们信仰长期主义，每一位持币者都是社区的建设者。
             </p>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default Community;
