import { useContext } from "react";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../context/Auth";
// import { useContext } from "react";
// import { AuthContext } from "../../context/Auth";



// interface NavbarProps{
//   user_image: string;
// }


export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);  
  
  return (
      <>
        <div className="flex flex-col lg:flex-row items-center justify-between w-full bg-spotify-green h-42 lg:h-32 lg:p-12">
            <div className="flex items-center w-42 ml-4">
              <img src={logo} className="h-32 w-32" alt="" />
              <span className="text-3xl font-thin">Spotracker</span>
            </div>
            {
              user
              ?
              <div className="flex items-center justify-between p-4 lg:justify-center w-full lg:w-1/2">
                <ul id="" className="flex justify-evenly w-4/5 items-center lg:w-2/4">
                  <li className="text-black text-xl hover:border-b-2 hover:border-white">Top Tracks</li>
                  <li className="text-black text-xl hover:border-b-2 hover:border-white">Top Artists</li>
                  <li>
                    <button onClick={logout} className="text-black text-xl hover:border-b-2 hover:border-white">
                      Log out
                    </button> 
                  </li>
                </ul>
                <div>
                  <img className="h-16 w-16 rounded-full" src={user?.images[1].url} alt="" />
                </div>
              </div>
              : <button className="px-12 py-3 rounded-lg bg-black text-white text-xl">Log in</button>
            }
           
        </div>
      </>
    )
  }