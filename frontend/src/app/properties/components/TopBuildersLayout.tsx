// import { Spacer } from "../common/Spacer";
import { FeatureHeadingLayout } from "./FeatureHeadingLayout";
import { SingleBuilderItem } from "./SingleBuilderItem";
import { Spacer } from "./Spacer";

export function TopBuildersLayout(props: any) {
  return (
    <div className='p-2'>
      <FeatureHeadingLayout heading={"Top Builders In Bangalore"} />
      <Spacer size='1.5' />
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <SingleBuilderItem />
        <SingleBuilderItem />
        <SingleBuilderItem />
        <SingleBuilderItem />
        <SingleBuilderItem />
      </div>
    </div>
  );
}
