/**
 * SeminarsSection — секция семинаров на главной
 * Карточки ближайших семинаров с датами и спикерами
 * Интерактивные hover эффекты
 */

import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Calendar, MapPin, Video } from 'lucide-react';
import { seminars } from './data';
import { Button } from '../ui/button';
import { useInView } from '../hooks/use-in-view';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale/ru';

export function SeminarsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  // Показываем только первые 3 семинара
  const upcomingSeminars = seminars.slice(0, 3);

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Заголовок */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-[#111111] lg:text-5xl">
            Семинары и обучение
          </h2>
          <p className="text-lg text-[#666666]">
            Станьте экспертом с BEAUTY SPHERE
          </p>
        </motion.div>

        {/* Сетка семинаров */}
        <div className="grid gap-8 lg:grid-cols-3">
          {upcomingSeminars.map((seminar, index) => {
            const seminarDate = new Date(seminar.date);
            const formattedDate = format(seminarDate, 'd MMMM yyyy', {
              locale: ru,
            });

            return (
              <motion.div
                key={seminar.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                {/* Изображение семинара */}
                <div className="relative aspect-video overflow-hidden bg-[#F5F5F5]">
                  <img
                    src={seminar.image}
                    alt={seminar.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Градиент наложение */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Формат бейдж */}
                  <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                    {seminar.format === 'online' ? (
                      <>
                        <Video className="h-3.5 w-3.5 text-[#E94D8A]" />
                        <span>Онлайн</span>
                      </>
                    ) : (
                      <>
                        <MapPin className="h-3.5 w-3.5 text-[#E94D8A]" />
                        <span>{seminar.city}</span>
                      </>
                    )}
                  </div>

                  {/* Дата */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="flex items-center gap-2 text-sm font-medium">
                      <Calendar className="h-4 w-4" />
                      {formattedDate}
                    </p>
                  </div>
                </div>

                {/* Информация о семинаре */}
                <div className="p-6">
                  {/* Уровень */}
                  <div className="mb-3 inline-block rounded-full bg-[#E94D8A]/10 px-3 py-1 text-xs font-medium text-[#E94D8A]">
                    {seminar.level === 'beginner' ? 'Начальный' : 'Продвинутый'}
                  </div>

                  {/* Название */}
                  <h3 className="mb-3 text-xl font-semibold text-[#111111] line-clamp-2">
                    {seminar.title}
                  </h3>

                  {/* Описание */}
                  <p className="mb-4 text-sm leading-relaxed text-[#666666] line-clamp-2">
                    {seminar.shortDescription}
                  </p>

                  {/* Спикер */}
                  <div className="mb-6 flex items-center gap-3 border-t border-[#E6E6E6] pt-4">
                    <img
                      src={seminar.speaker.photo}
                      alt={seminar.speaker.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-[#111111]">
                        {seminar.speaker.name}
                      </p>
                      <p className="text-xs text-[#999999] line-clamp-1">
                        {seminar.speaker.bio}
                      </p>
                    </div>
                  </div>

                  {/* Цена и кнопка */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-[#111111]">
                        {seminar.price.toLocaleString('ru-RU')} ₽
                      </p>
                    </div>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-[#E94D8A] to-[#FF6B9D] text-white hover:opacity-90"
                      asChild
                    >
                      <Link to={`/bs/seminar/${seminar.id}`}>
                        Записаться
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Кнопка "Все семинары" */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#E94D8A] px-12 text-[#E94D8A] hover:bg-[#E94D8A] hover:text-white"
            asChild
          >
            <Link to="/bs/seminars">Все семинары</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}