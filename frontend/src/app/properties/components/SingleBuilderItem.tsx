import { Button } from "@mui/material";
import ImageSobha from "../../assets/images/sobhaproperty.png";
import { Spacer } from "./Spacer";
// import { Spacer } from "../common/Spacer";

const unselectedButtonStyle = {
  fontWeight: "bold",
  color: "red",
  width: "150px",
  borderColor: "red",
  borderWidth: "2px",
  marginLeft: "10px",
  "&:hover": {
    backgroundColor: "transparent",
    borderWidth: "2px",
  },
};

export interface SingleBuilderItem {
  imageURL: string;
  builderName: string;
  experience: string;
  totalProjects: string;
}

export function SingleBuilderItem(props: any) {
  return (
    <div className='border-2 border-gray-500 flex-col inline-flex p-3 rounded-md items-start m-2'>
      <div className='flex items-center'>
        <img src="" />
        <div className='ml-5'>
          <h1 className='text-black font-bold'>Sobha</h1>
          <h5 className="text-xs">Experience: 24 Years</h5>
        </div>
      </div>

      <Spacer size='1' />
      <div className='flex justify-between items-center w-full px-2'>
        <h1 className="font-semibold text-sm">181 Projects</h1>
        <Button fullWidth variant='outlined' sx={unselectedButtonStyle}>
          Compare
        </Button>
      </div>
    </div>
  );
}
