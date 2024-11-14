import { resume } from '@/app/resume';
import TechContent from '@/components/modern/dark/TechContent';
import ActivityContent from '@/components/modern/dark/ActivityContent';
import CompanyContent from '@/components/modern/dark/CompanyContent';
import EducationContent from '@/components/modern/dark/EducationContent';
import MainContent from '@/components/modern/dark/MainContent';
import ProfileContent from '@/components/modern/dark/ProfileContent';
import ProjectContent from '@/components/modern/dark/ProjectContent';
import QualificationContent from '@/components/modern/dark/QualificationContent';

const ModernDark = () => {
  return (
    <div className='flex flex-col bg-neutral-900 text-neutral-200 min-h-screen'>
      <main className='flex flex-col w-4/5 m-auto py-24 space-y-10'>
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
      </main>
    </div>
  );
};

export default ModernDark;
