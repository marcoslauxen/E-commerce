'use client';

import { usePathname } from 'next/navigation';
import Logo from './Logo';
import Cart from '../template/Cart';
import Input from '../Input';

export default function Header() {
  const pathname = usePathname();
  const showInput = pathname === '/';

  return (
    <header className="flex justify-between items-center bg-zinc-800 h-20 px-10">
      <Logo />
      {showInput && <Input />}
      <Cart />
    </header>
  );
}
