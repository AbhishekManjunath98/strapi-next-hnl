// import { RecommendationSectionProps} from "../../extras/types";
import { RecommendationType } from "./BottomSectionLayout";
import ProjectCard from "./ProjectCard";
export type RecommendationSectionProps = {
    title: string;
    propertyData: RecommendationType[];
  };

const RecommendationSection = (props: RecommendationSectionProps) => {
  return (
    <div className='flex flex-col gap-4 mb-4'>
      <h3 className='text-lg font-semibold'>{props.title}</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {props.propertyData.map((property, index) => (
          <ProjectCard key={index} data={property} />
        ))}
      </div>
    </div>
  );
};

export default RecommendationSection;
