import IconText from '@/components/common/light/IconText';
import { DEFAULT_IMAGE } from '@/constant/image';
import { Basic } from '@/types/resume';
import Image from 'next/image';
import Private from 'public/Private.png';
import GithubLight from 'public/light/GithubLight.svg';
import LinkLight from 'public/light/LinkLight.svg';
import MailLight from 'public/light/MailLight.svg';
import PhoneLight from 'public/light/PhoneLight.svg';

interface MainContentProps {
  basic: Basic;
  isPrivate: boolean;
}

const MainContent = ({ basic, isPrivate }: MainContentProps) => {
  return (
    <div className='flex flex-row gap-10'>
      <div className='flex flex-row items-center space-x-10 relative w-60 h-60'>
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
            <IconText text={basic.email} email>
              <Image src={MailLight} alt='mail' width={20} height={20} />
            </IconText>
          )}
          {/* 전화번호 */}
          {basic.phoneNumber && (
            <IconText text={basic.phoneNumber}>
              <Image src={PhoneLight} alt='phone' width={20} height={20} />
            </IconText>
          )}
          {/* 깃허브 */}
          {basic.github && (
            <IconText text={basic.github}>
              <Image src={GithubLight} alt='github' width={20} height={20} />
            </IconText>
          )}
          {/* 웹사이트 */}
          {basic.website && (
            <IconText text={basic.website}>
              <Image src={LinkLight} alt='web' width={20} height={20} />
            </IconText>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
