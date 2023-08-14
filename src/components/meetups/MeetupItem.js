import { useContext } from "react";

import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavContext from "../../store/favourites-context";

export default function MeetupItem(props) {
  const favCtx = useContext(FavContext);

  const itemIsFav = favCtx.itemIsFav(props.id);

  function toggleFavHandler() {
    if (itemIsFav) {
      favCtx.removeFav(props.id);
    } else {
      favCtx.addFav({
        // key: props.id,
        id: props.id,
        title: props.title,
        desc: props.desc,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.desc}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavHandler}>
            {itemIsFav ? "Remove from favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
