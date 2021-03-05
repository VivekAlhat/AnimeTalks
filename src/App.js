import React from "react";
import Spinner from "react-spinkit";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoading>
        <Spinner name="line-scale" fadeIn="none" />
      </AppLoading>
    );
  }

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            {!user ? <Login /> : <Dashboard displayName={user?.displayName} />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// Styled Components

const AppLoading = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
`;
