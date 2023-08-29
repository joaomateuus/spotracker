// import { useEffect } from "react";
import logo from "../../assets/sound-waves.png";
import { Images } from "../../interfaces/Images";
// import premuim from "../../assets/"

export interface User {
    display_name: string;
    email: string;
    product: string;
    images: Images[];
}

interface LoggedNavbarProps{
    user: User;
    logout: () => void;
}

export const NavbarLogged = ({ user, logout }: LoggedNavbarProps) => {
    // useEffect(() => {
    //     console.log(user);
    // }, [])
    
  
    return (
    <>
        <div className="flex flex-col items-start justify-start w-full h-1/2 bg-spotify-gray text-white p-4">
            <div className="flex lg:flex-row flex-col items-center lg:justify-between w-full h-36 mb-8">
                <div className="flex items-center justify-center h-fit w-fit p-2">
                    <span className="text-4xl lg:text-5xl font-thin">Spotracker</span>
                    
                    <div className="h-fit w-fit bg-white rounded-full ml-4 border-black border-2">
                        <img src={logo} className="h-16 w-16" alt="" />     
                    </div>  
                </div>
                <div className="flex items-center justify-between p-4 lg:justify-evenly w-full lg:w-1/2">
                    <ul className="flex justify-evenly w-full items-center lg:w-4/3">
                        <li className="text-white text-xl hover:border-b-2 hover:border-white">Top Tracks</li>
                        <li className="text-white text-xl hover:border-b-2 hover:border-white">Top Artists</li>
                        <li>
                            <button onClick={logout} className="text-white text-xl hover:border-b-2 hover:border-white">
                            Log out
                            </button>   
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-center h-full w-full lg:mt-8 p-4">
                <img className="lg:h-52 lg:w-48 h-28 w-32 rounded-full" src={user?.images[1].url} alt="" />
                <div className="flex flex-col items-start justify-start h-full w-full ml-4">
                    <span className="text-2xl lg:text-4xl text-white font-bold">{user?.display_name}</span>
                    <span className="text-sm lg:text-lg font- text-white">{user?.email}</span>
                    {/* {user.product ?? <img src=""/>} */}
                </div>
            </div>    
        </div>
        {
            /* <div className="flex flex-col items-start justify-evenly w-full bg-spotify-green h-42 lg:h-96 lg:p-4">
                <div className="flex flex-col lg:flex-row items-start justify-between w-full bg-spotify-green h-72 lg:h-96 lg:p-4">
                    <div className="flex items-center w-40 ml-4">
                    <img src={logo} className="h-32 w-32" alt="" />
                    <span className="text-3xl font-thin">Spotracker</span>
                    </div>
                    
                    <div className="flex lg:flex-col items-center justify-between p-4 lg:justify-center w-full lg:w-1/2">
                        <ul id="" className="flex justify-evenly w-4/5 items-center lg:w-2/4">
                        <li className="text-black text-xl hover:border-b-2 hover:border-white">Top Tracks</li>
                        <li className="text-black text-xl hover:border-b-2 hover:border-white">Top Artists</li>
                        <li>
                            <button onClick={logout} className="text-black text-xl hover:border-b-2 hover:border-white">
                            Log out
                            </button> 
                        </li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-start justify-start h-fit w-full border-2 border-white">
                    <img className="lg:h-46 lg:w-46 h-16 w-16 rounded-full" src={user?.images[1].url} alt="" />
                </div>    
            </div> */
        }
       
      </>
  )
}
