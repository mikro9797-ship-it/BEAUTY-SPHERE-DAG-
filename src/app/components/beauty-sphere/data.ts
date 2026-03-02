/**
 * Данные для сайта Beauty Sphere
 * Содержит: бренды, продукты, семинары, отзывы
 */

// Типы данных
export interface Brand {
  id: string;
  name: string;
  logo: string; // URL логотипа бренда
  description: string;
}

export interface Product {
  id: string;
  brandId: string;
  brandName: string;
  name: string;
  category: 'cleanse' | 'peel' | 'recovery' | 'control' | 'anti-age';
  categoryLabel: string;
  image: string; // URL фото продукта
  price: number;
  volume: string;
  pH?: string;
  description: string;
  forWhom: string[];
  activeIngredients: string[];
  effects: string[];
  protocols?: string;
  featured?: boolean; // Показывать на главной
}

export interface Seminar {
  id: string;
  title: string;
  brandId?: string;
  speaker: {
    name: string;
    photo: string;
    bio: string;
  };
  date: string;
  format: 'online' | 'offline';
  city?: string;
  price: number;
  image: string;
  shortDescription: string;
  program: string[];
  level: 'beginner' | 'advanced';
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  photo: string;
  text: string;
  rating: number;
}

// Данные брендов (премиальные косметические бренды)
export const brands: Brand[] = [
  { 
    id: '1', 
    name: 'Harmony Castle', 
    logo: 'https://images.unsplash.com/photo-1761845047498-56827f416735?w=200&h=200&fit=crop', 
    description: 'Гармония и эстетика естественной красоты' 
  },
  { 
    id: '2', 
    name: 'product by Dr. Slava', 
    logo: 'https://images.unsplash.com/photo-1708642448328-37631ca58d65?w=200&h=200&fit=crop', 
    description: 'Авторская косметика доктора Славы' 
  },
  { 
    id: '3', 
    name: 'Dr. Nona', 
    logo: 'https://images.unsplash.com/photo-1682663947127-ac9d59d7f312?w=200&h=200&fit=crop', 
    description: 'Инновации на основе минералов Мертвого моря' 
  },
  { 
    id: '4', 
    name: 'Factology', 
    logo: 'https://images.unsplash.com/photo-1763721369891-a68bf2d38e51?w=200&h=200&fit=crop', 
    description: 'Научный подход к уходу за кожей' 
  },
  { 
    id: '5', 
    name: 'Arkana', 
    logo: 'https://images.unsplash.com/photo-1745336670683-3b5586cb5f19?w=200&h=200&fit=crop', 
    description: 'Профессиональная польская косметика' 
  },
  { 
    id: '6', 
    name: 'Skin Synergy', 
    logo: 'https://images.unsplash.com/photo-1761718210055-e83ca7e2c9ad?w=200&h=200&fit=crop', 
    description: 'Синергия активных ингредиентов' 
  },
  { 
    id: '7', 
    name: 'Gemmis', 
    logo: 'https://images.unsplash.com/photo-1639996113206-d9d1817c1aab?w=200&h=200&fit=crop', 
    description: 'Драгоценная косметика для роскошного ухода' 
  },
  { 
    id: '8', 
    name: 'Linerase', 
    logo: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=200&h=200&fit=crop', 
    description: 'Стирание морщин, возвращение молодости' 
  },
  { 
    id: '9', 
    name: 'Karisma Collagen', 
    logo: 'https://images.unsplash.com/photo-1729708273852-b63222c8b35d?w=200&h=200&fit=crop', 
    description: 'Коллагеновая терапия премиум класса' 
  },
  { 
    id: '10', 
    name: 'Akradex', 
    logo: 'https://images.unsplash.com/photo-1763503839418-2b45c3d7a3c3?w=200&h=200&fit=crop', 
    description: 'Клинические решения для проблемной кожи' 
  },
  { 
    id: '11', 
    name: 'Vital Essential Cosmetics', 
    logo: 'https://images.unsplash.com/photo-1771955216611-0a826d819978?w=200&h=200&fit=crop', 
    description: 'Жизненно важная косметика (VEC)' 
  },
  { 
    id: '12', 
    name: 'PLA Rich', 
    logo: 'https://images.unsplash.com/photo-1581514439794-f9777f7c22eb?w=200&h=200&fit=crop', 
    description: 'Обогащенная PLA-терапия для омоложения' 
  },
  { 
    id: '13', 
    name: 'Reborn PLA', 
    logo: 'https://images.unsplash.com/photo-1622972430464-288aec3a19a6?w=200&h=200&fit=crop', 
    description: 'Перерождение кожи с PLA-технологиями' 
  },
  { 
    id: '14', 
    name: 'TrueSelf PLA', 
    logo: 'https://images.unsplash.com/photo-1683211325339-6def1a0d2da3?w=200&h=200&fit=crop', 
    description: 'Настоящая красота через PLA-инновации' 
  },
  { 
    id: '15', 
    name: 'Филлеры MonaLisa', 
    logo: 'https://images.unsplash.com/photo-1630129116059-7b0ff953202e?w=200&h=200&fit=crop', 
    description: 'Художественное контурирование лица' 
  },
  { 
    id: '16', 
    name: 'Infini от Lutronic', 
    logo: 'https://images.unsplash.com/photo-1682663947127-ac9d59d7f312?w=200&h=200&fit=crop', 
    description: 'Инновационные лазерные системы' 
  },
];

