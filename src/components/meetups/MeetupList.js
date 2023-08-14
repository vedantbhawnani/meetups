import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem.js";

export default function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.desc}
        />
      ))}
    </ul>
  );
}
