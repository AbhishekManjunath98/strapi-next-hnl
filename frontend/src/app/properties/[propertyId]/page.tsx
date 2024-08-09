"use client"
import { Fragment, useEffect, useState } from "react";
// import UnderProgressImage from "../../assets/images/under-construction.svg";
// import { UpNav } from "../../components/common/UpNav";
// import { UpNavHome } from "../../components/common/UpNavHome";
// import { HeroImageSection } from "../../components/landingpage/HeroImageSection";
import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
// import { FeatureHeadingLayout } from "../../components/landingpage/FeatureHeadingLayout";
// import { GalleryLayout } from "../../components/landingpage/GalleryLayout";
// import { ImageGallery } from "../../components/landingpage/ImageGallery";
// import { ProjectInfoLayout } from "../../components/landingpage/ProjectInfoLayout";
// import { PriceListLayout } from "../../components/landingpage/PriceListLayout";
// import { FloorPlanLayout } from "../../components/landingpage/FloorPlanLayout";
// import { AmenitiesCardLayout } from "../../components/landingpage/AmenitiesLayout";
// import { SpecificationsLayout } from "../../components/landingpage/SpecificationsLayout";
// import { LocationMapLayout } from "../../components/landingpage/LocationMapLayout";
// import { NearByLayout } from "../../components/landingpage/NearbyLayout";
// import { ReviewsLayout } from "../../components/landingpage/ReviewsLayout";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { Spacer } from "../../components/common/Spacer";
// import { InterestedReadsLayout } from "../../components/landingpage/InterestedReadsLayout";
// import { TopBuildersLayout } from "../../components/landingpage/TopBuildersLayout";
// import { ComparePropertyLayout } from "../../components/landingpage/ComparePropertyLayout";
// import LocalityReviewsLayout from "../../components/landingpage/LocalityReviewsLayout";
// import BottomSectionLayout from "../../components/landingpage/BottomSectionLayout";
// import { API_BASE_URL } from "../../extras/ReusableFunctons";
// import axios, { AxiosResponse } from "axios";
// import { Property, Root } from "../../extras/types";
import { AmenitiesCardLayout } from "../components/AmenitiesLayout";
import BottomSectionLayout from "../components/BottomSectionLayout";
import { GalleryLayout } from "../components/GalleryLayout";
import { HeroImageSection } from "../components/HeroImageSection";
import ListItemLayout from "../components/ListItemLayout";
import { LocationMapLayout } from "../components/LocationMapLayout";
import { ProjectInfoLayout } from "../components/ProjectInfoLayout";
import { Spacer } from "../components/Spacer";
import { SpecificationsLayout } from "../components/SpecificationsLayout";
import { TopBuildersLayout } from "../components/TopBuildersLayout";
// import { UpNavHome } from "../components/UpNavHome";
import { FloorPlanLayout } from "../components/FloorPlanLayout";
// import ListItemLayout from "../../components/propertysearch/ListItemLayout";

const tabStyle = {
  fontWeight: "bold",
  color: "black",
  margin: "auto",
  display: "flex",
  maxWidth: "1200px",
  marginX: "auto",
  paddingX: "5px",
  textTransform: "capitalize",
};

// const getPropertyById = (id: string) => {
//   return axios({
//     method: "get",
//     url: `${API_BASE_URL}/api/v1/property/${id}`,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((res: AxiosResponse<Root>) => {
//     return res.data;
//   });
// };

