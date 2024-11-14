const TechContent = () => {
  return (
    <div className='flex flex-col pt-8 dark:bg-gray-900 dark:text-white'>
      <h2 className='font-semibold text-4xl mb-8'>기술 스택</h2>
      <div className='flex flex-row gap-2 flex-wrap'>
        {['JAVA', 'React', 'Next.js', 'Ubuntu', 'Vue', 'Kotlin', 'Python', 'Angular'].map(
          (name, index) => {
            return (
              <div key={index} className='flex justify-center items-center'>
                <span className='py-1 px-3 border border-white dark:border-gray-400 rounded-xl text-sm dark:bg-gray-800 dark:text-gray-200'>
                  {name}
                </span>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
};

export default TechContent;
