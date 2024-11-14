import { resume } from '@/app/resume';

import ActivityContent from '@/components/basic/ActivityContent';
import CompanyContent from '@/components/basic/CompanyContent';
import EducationContent from '@/components/basic/EducationContent';
import MainContent from '@/components/basic/MainContent';
import ProfileContent from '@/components/basic/ProfileContent';
import ProjectContent from '@/components/basic/ProjectContent';
import QualificationContent from '@/components/basic/QualificationContent';
import TechContent from '@/components/common/TechContent';

const Basic = () => {
  return (
    <div className='bg-[#FFF5F1]'>
      <div className='flex flex-col w-4/5 m-auto py-24 space-y-12'>
        <div className='space-y-10'>
          {/* 메인 프로필 */}
          <MainContent basic={resume.basic} />
          <ProfileContent basic={resume.basic} />
        </div>
        <hr className='border-[#B5B5B5]' />
        <div className='grid grid-cols-2 gap-20'>
          {/* 프로젝트 페이지 */}
          <ProjectContent projects={resume.projects} />
          {/* 회사 페이지 */}
          <CompanyContent companies={resume.companies} />
        </div>
        <div className='grid grid-cols-2 gap-20'>
          {/* 학력 페이지 */}
          <EducationContent educationals={resume.educationals} />
          {/* 어학자격 페이지 */}
          <QualificationContent qualifications={resume.qualifications} />
        </div>
        {/* 활동 페이지 */}
        <ActivityContent activities={resume.activities} />
        {/* 기술 스택 페이지 */}
        <TechContent />
      </div>
    </div>
  );
};

export default Basic;
