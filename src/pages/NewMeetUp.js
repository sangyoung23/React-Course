import { useHistory } from "react-router-dom";

import NewMeetUpForm from "../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    // firebase 서버 url/meetups가 데이터베이스 컬렉션이 된다.
    // firebase는 끝에 .json을 붙여야 함
    fetch(
      "https://react-getting-started-67a12-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetUpPage;
