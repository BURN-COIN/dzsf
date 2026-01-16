import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-calligraphy text-3xl text-gray-600 mb-4 opacity-50">斗战胜佛</h2>
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Buddha of Victory. All Rights Reserved.
        </p>
        <p className="text-gray-700 text-xs mt-2">
          Cryptocurrency investments carry risks. Please do your own research (DYOR).
        </p>
      </div>
    </footer>
  );
};

export default Footer;