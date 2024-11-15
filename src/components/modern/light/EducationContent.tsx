import { formatKoreanDate } from '@/app/utils/convertor';
import { Education } from '@/types/resume';

interface EducationContentProps {
  educationals: Education[];
}

const EducationContent = ({ educationals }: EducationContentProps) => {
  return (
    <div className='flex flex-col'>
      <h2 className='font-semibold text-4xl'>학력</h2>
      <div className='flex flex-col'>
        {educationals.map((education, index) => {
          const isLastElement = index === educationals.length - 1;
          return (
            <div className='flex flex-row py-4' key={index}>
              <div className='flex flex-col space-y-1 w-44'>
                <span className='text-md font-medium'>
                  {formatKoreanDate(education.startAt)} ~ {formatKoreanDate(education.endAt)}
                </span>
              </div>
              <div className='relative w-10 mx-2 top-2'>
                <div className='absolute top-0 w-3 h-3 rounded-full bg-black' />
                <div
                  className='absolute top-0 left-1.5 w-[1px] bg-black'
                  style={{
                    height: isLastElement ? '100%' : '200%',
                  }}
                />
              </div>
              <div className='flex flex-col w-40'>
                <h3 className='text-xl font-medium'>{education.name}</h3>
                <span className='text-sm'>{education.major}</span>
              </div>
              <div className='flex flex-col justify-start space-y-1'>
                {education.grade && (
                  <div className='flex flex-row items-center space-x-3'>
                    <p className='text-base font-semibold'>졸업 평점</p>
                    <span className='text-base'>{education.grade} / 4.5</span>
                  </div>
                )}
                <span className='text-base whitespace-pre-wrap'>{education.description}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EducationContent;
