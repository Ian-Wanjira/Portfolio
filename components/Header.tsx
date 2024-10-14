'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import MobileNav from '@/components/MobileNav';
import { navLinks } from '@/constants';
import { cn } from '@/lib/utils';

import { Button } from './ui/button';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash);
    };

    // Set initial hash when component mounts
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleClick = (route: string) => {
    setActiveLink(route);
  };

  return (
    <header className="py-6 fixed w-full">
      <nav className="py-2  backdrop-blur mx-6 rounded-xl bg-transparent hidden md:block">
        <div className="flex justify-between items-center px-6">
          <div className="logo">Ian</div>
          <div className="flex items-center gap-8 text-sm text-slate-400">
            {navLinks.map((link) => {
              const isActive = activeLink === link.route;

              return (
                <Link
                  href={link.route}
                  key={link.label}
                  onClick={() => handleClick(link.route)}
                  className={cn(
                    'font-firaMono',
                    isActive
                      ? 'text-secondary underline underline-offset-8'
                      : 'text-slate-400',
                  )}
                >
                  <span className="text-secondary">{link.number}.</span>{' '}
                  {link.label}
                </Link>
              );
            })}
          </div>
          <Button
            variant="outline"
            className="text-secondary border-secondary font-firaMono"
          >
            Resume
          </Button>
        </div>
      </nav>
      <div className="h-14 md:hidden md:h-16 flex items-center justify-between px-5">
        <p>Ian</p>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
