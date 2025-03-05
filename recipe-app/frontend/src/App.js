import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SignIn from "./Signin";  // Assuming you have SignIn component
import SignUp from "./SignUp";  // Assuming you have SignUp component
import Home from "./Home";      // Assuming Home is your home page component

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/sign-in">Sign In</Link>
          <Link to="/sign-up">Sign Up</Link>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;