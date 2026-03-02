/**
 * CatalogLayout — основной макет каталога
 * Верхняя шапка с навигацией:
 * - Слева: логотип SKIN SYNERGY (капсом, с трекингом)
 * - Справа: навигация по разделам
 * - Под шапкой: тонкая линия на всю ширину (1px, #E6E6E6)
 */

import { Outlet, NavLink, useLocation } from 'react-router';

export function CatalogLayout() {
  const location = useLocation();
  /* На обложке (главной) скрываем навигацию */
  const isCover = location.pathname === '/skinsynergy';

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#FFFFFF' }}
    >
      {/* Шапка каталога — фиксированная сверху */}
      {!isCover && (
        <header className="sticky top-0 z-50" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="flex items-center justify-between px-8 md:px-24 py-4">

            {/* Логотип бренда — SKIN SYNERGY */}
            <NavLink to="/skinsynergy" className="no-underline">
              <div className="flex items-center gap-2">
                <span
                  style={{
                    fontSize: '9px',
                    letterSpacing: '0.25em',
                    color: '#9A9A9A',
                    textTransform: 'uppercase',
                  }}
                >
                  SKIN
                </span>
                <span
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: '#111111',
                    textTransform: 'uppercase',
                  }}
                >
                  SYNERGY
                </span>
              </div>
            </NavLink>

            {/* Навигация по разделам каталога */}
            <nav className="flex items-center gap-6">
              {[
                { to: '/skinsynergy/about', label: 'О бренде' },
                { to: '/skinsynergy/lines', label: 'Линейки' },
                { to: '/skinsynergy/products', label: 'Продукты' },
              ].map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className="no-underline"
                  style={({ isActive }) => ({
                    fontSize: '10px',
                    fontWeight: isActive ? 600 : 400,
                    letterSpacing: '0.1em',
                    color: isActive ? '#111111' : '#9A9A9A',
                    textTransform: 'uppercase' as const,
                    textDecoration: 'none',
                    /* Подчёркивание активной ссылки */
                    borderBottom: isActive ? '1px solid #111111' : '1px solid transparent',
                    paddingBottom: '2px',
                    transition: 'all 0.2s ease',
                  })}
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Тонкая линия-разделитель под шапкой */}
          <div style={{ height: '1px', backgroundColor: '#E6E6E6' }} />
        </header>
      )}

      {/* Контент страницы — рендерится через React Router */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}