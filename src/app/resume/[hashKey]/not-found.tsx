import Link from 'next/link';

const NotFound = async () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-primary-50 dark:bg-gray-900'>
      <div className='flex justify-center items-center'>
        <div className='py-10 px-20 bg-primary-100 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-col shadow-md dark:shadow-xl'>
          <h2 className='text-3xl font-bold mb-10 text-primary-900 dark:text-white'>
            프로필을 찾을 수 없습니다.
          </h2>
          <Link
            className='rounded-3xl bg-primary-500 text-white dark:bg-primary-700 px-5 py-3 font-medium text-sm hover:bg-primary-600 dark:hover:bg-primary-800 transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg dark:shadow-primary-900/50 dark:hover:shadow-xl'
            href='https://www.noteme.kro.kr'
          >
            나만의 이력서 작성하러가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
