import { ExternalUrls, Followers } from "../../interfaces/TopArtists";
import './style.css'
import { useState } from "react";

interface Images {
    url: string;
    height: number;
    width: number;
}

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

interface ComponentProps {
  topArtists: Artist[] | null;
}

export const Carrousel = ({ topArtists }: ComponentProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalArtists = topArtists ? topArtists.length : 0;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= topArtists!.length ? 0 : newIndex;
    });
  };


  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? topArtists!.length - 1 : newIndex;
    });
  };

  return (
    <>
      <div className="flex flex-col w-full items-start">
        <div className="flex justify-between w-36">
          <button className="text-white border-2 rounded-md border-white px-2" onClick={handlePrevious}>
            Prev
          </button>
          <button className="text-white border-2 rounded-md border-white px-2" onClick={handleNext}>
            Next
          </button>
        </div>

        <div className="relative p-6 overflow-hidden" id="container">
          <div className="overflow-x-none" id="album-wrapper">
            <div className="flex flex-nowrap gap-8 w-fit" style={
              { transform: `translateX(-${(currentIndex * 100) / totalArtists}%)`,
              transition: `all 0.3s ease` }
            }>
              { topArtists &&
                topArtists?.map((artist, index) => {
                  return (
                    <img
                      className="w-40 h-40 shrink-0 rounded-full"
                      id="item"
                      key={index}
                      src={artist.images[0].url}
                      alt=""
                    />
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};




