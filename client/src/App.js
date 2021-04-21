import { useEffect, useState } from 'react';
import { verifyUser } from "./services/users.js";
import { Route } from "react-router-dom";
import { verifyTutor } from './services/tutors'
import Navbar from './components/Navbar/Navbar.js'
import Landing from './screens/Landing/index'

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentTutor, setCurrentTutor] = useState(null)

  useEffect(() => {
    verifiedUser();
    verifiedTutor()
  }, []);

  const verifiedUser = async () => {
    const user = await verifyUser();
    setCurrentUser(user)
  };

  const verifiedTutor = async () => {
    const tutor = await verifyTutor()
    setCurrentTutor(tutor)
  }

  return (
    <div className="App">
      <Navbar />
        <Route exact path="/">
          <Landing />
        </Route>      
    </div>
  );
}

export default App;
