import DarkIconText from '@/components/common/dark/DarkIconText';
import { Basic } from '@/types/resume';
import Image from 'next/image';
import BaseProfile from 'public/NoProfile.png';
import GithubDark from 'public/dark/GithubDark.svg';
import LinkDark from 'public/dark/LinkDark.svg';
import MailDark from 'public/dark/MailDark.svg';
import PhoneDark from 'public/dark/PhoneDark.svg';

interface MainContentProps {
  basic: Basic;
}

const MainContent = ({ basic }: MainContentProps) => {
  return (
    <div className='flex flex-row items-center space-x-10 dark:bg-gray-900 dark:text-white relative w-60 h-60'>
      <Image
        src={basic.profileImage ? basic.profileImage : BaseProfile}
        alt={basic.name}
        className='rounded-full bg-contain bg-center bg-no-repeat bg-white'
        fill
      />
      <div className='flex flex-col top-60'>
        <span className='text-5xl font-semibold'>{basic.name}</span>
        <div className='flex flex-col space-y-4 mt-6'>
          {/* 이메일 */}
          {basic.email && (
            <DarkIconText text={basic.email} email>
              <Image src={MailDark} alt='mail' width={20} height={20} className='text-gray-300' />
            </DarkIconText>
          )}
          {/* 전화번호 */}
          {basic.phoneNumber && (
            <DarkIconText text={basic.phoneNumber}>
              <Image src={PhoneDark} alt='phone' width={20} height={20} className='text-gray-300' />
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
                className='text-gray-300'
              />
            </DarkIconText>
          )}
          {/* 웹사이트 */}
          {basic.website && (
            <DarkIconText text={basic.website}>
              <Image src={LinkDark} alt='web' width={20} height={20} className='text-gray-300' />
            </DarkIconText>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
