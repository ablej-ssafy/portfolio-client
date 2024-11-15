import { Basic } from '@/types/resume';

interface ProfileContentProps {
  basic: Basic;
}

const ProfileContent = ({ basic }: ProfileContentProps) => {
  return (
    <div className='flex flex-col space-y-3 whitespace-pre-wrap dark:bg-gray-900 dark:text-white'>
      <p className='text-3xl font-semibold'>{basic.title}</p>
      <p className='text-base dark:text-gray-300'>{basic.introduce}</p>
    </div>
  );
};

export default ProfileContent;
