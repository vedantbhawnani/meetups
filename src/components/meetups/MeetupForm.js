import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./MeetupForm.module.css";

export default function MeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addrInputRef = useRef();
  const descInputRef = useRef();

  function SubmitHandler(e) {
    e.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDesc = descInputRef.current.value;
    const enteredAddr = addrInputRef.current.value;

    const meetUpData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDesc,
      address: enteredAddr,
    };
    // console.log(meetUpData);
    console.log("Data sent to onAddMeetup.");
    props.onAddMeetup(meetUpData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={SubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            id="title"
            size={40}
            ref={titleInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" size={40} ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="addr">Meetup Address</label>
          <input type="text" required id="addr" size={40} ref={addrInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="desc">Meetup Description</label>
          <textarea
            required
            id="desc"
            rows="5"
            minLength={40}
            ref={descInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Create New Meetup</button>
        </div>
      </form>
    </Card>
  );
}
