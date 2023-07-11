import { Navbar } from "../../components/Navbar"
import bgMain from "../../assets/bg-main-home.png";

export const Home = () => {
  const clientId = import.meta.env.VITE_CLIENT_ID as string
  const redirectURI = import.meta.env.VITE_REDIRECT_URI as string
  const spotifyUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&redirect_uri=${redirectURI}&scope=user-read-private user-read-email user-read-playback-state user-modify-playback-state user-read-recently-played user-top-read`

  return (
    <>
      <Navbar />
          <div className="flex flex-col h-screen w-full">
            <div className="flex items-start justify-evenly h-4/5 bg-black w-full p-12">
               <img className="h-full" src={bgMain} alt="" />
                <div className="flex flex-col items-start justify-evenly h-3/5 w-fit">
                  <div className="flex items-center justify-evenly flex-col h-52 w-max p-2">
                    <span className="text-5xl text-white font-bold">Your Top Tracks,</span>
                    <span className="text-5xl text-white font-bold">Your Top Artists,</span>
                    <span className="text-5xl text-white font-bold">Your Top Genres.</span>
                  </div>
                  <div className="flex flex-col items-center w-96">
                    <span className="text-2xl text-white text-justify">
                      Create an account and get insights about your spotify activity...
                    </span>
                    <a href={spotifyUrl}>
                      <button 
                        className="px-12 py-3 rounded-lg mt-12 bg-black text-white text-xl bg-spotify-green">
                          Log in
                      </button>
                    </a>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}
