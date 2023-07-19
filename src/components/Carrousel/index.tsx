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
  

  return ( 
    <>
      <div className="flex w-full items-center justify-evenly">
      { topArtists &&
                topArtists.slice(0, 5)?.map((artist, index) => {
                  return (
                    <div className="flex flex-col items-center w-72">
                      <img
                        className="h-20 w-20 lg:w-40 lg:h-40 shrink-0 rounded-full"
                        id="item"
                        key={index}
                        src={artist.images[0].url}
                        alt=""
                      />
                      <span className="text-white mt-4">{index + 1} - {artist.name}</span>
                    </div>
                  
                  );
                })
              }
      </div>
    </>
  );
};




