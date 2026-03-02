/**
 * BrandsPage — полная страница официальных брендов
 * Показывает все 20+ партнеров с описаниями
 * Используется по роуту /bs/brands
 */

import { motion } from 'motion/react';
import { brands } from './data';
import { useInView } from '../hooks/use-in-view';

export function BrandsPage() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-[#E94D8A]/5 to-[#FF6B9D]/5 py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 text-5xl font-bold text-[#111111] lg:text-6xl">
              Наши бренды
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-[#666666]">
              Мы работаем напрямую с ведущими мировыми производителями профессиональной косметики и космецевтики
            </p>
          </motion.div>
        </div>
      </section>

      {/* Сетка брендов */}
      <section ref={ref} className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                className="group relative rounded-3xl border border-[#E6E6E6] bg-white p-8 transition-all hover:border-[#E94D8A]/30 hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                {/* Hover эффект фона */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#E94D8A]/5 to-[#FF6B9D]/5 opacity-0 transition-opacity group-hover:opacity-100" />

                {/* Контент карточки */}
                <div className="relative z-10">
                  <h3 className="mb-3 text-2xl font-bold text-[#111111]">
                    {brand.name}
                  </h3>
                  <p className="text-[#666666]">
                    {brand.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Информация о сертификации */}
      <section className="bg-[#F8F8F8] py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-lg text-[#666666]">
              ✓ Все продукты сертифицированы и поставляются напрямую от производителей
              <br />
              ✓ Гарантия оригинальности и качества каждого продукта
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}