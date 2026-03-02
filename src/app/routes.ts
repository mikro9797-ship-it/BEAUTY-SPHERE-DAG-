/**
 * Маршруты приложения
 * Структура:
 * / — Welcome страница (выбор версии)
 * /skinsynergy — Skin Synergy каталог (старая версия)
 * /bs — Beauty Sphere сайт (новая премиальная платформа)
 */

import { createBrowserRouter } from 'react-router';
import { CatalogLayout } from './components/catalog-layout';
import { CoverPage } from './components/cover-page';
import { AboutPage } from './components/about-page';
import { LinesPage } from './components/lines-page';
import { ProductsPage } from './components/products-page';

// Beauty Sphere компоненты
import { BeautySphereLayout } from './components/beauty-sphere/layout';
import { HomePage } from './components/beauty-sphere/home-page';
import { CatalogPage } from './components/beauty-sphere/catalog-page';
import { SeminarsPage } from './components/beauty-sphere/seminars-page';
import { ProductDetailPage } from './components/beauty-sphere/product-detail-page';
import { AboutBeautySpherePage } from './components/beauty-sphere/about-page';
import { ClubPage } from './components/beauty-sphere/club-page';
import { WelcomePage } from './components/beauty-sphere/welcome-page';
import { BrandsPage } from './components/beauty-sphere/brands-page';

// Обработка ошибок
import { ErrorBoundary } from './components/error-boundary';
import { NotFound } from './components/not-found';

export const router = createBrowserRouter([
  /* Welcome страница — выбор версии */
  {
    path: '/',
    Component: WelcomePage,
    ErrorBoundary: ErrorBoundary,
  },

  /* Skin Synergy — старый каталог */
  {
    path: '/skinsynergy',
    Component: CatalogLayout,
    ErrorBoundary: ErrorBoundary,
    children: [
      /* Главная — обложка каталога */
      { index: true, Component: CoverPage },
      /* Страница "О бренде" */
      { path: 'about', Component: AboutPage },
      /* Страница навигации по линейкам */
      { path: 'lines', Component: LinesPage },
      /* Страница продуктов */
      { path: 'products', Component: ProductsPage },
      /* Catch-all для неизвестных роутов */
      { path: '*', Component: NotFound },
    ],
  },
  
  /* Beauty Sphere — новый премиальный сайт */
  {
    path: '/bs',
    Component: BeautySphereLayout,
    ErrorBoundary: ErrorBoundary,
    children: [
      /* Главная страница Beauty Sphere */
      { index: true, Component: HomePage },
      /* Каталог с фильтрами */
      { path: 'catalog', Component: CatalogPage },
      /* Детальная страница продукта */
      { path: 'product/:id', Component: ProductDetailPage },
      /* Бренды */
      { path: 'brands', Component: BrandsPage },
      /* Семинары */
      { path: 'seminars', Component: SeminarsPage },
      /* Профессиональный клуб */
      { path: 'club', Component: ClubPage },
      /* О нас */
      { path: 'about', Component: AboutBeautySpherePage },
      /* Catch-all для неизвестных роутов */
      { path: '*', Component: NotFound },
    ],
  },

  /* Глобальный catch-all для всех остальных роутов */
  {
    path: '*',
    Component: NotFound,
    ErrorBoundary: ErrorBoundary,
  },
], {
  basename: import.meta.env.BASE_URL,
});