// Данные продуктов
export const products: Product[] = [
  {
    id: 'p1',
    brandId: '1',
    brandName: 'SKIN SYNERGY',
    name: 'N.M.F Hydrating Foam',
    category: 'cleanse',
    categoryLabel: 'CLEANSE',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
    price: 3200,
    volume: '150 ml',
    pH: '4.5',
    description: 'Базовое очищение и подготовка кожи',
    forWhom: ['Обезвоженная кожа', 'Чувствительная кожа', 'Все типы'],
    activeIngredients: ['NMF-комплекс', 'Мягкие ПАВы', 'Бетаин'],
    effects: ['Комфортное очищение', 'Без стянутости', 'Поддержка барьера'],
    featured: true,
  },
  {
    id: 'p2',
    brandId: '1',
    brandName: 'SKIN SYNERGY',
    name: 'Enzyme Gel-Peel Cold Hydrogenation',
    category: 'peel',
    categoryLabel: 'PEEL',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
    price: 4500,
    volume: '200 ml',
    pH: '6.1–6.3',
    description: 'Мягкое обновление для тусклой и плотной кожи',
    forWhom: ['Тусклая кожа', 'Плотная текстура', 'Подготовка к процедурам'],
    activeIngredients: ['Протеаза', 'Липаза', 'Салициловая кислота 0.2%'],
    effects: ['Мягкая эксфолиация', 'Гладкость', 'Сияние'],
    protocols: 'Применять 1-2 раза в неделю перед активными процедурами',
    featured: true,
  },
  {
    id: 'p3',
    brandId: '1',
    brandName: 'SKIN SYNERGY',
    name: 'Anti-Glycation Peel Age Control',
    category: 'peel',
    categoryLabel: 'PEEL',
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=400&fit=crop',
    price: 5800,
    volume: '30 ml',
    pH: '3.0',
    description: 'Контроль возрастных изменений и гликации',
    forWhom: ['Возрастные изменения', 'Тусклость', 'Потеря упругости'],
    activeIngredients: ['Гликолевая кислота 20%', 'Фитиновая кислота 20%', 'Антигликанты'],
    effects: ['Сияние', 'Выравнивание тона', 'Упругость'],
    protocols: 'Курс из 6-8 процедур, интервал 7-10 дней',
    featured: true,
  },
  {
    id: 'p4',
    brandId: '1',
    brandName: 'SKIN SYNERGY',
    name: 'Salicylic Intense Peel',
    category: 'peel',
    categoryLabel: 'PEEL',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop',
    price: 5200,
    volume: '30 ml',
    pH: '2.0–2.5',
    description: 'Контроль акне, себума и воспалений',
    forWhom: ['Проблемная кожа', 'Избыточный себум', 'Расширенные поры'],
    activeIngredients: ['Салициловая кислота', 'Азелоглицин 4%', 'Ниацинамид'],
    effects: ['Контроль воспалений', 'Сужение пор', 'Матовость'],
    protocols: 'Курс из 4-6 процедур для жирной кожи',
    featured: true,
  },
  {
    id: 'p5',
    brandId: '1',
    brandName: 'SKIN SYNERGY',
    name: '5% Panthenol Protective Cream',
    category: 'recovery',
    categoryLabel: 'RECOVERY',
    image: 'https://images.unsplash.com/photo-1556228852-80a45e31d3bf?w=400&h=400&fit=crop',
    price: 3800,
    volume: '50 ml',
    description: 'Восстановление после пилингов и процедур',
    forWhom: ['После процедур', 'Поврежденный барьер', 'Чувствительная кожа'],
    activeIngredients: ['Пантенол 5%', 'Центелла азиатика', 'Линолевая кислота 2%'],
    effects: ['Восстановление барьера', 'Успокоение', 'Комфорт'],
    featured: true,
  },
  {
    id: 'p6',
    brandId: '1',
    brandName: 'SKIN SYNERGY',
    name: 'Kaolin Calming Mask',
    category: 'control',
    categoryLabel: 'CONTROL',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=400&fit=crop',
    price: 4200,
    volume: '300 ml',
    description: 'Контроль покраснений и себума после процедур',
    forWhom: ['Покраснения', 'Чувствительная кожа', 'Жирная кожа'],
    activeIngredients: ['Оксид цинка', 'Ромашка', 'Пантенол', 'Каолин'],
    effects: ['Успокаивает', 'Матирует', 'Охлаждает'],
    featured: false,
  },
  {
    id: 'p7',
    brandId: '2',
    brandName: 'DERMALOGICA',
    name: 'Special Cleansing Gel',
    category: 'cleanse',
    categoryLabel: 'CLEANSE',
    image: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=400&h=400&fit=crop',
    price: 4100,
    volume: '250 ml',
    description: 'Мягкий пенящийся очищающий гель',
    forWhom: ['Все типы кожи', 'Ежедневное очищение'],
    activeIngredients: ['Экстракт бальзамной мяты', 'Экстракт лаванды'],
    effects: ['Глубокое очищение', 'Баланс pH', 'Свежесть'],
    featured: false,
  },
  {
    id: 'p8',
    brandId: '3',
    brandName: 'IMAGE SKINCARE',
    name: 'Vital C Hydrating Facial Cleanser',
    category: 'cleanse',
    categoryLabel: 'CLEANSE',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop',
    price: 3900,
    volume: '177 ml',
    description: 'Увлажняющий гель с витамином C',
    forWhom: ['Сухая кожа', 'Тусклость', 'Потеря тонуса'],
    activeIngredients: ['Витамин C', 'Гиалуроновая кислота', 'Алоэ'],
    effects: ['Сияние', 'Увлажнение', 'Антиоксидантная защита'],
    featured: false,
  },
];

