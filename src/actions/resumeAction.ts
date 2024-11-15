'use server';

import dbConnect from '@/libs/mongodb';
import Resume from '@/models/Resume';
import { ResumeType } from '@/types/resume';

export const getResume = async (memberId: string) => {
  const numberMemberId = Number(memberId);
  try {
    await dbConnect();

    const resume: ResumeType | null = await Resume.findOne({ memberId: numberMemberId });

    if (!resume) {
      return null;
    }

    return resume;
  } catch (error) {
    console.error('resume를 가져오는데 실패하였습니다', error);
    throw new Error('resume를 가져오는데 실패하였습니다');
  }
};
