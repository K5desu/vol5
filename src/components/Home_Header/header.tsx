import React from 'react';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '700'] });

const Header = ({ title = 'Default Title' }) => {
  return (
    <header className={`flex items-center justify-between p-4 bg-gray-900 shadow-md ${nunito.className}`}>
      <div className="flex-shrink-0">
        <img src="placeholder-icon.png" alt="App Icon" className="w-10 h-10 rounded-full border-2 border-white" />
      </div>
      <h1 className="flex-grow text-center text-2xl font-bold text-white tracking-wide">{title}</h1>
      <button className="px-4 py-2 bg-white text-gray-900 rounded-lg shadow hover:bg-gray-100 transition duration-300">
        ログイン
      </button>
    </header>
  );
};

export default Header;




