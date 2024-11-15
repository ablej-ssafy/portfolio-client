import { formatKoreanDate } from '@/app/utils/convertor';
import { Activity } from '@/types/resume';
import Image from 'next/image';
import GoLinkLight from 'public/light/GoLinkLight.svg';

interface ProjectContentProps {
  projects: Activity[];
}

const ProjectContent = ({ projects }: ProjectContentProps) => {
  return (
    <div className='flex flex-col'>
      <h2 className='font-semibold text-4xl'>프로젝트</h2>
      <div className='flex flex-col space-y-5 divide-y divide-sub'>
        {projects.map(project => {
          return (
            <div className='grid grid-cols-12 pt-5' key={project.experienceId}>
              <div className='flex flex-col space-y-1 col-span-4'>
                <h3 className='font-medium text-xl'>{project.title}</h3>
                <span className='font-normal text-sub text-sm'>{project.affiliation}</span>
                <span className='font-normal text-sm'>
                  {formatKoreanDate(project.startAt)} ~ {formatKoreanDate(project.endAt)}
                </span>
                {project.referenceUrl && (
                  <div className='flex flex-row space-x-1 items-center'>
                    <Image src={GoLinkLight} alt='goLink' width={14} height={14} />
                    <a
                      href={project.referenceUrl}
                      target='blank'
                      className='font-normal text-sm text-sub underline'
                    >
                      {project.referenceUrl}
                    </a>
                  </div>
                )}
              </div>
              <p className='flex flex-col space-y-1 mt-1 col-span-8 text-sm whitespace-pre-wrap truncate text-wrap'>
                {project.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectContent;
