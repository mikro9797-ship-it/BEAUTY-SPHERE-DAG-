/**
 * HomePage — главная страница Beauty Sphere
 * Собирает все секции: Hero, Бренды, Продукты, Семинары, Абонемент, Отзывы, CTA
 */

import { HeroSection } from './hero-section';
import { BrandsSection } from './brands-section';
import { ProductsSection } from './products-section';
import { SeminarsSection } from './seminars-section';
import { ProClubSection } from './pro-club-section';
import { TestimonialsSection } from './testimonials-section';
import { FinalCTASection } from './final-cta-section';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero — первый экран с 3D сферой */}
      <HeroSection />

      {/* Блок брендов */}
      <BrandsSection />

      {/* Популярные продукты */}
      <ProductsSection />

      {/* Семинары */}
      <SeminarsSection />

      {/* Профессиональный клуб (темный блок) */}
      <ProClubSection />

      {/* Отзывы */}
      <TestimonialsSection />

      {/* Финальный CTA */}
      <FinalCTASection />
    </div>
  );
}