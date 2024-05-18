// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav style={{ background: '#333', padding: '10px', color: 'white' }}>
      <Link href="/">使ってみる</Link>
      <Link href="/">ストレスタイプ</Link>
    </nav>
  );
};

export default Navbar;
