/**
 * ProClubSection — блок для профессионалов (темный контрастный блок)
 * Показывает преимущества покупки абонемента
 * Мягкое движение света на фоне, карточки с анимацией
 */

import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Award, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { Button } from '../ui/button';
import { useInView } from '../hooks/use-in-view';

export function ProClubSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  // Преимущества клуба
  const benefits = [
    {
      icon: Award,
      title: 'Закрытые цены',
      description: 'Специальные условия для профессионалов',
    },
    {
      icon: ShieldCheck,
      title: 'Эксклюзивные материалы',
      description: 'Протоколы, видео, база знаний',
    },
    {
      icon: TrendingUp,
      title: 'Бонусная система',
      description: 'Накопительные скидки и кэшбэк',
    },
    {
      icon: Users,
      title: 'Профессиональное сообщество',
      description: 'Общение с экспертами и коллегами',
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] py-24 text-white"
    >
      {/* Анимированный фон — мягкое движение света */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute h-96 w-96 rounded-full bg-[#E94D8A] blur-[150px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div
          className="absolute h-96 w-96 rounded-full bg-[#FF6B9D] blur-[150px]"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ bottom: '20%', right: '10%' }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* Заголовок */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold lg:text-5xl">
            Для профессионалов
          </h2>
          <p className="text-lg text-white/70">
            Присоединяйтесь к закрытому сообществу экспертов
          </p>
        </motion.div>

        {/* Сетка преимуществ */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-[#E94D8A]/50 hover:bg-white/10"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                {/* Иконка */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#E94D8A] to-[#FF6B9D]">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* Заголовок */}
                <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>

                {/* Описание */}
                <p className="text-sm leading-relaxed text-white/60">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA кнопка */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Button
            size="lg"
            className="h-14 bg-gradient-to-r from-[#E94D8A] to-[#FF6B9D] px-12 text-base font-medium text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            asChild
          >
            <Link to="/bs/club">Стать партнёром</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}