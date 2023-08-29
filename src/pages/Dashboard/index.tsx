/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react-hooks/exhaustive-deps */
import {  useCallback, useEffect, useState  } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth';
import { recentlyPlayedTracks } from '../../services/services';
import { SpotifyTrack } from '../../interfaces/Track';
import './styles.css';
import { ExternalUrls, Followers } from '../../interfaces/TopArtists';
import { TopThingsContext } from '../../context/TopThingsContext';
import { useNavigate } from 'react-router-dom';
import { NavbarLogged, User } from '../../components/NavbarLogged';
// import Carousel from '../../components/Carrousel';
// import { ArtistsGrid } from '../../components/ArtistsGrid';

export const Dashboard: React.FC = () => {
    const { getAccessToken, user, logout } = useContext(AuthContext);
    const { topArtists, topTracks } = useContext(TopThingsContext);
    const [recentTracks, setRecentTracks] = useState<RecentPlayedTracks[] | null>(null);
    const artistsToRenderByDevice = window.matchMedia("(max-width: 768px)").matches ? 4 : 5; 

    
    // let artists: Artist[] = filteredArtists() as unknown as Artist[];

    const navigate = useNavigate();

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

    const fetchTracks = useCallback(async () => {
        const { data, errors } = await recentlyPlayedTracks();
        if(!errors){
            // console.log(data);
            setRecentTracks(data);
        }
    }, []);

    const formatDate = (date: string) => {
        return date.split('-').reverse().join('/');
    }


    const tracks = recentTracks?.map((track, index) => {
        return(
            <div className='flex items-start justify-start w-full lg:w-4/5 h-fit p-4 mt-4 border-b border-gray-600' id='top-tracks-container' key={index}>
                <img src={track.track.album.images[2].url} alt="" />
                <div  className='flex items-start justify-between h-fit w-full ml-6'>
                    <div className='flex flex-col items-start justify-between h-fit w-full' id='track-details'>
                        <span id='track-title'  className='text-white text-xl mb-2'>{track.track.name.split('(')[0]}</span>
                        <span className='text-gray-300 text-justify text-md mb-2'>{track.track.artists[0].name} - {track.track.album.name}</span>
                    </div>
                    <span id='top-track-date' className='text-white text-md'>{formatDate(track.played_at.split("T")[0])}</span>
                </div>
            </div>
        )
    });

    useEffect(() => {
        getAccessToken();
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        fetchTracks();

    }, []);

    return(
        <>
            <NavbarLogged user={user as unknown as User} logout={logout} />
            <div className='flex flex-col items-center justify-start w-full h-screen bg-black'>
                <div className='flex flex-col items-start justify-between w-full h-fit'>
                    <div style={{height: '80%'}}
                        className='flex flex-col items-center justify-start w-full lg:p-12 bg-black'>
                        <div className='flex items-center justify-between w-full p-4 mb-4'>
                            <div className='flex flex-col items-start justify-start w-1/2 lg:p-6'>
                                <h1 className='text-white text-2xl lg:text-4xl mb-2'>Top Artists</h1>
                                <span  className='text-gray-400 text-left text-sm lg:text-xl'>Your 5 Most listened artists for the all time, click in see more to check all of them</span>     
                            </div>
                            <button onClick={() => navigate('/top_artists')}  className='text-white font-semibold px-6 lg:px-8 py-2 rounded-md bg-spotify-green'>
                                See more
                            </button>
                        </div>
                        {/* <div className="flex items-center justify-center w-full h-fit">
                            {isMobile 
                                ? <ArtistsGrid items={artists as unknown as Artist[] ?? []} /> 
                                : <Carousel items={artists ?? []} />
                            }
                        </div> */}
                        <div className='flex items-start justify-evenly w-full lg:w-3/5'>
                            {   topArtists &&
                                    topArtists.slice(0, artistsToRenderByDevice)?.map((artist, index) => {
                                    return (
                                        <div key={index} className="flex flex-col items-center w-full mt-4 h-42 lg:h-32">
                                            <img
                                                className="hover:lg:h-48 hover:lg:w-48 h-20 w-20 lg:w-40 lg:h-40 shrink-0 rounded-full"
                                                id="item"
                                                key={index}
                                                src={artist.images[0].url}
                                                alt=""
                                            />
                                            <span className="text-center text-sm lg:text-xl text-white mt-4">{index + 1} - {artist.name}</span>
                                        </div>
                                    
                                    )
                                })}
                        </div>
                    </div>
                    <div className='flex flex-col items-start justify-start h-fit lg:p-12 p-2 w-full bg-black lg:mt-6'>
                        <div className='flex items-center justify-between w-full p-2 mb-6 lg:mb-12'>
                            <div className='flex flex-col items-start justify-start w-1/2 lg:p-6'>
                                <h1 className='text-white text-2xl lg:text-4xl mb-2'>Top Tracks</h1>
                                <span className='text-gray-400 text-left text-sm lg:text-xl'>Your Most listened tracks for the all time</span>     
                            </div>
                            <button onClick={() => navigate('/top_tracks')}  className='text-white font-semibold px-6 lg:px-8 py-2 rounded-md bg-spotify-green'>
                                See more
                            </button>
                        </div>
                        <div className='flex items-start justify-evenly w-full'>
                            {   topTracks &&
                                    topTracks.slice(0, artistsToRenderByDevice)?.map((track, index) => {
                                    return (
                                        <div key={index}  className="flex flex-col items-center w-72 lg:max-h-72 max-h-36">
                                            <img
                                                className="h-20 w-20 lg:w-48 lg:h-48 shrink-0 rounded-sm"
                                                id="item"
                                                key={index}
                                                src={track.album.images[0].url}
                                                alt=""
                                            />
                                            <span className="text-center text-sm lg:text-xl text-white mt-4">
                                                {index + 1} - {track.name}
                                            </span>
                                            {/* {track.album.artists.map((artist) => {
                                                return(
                                                    <span className='text-white max-w-md'> {artist.name}</span>
                                                )
                                            })} */}
                                        </div>
                                    
                                    )
                                })}
                        </div>
                    </div>
                </div>
           
                <div className='flex flex-col items-center justify-center w-full h-fit p-6 bg-black'>
                    <div className='flex flex-col items-start justify-start w-full lg:p-6'>
                        <span className='text-white text-3xl lg:text-4xl text-bold'>Recents Streams</span>
                        <span className='text-gray-400 text-xl'>Your recently played tracks</span>
                    </div>
                    {tracks}
                </div>
                <div className="flex items-center justify-center h-32 w-full bg-spotify-green">
                    <h1 className='text-white'>Top Artists</h1>
                </div>
            </div>
        </>
    )
}

