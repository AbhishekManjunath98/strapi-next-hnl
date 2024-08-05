import { FeatureHeadingLayout } from "./FeatureHeadingLayout";
import MapImage from "../../assets/images/locationmap.png";
// import { SingleLocationMapItem } from "./SingleLocationMapItem";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import DirectionsIcon from "@mui/icons-material/Directions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import SchoolIcon from "@mui/icons-material/School";
import BusinessIcon from "@mui/icons-material/Business";
import { useState } from "react";
import { Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SingleLocationMapItem } from "./SingleLocationMapItem";
import GoogleMapComponent from "./GoogleMapComponent";
// import GoogleMapComponent from "../common/GoogleMapComponent";

export function LocationMapLayout(props: any) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="p-2" id="location">
      <FeatureHeadingLayout heading={"Property Location Map and Landmarks"} />

      <div className="flex flex-col w-full py-4">
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            style: { borderRadius: "10px", width: "99%", margin: "auto" }, // Square corners
          }}
        />
      </div>

      <div className="w-full p-2">
        <GoogleMapComponent />
      </div>
      <br />

      <div
        className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-4`}
      >
        <SingleLocationMapItem label="Hospitals" icon={LocalHospitalIcon} />
        <SingleLocationMapItem label="City Connections" icon={DirectionsIcon} />
        <SingleLocationMapItem
          label="Shopping Centers"
          icon={ShoppingCartIcon}
        />
        <SingleLocationMapItem label="Business Hubs" icon={BusinessIcon} />
        <SingleLocationMapItem label="Hotels" icon={RoomServiceIcon} />
        <SingleLocationMapItem label="Schools" icon={SchoolIcon} />
      </div>
      <br />
    </div>
  );
}
