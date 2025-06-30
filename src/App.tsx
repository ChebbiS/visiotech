import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import Router from "./routers/Router";
import Login from "./pages/B_body/Login";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.body.style.fontFamily = "Arial, sans-serif";
        document.body.style.margin = "0";
        document.body.style.padding = "0";


        const token = localStorage.getItem('token');

        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
            navigate('/login');
        }

        return () => {
            document.body.style.backgroundColor = "";
            document.body.style.color = "";
        };
    }, [navigate]);

    if (isLoggedIn === null) {
        return <p>Loading...</p>;
    }
    return (
        <>
            {isLoggedIn ? (
                <Router/>
            ) : (
                <Login/>
            )}
        </>
    );
};

export default App;
