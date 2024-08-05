export interface SingleSpecificationItemType {
  heading: string;
  subheading: string;
}

export function SingleSpecificationItem(props: SingleSpecificationItemType) {
  return (
    <div className='cursor-pointer m-2 px-4'>
      <div className='flex items-center justify-start'>
        <h1 className='text-black font-bold w-6/12 capitalize'>{props.heading}</h1>
        <h5 className='text-gray-500 text-sm capitalize'>{props.subheading}</h5>
      </div>
      <hr className='my-4 border-gray-400' />
    </div>
  );
}
