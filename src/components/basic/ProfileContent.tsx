import { Basic } from '@/types/resume';

interface ProfileContentProps {
  basic: Basic;
}

const ProfileContent = ({ basic }: ProfileContentProps) => {
  return (
    <div className='flex flex-col space-y-3 whitespace-pre'>
      <p className='text-3xl font-semibold'>{basic.title}</p>
      <p className='text-base'>{basic.introduce}</p>
    </div>
  );
};

export default ProfileContent;
