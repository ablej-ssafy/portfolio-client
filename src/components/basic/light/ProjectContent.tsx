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
      <span className='font-semibold text-4xl'>프로젝트</span>
      <div className='flex flex-col space-y-5 divide-y divide-sub divide-black'>
        {projects.map(project => {
          return (
            <div className='flex flex-col pt-8' key={project.title}>
              <div className='flex flex-row justify-between items-center'>
                <h3 className='font-bold text-xl'>{project.title}</h3>
                <span className='font-normal text-sm'>
                  {formatKoreanDate(project.startAt)} ~ {formatKoreanDate(project.endAt)}
                </span>
              </div>
              <span className='font-normal text-sub text-lg mt-1 mb-5'>{project.affiliation}</span>
              <p className='font-normal text-sm whitespace-pre-wrap truncate text-wrap'>
                {project.description}
              </p>
              {project.referenceUrl && (
                <div className='flex flex-row space-x-2 items-center mt-2'>
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
          );
        })}
      </div>
    </div>
  );
};

export default ProjectContent;
