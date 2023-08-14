import { useNavigate } from "react-router-dom";
import MeetupForm from "../components/meetups/MeetupForm";

export default function NewMeetups() {
  const navigate = useNavigate();

  function addMeetUpHandler(meetUpData) {
    console.log("Data received.");
    fetch(
      "https://react-meetups-b3005-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetUpData),
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then((data) => console.log(data))
      .then(() => {
        navigate("/");
      });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <MeetupForm onAddMeetup={addMeetUpHandler} />
    </section>
  );
}
