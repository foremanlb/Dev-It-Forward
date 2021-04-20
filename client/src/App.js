import { useEffect, useState } from 'react';
import { verifyUser } from "./services/user.js.js";
import { Route } from "react-router-dom";
import { verifyTutor } from './services/tutors'
import { Navbar } from './components/Navbar/Navbar.jsx'

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
          
        </Route>
        <Route path="/sign-up">
          
        </Route>
        <Route path="/sign-in">
          
      </Route>      
    </div>
  );
}

export default App;
