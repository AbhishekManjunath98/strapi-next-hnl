interface FeatureHeadingLayoutType {
    heading: string
}

export function FeatureHeadingLayout(props: FeatureHeadingLayoutType) {
    return (
      <div className='h-12 bg-blue-500 flex items-center p-4 drop-shadow-md rounded-tl-lg rounded-tr-lg'>
        <h1 className='font-bold text-white ml-2'>{props.heading}</h1>
      </div>
    );
}