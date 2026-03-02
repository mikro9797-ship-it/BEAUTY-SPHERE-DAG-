/**
 * Footer — нижняя часть сайта Beauty Sphere
 * Минималистичный дизайн с навигацией, контактами, соцсетями
 */

import { Link } from 'react-router';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export function Footer() {
  return (
    <footer className="border-t border-[#E6E6E6] bg-[#F9F9F9] pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Колонка 1: О компании */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#E94D8A] to-[#FF6B9D]">
                <span className="text-lg font-bold text-white">BS</span>
              </div>
              <span className="text-lg font-semibold text-[#111111]">
                BEAUTY SPHERE
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-[#666666]">
              Профессиональная космецевтика нового уровня. Официальный дилер
              более 20 мировых брендов.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Колонка 2: Навигация */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#111111]">
              Навигация
            </h3>
            <ul className="space-y-3 text-sm text-[#666666]">
              <li>
                <Link to="/bs/catalog" className="hover:text-[#E94D8A] transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/bs/seminars" className="hover:text-[#E94D8A] transition-colors">
                  Семинары
                </Link>
              </li>
              <li>
                <Link to="/bs/club" className="hover:text-[#E94D8A] transition-colors">
                  Профессиональный абонемент
                </Link>
              </li>
              <li>
                <Link to="/bs/about" className="hover:text-[#E94D8A] transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/bs/brands" className="hover:text-[#E94D8A] transition-colors">
                  Бренды
                </Link>
              </li>
            </ul>
          </div>

          {/* Колонка 3: Информация */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#111111]">
              Информация
            </h3>
            <ul className="space-y-3 text-sm text-[#666666]">
              <li>
                <Link to="/bs/delivery" className="hover:text-[#E94D8A] transition-colors">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link to="/bs/warranty" className="hover:text-[#E94D8A] transition-colors">
                  Гарантия качества
                </Link>
              </li>
              <li>
                <Link to="/bs/contacts" className="hover:text-[#E94D8A] transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/bs/privacy" className="hover:text-[#E94D8A] transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link to="/bs/terms" className="hover:text-[#E94D8A] transition-colors">
                  Условия использования
                </Link>
              </li>
            </ul>
          </div>

          {/* Колонка 4: Подписка и контакты */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#111111]">
              Подписка на новости
            </h3>
            <p className="mb-4 text-sm text-[#666666]">
              Узнавайте первыми о новых семинарах и специальных предложениях
            </p>
            <div className="mb-6 flex gap-2">
              <Input
                type="email"
                placeholder="Ваш email"
                className="text-sm"
              />
              <Button
                size="sm"
                className="bg-gradient-to-r from-[#E94D8A] to-[#FF6B9D] text-white hover:opacity-90"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-3 text-sm text-[#666666]">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#E94D8A]" />
                <a href="tel:+74951234567" className="hover:text-[#E94D8A]">
                  +7 (495) 123-45-67
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#E94D8A]" />
                <a href="mailto:info@beautysphere.ru" className="hover:text-[#E94D8A]">
                  info@beautysphere.ru
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-[#E94D8A] flex-shrink-0" />
                <span>Москва, ул. Тверская, д. 1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="mt-12 border-t border-[#E6E6E6] pt-8 text-center text-xs text-[#999999]">
          <p>
            © 2026 BEAUTY SPHERE. Все права защищены. Профессиональная
            космецевтика для экспертов.
          </p>
        </div>
      </div>
    </footer>
  );
}