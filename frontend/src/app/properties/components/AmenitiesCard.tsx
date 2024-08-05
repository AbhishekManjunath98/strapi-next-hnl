// import { SingleAmenitiesItem } from "./SingleAmenitiesItem";
import ImageBadminton from "../../assets/ameinities/badminton.png";
import ImageBasketball from "../../assets/ameinities/basketball.png";
import ImageCafebar from "../../assets/ameinities/cafebar.png";
import Imagecctv from "../../assets/ameinities/cctv.png";
import ImageClubhouse from "../../assets/ameinities/clubhouse.png";
import ImageCricket from "../../assets/ameinities/cricket.png";
import ImageFirefighting from "../../assets/ameinities/firefighting.png";
import ImageGym from "../../assets/ameinities/gymnissum.png";
import ImageIndoorGames from "../../assets/ameinities/indoorgames.png";
import ImageIntercom from "../../assets/ameinities/intercom.png";
import ImageJogging from "../../assets/ameinities/jogging.png";
import ImageKids from "../../assets/ameinities/kids.png";
import ImageLargegreen from "../../assets/ameinities/largegreen.png";
import ImageLaundromat from "../../assets/ameinities/laundromat.png";
import ImageLift from "../../assets/ameinities/lift.png";
import ImageMedicalFacl from "../../assets/ameinities/medicalfacility.png";
import ImagePartyLawn from "../../assets/ameinities/partylawn.png";
import ImagePartyMad from "../../assets/ameinities/partymad.png";
import ImagePowerbackup from "../../assets/ameinities/powerbackup.png";
import ImageRainwater from "../../assets/ameinities/rainwaterharvesting.png";
import ImageSecurity from "../../assets/ameinities/security.png";
import ImageSolarheaters from "../../assets/ameinities/solarheaters.png";
import ImageSwimming from "../../assets/ameinities/swimmingpool.png";
import ImageTabletennis from "../../assets/ameinities/tabletennis.png";
import ImageTreadedwater from "../../assets/ameinities/treatedwater.png";
import ImageVolleyball from "../../assets/ameinities/volleyball.png";
import ImageWatersupply from "../../assets/ameinities/watersupply.png";
import ImageYoga from "../../assets/ameinities/yoga.png";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ElevatorIcon from "@mui/icons-material/Elevator";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import CelebrationIcon from "@mui/icons-material/Celebration";
import WifiIcon from '@mui/icons-material/Wifi';
import SecurityIcon from '@mui/icons-material/Security';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PoolIcon from '@mui/icons-material/Pool';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import StrollerIcon from '@mui/icons-material/Stroller';
import GroupsIcon from '@mui/icons-material/Groups';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AirIcon from '@mui/icons-material/Air';
import AccessibleIcon from '@mui/icons-material/Accessible';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import BalconyIcon from '@mui/icons-material/Balcony';
import TheatersIcon from '@mui/icons-material/Theaters';
import DeleteIcon from '@mui/icons-material/Delete';
import HotTubIcon from '@mui/icons-material/HotTub';
import WeekendIcon from '@mui/icons-material/Weekend';
import FireHydrantAltIcon from '@mui/icons-material/FireHydrantAlt';
import ShowerIcon from '@mui/icons-material/Shower';
import PetsIcon from '@mui/icons-material/Pets';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';
import TvIcon from '@mui/icons-material/Tv';
import GridViewIcon from '@mui/icons-material/GridView';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import DoorbellIcon from '@mui/icons-material/Doorbell';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import DeckIcon from '@mui/icons-material/Deck';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import WavesIcon from '@mui/icons-material/Waves';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import PinDropIcon from '@mui/icons-material/PinDrop';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DnsIcon from '@mui/icons-material/Dns';
import VerticalShadesClosedIcon from '@mui/icons-material/VerticalShadesClosed';
import { SingleAmenitiesItem } from "./SingleAmenitiesItem";


export interface AmenitiesCardType {
  label: string;
}