export default function PropertyDetailPage(props: any) {
//   const { id } = useParams();

  const [data, setData] = useState<Property>();
//   console.log(data);

//   const specificationData = () => {
//     const {
//       locationName,
//       listedBy,
//       anyConstruction,
//       areaDetails,
//       bedrooms,
//       block,
//       boundaryWall,
//       breadth,
//       builtAreaDetails,
//       buyType,
//       chairs,
//       commercialParking,
//       defineProperty,
//       depositPrice,
//       entranceHeight,
//       entranceWidth,
//       escalator,
//       floors,
//       floorsAllowed,
//       houseNo,
//       length,
//       lift,
//       ownershipType,
//       pantry,
//       parking,
//       plot,
//       preferredTenant,
//       previouslyUsed,
//       priceDetails,
//       propertyAge,
//       propertyCategory,
//       propertyFacing,
//       propertyStatus,
//       propertyType,
//       reception,
//       shopMallName,
//       society,
//       suitableFor,
//       totalArea,
//       totalFloors,
//       towerName,
//       washrooms,
//       waterDisposal,
//     } = data || {};

//     return {  
//       city: locationName,
//       "Listed By": listedBy,
//       "Any Construction": anyConstruction,
//       "Area Details": `${areaDetails?.value ? areaDetails.value + " " + areaDetails.measurement : ""}`,
//       bedrooms: bedrooms,
//       block: block,
//       "Boundary Wall": boundaryWall,
//       Breadth: breadth,
//       "built Area": `${builtAreaDetails?.value ? builtAreaDetails.value + " " + builtAreaDetails.measurement : ""}`,
//       "Buy Type": buyType,
//       Chairs: chairs,
//       "Commercial Parking": commercialParking,
//       "Define Property": defineProperty,
//       "Deposit Price": depositPrice,
//       "Entrance Height": entranceHeight,
//       "Entrance Width": entranceWidth,
//       Escalator: escalator,
//       Floors: `${floors ? floorsAllowed || 0 + " / " + floors : ""}`,
//       "House No": houseNo,
//       Length: length,
//       Lift: lift,
//       "Ownership Type": ownershipType,
//       Pantry: pantry,
//       Parking: parking,
//       Plot: plot,
//       "Preferred Tenant": preferredTenant,
//       "Is property previously Used": previouslyUsed,
//       "Price Details": priceDetails,
//       "Property Age": propertyAge,
//       "Property Category": propertyCategory,
//       "Property Facing": propertyFacing,
//       "Property Status": propertyStatus,
//       "Property Type": propertyType,
//       Reception: reception,
//       "Shop Mall Name": shopMallName,
//       Society: society,
//       "Suitable For": `${suitableFor ? suitableFor.join(", ") : ""}`,
//       "Total Area": totalArea,
//       "Total Floors": totalFloors,
//       Tower: towerName,
//       Washrooms: washrooms,
//       "Water Disposal": waterDisposal,
//     };
//   };

//   const furnitureData = () => {
//     // const { furnitureStatus } = data || {};
//     return furnitureStatus?.reduce((acc: any, { id, count }: any) => {
//       acc[id] = count;
//       return acc;
//     }, {});
//   };

//   const otherRoomData = () => {
//     // const { otherRooms } = data || {};
//     return otherRooms?.reduce((acc: any, { id, count }: any) => {
//       acc[id] = count;
//       return acc;
//     }, {});
//   };
  const ameinitiesData = () => {
    // const { amenities, propertyCategory, commercialAmenities } = data || {};
    // if (propertyCategory === "commercial") {
    //   return commercialAmenities;
    // } else {
    //   return amenities;
    // }
  };

  const floorPlanData = () => {
    // const { bedrooms, areaDetails, propertyType } = data || {};

    // const title = `${bedrooms} ${areaDetails?.value} ${areaDetails?.measurement} ${propertyType?.split("/")[1]}`;
    // const floorPlan = {
    //   title: title,
    //   image: "",
    // };

    // return floorPlan;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

//   useEffect(() => {
//     try {
//       getPropertyById(id).then((res) => {
//         // @ts-ignore
//         setData(res.data.data);
//       });
//     } catch (error) {
//       console.log(JSON.stringify(error));
//     }
//     console.log(data);
//   }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const TabLayout = () => {
    return (
      <React.Fragment>
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs sx={tabStyle} value='' variant='scrollable' scrollButtons allowScrollButtonsMobile centered>
            <Tab sx={tabStyle} label='Photos & Videos' onClick={() => scrollTo("gallery")} />
            <Tab sx={tabStyle} label='Overview' onClick={() => scrollTo("overview")} />
            <Tab sx={tabStyle} label='Price List' onClick={() => scrollTo("price-list")} />
            <Tab sx={tabStyle} label='Floor Plans' onClick={() => scrollTo("floor-plan")} />
            <Tab sx={tabStyle} label='Amenities' onClick={() => scrollTo("amenities")} />
            <Tab sx={tabStyle} label='Specifications' onClick={() => scrollTo("specifications")} />
            <Tab sx={tabStyle} label='Location & Landmark' onClick={() => scrollTo("location")} />
            {/* <Tab sx={tabStyle} label='Rating & Reviews' onClick={() => scrollTo("reviews")} /> */}
          </Tabs>
        </Box>
      </React.Fragment>
    );
  };

  console.log(data);

  return (
    <div className='flex flex-col w-full min-h-screen'>
      {/* <UpNavHome /> */}
      <HeroImageSection image="http://127.0.01:1337/uploads/c2cyoy_6c100430ba.jpeg" />
      <div className='h-10 border border-gray-300 drop-shadow-xl'> {TabLayout()}</div>
      <div className='md:max-w-screen-lg md:m-auto'>
        <Spacer size='1.5' />
        <GalleryLayout imageURLs={data?.photosUrl} videoURLs={data?.videosUrl} />
        <Spacer size='1.5' />
        <ProjectInfoLayout description="It is a property Description" />
        {/* <Spacer size='1.5' />
        <PriceListLayout /> */}
        <Spacer size='1.5' />
        <FloorPlanLayout bedrooms="4" image="http://127.0.01:1337/uploads/c2cyoy_6c100430ba.jpeg" data={floorPlanData()} />
        <Spacer size='1.5' />
        {/* <AmenitiesCardLayout data={ameinitiesData()} /> */}
        {/* <Spacer size='1.5' /> */}
        {/* <SpecificationsLayout data={specificationData()} /> */}
        <Spacer size='1.5' />
        {/* <ListItemLayout name='Furniture' data={furnitureData()} /> */}
        <Spacer size='1.5' />
        {/* <ListItemLayout name='Other Rooms' data={otherRoomData()} /> */}
        <Spacer size='1.5' />
        <LocationMapLayout />
        <Spacer size='1.5' />
        {/* <NearByLayout />
        <Spacer size='1.5' /> */}
        {/* <LocalityReviewsLayout />
        <Spacer size='1.5' /> */}
        {/* <ReviewsLayout /> *
        <Spacer size='1.5' /> */}
        {/* <InterestedReadsLayout />
        <Spacer size='2.5' /> */}
        {/* <TopBuildersLayout /> */}
        {/* <Spacer size='1.5' /> */}
        {/* <BottomSectionLayout /> */}
        {/* <Spacer size='2.5' /> */}
        {/* <ComparePropertyLayout />
        <Spacer size='2.5' /> */}
      </div>
    </div>
  );
}




