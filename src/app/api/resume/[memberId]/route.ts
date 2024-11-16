import { getResume } from '@/actions/resumeAction';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ memberId: string }> },
) => {
  try {
    const { memberId } = await params;
    const resume = await getResume(memberId);
    // TODO:

    if (!resume) {
      return NextResponse.json(
        { error: '해당 유저의 이력서가 존재하지 않습니다.' },
        { status: 404 },
      );
    }

    return NextResponse.json(resume, { status: 200 });
  } catch {
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
