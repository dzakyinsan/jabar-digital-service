import Category from "../../components/category.components";

import "./style.scss";

export default function Home() {
  return (
    <div>
      <div className="home">
        <Category image={require("./../../assets/artist.jpg")} title={"Top Artist"} route={'/artist-list'}/>
        <Category image={require("./../../assets/tracks.jpg")} title={"Top Tracks"} route={'/track-list'}/>
      </div>
    </div>
  );
}
