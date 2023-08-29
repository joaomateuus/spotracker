import logo from "../../assets/logo.png";

// import { useContext } from "react";
// import { AuthContext } from "../../context/Auth";



// interface NavbarProps{
//   user_image: string;
// }


export const Navbar = () => {
  
  return (
      <>
        <div className="flex flex-col lg:flex-row items-center justify-between w-full bg-spotify-green h-42 lg:h-36 lg:p-4">
            <div className="flex items-center w-42 ml-4">
              <img src={logo} className="h-32 w-32" alt="" />
              <span className="text-3xl font-thin">Spotracker</span>
            </div>

            <button className="px-12 py-3 rounded-lg bg-black text-white text-xl">Log in</button>
        </div>
      </>
    )
  }