import ActivityContent from '@/components/basic/dark/ActivityContent';
import CompanyContent from '@/components/basic/dark/CompanyContent';
import EducationContent from '@/components/basic/dark/EducationContent';
import MainContent from '@/components/basic/dark/MainContent';
import ProfileContent from '@/components/basic/dark/ProfileContent';
import ProjectContent from '@/components/basic/dark/ProjectContent';
import QualificationContent from '@/components/basic/dark/QualificationContent';
import TechContent from '@/components/basic/dark/TechContent';
import { ResumeType } from '@/types/resume';

interface BasicDarkProps {
  resume: ResumeType;
}

const BasicDark = ({ resume }: BasicDarkProps) => {
  return (
    <div className='bg-gray-900 text-white'>
      <div className='flex flex-col w-4/5 m-auto py-24 space-y-12'>
        <div className='space-y-10'>
          {/* 메인 프로필 */}
          <MainContent basic={resume.basic} />
          <ProfileContent basic={resume.basic} />
        </div>
        <hr className='border-gray-700' />
        <div className='grid grid-cols-2 gap-20'>
          {/* 프로젝트 페이지 */}
          {resume.projects.length > 0 && <ProjectContent projects={resume.projects} />}
          {/* 회사 페이지 */}
          {resume.companies.length > 0 && <CompanyContent companies={resume.companies} />}
        </div>
        <div className='grid grid-cols-2 gap-20'>
          {/* 학력 페이지 */}
          {resume.educationals.length > 0 && (
            <EducationContent educationals={resume.educationals} />
          )}
          {/* 어학자격 페이지 */}
          {resume.qualifications.length > 0 && (
            <QualificationContent qualifications={resume.qualifications} />
          )}
        </div>
        {/* 활동 페이지 */}
        {resume.activities.length > 0 && <ActivityContent activities={resume.activities} />}
        {/* 기술 스택 페이지 */}
        <TechContent />
      </div>
    </div>
  );
};

export default BasicDark;
