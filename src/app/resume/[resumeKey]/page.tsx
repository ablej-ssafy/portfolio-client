import { getResume } from '@/actions/resumeAction';
// import BasicLight from '@/components/basic/light';
// import BasicDark from '@/components/basic/dark';
// import ModernLight from '@/components/modern/light';
import ModernDark from '@/components/modern/dark';

interface ResumePageProps {
  params: Promise<{ resumeKey: string }>;
}

export default async function ResumePage({ params }: ResumePageProps) {
  const { resumeKey } = await params;
  console.log('resumeKey', resumeKey);
  const resume = await getResume(resumeKey);
  console.log(resume);
  if (!resume) {
    return <div>이력서가 없습니다</div>;
  }

  return (
    <div>
      {/* <ModernLight resume={resume} /> */}
      <ModernDark resume={resume} />
      {/* <BasicLight resume={resume} /> */}
      {/* <BasicDark resume={resume} /> */}
    </div>
  );
}
