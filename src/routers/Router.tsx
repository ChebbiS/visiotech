import {Route, Routes } from "react-router";

import Dashboard from "../pages/B_body/Dashboard.tsx";
import Favorite from "../pages/B_body/Favorite.tsx";
import MovieDetails from "../pages/B_body/MovieDetails.tsx";
import Login from "../pages/B_body/Login.tsx";
import PeopleDetails from "../pages/B_body/PeopleDetails.tsx";
import Research from "../pages/B_body/Research.tsx";
import SeenMovie from "../pages/B_body/SeenMovie.tsx";
import Setting from "../pages/B_body/Setting.tsx";
import LayoutWithBar from "../layout/LayoutWithBar.tsx";
import LayoutWithoutBar from "../layout/LayoutWithoutBar.tsx";

const Router= () => {
    return (
            <Routes>
                <Route element={<LayoutWithBar />}>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/favorite" element={<Favorite/>}/>
                    <Route path="/movieDetails/:id" element={<MovieDetails/>}/>
                    <Route path="/peopleDetails/:id" element={<PeopleDetails/>}/>
                    <Route path="/research/:query" element={<Research/>}/>
                    <Route path="/seenMovie" element={<SeenMovie/>}/>
                    <Route path="/setting" element={<Setting/>}/>
                </Route>

                <Route element={<LayoutWithoutBar />}>
                    <Route path="/login" element={<Login/>}/>
                </Route>
            </Routes>
    );
};

export default Router;