// Данные семинаров
export const seminars: Seminar[] = [
  {
    id: 's1',
    title: 'Протоколы химических пилингов: от базового до экспертного',
    brandId: '1',
    speaker: {
      name: 'Доктор Анна Петрова',
      photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop',
      bio: 'Дерматолог, косметолог с 15-летним опытом, эксперт по химическим пилингам',
    },
    date: '2026-03-15',
    format: 'offline',
    city: 'Москва',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop',
    shortDescription: 'Полный курс по химическим пилингам от А до Я',
    program: [
      'Типы химических пилингов и механизмы действия',
      'Протоколы для разных типов кожи',
      'Работа с осложнениями',
      'Комбинированные методики',
      'Практика на моделях',
    ],
    level: 'advanced',
  },
  {
    id: 's2',
    title: 'Антивозрастные протоколы: комплексный подход',
    brandId: '5',
    speaker: {
      name: 'Мария Соколова',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
      bio: 'Косметолог-эстетист, специалист по anti-age программам',
    },
    date: '2026-03-20',
    format: 'online',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop',
    shortDescription: 'Современные методики борьбы с возрастными изменениями',
    program: [
      'Диагностика возрастных изменений',
      'Протоколы с ретиноидами',
      'Пептидная терапия',
      'Комбинации активов',
      'Домашний уход',
    ],
    level: 'beginner',
  },
  {
    id: 's3',
    title: 'Проблемная кожа: акне, розацеа, себорея',
    brandId: '9',
    speaker: {
      name: 'Екатерина Волкова',
      photo: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=300&fit=crop',
      bio: 'Дерматолог, трихолог, специалист по проблемной коже',
    },
    date: '2026-03-25',
    format: 'offline',
    city: 'Санкт-Петербург',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=400&fit=crop',
    shortDescription: 'Эффективные протоколы для проблемной кожи',
    program: [
      'Патогенез акне и розацеа',
      'Медикаментозная терапия',
      'Косметологические протоколы',
      'Уход в домашних условиях',
      'Разбор сложных случаев',
    ],
    level: 'advanced',
  },
  {
    id: 's4',
    title: 'Основы косметологии для начинающих',
    speaker: {
      name: 'Ирина Смирнова',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop',
      bio: 'Преподаватель косметологии, эксперт по базовым протоколам',
    },
    date: '2026-04-01',
    format: 'online',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=400&fit=crop',
    shortDescription: 'Старт в профессиональной косметологии',
    program: [
      'Строение кожи',
      'Типы кожи и их особенности',
      'Базовые протоколы ухода',
      'Выбор космецевтики',
      'Построение бизнеса',
    ],
    level: 'beginner',
  },
];

