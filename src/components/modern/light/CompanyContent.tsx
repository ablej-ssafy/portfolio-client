import { formatKoreanDate } from '@/app/utils/convertor';
import { Activity } from '@/types/resume';

interface CompanyContentProps {
  companies: Activity[];
}

const CompanyContent = ({ companies }: CompanyContentProps) => {
  return (
    <div className='flex flex-col'>
      <h2 className='font-semibold text-4xl'>업무경험</h2>
      <div className='flex flex-col'>
        {companies.map((company, index) => {
          const isLastElement = index === companies.length - 1;
          const [organization, position] = company.affiliation.split('/');
          return (
            <div className='grid grid-cols-12 py-4' key={index}>
              <div className='flex flex-col space-y-1 col-span-2'>
                <span className='text-md font-medium'>{formatKoreanDate(company.startAt)}</span>
                <span className='text-md font-medium text-end'>
                  ~ {formatKoreanDate(company.endAt)}
                </span>
                <span className='text-sm font-normal'>{position}</span>
              </div>
              <div className='col-span-3 flex flex-row'>
                <div className='relative mx-2 top-2'>
                  <div className='absolute top-0 w-3 h-3 rounded-full bg-black' />
                  <div
                    className='absolute top-0 left-1.5 w-[1px] bg-black'
                    style={{
                      height: isLastElement ? '100%' : '200%',
                    }}
                  />
                </div>
                <div className='flex flex-col ml-4'>
                  <h3 className='text-xl font-medium'>{company.title}</h3>
                  <span className='text-sm'>{organization}</span>
                </div>
              </div>
              <p className='whitespace-pre-wrap col-span-7 pl-4'>{company.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyContent;
