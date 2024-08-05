import { Button } from "@mui/material";
import PropertyMapImage from "../../assets/images/propertymap.png";
import CallIcon from "@mui/icons-material/Call";

export function SingleFloorPlan(props: any) {
  return (
    <div className='inline-block w-10/12 max-w-96 p-4 drop-shadow-md border border-gray-400 rounded-sm m-5'>
      <div>
        <img className='w-full' alt='' src={props.image} />
      </div>
      <div>
        <h1 className='font-bold text-red-500'>{props.title}</h1>
        <h5 className='text-black text-xs'>{props.bedrooms}</h5>
        <h5 className='text-black text-xs mt-3'>Price</h5>
        <h3 className='font-extrabold text-black'>₹ 90.00 Lac</h3>
        <br />
        <Button sx={{ color: "red", borderColor: "red" }} variant='outlined'>
          <a href="tel:+123456789" className="flex gap-2 items-center justify-center">
            <CallIcon sx={{fontSize: "16px"}} />
            Get a Call Back
          </a>
        </Button>
      </div>
    </div>
  );
}
