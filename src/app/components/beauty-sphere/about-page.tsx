/**
 * AboutPage — страница "О нас"
 * История бренда, миссия, преимущества, команда
 */

import { motion } from 'motion/react';
import { Award, ShieldCheck, TrendingUp, Users, Heart, Zap } from 'lucide-react';
import { useInView } from '../hooks/use-in-view';

export function AboutBeautySpherePage() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: valuesRef, isInView: valuesInView } = useInView({ threshold: 0.1 });
  const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.1 });

  // Ценности компании
  const values = [
    {
      icon: ShieldCheck,
      title: 'Качество',
      description: 'Только оригинальная продукция от проверенных производителей',
    },
    {
      icon: Award,
      title: 'Экспертность',
      description: 'Профессиональное обучение и поддержка специалистов',
    },
    {
      icon: Heart,
      title: 'Забота',
      description: 'Индивидуальный подход к каждому клиенту',
    },
    {
      icon: Zap,
      title: 'Инновации',
      description: 'Передовые технологии и новейшие разработки',
    },
    {
      icon: TrendingUp,
      title: 'Развитие',
      description: 'Непрерывное обучение и рост профессионалов',
    },
    {
      icon: Users,
      title: 'Сообщество',
      description: 'Сильное профессиональное комьюнити',
    },
  ];

  // Статистика
  const stats = [
    { number: '20+', label: 'Мировых брендов' },
    { number: '1000+', label: 'Профессионалов' },
    { number: '50+', label: 'Семинаров в год' },
    { number: '15', label: 'Лет на рынке' },
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
            О BEAUTY SPHERE
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-[#666666]">
            Мы создаем профессиональную экосистему для косметологов — место, где
            встречаются лучшие бренды, экспертные знания и сообщество
            единомышленников.
          </p>
        </motion.div>
      </section>

      {/* История и миссия */}
      <section className="bg-[#F9F9F9] py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* История */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-3xl font-bold text-[#111111]">
                Наша история
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-[#666666]">
                <p>
                  BEAUTY SPHERE начала свой путь в 2011 году как небольшой
                  дистрибьютор профессиональной косметики. Мы видели, как
                  косметологам не хватает качественных продуктов и поддержки в их
                  работе.
                </p>
                <p>
                  За 15 лет мы выросли в крупнейшую платформу для профессионалов
                  индустрии красоты. Сегодня мы работаем с более чем 20 мировыми
                  брендами и обучаем тысячи специалистов ежегодно.
                </p>
                <p>
                  Наша миссия — сделать профессиональную космецевтику доступной
                  для каждого косметолога и помочь им расти вместе с нами.
                </p>
              </div>
            </motion.div>

            {/* Миссия */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-3xl font-bold text-[#111111]">
                Наша миссия
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-[#666666]">
                <p>
                  Мы верим, что каждый косметолог заслуживает доступа к лучшим
                  продуктам и знаниям. Наша цель — создать профессиональное
                  сообщество, где специалисты могут развиваться, учиться и
                  обмениваться опытом.
                </p>
                <p>
                  Мы не просто продаем косметику — мы создаем экосистему для
                  роста бизнеса наших партнеров. От подбора продуктов до обучения
                  и маркетинговой поддержки.
                </p>
              </div>
              <div className="mt-8 rounded-2xl bg-gradient-to-br from-[#E94D8A] to-[#FF6B9D] p-8 text-white">
                <p className="text-lg font-medium">
                  "Мы помогаем косметологам создавать результаты, которые меняют
                  жизнь их клиентов"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ценности */}
      <section ref={valuesRef} className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-[#111111]">
              Наши ценности
            </h2>
            <p className="text-lg text-[#666666]">
              Принципы, которыми мы руководствуемся каждый день
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="rounded-2xl border border-[#E6E6E6] bg-white p-8 transition-all hover:border-[#E94D8A]/30 hover:shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#E94D8A] to-[#FF6B9D]">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-[#111111]">
                    {value.title}
                  </h3>
                  <p className="leading-relaxed text-[#666666]">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section ref={statsRef} className="bg-[#F9F9F9] py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <p className="mb-2 bg-gradient-to-r from-[#E94D8A] to-[#FF6B9D] bg-clip-text text-6xl font-bold text-transparent">
                  {stat.number}
                </p>
                <p className="text-lg text-[#666666]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Почему выбирают нас */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-12 text-4xl font-bold text-[#111111]">
              Почему профессионалы выбирают нас
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl bg-[#F9F9F9] p-8 text-left">
                <h3 className="mb-3 text-xl font-semibold text-[#111111]">
                  Гарантия оригинальности
                </h3>
                <p className="leading-relaxed text-[#666666]">
                  Мы официальные дистрибьюторы всех представленных брендов. Каждый
                  продукт сертифицирован и поставляется напрямую от производителя.
                </p>
              </div>
              <div className="rounded-2xl bg-[#F9F9F9] p-8 text-left">
                <h3 className="mb-3 text-xl font-semibold text-[#111111]">
                  Профессиональная поддержка
                </h3>
                <p className="leading-relaxed text-[#666666]">
                  Наша команда экспертов всегда готова помочь с подбором продуктов,
                  составлением протоколов и решением любых вопросов.
                </p>
              </div>
              <div className="rounded-2xl bg-[#F9F9F9] p-8 text-left">
                <h3 className="mb-3 text-xl font-semibold text-[#111111]">
                  Обучение и развитие
                </h3>
                <p className="leading-relaxed text-[#666666]">
                  Регулярные семинары, мастер-классы и доступ к эксклюзивным
                  материалам помогают вам оставаться на вершине индустрии.
                </p>
              </div>
              <div className="rounded-2xl bg-[#F9F9F9] p-8 text-left">
                <h3 className="mb-3 text-xl font-semibold text-[#111111]">
                  Выгодные условия
                </h3>
                <p className="leading-relaxed text-[#666666]">
                  Специальные цены для профессионалов, бонусная программа и
                  гибкие условия сотрудничества.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
