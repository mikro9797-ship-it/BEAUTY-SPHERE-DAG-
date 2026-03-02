/**
 * Страницы 4–5 — Продукты
 * Отображение карточек продуктов с разделительными линиями
 * Размещение: карточки в столбец (самый чистый вариант по гайду)
 * Между карточками — divider (1px, #E6E6E6)
 */

import { products } from './catalog-data';
import { ProductCard } from './product-card';

export function ProductsPage() {
  return (
    <div
      className="min-h-screen px-8 md:px-24 py-16"
      style={{ backgroundColor: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}
    >
      {/* Заголовок секции продуктов */}
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
        Продукты
      </h2>

      <p
        className="mb-8"
        style={{ fontSize: '11px', color: '#666666', lineHeight: '1.6' }}
      >
        Полный ассортимент профессиональных средств Skin Synergy
      </p>

      {/* Разделительная линия под заголовком */}
      <div style={{ borderBottom: '1px solid #E6E6E6' }} />

      {/* Список карточек продуктов */}
      <div>
        {products.map((product, index) => (
          <div key={product.id}>
            {/* Карточка продукта */}
            <ProductCard product={product} />
            
            {/* Разделительная линия между карточками (кроме последней) */}
            {index < products.length - 1 && (
              <div style={{ borderBottom: '1px solid #E6E6E6' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
