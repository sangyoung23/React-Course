import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  if (favoritesCtx.totalFavorites === 0) {
    return <p>You got no favorites yet, Start adding some?</p>;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      <MeetupList meetups={favoritesCtx.favorites} />
    </section>
  );
}

export default FavoritesPage;
