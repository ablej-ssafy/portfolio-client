import { formatKoreanDate } from '@/app/utils/convertor';
import { Qualification } from '@/types/resume';

interface QualificationContentProps {
  qualifications: Qualification[];
}

const QualificationContent = ({ qualifications }: QualificationContentProps) => {
  return (
    <div>
      <span className='font-semibold text-4xl'>어학 / 자격</span>
      <div className='flex flex-col space-y-1 divide-y divide-sub divide-black mt-8'>
        {qualifications.map(qualification => (
          <div key={qualification.name} className='flex flex-col pt-3'>
            <div className='flex flex-row justify-between itmes-center mb-1'>
              <span className='text-xl font-semibold'>{qualification.name}</span>
              <span className='text-base'>{formatKoreanDate(qualification.acquisitionAt)}</span>
            </div>
            <span className='text-[#A9A9A9] text-sm my-2'>{qualification.credential}</span>
            <span className='text-end text-base font-semibold mt-3'>
              {qualification.organization}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QualificationContent;
