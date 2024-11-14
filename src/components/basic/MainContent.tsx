import IconText from '@/components/common/IconText';
import { Basic } from '@/types/resume';
import { IoLogoGithub } from 'react-icons/io';
import { MdOutlineMailOutline } from 'react-icons/md';
import { PiPhoneFill } from 'react-icons/pi';
import { TbWorld } from 'react-icons/tb';

interface MainContentProps {
  basic: Basic;
}

// export interface Basic {
//   name: string;
//   profileImage: string;
//   job: string;
//   title: string;
//   introduce: string;
//   email?: string;
//   phoneNumber?: string;
//   github?: string;
//   website?: string;
// }

const MainContent = ({ basic }: MainContentProps) => {
  return (
    <div className='flex flex-row items-center space-x-10'>
      <div
        className='w-60 h-60 rounded-full bg-contain bg-center bg-no-repeat bg-white'
        style={{
          backgroundImage: `url(${basic.profileImage})`,
        }}
      />
      <div className='flex flex-col'>
        <span className='text-5xl font-semibold'>{basic.name}</span>
        <div className='flex flex-col space-y-4 mt-6'>
          {/* 이메일 */}
          {basic.email && (
            <IconText text={basic.email} email>
              <MdOutlineMailOutline size={20} />
            </IconText>
          )}
          {/* 전화번호 */}
          {basic.phoneNumber && (
            <IconText text={basic.phoneNumber}>
              <PiPhoneFill size={20} />
            </IconText>
          )}
          {/* 깃허브 */}
          {basic.github && (
            <IconText text={basic.github}>
              <IoLogoGithub size={20} />
            </IconText>
          )}
          {/* 웹사이트 */}
          {basic.website && (
            <IconText text={basic.website}>
              <TbWorld size={20} />
            </IconText>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
