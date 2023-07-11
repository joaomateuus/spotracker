import logo from "../../assets/logo.png";

export const Navbar = () => {
    return (
      <>
        <div className="flex items-center justify-between w-full bg-spotify-green h-32 p-12">
            <div className="flex items-center w-42">
                <img src={logo} className="h-32 w-32" alt="" />
                <span className="text-3xl">Spotracker</span>
            </div>
            <div className="flex items-center justify-center w-42 p-6">
                <button className="px-12 py-3 rounded-lg bg-black text-white text-xl">Log in</button>
            </div>
        </div>
      </>
    )
  }