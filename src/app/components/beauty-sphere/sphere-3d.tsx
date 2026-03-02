/**
 * Sphere3D — интерактивная визуализация сферы для Hero секции
 * Использует CSS градиенты и анимации для создания эффекта 3D сферы
 * Легковесная альтернатива WebGL для лучшей производительности
 */

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

// Основной компонент CSS-сферы
export function Sphere3D() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Отслеживание движения мыши для интерактивности
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {/* Основная сфера с градиентом */}
      <motion.div
        className="relative h-[500px] w-[500px] rounded-full"
        style={{
          background: `radial-gradient(circle at 30% 30%, 
            rgba(255, 107, 157, 0.4) 0%, 
            rgba(233, 77, 138, 0.3) 30%, 
            rgba(233, 77, 138, 0.15) 60%, 
            rgba(233, 77, 138, 0.05) 100%)`,
          boxShadow: `
            0 0 60px rgba(233, 77, 138, 0.3),
            inset 0 0 80px rgba(255, 255, 255, 0.1)
          `,
        }}
        animate={{
          rotateY: mousePosition.x,
          rotateX: -mousePosition.y,
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 20,
        }}
      >
        {/* Анимированные слои для глубины */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle at 60% 40%, 
              rgba(255, 255, 255, 0.3) 0%, 
              transparent 50%)`,
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Дополнительный слой для эффекта "жидкости" */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle at 40% 60%, 
              rgba(255, 107, 157, 0.2) 0%, 
              transparent 60%)`,
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />

        {/* Блики для реалистичности */}
        <motion.div
          className="absolute top-[20%] left-[25%] h-32 w-32 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Орбитальные частицы */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-3 w-3 rounded-full bg-gradient-to-br from-[#FF6B9D] to-[#E94D8A]"
          style={{
            boxShadow: '0 0 10px rgba(233, 77, 138, 0.6)',
          }}
          animate={{
            x: [
              Math.cos((i * 120 * Math.PI) / 180) * 250,
              Math.cos(((i * 120 + 360) * Math.PI) / 180) * 250,
            ],
            y: [
              Math.sin((i * 120 * Math.PI) / 180) * 250,
              Math.sin(((i * 120 + 360) * Math.PI) / 180) * 250,
            ],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}