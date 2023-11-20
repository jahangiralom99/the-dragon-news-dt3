import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {

    const { user, loader } = useContext(AuthContext);

    const location = useLocation();

    if (loader) {
        return <div className="flex h-screen items-center justify-center">
            <span className="loading loading-ring w-32"></span>
        </div>

    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivetRoute;