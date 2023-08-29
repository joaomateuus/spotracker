/* eslint-disable @typescript-eslint/no-misused-promises */
import { useContext, useState, useCallback } from "react";
import { TopThingsContext } from "../../context/TopThingsContext";
import { AuthContext } from "../../context/Auth";
import { NavbarLogged, User } from "../NavbarLogged";


export const TopTracks = () => {
    const { topTracks, fetchTopTracks } = useContext(TopThingsContext);
    const { user, logout } = useContext(AuthContext);

    const [filter, setFilter] = useState<string>('long_term');

    const changeFilter = useCallback(async (filter: string) => {
        setFilter(filter);
        await fetchTopTracks(filter);
    }, [fetchTopTracks]);

    const getTitleByFilter = (filter: string) => {
        switch(filter) {
            case 'long_term':
                return 'All time'
            case 'short_term':
                return 'Past 4 weeks'
            case 'medium_term':
                return 'Past 6 months'
        }
    };

    const activeFilter = 'bg-spotify-green hover:cursor-pointer rounded-md h-fit w-fit p-2';
    const inactiveFilter = 'hover:bg-gray-800 hover:cursor-pointer rounded-md h-fit w-fit p-2';

    return (
        <>
            <NavbarLogged user={user as unknown as User} logout={logout} />
            <div className="flex flex-col items-center justify-center w-full bg-black p-4">
                <div className="flex items-center justify-between w-full">
                    <span className="text-3xl text-white">Your 5 Most listened artists for {getTitleByFilter(filter)} </span>
                    <div className="flex items-center justify-evenly bg-gray-600 rounded-md h-12 w-72 text-white">
                        <div className={filter === 'long_term' ? activeFilter : inactiveFilter}>
                            <button onClick={() => changeFilter('long_term')} className="text-sm text-white">
                                All time
                            </button>
                        </div>
                        <div className={filter === 'short_term' ? activeFilter : inactiveFilter}>
                            <button onClick={() => changeFilter('short_term')} className="text-sm text-white">
                                Past 4 weeks
                            </button>
                        </div>
                        <div className={filter === 'medium_term' ? activeFilter : inactiveFilter}>   
                            <button onClick={() => changeFilter('medium_term')} className="text-sm text-white">
                                Past 6 months
                            </button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-4 items-center justify-center p-4'>
                    {topTracks?.map((item, index) => {
                        return(
                            <div key={index}  className='flex flex-col items-center justify-center h-42 lg:h-72'>
                                <img
                                     className="h-20 w-20 lg:w-48 lg:h-48 shrink-0 rounded-sm"
                                    id="item"
                                    key={index}
                                    src={item.album.images[0].url}
                                    alt=""
                                />
                                <span className="text-center text-sm lg:text-xl text-white mt-4">
                                    {index + 1} - {item.name}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div> 
        </>
    )
}
