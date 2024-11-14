import { resume } from '@/app/resume';

import CompanyContent from '@/components/basic/CompanyContent';
import MainContent from '@/components/basic/MainContent';
import ProfileContent from '@/components/basic/ProfileContent';
import ProjectContent from '@/components/basic/ProjectContent';

const Basic = () => {
  return (
    <div className='bg-[#FFF5F1]'>
      <div className='flex flex-col w-4/5 m-auto py-24 space-y-10'>
        <div className='space-y-10'>
          {/* 메인 프로필 */}
          <MainContent basic={resume.basic} />
          <ProfileContent basic={resume.basic} />
        </div>
        <hr className='border-[#B5B5B5]' />
        <div className='grid grid-cols-2'>
          {/* 프로젝트 페이지 */}
          <ProjectContent />
          {/* 회사 페이지 */}
          <CompanyContent />
        </div>
      </div>
    </div>
  );
};

export default Basic;
