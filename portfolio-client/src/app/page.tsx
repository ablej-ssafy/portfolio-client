import ActivityContent from '@/app/components/ActivityContent';
import CompanyContent from '@/app/components/CompanyContent';
import EducationContent from '@/app/components/EducationContent';
import MainContent from '@/app/components/MainContent';
import ProfileContent from '@/app/components/ProfileContent';
import ProjectContent from '@/app/components/ProjectContent';
import QualificationContent from '@/app/components/QualificationContent';
import TechContent from '@/app/components/TechContent';
import { resume } from '@/app/resume';

export default function Home() {
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
}
