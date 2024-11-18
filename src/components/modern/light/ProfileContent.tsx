import IconText from '@/components/common/light/IconText';
import { DEFAULT_IMAGE } from '@/constant/image';
import { Basic } from '@/types/resume';
import Image from 'next/image';
import GithubLight from 'public/light/GithubLight.svg';
import LinkLight from 'public/light/LinkLight.svg';
import MailLight from 'public/light/MailLight.svg';
import PhoneLight from 'public/light/PhoneLight.svg';

interface ProfileContentProps {
  basic: Basic;
}

const ProfileContent = ({ basic }: ProfileContentProps) => {
  return (
    <div className='flex flex-col items-center relative w-60 h-60'>
      <Image
        src={basic.profileImage ? basic.profileImage : DEFAULT_IMAGE}
        alt={basic.name}
        fill
        className='rounded-full bg-contain bg-center bg-no-repeat bg-white'
      />
      <div className='flex top-60 flex-col space-y-2 mt-6'>
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
  );
};

export default ProfileContent;
