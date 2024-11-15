import { formatKoreanDate } from '@/app/utils/convertor';
import { Education } from '@/types/resume';

interface EducationContentProps {
  educationals: Education[];
}

const EducationContent = ({ educationals }: EducationContentProps) => {
  return (
    <div className='flex flex-col bg-neutral-900 text-neutral-200'>
      <h2 className='font-semibold text-4xl text-neutral-100'>학력</h2>
      <div className='flex flex-col'>
        {educationals.map((education, index) => {
          const isLastElement = index === educationals.length - 1;
          return (
            <div className='flex flex-row py-4 border-neutral-700' key={index}>
              <div className='flex flex-col space-y-1 w-44'>
                <span className='text-md font-medium text-neutral-300'>
                  {formatKoreanDate(education.startAt)} ~ {formatKoreanDate(education.endAt)}
                </span>
                {education.grade && (
                  <span className='text-sm font-normal text-neutral-400'>
                    학점: {education.grade}/4.5
                  </span>
                )}
              </div>
              <div className='relative w-10 mx-2 top-2'>
                <div className='absolute top-0 w-3 h-3 rounded-full bg-neutral-200 z-50' />
                <div
                  className='absolute top-0 left-1.5 w-[1px] bg-neutral-600'
                  style={{
                    height: isLastElement ? '100%' : '200%',
                  }}
                />
              </div>
              <div className='flex flex-col w-40'>
                <h3 className='text-xl font-medium text-neutral-100'>{education.name}</h3>
                <span className='text-sm text-neutral-300'>{education.major}</span>
              </div>
              <p className='whitespace-pre-wrap text-neutral-400'>{education.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EducationContent;