export interface SignupData {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    password: string;
    passwordConfirm: string;
    role: string;
  }
  
  export interface SignInData {
    email: string;
    password: string;
  }
  
  export interface BackDropTypes {
    open: boolean;
  }
  
  export interface PickerCardProps {
    heading: string;
    description: string;
    openClick: (picker: string) => void;
    knowClick: () => void;
    borderColor: string;
  }
  
  export interface SingleColorProps {
    color: string;
    colorValue: any;
    id: string;
    deleteColor: (id: string) => void;
  }
  
  export interface IPGeolocationResponse {
    ip: string;
    isp: string;
    org: string;
    hostname: string;
    latitude: number;
    longitude: number;
    postal_code: string;
    city: string;
    country_code: string;
    country_name: string;
    continent_code: string;
    continent_name: string;
    region: string;
    district: string;
    timezone_name: string;
    connection_type: string;
    asn_number: number;
    asn_org: string;
    asn: string;
    currency_code: string;
    currency_name: string;
    success: boolean;
    premium: boolean;
  }
  
  export interface SimpleIntroProps {
    tag?: string;
    heading: string;
    subtitle: string;
    btntext: string;
  }
  
  export type ResponseKeyValueArray = [string, any][];
  
  export interface Roott {
    message: string;
    url: string;
    info: Info;
  }
  
  export interface Info {
    developer: string;
    status: boolean;
    data: Daum[];
  }
  
  export interface Daum {
    resolution: string;
    thumbnail: string;
    url: string;
    shouldRender: boolean;
  }
  
  export interface Root {
    status: string;
    data: Data;
  }
  
  export interface Data {
    properties: Property[];
  }
  
  export interface Property {
    _id: string;
    buyType: string;
    categoryType: string;
    propertyType: string;
    listedBy: string;
    inputPropertyLocation: string;
    inputApartement: string;
    inputHouse: string;
    inputLandmark: string;
    selectOwnership: string;
    selectPropertyStatus: string;
    selectAreaDetails: SelectAreaDetails;
    inputPriceDetails: string;
    selectPropertyAge: string;
    selectBedrooms: string;
    selectOtherRooms: SelectOtherRoom[];
    selectPropertyFacing: string;
    selectFurnitureStatus: SelectFurnitureStatu[];
    selectParking: string;
    selectAmeinities: string[];
    inputBlock: string;
    inputFloors: string;
    inputTotalFloor: string;
    selectReception: string;
    inputDefineProperty: string;
    inputFloorPlanImages?: InputFloorPlanImage[];
    inputFloorPlanImagesUrl?: string;
    photos: Photo[];
    videos: Video[];
    photosUrl?: string[];
    videosUrl?: string[];
    inputPropertyDescription: string;
    selectBuiltAreaDetails: SelectBuiltAreaDetails;
    inputLength: string;
    inputBreadth: string;
    inputTotalArea: string;
    inputPlot: string;
    selectFloorsAllowed: string;
    selectBoundaryWall: string;
    selectAnyConstruction: string;
    selectLocationInside: string;
    selectAmenitiesCommercical: string[];
    selectSuitableFor: string[];
    inputSociety: string;
    preferedTenant: string;
    selectNoOfChairs: string;
    selectNoOfRooms: string;
    selectLift: string;
    selectPantry: string;
    selectCommercicalParking: string;
    inputTowerName: string;
    inputShopMallName: string;
    selectWashrooms: string;
    selectLocationNear: string;
    inputMeter: string;
    inputEntranceWidth: string;
    inputEntranceHeight: string;
    selectEsclator: string;
    selectWaterDisposal: string;
    selectPreviouslyUsed: string;
    selectRentPrice: SelectRentPrice;
    inputDepositPrice: string;
    inputMaintainsMonthlyPrice: string;
    __v: number;
  }
  
  export interface SelectAreaDetails {
    measurement: string;
    value: string;
  }
  
  export interface SelectOtherRoom {
    id: string;
    count: number;
    _id?: string;
  }
  
  export interface SelectFurnitureStatu {
    id: string;
    count: number;
    _id?: string;
  }
  
  export interface InputFloorPlanImage {}
  
  export interface Photo {}
  
  export interface Video {}
  
  export interface SelectBuiltAreaDetails {
    measurement: string;
    value: string;
  }
  
  export interface SelectRentPrice {
    measurement: string;
    value: string;
  }
  
  export interface OTPInputProps {
    length: any;
    otp: string;
    setOtp: React.Dispatch<React.SetStateAction<string>>;
    inputType: string;
    required: boolean;
  }
  
  export interface OTPInternalProps {
    inputType: string;
    separator: React.ReactNode;
    length: number;
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
  }
  
  export type FooterProps = {
    item: {
      title: string;
      link: string;
    }[];
  };
  
  export interface SearchUpNavType {
    serachTerm: string;
    handleSearchTermChange?: (value: string) => void;
    setPopUpEl?: any;
    textboxChecked?: boolean;
    setTextBoxChecked?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    handleBuyTypeChange?: any;
  }
  
  export type RatingProps = {
    name: string;
    rating: number;
    icon: JSX.Element;
  };
  
  export type StartRatingProps = {
    value: number;
    name: string;
  };
  
  export type RecommendationType = {
    title: string;
    location: string;
    type: string;
    price: string;
    image: string;
    bookmarked: boolean;
    link: string;
  };
  
  export type ProjectCardProps = {
    data?: RecommendationType;
  };
  
  export type RecommendationSectionProps = {
    title: string;
    propertyData: RecommendationType[];
  };
  
  export interface GeoIpResponse {
    status: string;
    statusCode: number;
    ipAddress: string;
    geolocation: Geolocation;
  }
  export interface Geolocation {
    ip: string;
    hostname: string;
    city: string;
    region: string;
    country: string;
    loc: string;
    org: string;
    postal: string;
    timezone: string;
    countryCode: string;
    countryFlag: CountryFlag;
    countryFlagURL: string;
    countryCurrency: CountryCurrency;
    continent: Continent;
    isEU: boolean;
  }
  export interface CountryFlag {
    emoji: string;
    unicode: string;
  }
  export interface CountryCurrency {
    code: string;
    symbol: string;
  }
  export interface Continent {
    code: string;
    name: string;
  }
  
  export interface IconBoxType {
    heading: String;
    image?: String;
    subheading?: String;
  }
  export type PreviewDialogProps = {
    open: boolean;
    handleClose?: any;
    data?: any;
  };
  
  export interface SearchResultsType {
    status: string;
    statusCode: number;
    message: string;
    search_query: string;
    time_taken: string;
    total_results: TotalResults;
    search_results: SearchResult[];
  }
  
  export interface TotalResults {
    value: number;
    relation: string;
  }
  
  export interface SearchResult {
    _index: string;
    _id: string;
    _score: any;
    _source: Source;
    sort: number[];
  }
  
  export interface Source {
    ownershipType: string;
    propertyAge: string;
    parking: string;
    previouslyUsed: string;
    rooms: Room[];
    shopMallName: string;
    breadth: any;
    preferredTenant: string;
    commercialParking: string;
    mongo_id: string;
    defineProperty: string;
    builtAreaDetails: BuiltAreaDetails;
    __v: number;
    houseNo: string;
    chairs: string;
    block: string;
    entranceHeight: string;
    landmark: string;
    propertyCategory: string;
    suitableFor: string[];
    otherRooms: OtherRoom[];
    furnitureStatus: FurnitureStatu[];
    propertyDescription: string;
    meter: string;
    photosUrl: string[];
    bedrooms: string;
    floorPlanImagesUrl: string;
    commercialAmenities: string[];
    propertyFacing: string;
    priceDetails: string;
    lift: string;
    washrooms: string;
    boundaryWall: string;
    amenities: string[];
    listedBy: string;
    areaDetails: AreaDetails;
    totalFloors: string;
    waterDisposal: string;
    propertyStatus: string;
    society: string;
    floors: string;
    plot: string;
    propertyType: string;
    pantry: string;
    entranceWidth: string;
    depositPrice?: number;
    towerName: string;
    reception: string;
    locationName: string;
    escalator: string;
    length: any;
    anyConstruction: string;
    floorsAllowed: string;
    propertyName: string;
    videosUrl: string[];
    buyType: string;
    location: Location;
    locationNear: string;
    totalArea: any;
    rentPrice?: RentPrice;
    locationInside?: string;
  }
  
  export interface Room {
    count: number;
    id: string;
  }
  
  export interface BuiltAreaDetails {
    value: string;
    measurement: string;
  }
  
  export interface OtherRoom {}
  
  export interface FurnitureStatu {
    count: number;
    id: string;
  }
  
  export interface AreaDetails {
    value: string;
    measurement: string;
  }
  
  export interface Location {
    coordinates: number[];
    type: string;
  }
  
  export interface RentPrice {
    value: number;
    measurement: string;
  }
  