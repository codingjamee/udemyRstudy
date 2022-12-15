import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const navigate = useNavigate();
  const addMeetupHandler = (meetupData) => {
    fetch("https://react-http-55f5b-default-rtdb.firebaseio.com/meetup.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meetupData),
    }).then(() => {
      navigate("/", { replace: true });
    });
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};
export default NewMeetup;
