import { useEffect, useState } from "react";
import { verifyUser } from "./services/users.js";
import { Route, useHistory } from "react-router-dom";
import { verifyTutor } from "./services/tutors";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./screens/Landing/index";
import TutorGallery from "./screens/TutorGallery";
import { getTutors } from "./services/tutors";
import { getUsers } from "./services/users";
import SignUp from "./screens/SignUp";
import ProfilePage from "./screens/ProfilePage";
import Details from "./screens/Details";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentTutor, setCurrentTutor] = useState(null);
  const [users, setUsers] = useState([]);
  const [tutors, setTutors] = useState([]);
  const [toggle, setToggle] = useState(true);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchTutors();
    fetchUsers();
    requestUserVerification();
    requestTutorVerification();
  }, [toggle]);

  const fetchTutors = async () => {
    const data = await getTutors();
    setTutors(data);
  };

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const requestUserVerification = async () => {
    const user = await verifyUser();
    setCurrentUser(user);
  };

  const requestTutorVerification = async () => {
    const tutor = await verifyTutor();
    setCurrentTutor(tutor);
  };

  const logout = async () => {
    await localStorage.clear();
    setToggle((prevState) => !prevState);
    history.push("/");
  };

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/Landing">
        <Landing
          setCurrentUser={setCurrentUser}
          setCurrentTutor={setCurrentTutor}
        />
      </Route>
      <Route exact path="/">
        <TutorGallery
          currentUser={currentUser}
          currentTutor={currentTutor}
          tutors={tutors}
          logout={logout}
        />
      </Route>
      <Route exact path="/sign-up">
        <SignUp
          setCurrentUser={setCurrentUser}
          setCurrentTutor={setCurrentTutor}
          setToggle={setToggle}
        />
      </Route>
      <Route exact path="/profile">
        <ProfilePage
          currentUser={currentUser}
          currentTutor={currentTutor}
          tutors={tutors}
          users={users}
          logout={logout}
          setToggle={setToggle}
        />
      </Route>
      <Route exact path="/details/:id">
        <Details
          currentUser={currentUser}
          currentTutor={currentTutor}
          tutors={tutors}
          users={users}
          logout={logout}
        />
      </Route>
    </div>
  );
}

export default App;
