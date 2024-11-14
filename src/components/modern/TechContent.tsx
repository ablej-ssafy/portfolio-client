const TechContent = () => {
  return (
    <div className='flex flex-col'>
      <h2 className='font-semibold text-4xl mb-8'>기술 스택</h2>
      <div className='flex flex-row gap-2'>
        {['JAVA', 'React', 'Next.js', 'Ubuntu', 'Vue', 'Kotlin', 'Python', 'Angular'].map(
          (name, index) => {
            return (
              <div key={index} className='flex justify-center items-center'>
                <span className='py-1 px-3 border border-black rounded-xl text-sm'>{name}</span>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
};

export default TechContent;
