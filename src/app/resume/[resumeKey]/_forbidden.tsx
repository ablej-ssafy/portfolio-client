import Image from 'next/image';
import Link from 'next/link';

interface ForbiddenProps {
  profileImage: string;
  name: string;
}

const Forbidden = ({profileImage, name}: ForbiddenProps) => {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <section className="w-full max-w-2xl mx-auto px-4 py-8 flex flex-col items-center">
        <div className="relative w-40 h-40 mb-8">
          <Image 
            src={profileImage}
            alt="프로필 이미지"
            fill
            className="rounded-full object-cover border-4 border-white dark:border-gray-700"
          />
        </div>

        {/* 프로필 정보 섹션 */}
        <article className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            {name}님의 커리어 프로필
          </h1>
          <div className="space-y-2 text-gray-600 dark:text-gray-300">
            <p>프로필이 공개되어 있지 않아요.</p>
            <p>{name}님에게 공개를 요청해주세요.</p>
          </div>
        </article>

        {/* 액션 버튼 */}
        <footer>
          <Link
            href="/" 
            className="
              px-8 
              py-3 
              rounded-full 
              bg-primary-500 
              text-white 
              dark:bg-primary-600
              hover:bg-primary-600 
              dark:hover:bg-primary-700
              transition-colors 
              duration-300 
              ease-in-out
              shadow-md 
              hover:shadow-lg
              font-medium
            "
          >
            홈으로 돌아가기
          </Link>
        </footer>
      </section>
    </main>
  );
};

export default Forbidden;
