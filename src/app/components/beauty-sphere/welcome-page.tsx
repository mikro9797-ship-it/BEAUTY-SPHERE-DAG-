/**
 * WelcomePage — страница выбора между двумя версиями
 * Позволяет выбрать между Beauty Sphere (новый сайт) и Skin Synergy (каталог)
 */

import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, BookOpen, Globe } from 'lucide-react';
import { Button } from '../ui/button';

export function WelcomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white via-[#F9F9F9] to-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-6xl font-bold text-[#111111]">
            Добро пожаловать
          </h1>
          <p className="mx-auto mb-16 max-w-2xl text-xl text-[#666666]">
            Выберите версию для просмотра
          </p>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {/* Beauty Sphere Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Link
                to="/bs"
                className="group block overflow-hidden rounded-3xl bg-gradient-to-br from-[#E94D8A] to-[#FF6B9D] p-1 transition-all hover:scale-105 hover:shadow-2xl"
              >
                <div className="h-full rounded-[22px] bg-white p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E94D8A] to-[#FF6B9D]">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="mb-4 text-3xl font-bold text-[#111111]">
                    BEAUTY SPHERE
                  </h2>
                  <p className="mb-6 leading-relaxed text-[#666666]">
                    Премиальный сайт профессиональной платформы для косметологов
                    с интернет-магазином, семинарами и профессиональным абонементом
                  </p>
                  <div className="flex items-center gap-2 text-[#E94D8A] font-semibold group-hover:gap-3 transition-all">
                    <span>Открыть</span>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Skin Synergy Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link
                to="/skinsynergy"
                className="group block overflow-hidden rounded-3xl bg-gradient-to-br from-[#6FBED6] to-[#8B6CCF] p-1 transition-all hover:scale-105 hover:shadow-2xl"
              >
                <div className="h-full rounded-[22px] bg-white p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6FBED6] to-[#8B6CCF]">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="mb-4 text-3xl font-bold text-[#111111]">
                    SKIN SYNERGY
                  </h2>
                  <p className="mb-6 leading-relaxed text-[#666666]">
                    Минималистичный клинический каталог профессиональной
                    космецевтики в формате PDF-презентации
                  </p>
                  <div className="flex items-center gap-2 text-[#6FBED6] font-semibold group-hover:gap-3 transition-all">
                    <span>Открыть</span>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}