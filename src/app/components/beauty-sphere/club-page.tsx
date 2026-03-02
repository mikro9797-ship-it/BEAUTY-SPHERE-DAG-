/**
 * ClubPage — страница профессионального абонемента
 * Форма покупки, преимущества, уровни членства
 */

import { motion } from 'motion/react';
import { Award, ShieldCheck, TrendingUp, Users, Gift, Video, BookOpen, Percent } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { useInView } from '../hooks/use-in-view';

export function ClubPage() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: benefitsRef, isInView: benefitsInView } = useInView({ threshold: 0.1 });
  const { ref: levelsRef, isInView: levelsInView } = useInView({ threshold: 0.1 });

  // Преимущества абонемента
  const benefits = [
    {
      icon: Percent,
      title: 'Закрытые цены',
      description: 'Скидки до 30% на все продукты',
    },
    {
      icon: Gift,
      title: 'Бонусная программа',
      description: 'Кэшбэк и накопительная система',
    },
    {
      icon: Video,
      title: 'Эксклюзивные материалы',
      description: 'Видео-протоколы и база знаний',
    },
    {
      icon: BookOpen,
      title: 'Приоритет на семинары',
      description: 'Ранняя регистрация и спецпредложения',
    },
    {
      icon: Users,
      title: 'Закрытое сообщество',
      description: 'Общение с экспертами и коллегами',
    },
    {
      icon: TrendingUp,
      title: 'Бизнес-поддержка',
      description: 'Консультации по развитию практики',
    },
    {
      icon: Award,
      title: 'Сертификация',
      description: 'Официальные сертификаты партнера',
    },
    {
      icon: ShieldCheck,
      title: 'Гарантии',
      description: 'Расширенная гарантия на продукцию',
    },
  ];

  // Уровни членства
  const levels = [
    {
      name: 'START',
      price: 'Бесплатно',
      color: 'from-[#9A9A9A] to-[#7A7A7A]',
      benefits: [
        'Скидка 10% на продукты',
        'Доступ к базовым материалам',
        'Уведомления о новинках',
        'Участие в семинарах',
      ],
    },
    {
      name: 'PRO',
      price: '15 000 ₽/год',
      color: 'from-[#E94D8A] to-[#FF6B9D]',
      popular: true,
      benefits: [
        'Скидка 20% на продукты',
        'Эксклюзивные материалы',
        'Приоритет на семинары',
        'Персональный менеджер',
        'Бонусная программа',
        'Закрытое комьюнити',
      ],
    },
    {
      name: 'EXPERT',
      price: '50 000 ₽/год',
      color: 'from-[#FFD700] to-[#FFA500]',
      benefits: [
        'Скидка 30% на продукты',
        'Все материалы PRO',
        'Бесплатные семинары',
        'Индивидуальные консультации',
        'Маркетинговая поддержка',
        'VIP-мероприятия',
        'Официальный партнерский статус',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      {/* Hero секция */}
      <section ref={heroRef} className="container mx-auto mb-24 px-6 lg:px-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-6 text-5xl font-bold text-[#111111] lg:text-6xl">
            Профессиональный абонемент
            <br />
            <span className="bg-gradient-to-r from-[#E94D8A] to-[#FF6B9D] bg-clip-text text-transparent">
              BEAUTY SPHERE
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-[#666666]">
            Присоединяйтесь к сообществу профессионалов и получите доступ к
            эксклюзивным условиям, обучению и поддержке.
          </p>
        </motion.div>
      </section>

      {/* Преимущества */}
      <section ref={benefitsRef} className="bg-[#F9F9F9] py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-[#111111]">
              Преимущества членства
            </h2>
            <p className="text-lg text-[#666666]">
              Всё необходимое для роста вашей практики
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#E94D8A] to-[#FF6B9D]">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#111111]">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#666666]">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Уровни членства */}
      <section ref={levelsRef} className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={levelsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-[#111111]">
              Выберите уровень членства
            </h2>
            <p className="text-lg text-[#666666]">
              Подходящий план для любого профессионала
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {levels.map((level, index) => (
              <motion.div
                key={index}
                className={`relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl ${
                  level.popular ? 'ring-4 ring-[#E94D8A] ring-offset-4' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={levelsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                {/* Популярный бейдж */}
                {level.popular && (
                  <div className="absolute right-0 top-8 bg-[#E94D8A] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    Популярный
                  </div>
                )}

                {/* Хедер */}
                <div
                  className={`bg-gradient-to-br ${level.color} px-8 pb-12 pt-12 text-white`}
                >
                  <h3 className="mb-2 text-2xl font-bold">{level.name}</h3>
                  <p className="text-3xl font-bold">{level.price}</p>
                </div>

                {/* Преимущества */}
                <div className="p-8">
                  <ul className="mb-8 space-y-4">
                    {level.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#E94D8A]" />
                        <span className="text-sm text-[#666666]">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    size="lg"
                    className={`w-full ${
                      level.popular
                        ? 'bg-gradient-to-r from-[#E94D8A] to-[#FF6B9D] text-white'
                        : 'bg-[#F9F9F9] text-[#111111] hover:bg-[#E94D8A] hover:text-white'
                    }`}
                  >
                    Выбрать план
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Форма заявки */}
      <section className="bg-[#F9F9F9] py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-[#111111]">
                Стать партнёром
              </h2>
              <p className="text-lg text-[#666666]">
                Заполните форму, и мы свяжемся с вами в ближайшее время
              </p>
            </div>

            <form className="space-y-6 rounded-2xl bg-white p-8 shadow-lg">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <Label htmlFor="name">Имя и фамилия *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Анна Иванова"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="city">Город *</Label>
                <Input
                  id="city"
                  type="text"
                  placeholder="Москва"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="experience">Расскажите о себе</Label>
                <Textarea
                  id="experience"
                  placeholder="Опыт работы, специализация, интересующие бренды..."
                  rows={4}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="level">Интересующий уровень</Label>
                <select
                  id="level"
                  className="mt-2 w-full rounded-lg border border-[#E6E6E6] px-4 py-3 text-[#111111] focus:border-[#E94D8A] focus:outline-none"
                >
                  <option>START (Бесплатно)</option>
                  <option>PRO (15 000 ₽/год)</option>
                  <option>EXPERT (50 000 ₽/год)</option>
                </select>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-[#E94D8A] to-[#FF6B9D] text-white hover:opacity-90"
              >
                Отправить заявку
              </Button>

              <p className="text-center text-xs text-[#999999]">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}