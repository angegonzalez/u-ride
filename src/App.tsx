import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { BrowserRouter as Router, Route, Switch , Redirect} from "react-router-dom";
import LoginPage from './components/LoginPage';
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

var firebaseConfig = {
  apiKey: "AIzaSyBUKo-7_RNCanGw1_EtGc8bejX5Hk2-Gag",
  authDomain: "angapp-6e8f8.firebaseapp.com",
  databaseURL: "https://angapp-6e8f8.firebaseio.com",
  projectId: "angapp-6e8f8",
  storageBucket: "angapp-6e8f8.appspot.com",
  messagingSenderId: "626239018121",
  appId: "1:626239018121:web:932937591683f6bd21e258"
};
firebase.initializeApp(firebaseConfig);
export var db = firebase.firestore();

const App: React.FC = () => {
  return (
    <Router>
          <NavBar/>
          <Switch>
              <Redirect exact= {true} path= {"/"} to= {"/login"}/>
              <Route exact= {true} path={"/login"} component={LoginPage}/>
          </Switch>
    </Router> 


  );
}

export default App;
