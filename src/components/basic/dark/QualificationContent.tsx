import { Qualification } from '@/types/resume';

interface QualificationContentProps {
  qualifications: Qualification[];
}

const QualificationContent = ({ qualifications }: QualificationContentProps) => {
  return (
    <div className='dark:bg-gray-900 dark:text-white'>
      <span className='font-semibold text-4xl'>어학 / 자격</span>
      <div className='flex flex-col space-y-5 divide-y divide-sub dark:divide-gray-700'>
        {qualifications.map(qualification => (
          <div key={qualification.name} className='flex flex-col pt-8'>
            <div className='flex flex-row justify-between items-center'>
              <span className='text-xl font-semibold'>{qualification.name}</span>
              <span className='text-base dark:text-gray-300'>{qualification.acquisitionAt}</span>
            </div>
            <span className='text-[#A9A9A9] dark:text-gray-400 text-sm mt-1 mb-3'>
              {qualification.credential}
            </span>
            <span className='text-end text-base font-semibold dark:text-gray-300'>
              {qualification.organization}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QualificationContent;
