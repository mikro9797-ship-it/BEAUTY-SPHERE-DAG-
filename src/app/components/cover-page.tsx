/**
 * Страница 1 — Cover (Обложка каталога)
 * Минималистичная обложка с логотипом бренда, слоганом и версией
 * Много воздуха, тонкие линии — премиальный клинический стиль
 */

import { useNavigate } from 'react-router';

export function CoverPage() {
  const navigate = useNavigate();

  return (
    /* Полноэкранная обложка с центрированным контентом */
    <div
      className="min-h-screen flex flex-col items-center justify-center relative"
      style={{ backgroundColor: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}
    >
      {/* Верхняя тонкая линия — декоративный элемент */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{ height: '1px', backgroundColor: '#E6E6E6' }}
      />

      {/* Основной контент обложки — по центру */}
      <div className="text-center px-8">
        {/* Префикс бренда — мелкий текст сверху */}
        <p
          className="mb-2"
          style={{
            fontSize: '11px',
            letterSpacing: '0.3em',
            color: '#9A9A9A',
            textTransform: 'uppercase',
          }}
        >
          SKIN
        </p>

        {/* Логотип/Название бренда — H1 / Cover стиль */}
        <h1
          className="mb-6"
          style={{
            fontSize: '48px',
            fontWeight: 600,
            letterSpacing: '-0.01em',
            color: '#111111',
            textTransform: 'uppercase',
          }}
        >
          SYNERGY
        </h1>

        {/* Разделительная линия под логотипом */}
        <div
          className="mx-auto mb-6"
          style={{
            width: '60px',
            height: '1px',
            backgroundColor: '#E6E6E6',
          }}
        />

        {/* Слоган бренда */}
        <p
          className="mb-2"
          style={{
            fontSize: '12px',
            letterSpacing: '0.2em',
            color: '#666666',
            textTransform: 'uppercase',
          }}
        >
          Clinical Solutions for Aesthetic Medicine
        </p>

        {/* Подзаголовок — тип документа */}
        <p
          className="mt-8"
          style={{
            fontSize: '10px',
            letterSpacing: '0.15em',
            color: '#9A9A9A',
            textTransform: 'uppercase',
          }}
        >
          Professional Protocol Catalog
        </p>

        {/* Кнопка входа в каталог */}
        <button
          onClick={() => navigate('/skinsynergy/about')}
          className="mt-12 px-8 py-3 cursor-pointer"
          style={{
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#111111',
            backgroundColor: 'transparent',
            border: '1px solid #E6E6E6',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#111111';
            e.currentTarget.style.color = '#FFFFFF';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#111111';
          }}
        >
          Открыть каталог
        </button>
      </div>

      {/* Нижняя часть обложки — год и версия */}
      <div
        className="absolute bottom-12 left-0 right-0 text-center"
      >
        <p
          style={{
            fontSize: '9px',
            letterSpacing: '0.2em',
            color: '#BFBFBF',
            textTransform: 'uppercase',
          }}
        >
          2026 — V.1.0
        </p>
      </div>
    </div>
  );
}