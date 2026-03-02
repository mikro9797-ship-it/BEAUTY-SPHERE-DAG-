/**
 * ProductsSection — секция популярных продуктов на главной
 * Карточки с hover анимацией, быстрое добавление в корзину
 * Показываем только featured продукты
 */

import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ShoppingCart, Eye, ArrowRight } from 'lucide-react';
import { products } from './data';
import { Button } from '../ui/button';
import { useInView } from '../hooks/use-in-view';
import { useCart } from './cart-context';

export function ProductsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const { addToCart } = useCart();

  // Только популярные продукты (featured)
  const featuredProducts = products.filter((p) => p.featured);

  // Цвета категорий
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
    <section ref={ref} className="bg-[#F9F9F9] py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Заголовок */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-[#111111] lg:text-5xl">
            Популярные продукты
          </h2>
          <p className="text-lg text-[#666666]">
            Проверенные решения для профессионалов
          </p>
        </motion.div>

        {/* Сетка продуктов */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Изображение продукта */}
              <div className="relative aspect-square overflow-hidden bg-[#F5F5F5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Категория чип (наложение сверху) */}
                <div
                  className="absolute left-4 top-4 rounded-md px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white"
                  style={{ backgroundColor: getCategoryColor(product.category) }}
                >
                  {product.categoryLabel}
                </div>

                {/* Кнопки Quick View и Add to Cart (появляются на hover) */}
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

              {/* Информация о продукте */}
              <div className="p-6">
                {/* Бренд */}
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[#999999]">
                  {product.brandName}
                </p>

                {/* Название */}
                <h3 className="mb-3 text-lg font-semibold text-[#111111] line-clamp-2">
                  {product.name}
                </h3>

                {/* Описание */}
                <p className="mb-4 text-sm leading-relaxed text-[#666666] line-clamp-2">
                  {product.description}
                </p>

                {/* Цена и объем */}
                <div className="flex items-center justify-between border-t border-[#E6E6E6] pt-4">
                  <div>
                    <p className="text-2xl font-bold text-[#111111]">
                      {product.price.toLocaleString('ru-RU')} ₽
                    </p>
                    <p className="text-xs text-[#999999]">{product.volume}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 text-[#E94D8A] hover:bg-[#E94D8A]/10"
                    asChild
                  >
                    <Link to={`/bs/product/${product.id}`}>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Кнопка "Показать все" */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#E94D8A] px-12 text-[#E94D8A] hover:bg-[#E94D8A] hover:text-white"
            asChild
          >
            <Link to="/bs/catalog">Весь каталог</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}