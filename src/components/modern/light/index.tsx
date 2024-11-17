import ActivityContent from '@/components/modern/light/ActivityContent';
import CompanyContent from '@/components/modern/light/CompanyContent';
import EducationContent from '@/components/modern/light/EducationContent';
import MainContent from '@/components/modern/light/MainContent';
import ProfileContent from '@/components/modern/light/ProfileContent';
import ProjectContent from '@/components/modern/light/ProjectContent';
import QualificationContent from '@/components/modern/light/QualificationContent';
import TechContent from '@/components/modern/light/TechContent';
import { ResumeType } from '@/types/resume';

interface ModernLightProps {
  resume: ResumeType;
}

const ModernLight = ({ resume }: ModernLightProps) => {
  return (
    <main className='flex flex-col w-4/5 m-auto py-24 space-y-28'>
      {/* 메인 프로필 페이지 */}
      <div className='flex flex-row justify-between'>
        <MainContent basic={resume.basic} />
        <ProfileContent basic={resume.basic} />
      </div>
      {/* 프로젝트 페이지 */}
      {resume.projects.length > 0 && <ProjectContent projects={resume.projects} />}
      {/* 회사 페이지 */}
      {resume.companies.length > 0 && <CompanyContent companies={resume.companies} />}
      {/* 학력 페이지 */}
      {resume.educationals.length >= 0 && <EducationContent educationals={resume.educationals} />}
      {/* 활동내역 페이지 */}
      {resume.activities.length > 0 && <ActivityContent activities={resume.activities} />}
      {/* 어학자격 페이지 */}
      {resume.qualifications.length > 0 && (
        <QualificationContent qualifications={resume.qualifications} />
      )}
      {/* 기술스택 페이지 */}
      <TechContent />
    </main>
  );
};

export default ModernLight;
