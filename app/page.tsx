"use client";

import NavBar from "./navBar";
import TypeCards from "@/app/component/typesOfMovieCards";
import {ReactElement} from "react";
import {ApiTypes} from "@/app/store";

export default function Home(): ReactElement {
    return (
        <div className="px-6">
            <NavBar/>
            <TypeCards title={"Most Popular"} apiFor={ApiTypes.MostPopularMovies}/>
            <TypeCards title={"Upcoming"} apiFor={ApiTypes.UpcomingMovies}/>
            <TypeCards title={"Top Rated"} apiFor={ApiTypes.TopRatedMovies}/>
            <TypeCards title={"Now Playing"} apiFor={ApiTypes.NowPlaying}/>
            <TypeCards title={"Horror"} apiFor={ApiTypes.HorrorMovies}/>
            <TypeCards title={"Action"} apiFor={ApiTypes.ActionMovies}/>
            <TypeCards title={"Romantic"} apiFor={ApiTypes.RomanticMovies}/>
        </div>
    );
}
