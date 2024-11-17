'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 에러 로깅
    console.error('Unexpected error:', error);
  }, [error]);

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-primary-50 dark:bg-gray-900'>
      <div className='flex justify-center items-center'>
        <div className='py-10 px-20 bg-primary-100 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-col shadow-md dark:shadow-xl'>
          <h2 className='text-3xl font-bold mb-6 text-primary-900 dark:text-white text-center'>
            죄송합니다. 예상치 못한 오류가 발생했습니다.
          </h2>
          <p className='text-primary-700 dark:text-primary-200 mb-8 text-center'>
            요청하신 작업을 처리하는 중 문제가 발생했습니다.
          </p>
          <div className='flex space-x-4'>
            <button
              onClick={() => reset()}
              className='rounded-3xl bg-primary-500 text-white dark:bg-primary-700 px-5 py-3 font-medium text-sm hover:bg-primary-600 dark:hover:bg-primary-800 transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg dark:shadow-primary-900/50 dark:hover:shadow-xl'
            >
              다시 시도하기
            </button>
            <Link
              href='/'
              className='rounded-3xl bg-primary-100 text-primary-700 dark:bg-gray-600 dark:text-white px-5 py-3 font-medium text-sm hover:bg-primary-200 dark:hover:bg-gray-500 transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg'
            >
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
