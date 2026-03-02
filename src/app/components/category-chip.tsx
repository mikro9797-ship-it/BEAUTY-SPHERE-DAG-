/**
 * Компонент Chip — цветовой маркер категории продукта
 * Используется для визуальной навигации по типам продуктов
 * Цвет определяется типом категории (Teal для очищения, Violet для пилингов и т.д.)
 */

import { categoryColors, type CategoryType } from './catalog-data';

interface CategoryChipProps {
  category: CategoryType;
  className?: string;
}

export function CategoryChip({ category, className = '' }: CategoryChipProps) {
  /* Получаем цвет из палитры категорий */
  const bgColor = categoryColors[category];

  return (
    <span
      className={`inline-block px-3 py-1 rounded ${className}`}
      style={{
        backgroundColor: bgColor,
        /* Текст всегда белый на цветном фоне */
        color: '#FFFFFF',
        /* Стиль текста чипа: 9px, Medium, CAPS, трекинг +4% */
        fontSize: '9px',
        fontWeight: 500,
        letterSpacing: '0.04em',
        textTransform: 'uppercase' as const,
      }}
    >
      {category}
    </span>
  );
}
