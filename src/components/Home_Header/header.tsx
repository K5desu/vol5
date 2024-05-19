import React from 'react';
import { Nunito } from 'next/font/google';
import Link from 'next/link';

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '700'] });

const Header = ({ title = 'Default Title' }) => {
  return (
    <header className={`flex items-center justify-between p-4 bg-gray-900 shadow-md ${nunito.className}`}>
      <div className="flex-shrink-0">
      <img src="/ThemeIcon.png" alt="ストレス解消アプリ" className="max-w-md w-20 h-auto object-cover transform scale-110 rounded-lg shadow-md" />
      </div>
      <h1 className="flex-grow text-center text-2xl font-bold text-white tracking-wide">{title}</h1>
      <Link href="/AI" className="px-4 py-2 bg-white text-gray-900 rounded-lg shadow hover:bg-gray-100 transition duration-300">
        使ってみる
      </Link>
    </header>
  );
};

export default Header;