// Отзывы косметологов
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    author: 'Светлана Иванова',
    role: 'Косметолог-эстетист, Москва',
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
    text: 'Работаю с Beauty Sphere уже 3 года. Только оригинальная продукция, быстрая доставка и отличная поддержка. Семинары помогают быть в курсе всех новинок.',
    rating: 5,
  },
  {
    id: 't2',
    author: 'Анна Козлова',
    role: 'Дерматолог, Санкт-Петербург',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop',
    text: 'Профессиональная платформа с огромным выбором брендов. Закрытый клуб дает доступ к эксклюзивным материалам и специальным ценам.',
    rating: 5,
  },
  {
    id: 't3',
    author: 'Мария Петрова',
    role: 'Косметолог, Екатеринбург',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
    text: 'Лучшие семинары в индустрии! Всегда актуальная информация и возможность сразу применять новые знания в работе.',
    rating: 5,
  },
  {
    id: 't4',
    author: 'Елена Соколова',
    role: 'Владелец клиники, Казань',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    text: 'Beauty Sphere — это не просто поставщик, а настоящий партнер. Помогают с подбором продуктов, обучением персонала и маркетингом.',
    rating: 5,
  },
];

// Категории продуктов
export const categories = [
  { id: 'cleanse', label: 'CLEANSE', color: '#6FBED6', description: 'Очищение и подготовка' },
  { id: 'peel', label: 'PEEL', color: '#8B6CCF', description: 'Пилинги и эксфолиация' },
  { id: 'recovery', label: 'RECOVERY', color: '#9A9A9A', description: 'Восстановление барьера' },
  { id: 'control', label: 'CONTROL', color: '#9A9A9A', description: 'Контроль себума и воспалений' },
  { id: 'anti-age', label: 'ANTI-AGE', color: '#9A9A9A', description: 'Возрастные протоколы' },
];