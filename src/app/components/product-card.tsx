/**
 * Компонент ProductCard — главный модуль каталога
 * Карточка продукта с двухколоночной структурой:
 * - Левая часть: фото продукта (packshot)
 * - Правая часть: информация о продукте
 * 
 * Структура контента строго соответствует дизайн-гайду:
 * 1. Чип категории
 * 2. Название продукта
 * 3. Подзаголовок
 * 4. Разделительная линия
 * 5. Блок "Для кого"
 * 6. Блок "Активные компоненты" (теги)
 * 7. Блок "Эффект" (буллеты)
 * 8. Объём и pH
 */

import { CategoryChip } from './category-chip';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Product } from './catalog-data';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    /* Контейнер карточки: две колонки с отступами */
    <div className="flex gap-6 py-8">

      {/* === ЛЕВАЯ ЧАСТЬ: Изображение продукта (packshot) === */}
      <div className="flex-shrink-0 w-[120px] h-[160px] flex items-start justify-center">
        <ImageWithFallback
          src={product.imageUrl}
          alt={product.name}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* === ПРАВАЯ ЧАСТЬ: Контентная область === */}
      <div className="flex-1 min-w-0">

        {/* 1. Чип категории — цветовой маркер типа продукта */}
        <div className="mb-2">
          <CategoryChip category={product.category} />
        </div>

        {/* 2. Название продукта — Product Title стиль */}
        <h3
          className="mb-1"
          style={{
            fontSize: '14px',
            fontWeight: 600,
            textTransform: 'uppercase',
            color: '#111111',
            letterSpacing: '0.02em',
          }}
        >
          {product.name}
        </h3>

        {/* 3. Подзаголовок — серый, описательный */}
        <p
          className="mb-3"
          style={{
            fontSize: '11px',
            color: '#666666',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
          }}
        >
          {product.subtitle}
        </p>

        {/* 4. Разделительная линия — Divider */}
        <div
          className="mb-3"
          style={{ borderBottom: '1px solid #E6E6E6' }}
        />

        {/* 5. Блок "Для кого" — целевая аудитория продукта */}
        <div className="mb-3">
          <p
            className="mb-1"
            style={{ fontSize: '10px', fontWeight: 600, color: '#111111' }}
          >
            Для кого:
          </p>
          <p style={{ fontSize: '10px', color: '#4A4A4A' }}>
            {product.targetAudience}
          </p>
        </div>

        {/* 6. Блок "Активные компоненты" — серые теги/плашки */}
        <div className="mb-3">
          <p
            className="mb-2"
            style={{ fontSize: '10px', fontWeight: 600, color: '#111111' }}
          >
            Активные компоненты:
          </p>
          {/* Контейнер тегов с Auto Layout */}
          <div className="flex flex-wrap gap-1.5">
            {product.activeComponents.map((component) => (
              <span
                key={component}
                className="inline-block px-2 py-1 rounded"
                style={{
                  fontSize: '9px',
                  color: '#4A4A4A',
                  backgroundColor: '#F5F5F5',
                  border: '1px solid #E6E6E6',
                }}
              >
                {component}
              </span>
            ))}
          </div>
        </div>

        {/* 7. Блок "Эффект" — буллеты с описанием действия */}
        <div className="mb-3">
          <p
            className="mb-1"
            style={{ fontSize: '10px', fontWeight: 600, color: '#111111' }}
          >
            Эффект:
          </p>
          <ul className="list-none p-0 m-0">
            {product.effects.map((effect) => (
              <li
                key={effect}
                className="flex items-center gap-1.5"
                style={{ fontSize: '10px', color: '#4A4A4A', lineHeight: '1.6' }}
              >
                {/* Буллет-точка */}
                <span style={{ color: '#111111' }}>·</span>
                {effect}
              </li>
            ))}
          </ul>
        </div>

        {/* 8. Объём и pH — мелкий текст внизу */}
        <p
          style={{
            fontSize: '9px',
            color: '#9A9A9A',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          {product.volume}
        </p>
      </div>
    </div>
  );
}
