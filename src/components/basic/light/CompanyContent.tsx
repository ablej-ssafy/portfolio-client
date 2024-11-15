import { formatKoreanDate } from '@/app/utils/convertor';
import { Activity } from '@/types/resume';

interface CompanyContentProps {
  companies: Activity[];
}

const CompanyContent = ({ companies }: CompanyContentProps) => {
  return (
    <div className='flex flex-col'>
      <span className='font-semibold text-4xl'>업무경험</span>
      <div className='flex flex-col space-y-5 divide-y divide-sub divide-black'>
        {companies.map(company => {
          const newAffiliation = company.affiliation.split('/').join(' / ');
          return (
            <div className='flex flex-col pt-8' key={company.title}>
              <div className='flex flex-row justify-between items-center'>
                <span className='font-bold text-xl'>{company.title}</span>
                <span className='font-normal text-sm'>
                  {formatKoreanDate(company.startAt)} ~ {formatKoreanDate(company.endAt)}
                </span>
              </div>
              <span className='font-normal text-sub text-lg mt-1 mb-5'>{newAffiliation}</span>
              <p className='font-normal text-sm whitespace-pre-wrap truncate text-wrap'>
                {company.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyContent;
