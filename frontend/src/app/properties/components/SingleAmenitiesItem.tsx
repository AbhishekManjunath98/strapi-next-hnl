// import IconWrapper from "../common/IconWrapper";

import IconWrapper from "./IconWrapper";

export interface SingleAmenitiesItemType {
  label: string;
  imageIcon?: string;
  icon?: any;
}

export function SingleAmenitiesItem(props: SingleAmenitiesItemType) {
  return (
    <div className='flex w-full items-center hover:bg-red-200 p-3 rounded-md cursor-pointer'>
      <IconWrapper>{props.icon}</IconWrapper>
      <img alt='' src={props.imageIcon} />
      <h1 className='mx-2'>{props.label}</h1>
    </div>
  );
}
