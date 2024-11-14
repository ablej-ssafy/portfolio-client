import { Qualification } from '@/types/resume';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

interface QualificationContentProps {
  qualifications: Qualification[];
}

const QualificationContent = ({ qualifications }: QualificationContentProps) => {
  return (
    <div className='flex flex-col bg-neutral-900 text-neutral-200'>
      <h2 className='font-semibold text-4xl mb-5 text-neutral-100'>어학 · 자격</h2>
      <div className='flex flex-row space-x-3'>
        {qualifications.map((qualification, index) => {
          return (
            <div
              key={index}
              className='border border-neutral-700 rounded-md px-3 py-2 h-24 w-48 flex flex-col bg-neutral-800'
            >
              <h3 className='font-medium text-md mb-1 text-neutral-100'>{qualification.name}</h3>
              {qualification.credential && (
                <div className='flex flex-row mr-2 items-center'>
                  <IoMdCheckmarkCircleOutline size={14} className='text-neutral-400' />
                  <span className='font-normal text-xs text-neutral-400 ml-1'>
                    {qualification.credential}
                  </span>
                </div>
              )}
              <div className='mt-auto flex flex-row justify-between'>
                <span className='font-normal text-xs text-neutral-300'>
                  {qualification.organization}
                </span>
                <span className='font-normal text-xs text-neutral-300'>
                  {qualification.acquisitionAt}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QualificationContent;
