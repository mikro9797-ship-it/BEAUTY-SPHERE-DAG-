/**
 * Страница 3 — Логика линеек (навигация по категориям)
 * Сетка из 2 колонок с карточками категорий
 * Каждая карточка содержит цветовой маркер и описание категории
 */

import { categoryColors, categoryDescriptions, type CategoryType } from './catalog-data';

export function LinesPage() {
  /* Массив категорий для отображения */
  const categories: { type: CategoryType; icon: string }[] = [
    { type: 'CLEANSE', icon: '💧' },
    { type: 'PEEL', icon: '✦' },
    { type: 'RECOVERY', icon: '🛡' },
    { type: 'CONTROL', icon: '⚖' },
    { type: 'ANTI-AGE', icon: '↑' },
  ];

  return (
    <div
      className="min-h-screen px-8 md:px-24 py-16"
      style={{ backgroundColor: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}
    >
      {/* Заголовок секции */}
      <h2
        className="mb-3"
        style={{
          fontSize: '20px',
          fontWeight: 600,
          color: '#111111',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}
      >
        Линейки продуктов
      </h2>

      <p
        className="mb-12"
        style={{ fontSize: '11px', color: '#666666', lineHeight: '1.6' }}
      >
        Навигация по категориям. Каждая линейка решает конкретную задачу в протоколе.
      </p>

      {/* Сетка карточек категорий — 2 колонки */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map(({ type, icon }) => (
          <div
            key={type}
            className="p-6 rounded-sm"
            style={{ border: '1px solid #E6E6E6' }}
          >
            {/* Верхняя часть: иконка + цветовая полоска */}
            <div className="flex items-center gap-3 mb-4">
              {/* Цветовая полоска-маркер категории */}
              <div
                className="rounded-sm"
                style={{
                  width: '4px',
                  height: '32px',
                  backgroundColor: categoryColors[type],
                }}
              />
              <div>
                {/* Название категории */}
                <p
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#111111',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  {type}
                </p>
              </div>
            </div>

            {/* Описание категории */}
            <p style={{ fontSize: '11px', color: '#4A4A4A', lineHeight: '1.6' }}>
              {categoryDescriptions[type]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
