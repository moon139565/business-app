
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../Firebase.init';

const Requireauth = ({children}) => {
    const [user] = useAuthState(auth);
    if (user) {
            return children
    } else{
        return <Navigate to="/signin" replace/>
    }
};

export default Requireauth;