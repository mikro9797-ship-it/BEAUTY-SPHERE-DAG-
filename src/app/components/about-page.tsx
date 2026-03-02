/**
 * Страница 2 — О бренде
 * Блоки: Philosophy, Approach, Product Logic
 * Внизу: легенда цветовых маркеров категорий
 */

import { categoryColors, type CategoryType } from './catalog-data';

export function AboutPage() {
  /* Легенда категорий для навигации по каталогу */
  const legend: { category: CategoryType; label: string }[] = [
    { category: 'CLEANSE', label: 'Очищение' },
    { category: 'PEEL', label: 'Пилинги' },
    { category: 'RECOVERY', label: 'Восстановление' },
    { category: 'CONTROL', label: 'Контроль' },
  ];

  return (
    <div
      className="min-h-screen px-8 md:px-24 py-16"
      style={{ backgroundColor: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}
    >
      {/* Заголовок раздела — H2 / Section стиль */}
      <h2
        className="mb-12"
        style={{
          fontSize: '20px',
          fontWeight: 600,
          color: '#111111',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}
      >
        О бренде
      </h2>

      {/* Сетка из трёх блоков */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

        {/* Блок 1: Философия */}
        <div>
          <h3
            className="mb-4"
            style={{
              fontSize: '12px',
              fontWeight: 600,
              color: '#111111',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Philosophy
          </h3>
          <p style={{ fontSize: '11px', color: '#4A4A4A', lineHeight: '1.8' }}>
            Skin Synergy — это линейка профессиональных средств, созданная для клинической практики.
            Каждый продукт разработан с учётом синергии активных компонентов, обеспечивая
            предсказуемый и контролируемый результат в руках специалиста.
          </p>
        </div>

        {/* Блок 2: Подход */}
        <div>
          <h3
            className="mb-4"
            style={{
              fontSize: '12px',
              fontWeight: 600,
              color: '#111111',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Approach
          </h3>
          <ul className="list-none p-0 m-0 space-y-2">
            {[
              'Доказательная база для каждого компонента',
              'Оптимальные концентрации и pH',
              'Протокольная совместимость всех средств',
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2"
                style={{ fontSize: '11px', color: '#4A4A4A', lineHeight: '1.6' }}
              >
                <span className="mt-0.5" style={{ color: '#9A9A9A' }}>—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Блок 3: Как читать каталог */}
        <div>
          <h3
            className="mb-4"
            style={{
              fontSize: '12px',
              fontWeight: 600,
              color: '#111111',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Product Logic
          </h3>
          <p style={{ fontSize: '11px', color: '#4A4A4A', lineHeight: '1.8' }}>
            Каждый продукт маркирован цветом категории. Карточка содержит целевую аудиторию,
            активные компоненты, ожидаемый эффект и рабочие параметры (pH, объём).
            Это позволяет быстро подобрать протокол под задачу пациента.
          </p>
        </div>
      </div>

      {/* Разделительная линия перед легендой */}
      <div style={{ borderTop: '1px solid #E6E6E6' }} className="pt-8">
        {/* Легенда цветовых маркеров категорий */}
        <p
          className="mb-4"
          style={{
            fontSize: '10px',
            fontWeight: 600,
            color: '#111111',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          Навигация по каталогу
        </p>

        {/* Цветовые маркеры */}
        <div className="flex flex-wrap gap-6">
          {legend.map(({ category, label }) => (
            <div key={category} className="flex items-center gap-2">
              {/* Цветовой квадрат-маркер */}
              <div
                className="rounded"
                style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: categoryColors[category],
                }}
              />
              <span style={{ fontSize: '10px', color: '#4A4A4A' }}>
                {category} — {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
