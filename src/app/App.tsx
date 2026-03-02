/**
 * Главный компонент приложения
 * 
 * ПРОЕКТ СОДЕРЖИТ ДВА САЙТА:
 * 
 * 1. BEAUTY SPHERE (Премиальный сайт) — /bs
 *    - 3D Hero с интерактивной сферой
 *    - Интернет-магазин с фильтрами
 *    - Семинары и обучение
 *    - Закрытый профессиональный клуб
 * 
 * 2. SKIN SYNERGY (Минималистичный каталог) — /skinsynergy
 *    - Клинический PDF-like каталог
 *    - Структурированные карточки продуктов
 * 
 * Главная страница (/) — выбор между двумя версиями
 * 
 * См. подробнее в BEAUTY-SPHERE-README.md
 */

import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return <RouterProvider router={router} />;
}