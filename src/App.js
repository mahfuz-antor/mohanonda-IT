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
import AddReview from './components/AddReview/AddReview';
import Testimonials from './components/Home/Testimonials/Testimonials';
import OrderDetails from './components/OrderDetails/OrderDetails';
import TotalOrders from './components/Dashboard/TotalOrders/TotalOrders';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';
import NotFound from './components/NotFound/NotFound';
import Blogs from './components/Home/Blogs/Blogs';

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
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
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
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/addReview">
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path="/testimonial">
            <Testimonials></Testimonials>
          </PrivateRoute>
          <PrivateRoute path="/orderDetails">
            <OrderDetails></OrderDetails>
          </PrivateRoute>
          <PrivateRoute path="/totalOrders">
            <TotalOrders></TotalOrders>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
