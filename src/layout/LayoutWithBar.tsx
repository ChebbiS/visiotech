import {Outlet} from "react-router";
import Header from "../pages/A_header/Header.tsx";

const LayoutWithBar= () => {
    return (
        <>
                <Header/>
            <main>
                <Outlet/>
            </main>
    </>
    );
};

export default LayoutWithBar;
