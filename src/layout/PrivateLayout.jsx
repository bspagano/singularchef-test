import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import Header from '../components/Header';
const Private = () => {
    const { user } = useUserContext();
    return (
        <>
            <Header />
            {user ? <Outlet /> : <Navigate to="/" />}
        </>
    )
};

export default Private;
