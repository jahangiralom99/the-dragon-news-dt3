import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="max-w-screen-lg mx-auto px-3">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;