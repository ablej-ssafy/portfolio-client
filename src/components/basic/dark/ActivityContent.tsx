import { formatKoreanDate } from '@/app/utils/convertor';
import { Activity } from '@/types/resume';

interface ActivityContentProps {
  activities: Activity[];
}

const ActivityContent = ({ activities }: ActivityContentProps) => {
  const awardActivities = activities.filter(activity => activity.experienceType === 'AWARD');
  const activityActivities = activities.filter(activity => activity.experienceType === 'ACTIVITY');
  return (
    <div className='dark:bg-gray-900 dark:text-white'>
      <span className='font-semibold text-4xl'>활동</span>
      <div className='grid grid-cols-2 gap-20'>
        {awardActivities.length > 0 && (
          <div className='mt-7'>
            <span className='text-2xl font-semibold'>수상 내역</span>
            <div className='flex flex-col space-y-5 divide-y divide-sub dark:divide-gray-700'>
              {awardActivities.map(activity => {
                return (
                  <div key={activity.title} className='flex flex-col pt-4'>
                    <div className='flex flex-row justify-between items-center'>
                      <span className='font-bold text-xl'>{activity.title}</span>
                      <span className='text-sm dark:text-gray-400'>
                        {formatKoreanDate(activity.startAt)} ~{' '}
                        {formatKoreanDate(activity.endAt)}
                      </span>
                    </div>
                    <span className='font-normal text-sm mt-2 mb-6 dark:text-gray-300'>
                      {activity.affiliation}
                    </span>
                    <p className='font-normal text-sm whitespace-pre dark:text-gray-300'>
                      {activity.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {activityActivities.length > 0 && (
          <div className='mt-7'>
            <span className='text-2xl font-semibold'>활동 내역</span>
            <div className='flex flex-col space-y-5 divide-y divide-sub dark:divide-gray-700'>
              {activityActivities.map(activity => {
                return (
                  <div key={activity.title} className='flex flex-col pt-4'>
                    <div className='flex flex-row justify-between items-center'>
                      <span className='font-bold text-xl'>{activity.title}</span>
                      <span className='text-sm dark:text-gray-400'>
                        {formatKoreanDate(activity.startAt)} ~{' '}
                        {formatKoreanDate(activity.endAt)}
                      </span>
                    </div>
                    <span className='font-normal text-sm mt-2 mb-6 dark:text-gray-300'>
                      {activity.affiliation}
                    </span>
                    <p className='font-normal text-sm whitespace-pre dark:text-gray-300'>
                      {activity.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityContent;
