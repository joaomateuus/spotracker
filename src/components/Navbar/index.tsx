import { useContext } from "react";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../context/Auth";

export const Navbar = () => {
  const { isUserLogged, logout } = useContext(AuthContext);  
  
  
  return (
      <>
        <div className="flex items-center justify-between w-full bg-spotify-green h-32 p-12">
            <div className="flex items-center w-42">
                <img src={logo} className="h-32 w-32" alt="" />
                <span className="text-3xl font-bold">Spotracker</span>
            </div>
            <div className="flex items-center justify-center w-42 p-6">
                {
                  isUserLogged() 
                  ? <button onClick={logout} className="px-12 py-3 rounded-lg bg-black text-white text-xl">Log out</button> 
                  : <button className="px-12 py-3 rounded-lg bg-black text-white text-xl">Log in</button>
                }
            </div>
        </div>
      </>
    )
  }