/**
 * SeminarsPage — страница всех семинаров
 * Фильтрация по формату (online/offline), уровню, дате
 * Интерактивные карточки с регистрацией
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Calendar, MapPin, Video, Users, Filter } from 'lucide-react';
import { seminars } from './data';
import { Button } from '../ui/button';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale/ru';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';

export function SeminarsPage() {
  const [formatFilter, setFormatFilter] = useState<'all' | 'online' | 'offline'>('all');
  const [levelFilter, setLevelFilter] = useState<'all' | 'beginner' | 'advanced'>('all');

  // Фильтрация семинаров
  const filteredSeminars = seminars.filter((seminar) => {
    if (formatFilter !== 'all' && seminar.format !== formatFilter) return false;
    if (levelFilter !== 'all' && seminar.level !== levelFilter) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F9F9F9] pt-32 pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Hero секция */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 text-5xl font-bold text-[#111111] lg:text-6xl">
              Семинары и обучение
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#666666]">
              Профессиональные программы от ведущих экспертов индустрии.
              <br />
              Развивайте свои навыки вместе с BEAUTY SPHERE.
            </p>
          </motion.div>
        </div>

        {/* Фильтры */}
        <div className="mb-12 rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center gap-6">
            {/* Формат */}
            <div className="flex items-center gap-3">
              <Filter className="h-5 w-5 text-[#999999]" />
              <span className="text-sm font-medium text-[#666666]">Формат:</span>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant={formatFilter === 'all' ? 'default' : 'outline'}
                  onClick={() => setFormatFilter('all')}
                  className={formatFilter === 'all' ? 'bg-[#E94D8A] text-white' : ''}
                >
                  Все
                </Button>
                <Button
                  size="sm"
                  variant={formatFilter === 'online' ? 'default' : 'outline'}
                  onClick={() => setFormatFilter('online')}
                  className={formatFilter === 'online' ? 'bg-[#E94D8A] text-white' : ''}
                >
                  <Video className="mr-2 h-4 w-4" />
                  Онлайн
                </Button>
                <Button
                  size="sm"
                  variant={formatFilter === 'offline' ? 'default' : 'outline'}
                  onClick={() => setFormatFilter('offline')}
                  className={formatFilter === 'offline' ? 'bg-[#E94D8A] text-white' : ''}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Офлайн
                </Button>
              </div>
            </div>

            {/* Уровень */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-[#666666]">Уровень:</span>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant={levelFilter === 'all' ? 'default' : 'outline'}
                  onClick={() => setLevelFilter('all')}
                  className={levelFilter === 'all' ? 'bg-[#E94D8A] text-white' : ''}
                >
                  Все
                </Button>
                <Button
                  size="sm"
                  variant={levelFilter === 'beginner' ? 'default' : 'outline'}
                  onClick={() => setLevelFilter('beginner')}
                  className={levelFilter === 'beginner' ? 'bg-[#E94D8A] text-white' : ''}
                >
                  Начальный
                </Button>
                <Button
                  size="sm"
                  variant={levelFilter === 'advanced' ? 'default' : 'outline'}
                  onClick={() => setLevelFilter('advanced')}
                  className={levelFilter === 'advanced' ? 'bg-[#E94D8A] text-white' : ''}
                >
                  Продвинутый
                </Button>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm text-[#999999]">
            Найдено семинаров: {filteredSeminars.length}
          </p>
        </div>

        {/* Сетка семинаров */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredSeminars.map((seminar, index) => {
            const seminarDate = new Date(seminar.date);
            const formattedDate = format(seminarDate, 'd MMMM yyyy', {
              locale: ru,
            });

            return (
              <motion.div
                key={seminar.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Изображение */}
                <div className="relative aspect-video overflow-hidden bg-[#F5F5F5]">
                  <img
                    src={seminar.image}
                    alt={seminar.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
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

                {/* Контент */}
                <div className="p-6">
                  <div className="mb-3 inline-block rounded-full bg-[#E94D8A]/10 px-3 py-1 text-xs font-medium text-[#E94D8A]">
                    {seminar.level === 'beginner' ? 'Начальный' : 'Продвинутый'}
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-[#111111] line-clamp-2">
                    {seminar.title}
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed text-[#666666] line-clamp-2">
                    {seminar.shortDescription}
                  </p>

                  {/* Программа */}
                  <div className="mb-6 border-t border-[#E6E6E6] pt-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#999999]">
                      Программа:
                    </p>
                    <ul className="space-y-1">
                      {seminar.program.slice(0, 3).map((item, i) => (
                        <li key={i} className="text-xs text-[#666666]">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>

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
                    >
                      Записаться
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Если нет результатов */}
        {filteredSeminars.length === 0 && (
          <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
            <p className="text-lg text-[#666666]">
              По выбранным фильтрам семинаров не найдено
            </p>
          </div>
        )}
      </div>
    </div>
  );
}