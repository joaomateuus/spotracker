/* eslint-disable @typescript-eslint/no-misused-promises */
import { NavbarLogged, User } from "../../components/NavbarLogged";
import { AuthContext } from "../../context/Auth";
import { TopThingsContext } from "../../context/TopThingsContext";
import { useContext, useCallback, useState } from "react";

export const TopArtists = () => {
    const { topArtists, fetchTopArtists } = useContext(TopThingsContext);
    const { user, logout } = useContext(AuthContext);
    const [filter, setFilter] = useState<string>('long_term');

    const changeFilter = useCallback(async (filter: string) => {
        setFilter(filter);
        await fetchTopArtists(filter);
    }, [fetchTopArtists]);

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
                            {/* // @typescript-eslint/no-misused-promises */}
                            <button onClick={() => changeFilter('long_term')}
                                 className="text-sm text-white">All time</button>
                        </div>
                        <div className={filter === 'short_term' ? activeFilter : inactiveFilter}>
                            <button onClick={() => changeFilter('short_term')} 
                                className="text-sm text-white">Past 4 weeks</button>
                        </div>
                        <div className={filter === 'medium_term' ? activeFilter : inactiveFilter}>   
                            <button onClick={() => changeFilter('medium_term')} 
                                className="text-sm text-white">Past 6 months</button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-6 items-center justify-center'>
                    {topArtists?.map((item, index) => {
                        return(
                            <div key={index}  className='flex flex-col items-center justify-center h-42 lg:h-72'>
                                <img src={item.images[0].url}  className="h-16 w-16 lg:w-40 lg:h-40 shrink-0 rounded-full" alt="" />
                                <span className="text-center text-xs lg:text-lg text-white mt-4">{index + 1} - {item.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="flex items-center justify-center h-32 bg-spotify-green">
                <h1 className='text-white'>Top Artists</h1>
            </div>
        </>
    )
}