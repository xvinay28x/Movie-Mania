"use client";

import NavBar from "./navBar";
import TypeCards, { Orientation } from "@/app/component/typesOfMovieCards";
import { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <div className="bg-stone-950 px-6">
      <TypeCards orientation={Orientation.Portrait} title={"Upcoming"} />
      <TypeCards orientation={Orientation.Landscape} title={"Trending"} />
      <TypeCards orientation={Orientation.Landscape} title={"Top Rated"} />
      <TypeCards orientation={Orientation.Landscape} title={"Most Popular"} />
      <TypeCards orientation={Orientation.Landscape} title={"Action Movies"} />
      <TypeCards orientation={Orientation.Landscape} title={"Comedy Movies"} />
      <TypeCards orientation={Orientation.Landscape} title={"Horror Movies"} />
      <TypeCards
        orientation={Orientation.Landscape}
        title={"Romantic Movies"}
      />
    </div>
  );
}
