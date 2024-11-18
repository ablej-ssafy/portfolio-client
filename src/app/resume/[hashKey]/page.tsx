import Forbidden from '@/app/resume/[hashKey]/_forbidden';
import BasicDark from '@/components/basic/dark';
import BasicLight from '@/components/basic/light';
import ModernDark from '@/components/modern/dark';
import ModernLight from '@/components/modern/light';
import { ResumeType, TemplateType } from '@/types/resume';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';

interface ResumePageProps {
  params: Promise<{
    hashKey: string;
  }>;
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;
export const revalidate = false;

async function getResume(hashKey: string) {
  try {
    const headersList = await headers();
    const cookie = headersList.get('cookie');

    const response = await fetch(`${BASE_URL}/api/resume/${hashKey}`, {
      headers: {
        Cookie: cookie || '',
      },
      credentials: 'include',
    });

    const resume: ResumeType | null = await response.json();

    return {
      status: response.status,
      resume,
    };
  } catch (error) {
    console.error(error);
    throw new Error('이력서를 가져오는데 실패하였습니다.');
  }
}

export async function generateMetadata({ params }: ResumePageProps) {
  const hashKey = (await params).hashKey;
  try {
    const { resume } = await getResume(hashKey);

    if (!resume) {
      return {
        title: '존재하지 않는 이력서',
        description: '존재하지 않는 이력서입니다.',
      };
    }

    const userImage = resume.basic.profileImage ? resume.basic.profileImage : '/NoProfile.png';

    return {
      images: userImage || '/NoProfile.png',
      title: `${resume.basic.name}님의 이력서`,
      description: `${resume.basic.introduce}`,
      openGraph: {
        title: `${resume.basic.name}님의 이력서`,
        type: 'website',
        description: `${resume.basic.introduce}`,
        images: {
          url: userImage || '/NoProfile.png',
        },
        twitter: {
          card: userImage || '/NoProfile.png',
          image: userImage || '/NoProfile.png',
        },
      },
    };
  } catch (error) {
    console.error(error);
    return {
      title: '이력서를 가져오는데 실패하였습니다.',
      description: '이력서를 가져오는데 실패하였습니다.',
    };
  }
}

export default async function ResumePage({ params }: ResumePageProps) {
  const hashKey = (await params).hashKey;
  console.log('hashkey', hashKey);
  // const memberId = jwtDecode(hashKey).sub;
  // console.log('memberId', memberId);

  const { status, resume } = await getResume(hashKey);

  if (status === 404) {
    notFound();
  }

  if (!resume) {
    return null;
  }

  if (status === 403) {
    return (
      <Forbidden
        profileImage={resume.basic.profileImage || '/NoProfile.png'}
        name={resume.basic.name}
      />
    );
  }

  switch (resume.templateType) {
    case TemplateType.BASIC_LIGHT:
      return <BasicLight resume={resume} />;
    case TemplateType.BASIC_DARK:
      return <BasicDark resume={resume} />;
    case TemplateType.MODERN_LIGHT:
      return <ModernLight resume={resume} />;
    case TemplateType.MODERN_DARK:
      return <ModernDark resume={resume} />;
    default:
      return <BasicLight resume={resume} />;
  }
}
