import { Qualification } from '@/types/resume';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

interface QualificationContentProps {
  qualifications: Qualification[];
}

const QualificationContent = ({ qualifications }: QualificationContentProps) => {
  return (
    <div className='flex flex-col'>
      <h2 className='font-semibold text-4xl mb-5'>어학 · 자격</h2>
      <div className='flex flex-row space-x-3'>
        {qualifications.map((qualification, index) => {
          return (
            <div key={index} className='border rounded-md px-3 py-2 h-24 w-48 flex flex-col'>
              <h3 className='font-medium text-md mb-1'>{qualification.name}</h3>
              {qualification.credential && (
                <div className='flex flex-row mr-2 items-center'>
                  <IoMdCheckmarkCircleOutline size={14} className='text-sub' />
                  <span className='font-normal text-xs text-sub'>{qualification.credential}</span>
                </div>
              )}
              <div className='mt-auto flex flex-row justify-between'>
                <span className='font-normal text-xs'>{qualification.organization}</span>
                <span className='font-normal text-xs'>{qualification.acquisitionAt}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QualificationContent;
