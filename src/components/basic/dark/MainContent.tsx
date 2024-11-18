import DarkIconText from '@/components/common/dark/DarkIconText';
import { DEFAULT_IMAGE } from '@/constant/image';
import { Basic } from '@/types/resume';
import Image from 'next/image';
import Private from 'public/Private.png';
import GithubDark from 'public/dark/GithubDark.svg';
import LinkDark from 'public/dark/LinkDark.svg';
import MailDark from 'public/dark/MailDark.svg';
import PhoneDark from 'public/dark/PhoneDark.svg';

interface MainContentProps {
  basic: Basic;
  isPrivate: boolean;
}

const MainContent = ({ basic, isPrivate }: MainContentProps) => {
  return (
    <div className='flex flex-row gap-10'>
      <div className='flex flex-row items-center space-x-10 dark:bg-gray-900 dark:text-white relative w-60 h-60'>
        <Image
          src={basic.profileImage ? basic.profileImage : DEFAULT_IMAGE}
          alt={basic.name}
          className='rounded-full bg-contain bg-center bg-no-repeat bg-white'
          fill
        />
      </div>
      <div className='flex flex-col'>
        <div className='flex flex-row space-x-3 items-center'>
          <span className='text-5xl font-semibold'>{basic.name}</span>
          {isPrivate && <Image src={Private} alt='공개 여부' width={48} height={48} />}
        </div>
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
