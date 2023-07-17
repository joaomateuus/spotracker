/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react-hooks/exhaustive-deps */
import {  useCallback, useEffect, useState  } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth';
import { getTopThings, getUserProfile, recentlyPlayedTracks } from '../../services/services';
import { Navbar } from '../../components/Navbar';
import { SpotifyTrack } from '../../interfaces/Track';
import 'swiper/css';
import './styles.css';
import { ExternalUrls, Followers } from '../../interfaces/TopArtists';
import { Carrousel } from '../../components/Carrousel';

export const Dashboard: React.FC = () => {
    const { getAccessToken } = useContext(AuthContext);
    const [user, setUser] = useState<User | null>(null);
    const [recentTracks, setRecentTracks] = useState<RecentPlayedTracks[] | null>(null);
    const [topArtists, setTopArtists] = useState<Artist[] | null>(null);


    interface Images {
        url: string;
        height: number;
        width: number;
    }

    interface User {
        display_name: string;
        images: Images[];
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

    interface RecentPlayedTracks{
        track: SpotifyTrack;
        played_at: string;
        context: {
        type: string;
        href: string;
        external_urls: {
        spotify: string;
        };
        uri: string;
        };
    }

    const fetchData = useCallback(async () => {
        const { data, errors } = await getUserProfile();
        if(!errors){
            console.log(data);
            setUser(data);
        }
    }, []);
    
    const fetchTracks = useCallback(async () => {
        const { data, errors } = await recentlyPlayedTracks();
        if(!errors){
            console.log(data);
            setRecentTracks(data);
        }
    }, []);

    const fetchTopArtists = useCallback(async () => {
        const { data, errors } = await getTopThings("artists");
        if(!errors){
            console.log("Artistasss", data);
            setTopArtists(data);
        }
    }, []);

    
    const tracks = recentTracks?.map((track, index) => {
        return(
            <div className='flex items-start justify-start w-full h-fit p-6 border-b border-white' id='top-tracks-container' key={index}>
                <img src={track.track.album.images[2].url} alt="" />
                <div className='flex items-start justify-between h-fit w-4/5 ml-6'>
                    <div className='flex flex-col items-start justify-between h-fit w-fit' id='track-details'>
                        <span className='text-white text-xl mb-2'>{track.track.name}</span>
                        <span className='text-gray-300 text-xl mb-2'>{track.track.artists[0].name} - {track.track.album.name}</span>
                    </div>
                    <span className='text-white text-lg text-gray-400'>{track.played_at.split("T")[0]}</span>
                </div>
            </div>
        )
    });



    useEffect(() => {
        getAccessToken();
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        fetchData();
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        fetchTracks();
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        fetchTopArtists();

    }, []);

    return(
        <>
            <Navbar />
            <div className='flex flex-col items-center justify-start w-full h-screen bg-black'>
                <div className='flex items-start justify-start w-full h-2/5 bg-spotify-green' id='profile-container'>
                    <div className='flex items-start justify-start w-full h-fit p-6'>
                        <div>
                            <img className='max-w-xl rounded-full' src={ user ? user.images[1].url : ""} alt="" />
                        </div>
                        <div className='flex flex-col items-start justify-center w-fit h-fit p-4'>
                            <span className='text-3xl text-white font-bold ml-2 mt-2'>{user?.display_name}</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center w-full h-96 p-6 bg-black'>
                    <Carrousel topArtists={topArtists as Artist[]}/>
                </div>
                <div className='flex flex-col items-center justify-center w-full h-fit p-6 bg-black'>
                    <div className='flex flex-col items-start justify-center h-fit w-4/5'>
                        <span className='text-white text-4xl text-bold'>Recents Streams</span>
                        <span className='text-gray-400 text-xl'>Your recently played tracks</span>
                        {tracks}             
                    </div>
                </div>
            </div>
        </>
    )
}

