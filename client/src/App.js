import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { verifyUser } from "./services/user.js";
import { Switch, Route } from "react-router-dom";

function App() {
   const [currentUser, setCurrentUser] = useState(null);

  // const logOut = async () => {
  //   await localStorage.clear();
  //   setCurrentUser(null);
    
  // };
  // useEffect(() => {
  //   requestVerification();
  // }, []);
  // const requestVerification = async () => {
  //   const user = await verifyUser();
  //   setCurrentUser(user)
  // };

  return (
    <div className="App">
      <switch>
        <Route exact path="/">
          
        </Route>
        <Route path="/sign-up">
          
        </Route>
        <Route path="/sign-in">
          
      </Route>


      </switch>
      
    </div>
  );
}

export default App;
