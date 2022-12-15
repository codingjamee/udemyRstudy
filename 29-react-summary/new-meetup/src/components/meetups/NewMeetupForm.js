import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const decInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const titleInputValue = titleInputRef.current.value;
    const imageInputValue = imageInputRef.current.value;
    const addressInputValue = addressInputRef.current.value;
    const decInputValue = decInputRef.current.value;

    const meetupData = {
      title: titleInputValue,
      image: imageInputValue,
      address: addressInputValue,
      description: decInputValue,
    };

    props.onAddMeetup(meetupData);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea rows="5" required id="description" ref={decInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};
export default NewMeetupForm;
