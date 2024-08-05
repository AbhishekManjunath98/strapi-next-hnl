import { Button } from "@mui/material";

export function HeroImageSection(props: any) {

  return (
    <div className='relative inset-0'>
      <img
        className='w-full h-96 object-cover'
        alt=''
        src={props.image || 'https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
      />
      <div className='absolute right-8 top-4 flex gap-4 justify-center items-center max-sm:right-4'>
        <Button sx={{ color: "white", backgroundColor: "#339D44", borderColor: "red", borderRadius: "10px", "&:hover": { backgroundColor: "#339D44" } }}>
          Enquire Now
        </Button>
        <Button
          sx={{
            paddingX: "20px",
            color: "white",
            backgroundColor: "#EC1B26",
            borderColor: "red",
            borderRadius: "10px",
            "&:hover": { backgroundColor: "#EC1B26" },
          }}
        >
          Shortlist
        </Button>
      </div>
    </div>
  );
}
