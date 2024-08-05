import { useState } from "react";
import { FeatureHeadingLayout } from "./FeatureHeadingLayout";
import { Button } from "@mui/material";
import { AmenitiesCard } from "./AmenitiesCard";
// import { AmenitiesCard } from "./AmenitiesCard";
// import { dummyText } from "../../extras/ReusableFunctons";

export function AmenitiesCardLayout(props: { data?: string[] }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  // remove the whitespace
  const data = props.data?.map((item: string) => item.trim().replace(/\s/g, "").toLowerCase());
  return (
    <div className='p-2' id='amenities'>
      <FeatureHeadingLayout heading={"Amenities"} />
      <AmenitiesCard data={data} />
    </div>
  );
}
