import { Route, Switch } from "react-router-dom";

import AllMeetUpPage from "./pages/AllMeetUp";
import NewMeetUpPage from "./pages/NewMeetUp";
import FavoritesPage from "./pages/Favorites";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <AllMeetUpPage />
        </Route>
        <Route path="/new-meetup" exact>
          <NewMeetUpPage />
        </Route>
        <Route path="/favorites" exact>
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
