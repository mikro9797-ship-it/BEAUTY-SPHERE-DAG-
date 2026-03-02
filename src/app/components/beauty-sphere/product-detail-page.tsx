/**
 * ProductDetailPage — детальная карточка товара
 * 3D модель продукта (упрощенная), галерея, протоколы
 * Sticky кнопка "В корзину", рекомендации
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useParams } from 'react-router';
import { ShoppingCart, Heart, Share2, ChevronLeft, Star } from 'lucide-react';
import { products } from './data';
import { Button } from '../ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/accordion';
import { useCart } from './cart-context';

export function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-[#666666]">Продукт не найден</p>
      </div>
    );
  }

  // Галерея изображений (для демо — используем одно изображение)
  const images = [product.image, product.image, product.image];

  // Рекомендованные продукты (из той же категории)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  // Цвет категории
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      cleanse: '#6FBED6',
      peel: '#8B6CCF',
      recovery: '#9A9A9A',
      control: '#9A9A9A',
      'anti-age': '#9A9A9A',
    };
    return colors[category] || '#9A9A9A';
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      {/* Sticky кнопка "В корзину" (mobile) */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-white p-4 shadow-lg lg:hidden">
        <Button
          size="lg"
          className="w-full bg-gradient-to-r from-[#E94D8A] to-[#FF6B9D] text-white"
          onClick={() => addToCart(product, quantity)}
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Добавить в корзину — {product.price.toLocaleString('ru-RU')} ₽
        </Button>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Хлебные крошки */}
        <div className="mb-8">
          <Link
            to="/bs/catalog"
            className="inline-flex items-center gap-2 text-sm text-[#999999] hover:text-[#E94D8A]"
          >
            <ChevronLeft className="h-4 w-4" />
            Назад к каталогу
          </Link>
        </div>

        {/* Основной контент */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Левая часть — Галерея */}
          <div>
            {/* Основное изображение */}
            <motion.div
              className="mb-4 aspect-square overflow-hidden rounded-2xl bg-[#F5F5F5]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Миниатюры */}
            <div className="grid grid-cols-3 gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === index
                      ? 'border-[#E94D8A]'
                      : 'border-[#E6E6E6] hover:border-[#E94D8A]/50'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} - ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Правая часть — Информация */}
          <div>
            {/* Категория чип */}
            <div
              className="mb-4 inline-block rounded-md px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white"
              style={{ backgroundColor: getCategoryColor(product.category) }}
            >
              {product.categoryLabel}
            </div>

            {/* Бренд */}
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#999999]">
              {product.brandName}
            </p>

            {/* Название */}
            <h1 className="mb-4 text-4xl font-bold text-[#111111]">
              {product.name}
            </h1>

            {/* Рейтинг (заглушка) */}
            <div className="mb-6 flex items-center gap-2">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < 4 ? 'fill-[#E94D8A] text-[#E94D8A]' : 'text-[#E6E6E6]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#999999]">(24 отзыва)</span>
            </div>

            {/* Цена */}
            <div className="mb-8 flex items-baseline gap-4 border-b border-[#E6E6E6] pb-6">
              <p className="text-5xl font-bold text-[#111111]">
                {product.price.toLocaleString('ru-RU')} ₽
              </p>
              <p className="text-lg text-[#999999]">{product.volume}</p>
              {product.pH && (
                <p className="text-sm text-[#999999]">pH {product.pH}</p>
              )}
            </div>

            {/* Краткое описание */}
            <p className="mb-8 text-lg leading-relaxed text-[#666666]">
              {product.description}
            </p>

            {/* Кнопки действий (desktop) */}
            <div className="mb-8 hidden gap-4 lg:flex">
              <Button
                size="lg"
                className="flex-1 bg-gradient-to-r from-[#E94D8A] to-[#FF6B9D] text-white hover:opacity-90"
                onClick={() => addToCart(product, quantity)}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Добавить в корзину
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                <Heart className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Аккордеон с подробной информацией */}
            <Accordion type="single" collapsible className="w-full">
              {/* Для кого */}
              <AccordionItem value="for-whom">
                <AccordionTrigger className="text-base font-semibold">
                  Для кого
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {product.forWhom.map((item, i) => (
                      <li key={i} className="text-sm text-[#666666]">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Активные компоненты */}
              <AccordionItem value="ingredients">
                <AccordionTrigger className="text-base font-semibold">
                  Активные компоненты
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {product.activeIngredients.map((item, i) => (
                      <li key={i} className="text-sm text-[#666666]">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Эффект */}
              <AccordionItem value="effects">
                <AccordionTrigger className="text-base font-semibold">
                  Эффект
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {product.effects.map((item, i) => (
                      <li key={i} className="text-sm text-[#666666]">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Протоколы применения */}
              {product.protocols && (
                <AccordionItem value="protocols">
                  <AccordionTrigger className="text-base font-semibold">
                    Протоколы применения
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm leading-relaxed text-[#666666]">
                      {product.protocols}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </div>
        </div>

        {/* Рекомендованные продукты */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="mb-8 text-3xl font-bold text-[#111111]">
              Похожие продукты
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/bs/product/${relatedProduct.id}`}
                  className="group overflow-hidden rounded-2xl bg-[#F9F9F9] transition-all hover:shadow-lg"
                >
                  <div className="aspect-square overflow-hidden bg-white">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[#999999]">
                      {relatedProduct.brandName}
                    </p>
                    <h3 className="mb-3 text-lg font-semibold text-[#111111] line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-xl font-bold text-[#111111]">
                      {relatedProduct.price.toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}