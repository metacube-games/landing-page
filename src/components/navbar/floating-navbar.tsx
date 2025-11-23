"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import {useTranslations} from 'next-intl';
import { useFocusTrap } from "@/hooks/useFocusTrap";

// Hamburger and Close Icons
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="size-5 ml-1.5 text-neutral-400 group-hover:text-neutral-200 transition-colors"
  >
    <path
      fillRule="evenodd"
      d="M4.25 5.5a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zm0 3a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5zm0 3a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zm8-6a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V6.52L12.03 9.03a.75.75 0 01-1.06-1.06L13.47 5.5h-1.72a.75.75 0 01-.75-.75z"
      clipRule="evenodd"
    />
  </svg>
);

const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollY, scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations('navbar');
  const focusTrapRef = useFocusTrap(isMobileMenuOpen);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useMotionValueEvent(scrollYProgress, "change", (currentProgress: number) => {
    const currentPixelScroll = scrollY.get();

    if (currentPixelScroll <= 30) {
      setVisible(true);
    } else {
      const direction = currentProgress - (scrollYProgress.getPrevious() ?? 0);
      if (direction < 0) {
        setVisible(true);
      } else if (direction > 0) {
        setVisible(false);
      }
    }
  });

  const isExternalLink = (url: string) => url.startsWith('http');

  const regularNavItems = navItems.filter(item => !item.link.includes('market.metacube.games') && !item.link.includes('play.metacube.games'));
  const marketItem = navItems.find(item => item.link.includes('market.metacube.games'));
  const playItem = navItems.find(item => item.link.includes('play.metacube.games'));

  // Toggle mobile menu and prevent body scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Return focus to the menu button when closing
      closeButtonRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = 'unset'; // Cleanup on unmount
    };
  }, [isMobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Floating Nav - Hides on mobile */}
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "hidden md:flex max-w-fit fixed top-2 inset-x-0 mx-auto border border-neutral-200/80 rounded-full bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] overflow-hidden",
          className
        )}
      >
        <div className="flex items-center gap-1 px-3 py-2">
          {regularNavItems.map((navItem, idx: number) => (
            <Link
              key={`link-regular-${idx}`}
              href={navItem.link}
              className={cn("relative items-center flex gap-1.5 px-3 py-1.5 rounded-full text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 transition-colors duration-150")}
              target={isExternalLink(navItem.link) ? "_blank" : undefined}
              rel={isExternalLink(navItem.link) ? "noopener noreferrer" : undefined}
            >
              {navItem.icon}
              <span className="text-sm font-medium whitespace-nowrap">{navItem.name}</span>
            </Link>
          ))}
        </div>
        {(marketItem || playItem) && (
          <div className="flex items-center gap-1 bg-black px-3 py-2">
            {marketItem && (
              <Link
                key={`link-market`}
                href={marketItem.link}
                className={cn("relative items-center flex gap-1.5 px-3 py-1.5 rounded-full text-neutral-200 hover:text-white hover:bg-neutral-800 transition-colors duration-150")}
                target="_blank" rel="noopener noreferrer"
              >
                {marketItem.icon}
                <span className="text-sm font-medium whitespace-nowrap">{marketItem.name}</span>
              </Link>
            )}
            {playItem && (
              <Link
                key={`link-play`}
                href={playItem.link}
                className={cn("relative items-center flex gap-1.5 px-3 py-1.5 rounded-full text-neutral-200 hover:text-white hover:bg-neutral-800 transition-colors duration-150")}
                target="_blank" rel="noopener noreferrer"
              >
                {playItem.icon}
                <span className="text-sm font-medium whitespace-nowrap">{playItem.name}</span>
              </Link>
            )}
          </div>
        )}
      </motion.div>

      {/* Mobile Hamburger Menu Button - Only on mobile */}
      <div className="md:hidden fixed top-4 right-4 z-[5001]">
        <button
          ref={closeButtonRef}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md text-neutral-700 bg-white/80 backdrop-blur-sm shadow-lg border border-neutral-200/80 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-500 min-w-[44px] min-h-[44px]"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            id="mobile-menu"
            ref={focusTrapRef as React.RefObject<HTMLElement>}
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 bg-neutral-900/95 backdrop-blur-md z-[5000] p-8 pt-20 flex flex-col space-y-1"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsMobileMenuOpen(false);
              }
            }}
          >
            {navItems.map((item, idx) => {
              const isExternal = isExternalLink(item.link);
              const isMarketOrPlay = item.link.includes('market.metacube.games') || item.link.includes('play.metacube.games');
              const showDivider = item.link.includes('market.metacube.games'); // Add divider before Market

              return (
                <React.Fragment key={`mobile-fragment-${idx}`}>
                  {showDivider && (
                    <hr className="border-neutral-700 my-4 mx-2" aria-hidden="true" />
                  )}
                  <Link
                    key={`mobile-link-${idx}`}
                    href={item.link}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-center space-x-3 p-3 rounded-md text-2xl font-medium text-neutral-200 hover:bg-neutral-800 transition-colors duration-150"
                    aria-label={isExternal ? `${item.name} (opens in new window)` : item.name}
                  >
                    {item.icon && React.isValidElement(item.icon) && React.cloneElement(item.icon as React.ReactElement<{ className?: string; 'aria-hidden'?: string }>, { className: "size-7", "aria-hidden": "true" })}
                    <span>{item.name}</span>
                    {isMarketOrPlay && <ExternalLinkIcon />}
                  </Link>
                </React.Fragment>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNav;
