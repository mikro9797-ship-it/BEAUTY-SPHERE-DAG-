/**
 * CatalogPage — страница каталога с фильтрами
 * Фильтрация по брендам, категориям, цене
 * Сортировка, Quick View, Lazy Loading
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ShoppingCart, Eye, SlidersHorizontal, X } from 'lucide-react';
import { products, brands, categories } from './data';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { useCart } from './cart-context';

export function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'name'>('name');
  const { addToCart } = useCart();

  // Фильтрация продуктов
  const filteredProducts = products
    .filter((product) => {
      // Поиск по названию
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      // Фильтр по брендам
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brandId)) {
        return false;
      }
      // Фильтр по категориям
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return a.name.localeCompare(b.name);
    });

  // Обработчик выбора бренда
  const toggleBrand = (brandId: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
    );
  };

  // Обработчик выбора категории
  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId]
    );
  };

  // Сброс фильтров
  const resetFilters = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setSearchQuery('');
  };

  // Получение цвета категории
  const getCategoryColor = (category: string) => {
    const cat = categories.find((c) => c.id === category);
    return cat?.color || '#9A9A9A';
  };

  // Компонент боковых фильтров
  const FiltersSidebar = () => (
    <div className="space-y-8">
      {/* Поиск */}
      <div>
        <Label className="mb-3 block text-sm font-semibold text-[#111111]">
          Поиск
        </Label>
        <Input
          type="text"
          placeholder="Название продукта..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Категории */}
      <div>
        <Label className="mb-3 block text-sm font-semibold text-[#111111]">
          Категории
        </Label>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center gap-2">
              <Checkbox
                id={`cat-${category.id}`}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() => toggleCategory(category.id)}
              />
              <Label
                htmlFor={`cat-${category.id}`}
                className="flex-1 cursor-pointer text-sm text-[#666666]"
              >
                <span
                  className="mr-2 inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                {category.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Бренды */}
      <div>
        <Label className="mb-3 block text-sm font-semibold text-[#111111]">
          Бренды
        </Label>
        <div className="max-h-64 space-y-3 overflow-y-auto">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center gap-2">
              <Checkbox
                id={`brand-${brand.id}`}
                checked={selectedBrands.includes(brand.id)}
                onCheckedChange={() => toggleBrand(brand.id)}
              />
              <Label
                htmlFor={`brand-${brand.id}`}
                className="flex-1 cursor-pointer text-sm text-[#666666]"
              >
                {brand.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Кнопка сброса */}
      <Button
        variant="outline"
        className="w-full"
        onClick={resetFilters}
        disabled={selectedBrands.length === 0 && selectedCategories.length === 0 && !searchQuery}
      >
        <X className="mr-2 h-4 w-4" />
        Сбросить фильтры
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F9F9F9] pt-32 pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Заголовок и хлебные крошки */}
        <div className="mb-12">
          <p className="mb-4 text-sm text-[#999999]">
            <Link to="/bs" className="hover:text-[#E94D8A]">Главная</Link> / Каталог
          </p>
          <h1 className="mb-4 text-5xl font-bold text-[#111111]">
            Каталог продуктов
          </h1>
          <p className="text-lg text-[#666666]">
            Найдено продуктов: {filteredProducts.length}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop фильтры (слева) */}
          <aside className="hidden w-72 flex-shrink-0 lg:block">
            <div className="sticky top-32 rounded-2xl bg-white p-6 shadow-sm">
              <FiltersSidebar />
            </div>
          </aside>

          {/* Основной контент */}
          <div className="flex-1">
            {/* Панель сортировки и mobile фильтры */}
            <div className="mb-8 flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
              {/* Mobile фильтры кнопка */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Фильтры
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Фильтры</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FiltersSidebar />
                  </div>
                </SheetContent>
              </Sheet>

              {/* Сортировка */}
              <div className="flex items-center gap-3">
                <Label className="text-sm text-[#666666]">Сортировка:</Label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="rounded-lg border border-[#E6E6E6] px-4 py-2 text-sm text-[#111111] focus:border-[#E94D8A] focus:outline-none"
                >
                  <option value="name">По названию</option>
                  <option value="price-asc">Сначала дешевые</option>
                  <option value="price-desc">Сначала дорогие</option>
                </select>
              </div>
            </div>

            {/* Сетка продуктов */}
            {filteredProducts.length === 0 ? (
              <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
                <p className="text-lg text-[#666666]">
                  По вашему запросу ничего не найдено. Попробуйте изменить фильтры.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                  >
                    {/* Изображение */}
                    <div className="relative aspect-square overflow-hidden bg-[#F5F5F5]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Категория */}
                      <div
                        className="absolute left-4 top-4 rounded-md px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white"
                        style={{ backgroundColor: getCategoryColor(product.category) }}
                      >
                        {product.categoryLabel}
                      </div>

                      {/* Кнопки на hover */}
                      <div className="absolute inset-x-0 bottom-0 flex translate-y-full gap-2 p-4 transition-transform duration-300 group-hover:translate-y-0">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="flex-1 bg-white/95 backdrop-blur-sm hover:bg-white"
                          asChild
                        >
                          <Link to={`/bs/product/${product.id}`}>
                            <Eye className="mr-2 h-4 w-4" />
                            Просмотр
                          </Link>
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-[#E94D8A] text-white hover:bg-[#E94D8A]/90"
                          onClick={() => addToCart(product)}
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          В корзину
                        </Button>
                      </div>
                    </div>

                    {/* Информация */}
                    <div className="p-6">
                      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[#999999]">
                        {product.brandName}
                      </p>
                      <h3 className="mb-3 text-lg font-semibold text-[#111111] line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="mb-4 text-sm leading-relaxed text-[#666666] line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between border-t border-[#E6E6E6] pt-4">
                        <div>
                          <p className="text-2xl font-bold text-[#111111]">
                            {product.price.toLocaleString('ru-RU')} ₽
                          </p>
                          <p className="text-xs text-[#999999]">{product.volume}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}