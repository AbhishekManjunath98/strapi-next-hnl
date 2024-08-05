import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export interface ImageGalleryType {
  images: string[];
}

export function ImageGallery(props: any) {

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: true })]);
  
  return (
    <div className='embla' ref={emblaRef}>
      <div className='embla__container'>
        {props.images?.map((url: any) => {
          return (
            <div className='embla__slide h-[500px]'>
              <img className='w-full h-full object-cover' src={url} alt='' />
            </div>
          );
        })}
      </div>
    </div>
  );
}