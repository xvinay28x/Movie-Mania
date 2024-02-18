"use client";

import NavBar from "./navBar";
import TypeCards from "@/app/component/typesOfMovieCards";
import {ReactElement} from "react";

export default function Home(): ReactElement {
    return (
        <div className="px-6">
            <NavBar/>
            <TypeCards title={"Top Rated"}/>
            <TypeCards title={"Upcoming"}/>
            <TypeCards title={"Popular"}/>
        </div>
    );
}
