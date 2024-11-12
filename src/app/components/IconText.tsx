interface IconTextProps {
  text: string;
  children: React.ReactNode;
  email?: boolean;
}

const IconText = ({ text, children, email }: IconTextProps) => (
  <div className='flex items-center'>
    {children}
    {email ? (
      <a href={`mailto:${text}`} className='ml-3 border-b-[1px] border-black text-sm'>
        {text}
      </a>
    ) : (
      <span className='ml-3 text-sm'>{text}</span>
    )}
  </div>
);

export default IconText;
