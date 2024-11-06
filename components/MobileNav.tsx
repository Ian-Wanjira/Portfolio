'use client';

import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { navLinks } from '@/constants';
import { cn } from '@/lib/utils';

const MobileNav = () => {
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
    <section className="">
      <Sheet>
        <SheetTrigger>
          <HamburgerMenuIcon className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-primary">
          <SheetTitle>
            <Link href={'/'}>
              <h1>Ian</h1>
            </Link>
          </SheetTitle>

          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {navLinks.map((link) => {
                  const isActive = activeLink === link.route;

                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        key={link.label}
                        onClick={() => handleClick(link.route)}
                        className={cn('mobilenav-sheet_close w-full', {
                          'bg-secondary': isActive,
                          'text-primary': isActive,
                        })}
                      >
                        <span>{link.number}.</span>
                        <p>{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
                <Button
                  variant="outline"
                  className="text-secondary border-secondary font-firaMono"
                >
                  Resume
                </Button>
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
