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
    <header className="py-4 md:py-6 fixed w-full backdrop-blur bg-transparent z-50">
      <nav className="rounded-xl  hidden md:block">
        <div className="flex justify-between items-center px-9">
          <Link href="/" className="logo">
            Ian
          </Link>
          <div className="flex items-center gap-8 text-sm text-slate-400">
            {navLinks.map((link) => {
              const isActive = activeLink === link.route;

              return (
                <Link
                  href={link.route}
                  key={link.label}
                  onClick={() => handleClick(link.route)}
                  className={cn(
                    'font-firaMono hover:text-secondary hover:underline hover:underline-offset-8',
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
          <div className="relative z-10">
            <Button
              variant="outline"
              className="btn text-secondary border-secondary font-firaMono bg-primary"
              onClick={() => window.open('/assets/files/CV.pdf', '_blank')}
            >
              Resume
            </Button>
          </div>
        </div>
      </nav>
      <div className="h-14 md:hidden md:h-16 flex items-center justify-between px-5 backdrop-blur">
        <p>Ian</p>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
