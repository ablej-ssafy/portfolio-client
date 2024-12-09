import Forbidden from '@/app/resume/[hashKey]/_forbidden';
import BasicDark from '@/components/basic/dark';
import BasicLight from '@/components/basic/light';
import ModernDark from '@/components/modern/dark';
import ModernLight from '@/components/modern/light';
import { DEFAULT_IMAGE } from '@/constant/image';
import { resume as mockResume } from '@/mock/resume';
import { ResumeType, TemplateType } from '@/types/resume';
import { notFound } from 'next/navigation';

export const revalidate = false;

async function getResume() {
  try {
    const resume: ResumeType | null = mockResume;

    return {
      status: 200,
      resume,
    };
  } catch (error) {
    console.error(error);
    throw new Error('이력서를 가져오는데 실패하였습니다.');
  }
}

export async function generateMetadata() {
  try {
    const { resume } = await getResume();

    if (!resume) {
      return {
        title: '존재하지 않는 이력서',
        description: '존재하지 않는 이력서입니다.',
      };
    }

    if (!resume.basic) {
      return {
        title: '기본 정보가 없는 이력서',
        description: '기본 정보가 없는 이력서입니다.',
      };
    }

    const userImage = resume.basic?.profileImage ? resume.basic.profileImage : DEFAULT_IMAGE;

    return {
      images: userImage || DEFAULT_IMAGE,
      title: `${resume.basic?.name}님의 이력서`,
      description: `${resume.basic?.introduce}`,
      openGraph: {
        title: `${resume.basic.name}님의 이력서`,
        type: 'website',
        description: `${resume.basic.introduce}`,
        images: {
          url: userImage || DEFAULT_IMAGE,
        },
        twitter: {
          card: userImage || DEFAULT_IMAGE,
          image: userImage || DEFAULT_IMAGE,
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

export default async function ResumePage() {

  const { status, resume } = await getResume();

  if (status === 404) {
    notFound();
  }

  if (!resume) {
    return null;
  }

  if (status === 403) {
    return (
      <Forbidden
        profileImage={resume.basic.profileImage || DEFAULT_IMAGE}
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
