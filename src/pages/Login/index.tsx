
// import { useEffect } from "react"

export const Login = () => {
    // useEffect(() => {
    //     console.log(import.meta.env.VITE_CLIENT_ID, import.meta.env.VITE_CLIENT_SECRET)
    // })


    return (
      <>
        <div className="flex flex-col items-start justify-start h-screen w-full">
            <div className="flex items-center justify-between w-full bg-black h-48 p-4">
                <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" className="h-16 w-42" alt="" />
            </div>
            <div className="flex flex-col items-center justify-start h-full w-full p-6" style={{background: 'linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%)'}}>
               <div className="flex flex-col items-center justify-center h-5/6 w-2/3 bg-black rounded-md p-6 mb-32">
                    <div className="mb-4">
                        <span className="text-white text-4xl text-bold">Sign In with Spotify</span>
                    </div>
                    <form action="" className="flex flex-col items-center justify-start h-5/6 w-2/3 border-t-2 border-b-2 border-white p-4 border-thin">
                        <div className="flex flex-col mb-6 mt-4">
                            <label className="text-white text-2xl">Email or Username</label>
                            <input className="mt-2 px-4 w-96 py-3 rounded-md p-12" type="text" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white text-2xl">Password</label>
                            <input className="mt-2 px-4 w-96 py-3 rounded-md" type="text" />
                        </div>
                        <button className="px-12 py-3 rounded-lg mt-20 bg-black text-white text-xl bg-spotify-green">
                            Sign in with spotify
                        </button>
                    </form>
               </div>
            </div>
        </div>
      </>
    )
}
  