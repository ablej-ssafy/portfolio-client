import { formatKoreanDate } from '@/app/utils/convertor';
import { Activity } from '@/types/resume';
import Image from 'next/image';
import GoLinkDark from 'public/dark/GoLinkDark.svg';

interface ProjectContentProps {
  projects: Activity[];
}

const ProjectContent = ({ projects }: ProjectContentProps) => {
  return (
    <div className='flex flex-col bg-neutral-900 text-neutral-200'>
      <h2 className='font-semibold text-4xl text-neutral-100'>프로젝트</h2>
      <div className='flex flex-col space-y-5 divide-y divide-neutral-700'>
        {projects.map(project => {
          return (
            <div className='grid grid-cols-12 pt-5' key={project.experienceId}>
              <div className='flex flex-col space-y-1 col-span-4'>
                <h3 className='font-medium text-xl text-neutral-100'>{project.title}</h3>
                <span className='font-normal text-neutral-400 text-sm'>{project.affiliation}</span>
                <span className='font-normal text-sm text-neutral-300'>
                  {formatKoreanDate(project.startAt)} ~ {formatKoreanDate(project.endAt)}
                </span>
                {project.referenceUrl && (
                  <div className='flex flex-row space-x-1 items-center'>
                    <Image
                      src={GoLinkDark}
                      alt='goLink'
                      width={14}
                      height={14}
                      className='text-neutral-300'
                    />
                    <a
                      href={project.referenceUrl}
                      target='blank'
                      className='font-normal text-sm text-neutral-200 hover:text-neutral-100 underline'
                    >
                      {project.referenceUrl}
                    </a>
                  </div>
                )}
              </div>
              <div className='flex flex-col space-y-1 mt-1 col-span-8 text-sm whitespace-pre-wrap truncate text-wrap text-neutral-400'>
                {project.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectContent;
