import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export interface VideoViewpagerType {
  videos: string[];
}

export function VideoViewpager(props: any) {
  console.log(props);

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: true })]);

  return (
    <div className='embla' ref={emblaRef}>
      <div className='embla__container'>
        {props.videos?.map((url: any) => {
          return (
            <div className='embla__slide h-[500px]'>
              <video className='w-full h-full object-cover' controls src={url} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
