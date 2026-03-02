/**
 * HeroSection — главная секция первого экрана
 * 3D сфера + крупный заголовок + CTA кнопки
 * Занимает 100vh, центрирование контента
 */

import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { Sphere3D } from './sphere-3d';

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-white to-[#F9F9F9] pt-20">
      {/* 3D сфера в фоне */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="h-[600px] w-[600px]">
          <Sphere3D />
        </div>
      </div>

      {/* Контент Hero */}
      <div className="container relative z-10 mx-auto px-6 text-center lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Крупный заголовок */}
          <h1 className="mb-6 text-5xl font-bold leading-tight text-[#111111] lg:text-7xl">
            Профессиональная
            <br />
            <span className="bg-gradient-to-r from-[#E94D8A] to-[#FF6B9D] bg-clip-text text-transparent">
              космецевтика
            </span>
            <br />
            нового уровня
          </h1>

          {/* Подзаголовок */}
          <motion.p
            className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-[#666666] lg:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Официальный дилер более 20 мировых брендов.
            <br />
            Обучение и поддержка для специалистов.
          </motion.p>

          {/* CTA кнопки */}
          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="group h-14 bg-gradient-to-r from-[#E94D8A] to-[#FF6B9D] px-8 text-base font-medium text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
              asChild
            >
              <Link to="/bs/catalog">
                Перейти в каталог
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-14 border-2 border-[#E94D8A] px-8 text-base font-medium text-[#E94D8A] hover:bg-[#E94D8A] hover:text-white"
              asChild
            >
              <Link to="/bs/seminars">Ближайшие семинары</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Индикатор скролла */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.5 },
            y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-[#999999]">
              Scroll
            </span>
            <div className="h-8 w-[2px] bg-gradient-to-b from-[#E94D8A] to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}