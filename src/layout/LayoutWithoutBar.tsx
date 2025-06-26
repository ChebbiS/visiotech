import { Outlet } from "react-router";

const LayoutWithoutBar= () => {
    return (
            <>
                <main>
                <Outlet/>
                </main>
            </>
    );
};

export default LayoutWithoutBar;
