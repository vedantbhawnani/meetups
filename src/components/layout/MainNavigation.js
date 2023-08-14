import { Link } from "react-router-dom";
import { useContext } from "react";

import FavContext from "../../store/favourites-context";
import classes from "./MainNavigation.module.css";
import Favorites from "../../pages/Favorites";

export default function MainNavigation() {
  const favCtx = useContext(FavContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>MeetUps</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites
              <span className={classes.badge}>{favCtx.totalfavorites}</span>
            </Link>
          </li>
          <li>
            <Link to="/new-meetups">New Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
