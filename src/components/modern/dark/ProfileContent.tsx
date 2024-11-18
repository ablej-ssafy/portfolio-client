import DarkIconText from '@/components/common/dark/DarkIconText';
import { DEFAULT_IMAGE } from '@/constant/image';
import { Basic } from '@/types/resume';
import Image from 'next/image';
import GithubDark from 'public/dark/GithubDark.svg';
import LinkDark from 'public/dark/LinkDark.svg';
import MailDark from 'public/dark/MailDark.svg';
import PhoneDark from 'public/dark/PhoneDark.svg';

interface ProfileContentProps {
  basic: Basic;
}

const ProfileContent = ({ basic }: ProfileContentProps) => {
  return (
    <div className='flex flex-col items-center w-60 h-60 relative bg-neutral-900'>
      <Image
        src={basic.profileImage ? basic.profileImage : DEFAULT_IMAGE}
        alt={basic.name}
        className='rounded-full bg-contain bg-center bg-no-repeat border-4 border-neutral-700 bg-white'
        fill
      />
      <div className='absolute top-60 flex flex-col space-y-2 mt-6'>
        {/* 이메일 */}
        {basic.email && (
          <DarkIconText text={basic.email} email>
            <Image src={MailDark} alt='mail' width={20} height={20} className='text-neutral-300' />
          </DarkIconText>
        )}
        {/* 전화번호 */}
        {basic.phoneNumber && (
          <DarkIconText text={basic.phoneNumber}>
            <Image
              src={PhoneDark}
              alt='phone'
              width={20}
              height={20}
              className='text-neutral-300'
            />
          </DarkIconText>
        )}
        {/* 깃허브 */}
        {basic.github && (
          <DarkIconText text={basic.github}>
            <Image
              src={GithubDark}
              alt='github'
              width={20}
              height={20}
              className='text-neutral-300'
            />
          </DarkIconText>
        )}
        {/* 웹사이트 */}
        {basic.website && (
          <DarkIconText text={basic.website}>
            <Image src={LinkDark} alt='web' width={20} height={20} className='text-neutral-300' />
          </DarkIconText>
        )}
      </div>
    </div>
  );
};

export default ProfileContent;
