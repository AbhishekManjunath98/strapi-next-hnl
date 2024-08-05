import { FeatureHeadingLayout } from "./FeatureHeadingLayout";
import { SingleSpecificationItem } from "./SingleSpecificationItem";

export function SpecificationsLayout(props: { data?: any }) {
  return (
    <div className='p-2' id='specifications'>
      <FeatureHeadingLayout heading={"Property Specifications"} />
      <br />

      {props.data ? (
        Object.keys(props.data)?.map((key: string) => {
          return props.data[key]?.length > 0 && <SingleSpecificationItem key={key} heading={key} subheading={props.data[key]} />;
        })
      ) : (
        <>
          <SingleSpecificationItem heading={"Facing"} subheading={"East"} />
          <SingleSpecificationItem heading={"Chairs"} subheading={"10-30"} />
          <SingleSpecificationItem heading={"Rooms"} subheading={"10-15"} />
          <SingleSpecificationItem heading={"Lift"} subheading={"Available"} />
          <SingleSpecificationItem heading={"Pantry"} subheading={"Available  Tiles"} />
          <SingleSpecificationItem heading={"Bathroom"} subheading={"Available"} />
          <SingleSpecificationItem heading={"Parking"} subheading={"Available"} />
          <SingleSpecificationItem heading={"Property Age"} subheading={"0-2 Years"} />
          <SingleSpecificationItem heading={"Furnishing"} subheading={"Not Furnished"} />
          <SingleSpecificationItem heading={"Suitable"} subheading={"GYM, Bakery"} />
        </>
      )}
    </div>
  );
}
