import React from "react";
// import { FeatureHeadingLayout } from "../landingpage/FeatureHeadingLayout";
import SingleListitem from "./SingleListitem";
import { FeatureHeadingLayout } from "./FeatureHeadingLayout";

const ListItemLayout = (props: any) => {
  return (
    <div id='furniture' className='flex p-2 flex-col gap-5'>
      <FeatureHeadingLayout heading={props.name} />
      {props.data && (
        <div>
          {Object.keys(props.data).map((key) => (
            <SingleListitem key={key} heading={key} subheading={props.data[key]} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListItemLayout;
