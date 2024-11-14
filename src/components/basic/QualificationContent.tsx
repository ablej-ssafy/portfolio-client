import { Qualification } from '@/types/resume';

interface QualificationContentProps {
  qualifications: Qualification[];
}

//  "name": "페이스북 유니버시티 2기",
//  "organization": "메타 코리아",
//  "credential": undefined,
//  "acquisitionAt": "2022",
//  "grade": "기사",
//  "certificationType": "LANGUAGE",
//  "certificationId": 7

const QualificationContent = ({ qualifications }: QualificationContentProps) => {
  return (
    <div>
      <span className='font-semibold text-4xl'>어학 / 자격</span>
      <div className='flex flex-col space-y-5 divide-y divide-sub divide-black'>
        {qualifications.map(qualification => (
          <div key={qualification.name} className='flex flex-col pt-8'>
            <div className='flex flex-row justify-between itmes-center'>
              <span className='text-xl font-semibold'>{qualification.name}</span>
              <span className='text-base'>{qualification.acquisitionAt}</span>
            </div>
            <span className='text-[#A9A9A9] text-sm mt-1 mb-3'>{qualification.credential}</span>
            <span className='text-end text-base font-semibold'>{qualification.organization}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QualificationContent;
