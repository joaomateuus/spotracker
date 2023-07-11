import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth';

export const Dashboard: React.FC = () => {
    const { getAccessToken } = useContext(AuthContext);

    useEffect(() => {
        getAccessToken();
    }); 

    return(
        <div>
        </div>
    )
}

