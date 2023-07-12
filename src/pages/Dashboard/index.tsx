/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react-hooks/exhaustive-deps */
import {  useCallback, useEffect, useState  } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth';
import { getUserProfile } from '../../services/services';
import { Navbar } from '../../components/Navbar';

export const Dashboard: React.FC = () => {
    const { getAccessToken } = useContext(AuthContext);
    const [user, setUser] = useState<User | null>(null);

    interface Images {
        url: string;
        height: number;
        width: number;
    }

    interface User {
        display_name: string;
        images: Images[];
        // outras propriedades do usuário
      }

    const fetchData = useCallback(async () => {
        const { data, errors } = await getUserProfile();
        if(!errors){
            console.log(data);
            setUser(data);
        }
    }, []);

    useEffect(() => {
        getAccessToken();
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        fetchData();
    }, []);

    return(
        <>
            <Navbar />
            <div className='flex flex-col items-center justify-start w-full h-screen bg-black'>
               <div className='flex items-start justify-start w-full h-2/5 bg-spotify-green'>
                    <div className='flex items-start justify-start w-full h-fit p-6'>
                        <div>
                            <img className='max-w-xl rounded-full' src={ user ? user.images[1].url : ""} alt="" />
                        </div>
                        <div className='flex flex-col items-start justify-center w-fit h-fit p-4'>
                            <span className='text-3xl text-white font-bold ml-2 mt-2'>{user?.display_name}</span>
                            <span></span>
                        </div>
                    </div>
               </div>

            </div>
        </>
    )
}

