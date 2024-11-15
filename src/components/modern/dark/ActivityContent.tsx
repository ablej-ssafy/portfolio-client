import { Activity } from '@/types/resume';

interface ActivityContentProps {
  activities: Activity[];
}

const ActivityContent = ({ activities }: ActivityContentProps) => {
  const awardActivities = activities.filter(activity => activity.experienceType === 'AWARD');
  const activityActivities = activities.filter(activity => activity.experienceType === 'ACTIVITY');
  return (
    <div className='flex flex-col bg-neutral-900 text-neutral-200'>
      <h2 className='font-semibold text-4xl mb-6 text-neutral-100'>활동</h2>
      {awardActivities.length > 0 && (
        <>
          <h3 className='font-semibold text-xl text-neutral-100'>수상 내역</h3>
          <div className='h-[1px] w-full bg-neutral-700 mt-1 mb-4' />
          <div className='grid grid-cols-3 mb-8'>
            {awardActivities.map(activity => {
              return (
                <div key={activity.experienceId} className='flex flex-col'>
                  <h4 className='font-medium text-lg mb-1 text-neutral-100'>{activity.title}</h4>
                  <span className='font-normal text-sm mb-2 text-neutral-300'>
                    {activity.affiliation}
                  </span>
                  <p className='font-normal text-sm whitespace-pre-wrap text-neutral-400'>
                    {activity.description}
                  </p>
                </div>
              );
            })}
          </div>
        </>
      )}
      {activityActivities.length > 0 && (
        <>
          <h3 className='fontsemibold text-xl text-neutral-100'>활동 내역</h3>
          <div className='h-[1px] w-full bg-neutral-700 mt-1 mb-4' />
          <div className='grid grid-cols-3 gap-12'>
            {activityActivities.map(activity => {
              return (
                <div key={activity.experienceId} className='flex flex-col'>
                  <h4 className='font-medium text-lg mb-1 text-neutral-100'>{activity.title}</h4>
                  <span className='font-normal text-sm mb-2 text-neutral-300'>
                    {activity.affiliation}
                  </span>
                  <p className='font-normal text-sm whitespace-pre-wrap text-neutral-400'>
                    {activity.description}
                  </p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ActivityContent;
