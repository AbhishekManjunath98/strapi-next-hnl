import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from "@mui/material";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import { Link } from "react-router-dom";
import { RecommendationType } from "./BottomSectionLayout";
// import { ProjectCardProps } from "../../extras/types";

export type ProjectCardProps = {
  data?: RecommendationType;
};

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div>
      <div className='w-full flex flex-col justify-center rounded-lg shadow-xl m-auto'>
        <img className='w-full h-64 object-cover rounded-t-lg' src={props.data?.image} alt='' />
        <div className='p-4 flex flex-col gap-3'>
          {/* <Link to={"/"}>
            <div className='flex justify-between items-center'>
              <h2 className='text-red-500 font-semibold text-xl'>₹ {props.data?.price}</h2>
              {props.data?.bookmarked ? <FavoriteIcon sx={{ color: "red" }} /> : <FavoriteBorderOutlinedIcon sx={{ color: "red" }} />}
            </div>
            <div>
              <p className='text-black font-normal text-lg'>{props.data?.title}</p>
              <p className='text-black font-semibold text-sm opacity-45'>{props.data?.location}</p>
            </div>
          </Link> */}
          <div className='text-nowrap w-max'>
            <Button variant='text' sx={{ fontWeight: "bold", fontSize: "18px", paddingLeft: "0" }}>
              Enquire Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
