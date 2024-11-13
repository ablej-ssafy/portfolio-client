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
          const [sosoc, position] = company.affiliation.split('/');
          return (
            <div className='flex flex-row py-4' key={index}>
              <div className='flex flex-col space-y-1 w-44'>
                <span className='text-md font-medium'>
                  {company.startAt} - {company.endAt}
                </span>
                <span className='text-sm font-normal text-sub'>{position}</span>
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
                <h3 className='text-xl font-medium'>{company.title}</h3>
                <span className='text-sm'>{sosoc}</span>
              </div>
              <p className='whitespace-pre'>{company.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyContent;
