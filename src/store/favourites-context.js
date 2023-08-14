import { createContext, useState } from "react";

const FavContext = createContext({
  favorites: [],
  totalfavorites: 0,
  addFav: (favMeetup) => {},
  removeFav: (meetupId) => {},
  itemIsFav: (meetupId) => {},
});

export function FavContextProvider(props) {
  const [userFav, setUserFav] = useState([]);

  const context = {
    favorites: userFav,
    totalfavorites: userFav.length,
    addFav: addFavHandler,
    removeFav: removeFavHandler,
    itemIsFav: itemFavHandler,
  };

  function addFavHandler(favMeetup) {
    setUserFav((prevUserFav) => {
      return prevUserFav.concat(favMeetup);
    });
  }

  function removeFavHandler(meetupId) {
    setUserFav((prevUserFav) => {
      return prevUserFav.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemFavHandler(meetupId) {
    return userFav.some((meetup) => meetup.id == meetupId);
  }

  return (
    <FavContext.Provider value={context}>{props.children}</FavContext.Provider>
  );
}

export default FavContext;
