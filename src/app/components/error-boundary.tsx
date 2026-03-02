/**
 * ErrorBoundary — компонент для обработки ошибок роутинга
 * Показывается когда происходит ошибка при рендере роута
 */

import { useRouteError, Link, isRouteErrorResponse } from 'react-router';

export function ErrorBoundary() {
  const error = useRouteError();

  let errorMessage: string;
  let errorStatus: number | undefined;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorMessage = error.statusText || 'Произошла ошибка';
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else {
    errorMessage = 'Неизвестная ошибка';
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-[#111111]">
          {errorStatus || 'Ошибка'}
        </h1>
        <p className="mb-8 text-xl text-[#666666]">
          {errorMessage}
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
