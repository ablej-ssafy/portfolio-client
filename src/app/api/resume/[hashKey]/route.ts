import dbConnect from '@/libs/mongodb';
import Resume from '@/models/Resume';
import { ResumeType } from '@/types/resume';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ hashKey: string }> },
) => {
  try {
    await dbConnect();

    const hashKey = (await params).hashKey;
    const resume: ResumeType | null = await Resume.findOne({ memberId: Number(hashKey) });
    if (!resume) {
      return NextResponse.json(
        { error: '해당 유저의 이력서가 존재하지 않습니다.' },
        { status: 404 },
      );
    }

    if (resume.isPrivate) {
      return NextResponse.json(
        {
          basic: {
            profileImage: resume.basic.profileImage,
            name: resume.basic.name,
          },
        },
        { status: 403 },
      );
    }

    return NextResponse.json(resume, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: '이력서를 가져오는데 실패하였습니다.',
      },
      {
        status: 500,
      },
    );
  }
};
