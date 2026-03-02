/**
 * Layout — общий лейаут для всех страниц Beauty Sphere
 * Включает Header, Footer, Cart и прелоадер при первой загрузке
 */

import { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import { Header } from './header';
import { Footer } from './footer';
import { Preloader } from './preloader';
import { Cart } from './cart';
import { CartProvider } from './cart-context';

export function BeautySphereLayout() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);

  useEffect(() => {
    // Проверяем, был ли уже показан прелоадер в этой сессии
    const hasSeenPreloader = sessionStorage.getItem('beautySpherePreloaderSeen');
    if (hasSeenPreloader) {
      setShowPreloader(false);
      setIsPreloaderComplete(true);
    } else {
      sessionStorage.setItem('beautySpherePreloaderSeen', 'true');
    }
  }, []);

  const handlePreloaderComplete = () => {
    setIsPreloaderComplete(true);
  };

  return (
    <CartProvider>
      {/* Прелоадер показываем только при первом визите */}
      {showPreloader && !isPreloaderComplete && (
        <Preloader onComplete={handlePreloaderComplete} />
      )}

      {/* Основной контент */}
      <div className={isPreloaderComplete || !showPreloader ? '' : 'opacity-0'}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        {/* Корзина (слайд-панель) */}
        <Cart />
      </div>
    </CartProvider>
  );
}