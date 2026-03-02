# BEAUTY SPHERE — Премиальная платформа для профессионалов

## Описание проекта

В этом проекте реализовано **два сайта**:

### 1. **BEAUTY SPHERE** (Премиальный сайт)
**URL:** `/bs`

Полноценная профессиональная платформа для косметологов с:
- ✨ **3D Hero секцией** с интерактивной сферой (CSS анимации + Motion)
- 🛍️ **Интернет-магазином** с фильтрами и Quick View
- 🎓 **Семинарами** с онлайн/офлайн форматами
- 👥 **Закрытым профессиональным клубом** с уровнями членства
- 🎨 **Премиальным дизайном** с Motion анимациями
- 📱 **Адаптивным дизайном** для всех устройств

### 2. **SKIN SYNERGY** (Минималистичный каталог)
**URL:** `/skinsynergy`

Клинический каталог профессиональной космецевтики:
- 📄 PDF-like дизайн в стиле премиальных брендов
- 🎨 Минималистичный клинический эстетик
- 📊 Структурированные карточки продуктов
- 🏷️ Цветовые маркеры категорий

---

## Структура навигации

### Beauty Sphere (`/bs`)
- **Главная** — `/bs` — Hero с 3D сферой, бренды, продукты, семинары
- **Каталог** — `/bs/catalog` — Фильтры, сортировка, Quick View
- **Продукт** — `/bs/product/:id` — Детальная карточка с галереей
- **Семинары** — `/bs/seminars` — Все семинары с фильтрацией
- **Клуб** — `/bs/club` — Профессиональный клуб и форма вступления
- **О нас** — `/bs/about` — История, миссия, ценности

### Skin Synergy (`/skinsynergy`)
- **Обложка** — `/skinsynergy` — Минималистичная обложка
- **О бренде** — `/skinsynergy/about` — Философия бренда
- **Линейки** — `/skinsynergy/lines` — Навигация по категориям
- **Продукты** — `/skinsynergy/products` — Каталог продуктов

---

## Технологии

### Основной стек
- **React 18** + **TypeScript**
- **React Router 7** (Data mode)
- **Tailwind CSS v4**
- **Motion** (анимации)

### Визуальные эффекты
- **CSS Animations** — интерактивная 3D сфера с градиентами
- **Motion** — scroll-reveal, hover эффекты, transitions
- **Radial Gradients** — реалистичное свечение и объем

### UI компоненты
- **Radix UI** (dialog, accordion, tabs, etc.)
- **Lucide React** (иконки)
- **date-fns** (форматирование дат)

---

## Дизайн-система Beauty Sphere

### Цвета
- **Основной фон:** `#FFFFFF` / `#F9F9F9`
- **Акцент:** Градиент `#E94D8A → #FF6B9D`
- **Текст:** `#111111` / `#666666` / `#999999`
- **Разделители:** `#E6E6E6`

### Категории продуктов
- **CLEANSE:** `#6FBED6` (бирюзовый)
- **PEEL:** `#8B6CCF` (фиолетовый)
- **RECOVERY/CONTROL:** `#9A9A9A` (серый)

### Типографика
- **Шрифт:** Inter
- **Заголовки:** 48–96px, Bold
- **Body:** 14–18px, Regular
- **Много воздуха** и четкая визуальная иерархия

---

## Основные компоненты

### Beauty Sphere

#### Layout & Navigation
- `layout.tsx` — Общий лейаут с Header/Footer
- `header.tsx` — Sticky навигация с корзиной
- `footer.tsx` — Минималистичный футер
- `preloader.tsx` — Анимированный прелоадер (2 сек)

