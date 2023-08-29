import './styles.css';
import { useState } from 'react';
import { Images } from '../../interfaces/Images';
import { ExternalUrls, Followers } from '../../interfaces/TopArtists';

interface Artist {
    external_urls: ExternalUrls;
    followers: Followers;
    genres: string[];
    href: string;
    id: string;
    images: Images[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
}

interface CarrouselProps{
    items: Artist[];
    // items: string[];
}
const artistsToRenderByDevice = window.matchMedia("(max-width: 768px)").matches ? 4 : 5; 


const Carousel = ({ items }: CarrouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel-container">
      {/* <button className='bg-white text-black mr-6' onClick={prevSlide}>Previous</button> */}
      <div className="carousel">
        {items.slice(0, artistsToRenderByDevice).map((item, index) => (
          <div
            className='flex flex-col items-center justify-center h-42 lg:h-72'
            id='carousel-slide'
            key={index}
            style={{ transform: `translateX(-${currentIndex * 70}%)` }}
          >
            <img src={item.images[0].url}  className="h-18 w-18 lg:w-40 lg:h-40 shrink-0 rounded-full" alt="" />
            <span className="text-center text-xs lg:text-lg text-white mt-4">{index + 1} - {item.name}</span>
            {/* <div className='flex items-center justify-center h-full'>
                
            </div> */}
          </div>
        ))}
      </div>
      {/* <button className='bg-white text-black ml-6' onClick={nextSlide}>Next</button> */}
    </div>
  );
};

export default Carousel;
