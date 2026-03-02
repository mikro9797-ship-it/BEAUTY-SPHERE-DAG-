/**
 * TestimonialsSection — секция отзывов специалистов
 * Автоматический слайдер с карточками отзывов
 * Фото + цитата + рейтинг
 */

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from './data';
import { useInView } from '../hooks/use-in-view';

export function TestimonialsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="bg-[#F9F9F9] py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Заголовок */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-[#111111] lg:text-5xl">
            Что говорят специалисты
          </h2>
          <p className="text-lg text-[#666666]">
            Более 1000 косметологов уже работают с нами
          </p>
        </motion.div>

        {/* Сетка отзывов */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group relative rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Иконка цитаты */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#E94D8A]/10 to-[#FF6B9D]/10">
                <Quote className="h-6 w-6 text-[#E94D8A]" />
              </div>

              {/* Рейтинг */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? 'fill-[#E94D8A] text-[#E94D8A]'
                        : 'text-[#E6E6E6]'
                    }`}
                  />
                ))}
              </div>

              {/* Текст отзыва */}
              <p className="mb-6 text-sm leading-relaxed text-[#666666]">
                "{testimonial.text}"
              </p>

              {/* Автор */}
              <div className="flex items-center gap-3 border-t border-[#E6E6E6] pt-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-[#111111]">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-[#999999]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
