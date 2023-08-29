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

export const ArtistsGrid = ({items}: CarrouselProps) => {
    return(
        <div className='grid grid-cols-4 gap-4 items-center justify-center'>
            {items.map((item, index) => {
                return(
                    <div className='flex flex-col items-center justify-center h-42 lg:h-72'>
                        <img src={item.images[0].url}  className="h-18 w-18 lg:w-40 lg:h-40 shrink-0 rounded-full" alt="" />
                        <span className="text-center text-xs lg:text-lg text-white mt-4">{index + 1} - {item.name}</span>
                    </div>
                )
            })}
        </div>
    )
}


