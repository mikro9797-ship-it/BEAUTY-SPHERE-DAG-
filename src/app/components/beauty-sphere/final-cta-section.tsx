/**
 * FinalCTASection — финальный призыв к действию
 * Крупный блок с градиентом и кнопками
 * Мотивирует перейти в каталог или на семинары
 */

import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { useInView } from '../hooks/use-in-view';

export function FinalCTASection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#E94D8A] via-[#FF6B9D] to-[#E94D8A] px-8 py-16 lg:px-16 lg:py-24"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Анимированный фон с кругами */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <motion.div
              className="absolute h-64 w-64 rounded-full bg-white blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ top: '-10%', left: '10%' }}
            />
            <motion.div
              className="absolute h-96 w-96 rounded-full bg-white blur-3xl"
              animate={{
                x: [0, -50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ bottom: '-20%', right: '5%' }}
            />
          </div>

          {/* Контент */}
          <div className="relative z-10 text-center text-white">
            {/* Иконка */}
            <motion.div
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <Sparkles className="h-8 w-8" />
            </motion.div>

            {/* Заголовок */}
            <motion.h2
              className="mb-6 text-4xl font-bold lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Войдите в сферу
              <br />
              профессиональной красоты
            </motion.h2>

            {/* Подзаголовок */}
            <motion.p
              className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Присоединяйтесь к тысячам косметологов, которые доверяют Beauty
              Sphere. Эксклюзивные продукты, обучение и поддержка.
            </motion.p>

            {/* Кнопки */}
            <motion.div
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button
                size="lg"
                className="group h-14 bg-white px-12 text-base font-medium text-[#E94D8A] shadow-xl transition-all hover:scale-105 hover:bg-white/90"
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
                className="h-14 border-2 border-white bg-transparent px-12 text-base font-medium text-white hover:bg-white hover:text-[#E94D8A]"
                asChild
              >
                <Link to="/bs/seminars">Семинары и обучение</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