const imageList = [
  { imageIcon: ImageBadminton, name: "Badminton Court" },
  { icon: <AcUnitIcon />, name: "Squash Court" },
  { imageIcon: ImageCafebar, name: "Cafe Bar" },
  { icon: <ElevatorIcon />, name: "High speed elevators" },
  { icon: <StorefrontIcon />, name: "Hype market" },
  { icon: <ImportContactsIcon />, name: "Study Room" },
  { icon: <MeetingRoomIcon />, name: "Lobby in building" },
  { icon: <MedicalServicesIcon />, name: "First aid medical centre" },

  { icon: <WifiIcon />, name: "Central wi-fi" },
  { icon: <SecurityIcon />, name: "24x7 security" },
  { icon: <AddCircleIcon />, name: "Helipad" },
  { icon: <LocalAtmIcon />, name: "Atm’s" },
  { icon: <PoolIcon />, name: "Private pool" },
  { icon: <OutdoorGrillIcon />, name: "Barbeque area" },
  { icon: <StrollerIcon />, name: "Daycare centre" },
  { icon: <GroupsIcon />, name: "Conference room" },
  { icon: <AdminPanelSettingsIcon />, name: "Security staff" },
  { icon: <StorefrontIcon />, name: "Attached market" },
  { icon: <GolfCourseIcon />, name: "Golf course" },
  { icon: <RestaurantIcon />, name: "Food court" },
  { icon: <EngineeringIcon />, name: "Maintenance staff" },
  { icon: <AirIcon />, name: "Oxygen duct" },
  { icon: <AccessibleIcon />, name: "Facilities for disabled" },
  { icon: <DinnerDiningIcon />, name: "Restaurant" },
  { icon: <BalconyIcon />, name: "Balcony" },
  { icon: <TheatersIcon />, name: "Multiplex" },
  { icon: <DeleteIcon />, name: "Waste disposal" },
  { icon: <HotTubIcon />, name: "Jacuzzi" },
  { icon: <WeekendIcon />, name: "Reception/waiting room" },
  { icon: <FireHydrantAltIcon />, name: "Extinguishers" },
  { icon: <ShowerIcon />, name: "Sprinklers" },
  { icon: <FireHydrantAltIcon />, name: "Hoses" },
  { icon: <PetsIcon />, name: "Pet area" },
  { icon: <LocalParkingIcon />, name: "Visitor's Parking" },
  { icon: <DoorSlidingIcon />, name: "Double glazed windows" },
  { icon: <AcUnitIcon />, name: "Centrally air-conditioned" },
  { icon: <TvIcon />, name: "Satellite/cable tv" },
  { icon: <GridViewIcon />, name: "Tiles" },
  { icon: <HotTubIcon />, name: "Sauna" },
  { icon: <LocalLaundryServiceIcon />, name: "Laundry facility" },
  { icon: <CleaningServicesIcon />, name: "Cleaning services" },

  { icon: <BalconyIcon />, name: "Balcony or terrace" },
  { icon: <DoorbellIcon />, name: "24 hours concierge" },
  { icon: <SportsTennisIcon />, name: "Tennis court (s)" },
  { icon: <HistoryEduIcon />, name: "Pre-school" },
  { icon: <DeckIcon />, name: "terrace" },
  { icon: <RoomServiceIcon />, name: "Concierge Desk" },
  { icon: <LocationCityIcon />, name: "Serviced apartments" },
  { icon: <StorefrontIcon />, name: "High street retail" },
  { icon: <WavesIcon />, name: "View of water" },
  { icon: <HouseSidingIcon />, name: "Servant quarter" },
  { icon: <PinDropIcon />, name: "View of landmark" },
  { icon: <FitnessCenterIcon />, name: "Private gym" },
  { icon: <HotTubIcon />, name: "Private Jacuzzi" },
  { icon: <DnsIcon />, name: "Built in wardrobes" },
  { icon: <VerticalShadesClosedIcon />, name: "Walk-in-closet" },

  { imageIcon: Imagecctv, name: "CCTV security" },
  { imageIcon: ImageClubhouse, name: "Clubhouse" },
  { imageIcon: ImageCricket, name: "Cricket" },
  { imageIcon: ImageFirefighting, name: "Fire Sensors" },
  { imageIcon: ImageGym, name: "Gymnasium" },
  { imageIcon: ImageIndoorGames, name: "Indoor Games" },
  { imageIcon: ImageIntercom, name: "Intercom" },
  { imageIcon: ImageJogging, name: "Jogging/cycle track" },
  { imageIcon: ImageKids, name: "Kids Play Area" },
  { imageIcon: ImageLargegreen, name: "Large Green Area" },
  { imageIcon: ImageLaundromat, name: "Laundromat" },
  { imageIcon: ImageLift, name: "Lift" },
  { imageIcon: ImageMedicalFacl, name: "Medical Facility" },
  { imageIcon: ImagePartyLawn, name: "Party Lawn" },
  { imageIcon: ImagePartyMad, name: "Party Hall" },
  { imageIcon: ImagePowerbackup, name: "Power Backup" },
  { imageIcon: ImageRainwater, name: "Rainwater Harvesting" },
  { imageIcon: ImageSecurity, name: "Security" },
  { imageIcon: ImageSolarheaters, name: "Solar Water Heaters" },
  { imageIcon: ImageSwimming, name: "Swimming Pool" },
  { imageIcon: ImageTabletennis, name: "Table Tennis" },
  { imageIcon: ImageTreadedwater, name: "Treated Water Supply" },
  { imageIcon: ImageVolleyball, name: "Volleyball" },
  { imageIcon: ImageWatersupply, name: "Water Supply" },
  { imageIcon: ImageYoga, name: "Yoga & Meditation" },
];

export function AmenitiesCard(props: { data?: string[] }) {
  const filteredList = imageList.filter((item) => {
    return props.data?.includes(item.name.trim().replace(/\s/g, "").toLowerCase());
  });

  return (
    <div className='border rounded-md border-gray-700 p-2 flex w-full justify-between my-2'>
      <div className={`grid w-full grid-cols-1 place-content-between sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}>
        {filteredList.map((amenity, index) => (
          <SingleAmenitiesItem label={amenity.name} 
          // imageIcon={amenity.imageIcon}
           icon={amenity.icon} />
        ))}
      </div>
    </div>
  );
}
