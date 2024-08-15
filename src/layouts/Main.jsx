import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Main;