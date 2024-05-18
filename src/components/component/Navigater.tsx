// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

interface NavbarProps {
    onScrollToPersonalityCards: () => void;
  }

const Navbar: React.FC<NavbarProps> = ({ onScrollToPersonalityCards }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-400">
            ホーム
          </Link>
          <a href="#" className="text-white hover:text-gray-400" onClick={onScrollToPersonalityCards}>ストレスタイプ診断</a>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

