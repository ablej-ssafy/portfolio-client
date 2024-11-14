import ActivityContent from '@/app/components/modern-light/ActivityContent';
import CompanyContent from '@/app/components/modern-light/CompanyContent';
import EducationContent from '@/app/components/modern-light/EducationContent';
import MainContent from '@/app/components/modern-light/MainContent';
import ProfileContent from '@/app/components/modern-light/ProfileContent';
import ProjectContent from '@/app/components/modern-light/ProjectContent';
import QualificationContent from '@/app/components/modern-light/QualificationContent';
import TechContent from '@/app/components/modern-light/TechContent';
import { resume } from '@/app/resume';

const ModernLight = () => {
  return (
    <div className='flex flex-col w-4/5 m-auto py-24 space-y-10'>
      {/* 메인 프로필 페이지 */}
      <div className='flex flex-row justify-between'>
        <MainContent basic={resume.basic} />
        <ProfileContent basic={resume.basic} />
      </div>
      {/* 프로젝트 페이지 */}
      <ProjectContent projects={resume.projects} />
      {/* 회사 페이지 */}
      <CompanyContent companies={resume.companies} />
      {/* 학력 페이지 */}
      <EducationContent educationals={resume.educationals} />
      {/* 활동내역 페이지 */}
      <ActivityContent activities={resume.activities} />
      {/* 어학자격 페이지 */}
      <QualificationContent qualifications={resume.qualifications} />
      {/* 기술스택 페이지 */}
      <TechContent />
    </div>
  );
};

export default ModernLight;
