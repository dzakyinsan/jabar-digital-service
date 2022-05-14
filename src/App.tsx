import { Route, BrowserRouter , Switch } from "react-router-dom";

import Home from "./pages/Home";
import ArtistListComponent from "./pages/Artist";
import TrackListComponent from "./pages/Tracks";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/artist-list"} component={ArtistListComponent} />
          <Route path={"/track-list"} component={TrackListComponent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
