/**
 * Данные каталога Skin Synergy
 * Содержит информацию о всех продуктах, категориях и их свойствах
 */

/* Типы категорий продуктов */
export type CategoryType = 'CLEANSE' | 'PEEL' | 'RECOVERY' | 'CONTROL' | 'ANTI-AGE';

/* Цвета для маркеров категорий */
export const categoryColors: Record<CategoryType, string> = {
  'CLEANSE': '#6FBED6',   // Бирюзовый — очищение
  'PEEL': '#8B6CCF',      // Фиолетовый — пилинги
  'RECOVERY': '#9A9A9A',  // Серый — восстановление
  'CONTROL': '#9A9A9A',   // Серый — контроль
  'ANTI-AGE': '#9A9A9A',  // Серый — возрастные
};

/* Описания категорий для навигационной страницы */
export const categoryDescriptions: Record<CategoryType, string> = {
  'CLEANSE': 'Очищение и подготовка кожи к процедурам',
  'PEEL': 'Пилинги и эксфолиация для обновления кожи',
  'RECOVERY': 'Восстановление барьера после процедур',
  'CONTROL': 'Контроль себума и воспалений',
  'ANTI-AGE': 'Возрастные протоколы и лифтинг',
};

/* Интерфейс продукта */
export interface Product {
  id: string;
  category: CategoryType;
  name: string;
  subtitle: string;
  targetAudience: string;
  activeComponents: string[];
  effects: string[];
  volume: string;
  imageUrl: string;
}

/* Массив всех продуктов каталога */
export const products: Product[] = [
  {
    id: 'nmf-foam',
    category: 'CLEANSE',
    name: 'N.M.F. Hydrating Foam',
    subtitle: 'Basic Cleansing & Hydration',
    targetAudience: 'Обезвоженная, чувствительная кожа',
    activeComponents: ['NMF-комплекс', 'Мягкие ПАВы', 'Гиалуроновая кислота'],
    effects: ['комфортное очищение', 'сохранение влагобаланса'],
    volume: '150 ml | pH 4.5',
    imageUrl: 'https://images.unsplash.com/photo-1770048792339-d8f8d8d2dbeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMGZvYW0lMjBjbGVhbnNlciUyMHdoaXRlJTIwYm90dGxlfGVufDF8fHx8MTc3MjQwMzY3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'enzyme-peel',
    category: 'PEEL',
    name: 'Enzyme Gel-Peel',
    subtitle: 'Cold Hydrogenation',
    targetAudience: 'Тусклая, плотная кожа',
    activeComponents: ['Протеаза', 'Липаза', 'Салициловая 0,2%'],
    effects: ['мягкое обновление', 'гладкость и сияние'],
    volume: '200 ml | pH 6.1–6.3',
    imageUrl: 'https://images.unsplash.com/photo-1670201203126-f8b955fa9aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnp5bWUlMjBnZWwlMjBwZWVsJTIwY29zbWV0aWMlMjBib3R0bGUlMjB0cmFuc3BhcmVudHxlbnwxfHx8fDE3NzI0MDM2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'anti-glycation',
    category: 'PEEL',
    name: 'Anti-Glycation Peel',
    subtitle: 'Age Control',
    targetAudience: 'Возрастные изменения, тусклость',
    activeComponents: ['Glycolic 20%', 'Phytic 20%', 'Ferulic Acid'],
    effects: ['выравнивание тона', 'антиоксидантная защита'],
    volume: '30 ml | pH 3.0',
    imageUrl: 'https://images.unsplash.com/photo-1702475139096-f2ab9d49d857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHNlcnVtJTIwZHJvcHBlciUyMGJvdHRsZSUyMGFtYmVyfGVufDF8fHx8MTc3MjQwMzY3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'salicylic-peel',
    category: 'PEEL',
    name: 'Salicylic Intense Peel',
    subtitle: 'Acne & Sebum Control',
    targetAudience: 'Проблемная, жирная кожа',
    activeComponents: ['Salicylic Acid', 'Azeloglycine 4%'],
    effects: ['контроль воспалений', 'сужение пор', 'себорегуляция'],
    volume: '30 ml | pH 2.0–2.5',
    imageUrl: 'https://images.unsplash.com/photo-1765149431346-e7de7d4a3198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHNlcnVtJTIwYm90dGxlJTIwcHVycGxlfGVufDF8fHx8MTc3MjQwMzY4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'panthenol-cream',
    category: 'RECOVERY',
    name: '5% Panthenol Protective Cream',
    subtitle: 'Post Peel Recovery & Hydrating',
    targetAudience: 'Восстановление после процедур',
    activeComponents: ['Panthenol 5%', 'Centella', 'Linoleic Acid 2%'],
    effects: ['восстановление барьера', 'комфорт и увлажнение'],
    volume: '50 ml',
    imageUrl: 'https://images.unsplash.com/photo-1764694071508-e4b1efcd39bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMGNyZWFtJTIwamFyJTIwd2hpdGUlMjBtaW5pbWFsfGVufDF8fHx8MTc3MjQwMzY3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'kaolin-mask',
    category: 'CONTROL',
    name: 'Kaolin Calming Mask',
    subtitle: 'Redness & Sebum Control',
    targetAudience: 'Покраснения, чувствительная кожа',
    activeComponents: ['Zinc Oxide', 'Chamomilla', 'Panthenol'],
    effects: ['успокаивает', 'anti-redness', 'матирование'],
    volume: '300 ml',
    imageUrl: 'https://images.unsplash.com/photo-1655357443031-d5e0354b56e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGNvc21ldGljJTIwbWFzayUyMGNvbnRhaW5lcnxlbnwxfHx8fDE3NzI0MDM2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];
