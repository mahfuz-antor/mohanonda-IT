import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import ViewOrder from './components/ViewOrder/ViewOrder';
import AddService from './components/AddService/AddService';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h5>Email: {loggedInUser.email}</h5>
    <Router>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <PrivateRoute path="/dashboard">
        <Dashboard></Dashboard>
      </PrivateRoute>
      <PrivateRoute path="/viewOrder/:id">
        <ViewOrder></ViewOrder>
      </PrivateRoute>
      <Route path="/addService">
        <AddService></AddService>
      </Route>
    </Switch>
  </Router>
  </UserContext.Provider>
  );
}

export default App;
