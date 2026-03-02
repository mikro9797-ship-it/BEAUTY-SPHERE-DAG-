/**
 * Header — верхняя навигация сайта Beauty Sphere
 * Sticky меню с логотипом, навигацией и корзиной
 * Прозрачное, появляется при скролле
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { useCart } from './cart-context';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems, openCart } = useCart();

  // Отслеживаем скролл для изменения стиля хедера
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Основная навигация
  const navItems = [
    { path: '/bs/catalog', label: 'Каталог' },
    { path: '/bs/seminars', label: 'Семинары' },
    { path: '/bs/club', label: 'Абонемент' },
    { path: '/bs/about', label: 'О нас' },
  ];

  return (
    <motion.header
      /* Sticky header с изменяющимся фоном */
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Логотип */}
          <Link to="/bs" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#E94D8A] to-[#FF6B9D]">
              <span className="text-lg font-bold text-white">BS</span>
            </div>
            <span className="text-xl font-semibold tracking-tight text-[#111111]">
              BEAUTY SPHERE
            </span>
          </Link>

          {/* Desktop навигация */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#E94D8A] ${
                  location.pathname === link.path
                    ? 'text-[#E94D8A]'
                    : 'text-[#111111]/70'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Действия (корзина, профиль) */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative hidden lg:flex"
              onClick={openCart}
            >
              <ShoppingCart className="h-5 w-5" />
              {/* Индикатор количества товаров */}
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#E94D8A] text-xs text-white">
                  {totalItems}
                </span>
              )}
            </Button>

            <Button variant="ghost" size="icon" className="hidden lg:flex" asChild>
              <Link to="/bs/profile">
                <User className="h-5 w-5" />
              </Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile меню */}
        {isMobileMenuOpen && (
          <motion.nav
            className="border-t border-[#E6E6E6] py-4 lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#E94D8A]'
                      : 'text-[#111111]/70'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex gap-4 border-t border-[#E6E6E6] pt-4">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => {
                    openCart();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Корзина {totalItems > 0 && `(${totalItems})`}
                </Button>
                <Button variant="outline" className="flex-1" asChild>
                  <Link to="/bs/profile" onClick={() => setIsMobileMenuOpen(false)}>
                    <User className="mr-2 h-4 w-4" />
                    Профиль
                  </Link>
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}