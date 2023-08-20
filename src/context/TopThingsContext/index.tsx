import React, { createContext, useCallback, useState, useEffect, useContext  } from "react";
import { ExternalUrls, Followers } from "../../interfaces/TopArtists";
import { getTopThings } from "../../services/services";
import { AuthContext } from "../Auth";
import { Album } from "../../interfaces/Album";

interface Images {
    url: string;
    height: number;
    width: number;
}

interface TopThingsContextProps {
    children: React.ReactNode;
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


interface Track {
    album: Album;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: { isrc: string };
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
    is_local: boolean;
}

interface TopThingsContextData {
   topArtists: Artist[] | null;
   topTracks: Track[] | null;
}

const TopThingsContext = createContext({} as TopThingsContextData);

const TopThingsProvider: React.FC<TopThingsContextProps> = ({children}) => {
    const [topArtists, setTopArtists] = useState<Artist[] | null>(null);
    const [topTracks, setTopTracks] = useState<Track[] | null>(null);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { token } = useContext(AuthContext);

    useEffect(()=> {
        if(!topArtists && token) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            fetchTopArtists();
        }

        if(!topTracks && token) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            fetchTopTracks();
        }
        
    })

    const fetchTopArtists = useCallback(async () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { data, errors } = await getTopThings("artists");
        if(!errors){
            console.log("Artistasss", data);
            setTopArtists(data as Artist[]);
        }
    }, []);

    const fetchTopTracks = useCallback(async () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { data, errors } = await getTopThings("tracks");
        if(!errors){
            console.log("Tracks", data);
            setTopTracks(data as Track[]);
        }
    }, []);


    
    return(
        <TopThingsContext.Provider value={{ topArtists, topTracks }}>
            {children}
        </TopThingsContext.Provider>
    )
}

export {  TopThingsContext, TopThingsProvider }


