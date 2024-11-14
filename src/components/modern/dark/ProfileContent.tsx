import DarkIconText from '@/components/common/dark/DarkIconText';
import { Basic } from '@/types/resume';

import { IoLogoGithub } from 'react-icons/io';
import { MdOutlineMailOutline } from 'react-icons/md';
import { PiPhoneFill } from 'react-icons/pi';
import { TbWorld } from 'react-icons/tb';

interface ProfileContentProps {
  basic: Basic;
}

const ProfileContent = ({ basic }: ProfileContentProps) => {
  return (
    <div className='flex flex-col items-center w-1/4 bg-neutral-900'>
      <div
        className='w-60 h-60 rounded-full bg-contain bg-center bg-no-repeat border-4 border-neutral-700 bg-white'
        style={{
          backgroundImage: `url(${basic.profileImage})`,
        }}
      />
      <div className='flex flex-col space-y-2 mt-6'>
        {/* 이메일 */}
        {basic.email && (
          <DarkIconText text={basic.email} email>
            <MdOutlineMailOutline size={20} className='text-neutral-300' />
          </DarkIconText>
        )}
        {/* 전화번호 */}
        {basic.phoneNumber && (
          <DarkIconText text={basic.phoneNumber}>
            <PiPhoneFill size={20} className='text-neutral-300' />
          </DarkIconText>
        )}
        {/* 깃허브 */}
        {basic.github && (
          <DarkIconText text={basic.github}>
            <IoLogoGithub size={20} className='text-neutral-300' />
          </DarkIconText>
        )}
        {/* 웹사이트 */}
        {basic.website && (
          <DarkIconText text={basic.website}>
            <TbWorld size={20} className='text-neutral-300' />
          </DarkIconText>
        )}
      </div>
    </div>
  );
};

export default ProfileContent;
