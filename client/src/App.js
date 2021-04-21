import { useEffect, useState } from 'react';
import { verifyUser } from "./services/users.js";
import { Route } from "react-router-dom";
// import { verifyTutor } from './services/tutors'
import Navbar from './components/Navbar/Navbar.js'
import Landing from './screens/Landing/index'
import TutorGallery from './screens/tutorGallery'
import { getTutors } from './services/tutors'
import {getUsers} from './services/users'

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentTutor, setCurrentTutor] = useState(null)
  const [users, setUsers] = useState([])
  const [tutors, setTutors] = useState([])

  useEffect(() => {
    fetchTutors()
    fetchUsers()
    requestUserVerification()
  }, [])

  const fetchTutors = async () => {
    const data = await getTutors()
    setTutors(data)
  }

  const fetchUsers = async () => {
    const data = await getUsers()
    setUsers(data)
  }

  const requestUserVerification = async () => {
    const user = await verifyUser();
    setCurrentUser(user)
  }
  
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/Landing">
        <Landing  setCurrentUser={setCurrentUser} setCurrentTutor={setCurrentTutor}/>
      </Route>
      <Route exact path='/'>
        <TutorGallery currentUser={currentUser} currentTutor={currentTutor} tutors={tutors}/>
      </Route>
    </div>
  );
}

export default App;