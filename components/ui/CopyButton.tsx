import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  text: string;
  className?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text, className = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`p-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
        copied 
          ? 'bg-green-900/50 text-green-400 border border-green-700' 
          : 'bg-buddha-gold/10 text-buddha-gold hover:bg-buddha-gold hover:text-buddha-red-dark border border-buddha-gold/30'
      } ${className}`}
      title="复制地址"
    >
      {copied ? <Check size={18} /> : <Copy size={18} />}
      <span className="text-xs font-bold uppercase">{copied ? '已复制' : '复制'}</span>
    </button>
  );
};

export default CopyButton;