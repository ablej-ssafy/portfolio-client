import { formatKoreanDate } from '@/app/utils/convertor';
import { Education } from '@/types/resume';

interface EducationContentProps {
  educationals: Education[];
}

const EducationContent = ({ educationals }: EducationContentProps) => {
  return (
    <div className='dark:bg-gray-900 dark:text-white'>
      <span className='font-semibold text-4xl'>학력</span>
      <div className='flex flex-col space-y-5 divide-y divide-sub dark:divide-gray-700'>
        {educationals.map(education => (
          <div key={education.name} className='grid grid-cols-2 pt-8'>
            <div className='flex flex-col justify-start space-y-3'>
              <span className='text-xl font-semibold'>{education.name}</span>
              <span className='text-base dark:text-gray-300'>
                {formatKoreanDate(education.startAt)} ~ {formatKoreanDate(education.endAt)}
              </span>
              <span className='text-sm dark:text-gray-400'>{education.major}</span>
            </div>
            <div className='flex flex-col justify-start space-y-3'>
              {education.grade && (
                <div className='flex flex-row items-center space-x-3'>
                  <p className='text-base font-semibold'>졸업 평점</p>
                  <span className='text-base dark:text-gray-300'>{education.grade} / 4.5</span>
                </div>
              )}
              <span className='text-base whitespace-pre-wrap dark:text-gray-300'>
                {education.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationContent;
