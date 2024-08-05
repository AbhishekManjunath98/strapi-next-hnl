import { useState } from "react";
// import { dummyText } from "../../extras/ReusableFunctons";
import { FeatureHeadingLayout } from "./FeatureHeadingLayout";
import { Button } from "@mui/material";

export function ProjectInfoLayout(props: { description?: string }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div id='overview' className='border p-2'>
      <FeatureHeadingLayout heading={"Project Info"} />
      <h4 className={`${!isExpanded ? "line-clamp-2" : ""} ${isExpanded ? "" : "max-h-[4em]"} p-4 overflow-hidden`}>{props.description || "mfweknjkwekfknk"}</h4>
       
        <Button onClick={() => setIsExpanded(!isExpanded)} sx={{ color: "red" }} variant='text'>
          {isExpanded ? "Read Less" : "Read More"}
        </Button>
    </div>
  );
}
