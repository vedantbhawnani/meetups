import { useContext } from "react";
import FavContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

function Favorites() {
  const favCtx = useContext(FavContext);
  let content;
  if (favCtx.totalfavorites === 0) {
    content = <p>You got no favs yet! Start adding some?</p>;
  } else {
    content = <MeetupList items={favCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default Favorites;
