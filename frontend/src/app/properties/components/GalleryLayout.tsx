import { Button } from "@mui/material";
import { FeatureHeadingLayout } from "./FeatureHeadingLayout";
// import { ImageGallery } from "./ImageGallery";
import { VideoViewpager } from "./VideoViewpager";
import { useState } from "react";
import { ImageGallery } from "./ImageGallery";
// import { Button } from "@/components/ui/button";

export interface GalleryLayoutType {
  images?: File[];
  videos?: File[];
  imageURLs?: string[];
  videoURLs?: string[];
}

export function GalleryLayout(props: GalleryLayoutType) {
  const [isVideos, setIsVideos] = useState<boolean>(false);

  const imageUrls = props.images?.map((url) => {
    return URL.createObjectURL(url);
  });

  const videoUrls = props.videos?.map((url) => {
    return URL.createObjectURL(url);
  });

  return (
    <div id='gallery' className='border p-2 flex flex-col gap-5'>
      <FeatureHeadingLayout heading='Property Photos & Video' key='' />

      <div className='flex gap-4'>
        <Button sx={{ paddingX: 2 }} onClick={() => setIsVideos(false)} 
        variant={isVideos ? "text" : "contained"}
        >
          Photos
        </Button>

        <Button sx={{ paddingX: 2 }} onClick={() => setIsVideos(true)} variant={isVideos ? "contained" : "text"}>
          Videos
        </Button>
      </div>

      {!isVideos ? <ImageGallery images={props.imageURLs || imageUrls} /> : <VideoViewpager videos={props.videoURLs || videoUrls} />}
    </div>
  );
}