#### Главная страница
- `home-page.tsx` — Основная страница, собирает все секции
- `hero-section.tsx` — Hero с 3D сферой
- `sphere-3d.tsx` — Интерактивная CSS-сфера с градиентами и анимациями
- `brands-section.tsx` — Блок логотипов брендов
- `products-section.tsx` — Популярные продукты
- `seminars-section.tsx` — Ближайшие семинары
- `pro-club-section.tsx` — Закрытый клуб (темный блок)
- `testimonials-section.tsx` — Отзывы специалистов
- `final-cta-section.tsx` — Финальный призыв к действию

#### Страницы
- `catalog-page.tsx` — Каталог с фильтрами
- `product-detail-page.tsx` — Детальная карточка товара
- `seminars-page.tsx` — Все семинары
- `club-page.tsx` — Профессиональный клуб
- `about-page.tsx` — О компании
- `welcome-page.tsx` — Выбор между двумя сайтами

#### Данные
- `data.ts` — Все данные (бренды, продукты, семинары, отзывы)

#### Хуки
- `use-in-view.ts` — Отслеживание видимости для scroll-reveal

---

## Фичи и анимации

### Motion дизайн
✅ Scroll-reveal анимации для всех секций
✅ Hover эффекты на карточках (scale, shadow, glow)
✅ Плавные переходы между страницами
✅ Micro-interactions на кнопках
✅ Smooth scroll индикатор

### 3D эффекты
✅ Интерактивная CSS-сфера с градиентами в Hero
✅ Реакция на движение мыши (mouse tracking)
✅ Мягкое свечение и пульсирующие слои
✅ Орбитальные частицы вокруг сферы
✅ Адаптация под разные устройства

### UX паттерны
✅ Sticky навигация
✅ Quick View для продуктов
✅ Lazy loading изображений
✅ Фильтрация без перезагрузки
✅ Skeleton screens (можно добавить)
✅ Breadcrumbs навигация

---

## Структура данных

### Продукты
```typescript
{
  id, brandId, brandName, name,
  category, categoryLabel,
  image, price, volume, pH,
  description, forWhom, activeIngredients,
  effects, protocols, featured
}
```

### Семинары
```typescript
{
  id, title, brandId,
  speaker: { name, photo, bio },
  date, format, city, price,
  image, shortDescription,
  program, level
}
```

### Бренды
```typescript
{
  id, name, logo, description
}
```

---

## Следующие шаги (расширение)

### Функциональность
- [ ] Корзина и checkout процесс
- [ ] Личный кабинет пользователя
- [ ] Wishlist / Избранное
- [ ] Сравнение продуктов
- [ ] Фильтр по ценам (слайдер)
- [ ] Интеграция с платежами
- [ ] Email подписка (работающая)

### UX улучшения
- [ ] Skeleton screens при загрузке
- [ ] Infinite scroll для каталога
- [ ] Поиск с автодополнением
- [ ] Breadcrumbs во всех разделах
- [ ] Toast уведомления (Sonner)
- [ ] Модальные окна Quick View

### Performance
- [ ] Image optimization
- [ ] Code splitting
- [ ] Lazy load компонентов
- [ ] Service Worker / PWA
- [ ] Meta tags для SEO

### 3D и визуал
- [ ] 3D модели продуктов на карточках
- [ ] Particle background эффекты
- [ ] WebGL transitions между страницами
- [ ] Parallax эффекты
- [ ] Video backgrounds

---

## Комментарии в коде

Все компоненты содержат **подробные комментарии на русском языке**:
- 📝 Описание назначения компонента
- 🎨 Объяснение стилей и анимаций
- 🔧 Логика работы функций
- 📊 Структура данных

---

## Запуск проекта

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev

# Билд для продакшена
npm run build
```

После запуска:
- Главная страница: `/` — выбор между Beauty Sphere и Skin Synergy
- Beauty Sphere: `/bs`
- Skin Synergy: `/skinsynergy`

---

## Автор

Проект создан согласно стратегии из `website-strategy-guide.md` и дизайн-гайда `catalog-design-guide.md`.

**Уровень:** Awards-ready — премиальный дизайн, продуманный UX, современные технологии.