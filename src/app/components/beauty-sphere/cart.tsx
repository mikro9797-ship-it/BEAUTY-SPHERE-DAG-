/**
 * Cart — компонент корзины (слайд-панель справа)
 * Показывает товары, количество, итоговую сумму
 * Позволяет изменять количество и удалять товары
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from './cart-context';
import { Button } from '../ui/button';

export function Cart() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    isOpen,
    closeCart,
  } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Оверлей */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          {/* Панель корзины */}
          <motion.div
            className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col bg-white shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Шапка корзины */}
            <div className="flex items-center justify-between border-b border-[#E6E6E6] p-6">
              <div className="flex items-center gap-3">
                <ShoppingBag className="size-6 text-[#E94D8A]" />
                <h2 className="text-2xl font-bold text-[#111111]">
                  Корзина
                  {totalItems > 0 && (
                    <span className="ml-2 text-lg text-[#999999]">
                      ({totalItems})
                    </span>
                  )}
                </h2>
              </div>
              <button
                onClick={closeCart}
                className="rounded-full p-2 transition-colors hover:bg-[#F8F8F8]"
              >
                <X className="size-6 text-[#666666]" />
              </button>
            </div>

            {/* Содержимое корзины */}
            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center p-6 text-center">
                <ShoppingBag className="mb-4 size-16 text-[#CCCCCC]" />
                <p className="text-lg text-[#666666]">Корзина пуста</p>
                <p className="mt-2 text-sm text-[#999999]">
                  Добавьте товары из каталога
                </p>
              </div>
            ) : (
              <>
                {/* Список товаров */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-4">
                    {items.map((item) => (
                      <motion.div
                        key={item.product.id}
                        className="flex gap-4 rounded-2xl border border-[#E6E6E6] p-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                      >
                        {/* Фото товара */}
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="size-20 rounded-xl object-cover"
                        />

                        {/* Информация о товаре */}
                        <div className="flex flex-1 flex-col">
                          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#E94D8A]">
                            {item.product.brandName}
                          </p>
                          <h3 className="mb-2 font-semibold text-[#111111]">
                            {item.product.name}
                          </h3>
                          <p className="mb-3 text-sm text-[#999999]">
                            {item.product.volume}
                          </p>

                          {/* Количество и цена */}
                          <div className="flex items-center justify-between">
                            {/* Кнопки количества */}
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.quantity - 1
                                  )
                                }
                                className="rounded-lg bg-[#F8F8F8] p-1.5 transition-colors hover:bg-[#E6E6E6]"
                              >
                                <Minus className="size-4 text-[#666666]" />
                              </button>
                              <span className="w-8 text-center font-semibold text-[#111111]">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.quantity + 1
                                  )
                                }
                                className="rounded-lg bg-[#F8F8F8] p-1.5 transition-colors hover:bg-[#E6E6E6]"
                              >
                                <Plus className="size-4 text-[#666666]" />
                              </button>
                            </div>

                            {/* Цена */}
                            <p className="font-bold text-[#111111]">
                              {(item.product.price * item.quantity).toLocaleString()}{' '}
                              ₽
                            </p>
                          </div>
                        </div>

                        {/* Кнопка удаления */}
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="self-start rounded-lg p-2 transition-colors hover:bg-red-50"
                        >
                          <Trash2 className="size-4 text-red-500" />
                        </button>
                      </motion.div>
                    ))}
                  </div>

                  {/* Кнопка очистить корзину */}
                  {items.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="mt-4 w-full text-center text-sm text-[#999999] transition-colors hover:text-red-500"
                    >
                      Очистить корзину
                    </button>
                  )}
                </div>

                {/* Итого и оформление заказа */}
                <div className="border-t border-[#E6E6E6] p-6">
                  {/* Итоговая сумма */}
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-lg text-[#666666]">Итого:</p>
                    <p className="text-3xl font-bold text-[#111111]">
                      {totalPrice.toLocaleString()} ₽
                    </p>
                  </div>

                  {/* Кнопка оформить заказ */}
                  <Button
                    className="w-full bg-gradient-to-r from-[#E94D8A] to-[#FF6B9D] py-6 text-lg font-semibold transition-all hover:shadow-lg"
                    onClick={() => {
                      alert(
                        `Заказ на сумму ${totalPrice.toLocaleString()} ₽ оформлен!\n\nВ реальном приложении здесь будет форма оформления заказа.`
                      );
                      clearCart();
                      closeCart();
                    }}
                  >
                    Оформить заказ
                  </Button>

                  <p className="mt-3 text-center text-xs text-[#999999]">
                    Бесплатная доставка от 5000 ₽
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
