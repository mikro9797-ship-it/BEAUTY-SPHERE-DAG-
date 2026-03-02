/**
 * Preloader — анимированный загрузчик при входе на сайт
 * Показывает 3D сферу, которая собирается из линий
 * Длительность: максимум 2 секунды
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Автоматически скрываем прелоадер через 2 секунды
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Даем время на анимацию выхода, затем вызываем коллбэк
      setTimeout(onComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          /* Полноэкранный контейнер прелоадера */
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            {/* Анимированная сфера */}
            <motion.div
              className="mx-auto mb-8 h-32 w-32 rounded-full border-4 border-[#E94D8A]/20"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: [0.5, 1, 0.95, 1],
                opacity: [0, 1, 1, 1],
                boxShadow: [
                  '0 0 0 0 rgba(233, 77, 138, 0)',
                  '0 0 0 20px rgba(233, 77, 138, 0.1)',
                  '0 0 0 40px rgba(233, 77, 138, 0)',
                ],
              }}
              transition={{ duration: 2, times: [0, 0.5, 0.8, 1] }}
            >
              {/* Внутренняя светящаяся сфера */}
              <div className="h-full w-full rounded-full bg-gradient-to-br from-[#E94D8A]/10 to-[#FF6B9D]/20" />
            </motion.div>

            {/* Текст "Entering the Sphere..." */}
            <motion.p
              className="text-sm tracking-[0.2em] text-[#111111]/60"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: [0, 1, 1], y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              ENTERING THE SPHERE...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
