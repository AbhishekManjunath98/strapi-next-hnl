import { useState } from "react";
import { FeatureHeadingLayout } from "./FeatureHeadingLayout";
import { Button } from "@mui/material";
import { SingleFloorPlan } from "./SingleFloorPlan";
// import { SingleFloorPlan } from "./SingleFloorPlan";
// import { dummyText } from "../../extras/ReusableFunctons";

export function FloorPlanLayout(props: any) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className='border p-2' id='floor-plan'>
      <FeatureHeadingLayout heading={"Floor Plans"} />
      <div className='p-4 flex flex-col items-start justify-center'>
        {/* <h4 className={`${!isExpanded ? "line-clamp-2" : ""} ${isExpanded ? "" : "max-h-[4em]"} overflow-hidden`}>{dummyText}</h4>
        <Button onClick={() => setIsExpanded(!isExpanded)} sx={{ color: "red" }} variant='text'>
          {isExpanded ? "Read Less" : "Read More"}
        </Button> */}
        <Button variant='contained' sx={{ backgroundColor: "red", width: "100px" }}>
          {props.bedrooms || "3 BHK"}
        </Button>
      </div>

      <div className='w-full flex flex-col justify-center items-center flex-wrap sm:flex-row'>
        <SingleFloorPlan image={props.image} title={props.data?.title} bedrooms={props.bedrooms} />
      </div>
    </div>
  );
}
