import { Basic } from '@/types/resume';

interface MainContentProps {
  basic: Basic;
}

const MainContent = (props: MainContentProps) => {
  return (
    <div className='flex flex-col whitespace-pre-wrap w-3/5 truncate text-wrap items-start mt-10'>
      <h2 className='font-semibold text-4xl'>{props.basic.name}</h2>
      <div className='h-[1px] w-full bg-black my-3' />
      <span className='font-normal text-lg'>{props.basic.job}</span>
      <h3 className='mt-4 font-medium text-3xl'>{props.basic.title}</h3>
      <p className='mt-4 font-normal text-sm text-sub'>{props.basic.introduce}</p>
    </div>
  );
};

export default MainContent;
