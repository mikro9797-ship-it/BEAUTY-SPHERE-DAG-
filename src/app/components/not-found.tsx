/**
 * NotFound — страница 404
 * Показывается когда роут не найден
 */

import { Link } from 'react-router';

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-[#111111]">404</h1>
        <p className="mb-8 text-xl text-[#666666]">
          Страница не найдена
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-md bg-[#E94D8A] px-6 py-3 text-white transition-colors hover:bg-[#E94D8A]/90"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
