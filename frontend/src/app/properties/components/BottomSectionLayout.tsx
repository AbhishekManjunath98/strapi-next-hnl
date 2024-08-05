// import { recommendationData } from "../../extras/ReusableFunctons";
// import RecommendationSection from "./RecommendationSection";

import RecommendationSection from "./RecommendationSection";

// import RecommendationSection from "../RecommendationSection";

const BottomSectionLayout = () => {
  return (
    <div className='p-4 shadow-md m-2 rounded-md flex flex-col gap-5'>
      {/* <RecommendationSection title='Other Projects by Landsandhomes Projects Infrastructure in Bangalore' propertyData={recommendationData} />
      <RecommendationSection title='Similar  Property in Mahalakshmi' propertyData={recommendationData} /> */}
      <RecommendationSection title='Recently viewed property by you' propertyData={recommendationData} />
    </div>
  );
};

export default BottomSectionLayout;

export type RecommendationType = {
  title: string;
  location: string;
  type: string;
  price: string;
  image: string;
  bookmarked: boolean;
  link: string;
};

export const recommendationData: RecommendationType[] = [
  {
    title: "DS MAX Skylishcious",
    location: "Sarjapur, Bangalore East",
    type: "Residential",
    price: "25 L, 1 BHK",
    image:
      "https://cdn.brigadegroup.com/properties/gallery/14327972655566c0512a4b5.jpg",
    bookmarked: true,
    link: "/",
  },
  {
    title: "DS MAX Skylishcious",
    location: "Sarjapur, Bangalore East",
    type: "Residential",
    price: "25 L, 1 BHK",
    image:
      "https://cdn.pixabay.com/photo/2014/07/31/21/41/apartment-406901_1280.jpg",
    bookmarked: false,
    link: "/",
  },
  {
    title: "DS MAX Skylishcious",
    location: "Sarjapur, Bangalore East",
    type: "Residential",
    price: "25 L, 1 BHK",
    image:
      "https://cdn.brigadegroup.com/properties/gallery/14327972655566c0512a4b5.jpg",
    bookmarked: false,
    link: "/",
  },
];