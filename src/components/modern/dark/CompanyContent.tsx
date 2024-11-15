import { formatKoreanDate } from '@/app/utils/convertor';
import { Activity } from '@/types/resume';

interface CompanyContentProps {
  companies: Activity[];
}

const CompanyContent = ({ companies }: CompanyContentProps) => {
  return (
    <div className='flex flex-col bg-neutral-900 text-neutral-200'>
      <h2 className='font-semibold text-4xl text-neutral-100'>업무경험</h2>
      <div className='flex flex-col'>
        {companies.map((company, index) => {
          const isLastElement = index === companies.length - 1;
          const [sosoc, position] = company.affiliation.split('/');
          return (
            <div className='grid grid-cols-12 py-4 border-neutral-700' key={index}>
              <div className='flex flex-col space-y-1 col-span-2'>
                <span className='text-md font-medium text-neutral-300'>
                  {formatKoreanDate(company.startAt)}
                </span>
                <span className='text-md font-medium text-end text-neutral-300'>
                  ~ {formatKoreanDate(company.endAt)}
                </span>
                <span className='text-sm font-normal text-neutral-400'>{position}</span>
              </div>
              <div className='col-span-3 flex flex-row'>
                <div className='relative mx-2 top-2'>
                  <div className='absolute top-0 w-3 h-3 rounded-full bg-neutral-200 z-50' />
                  <div
                    className='absolute top-0 left-1.5 w-[1px] bg-neutral-600'
                    style={{
                      height: isLastElement ? '100%' : '200%',
                    }}
                  />
                </div>
                <div className='flex flex-col ml-4'>
                  <h3 className='text-xl font-medium text-neutral-100'>{company.title}</h3>
                  <span className='text-sm text-neutral-300'>{sosoc}</span>
                </div>
              </div>
              <p className='whitespace-pre-wrap col-span-7 pl-4 text-neutral-400'>
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
