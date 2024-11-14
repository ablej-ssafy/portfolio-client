interface DarkIconTextProps {
  text: string;
  children: React.ReactNode;
  email?: boolean;
}

const DarkIconText = ({ text, children, email }: DarkIconTextProps) => (
  <div className='flex items-center text-neutral-300'>
    {children}
    {email ? (
      <a
        href={`mailto:${text}`}
        className='ml-3 border-b-[1px] border-neutral-600 text-sm text-neutral-200 hover:text-neutral-100'
      >
        {text}
      </a>
    ) : (
      <span className='ml-3 text-sm text-neutral-300'>{text}</span>
    )}
  </div>
);

export default DarkIconText;
