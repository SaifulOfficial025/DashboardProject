import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import Datashow from "./components/Datashow";
import Datashow2 from "./components/Datashow2";
import Navbar from "./components/DashboardComponents/Navbar";
import ImagePage from "./components/ImagePage";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/DashboardComponents/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import ChangePassword from "./components/Changepassword";
import ResetPassword from "./components/Resetpassword";
import Signup from "./components/Signup";

function AppContent() {
  const { user } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (user) {
      history.push('/dashboard');
    }
  }, [user, history]);

  return (
    <div className="">
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/change-password" component={ChangePassword} />
        <Route path="/reset-password" component={ResetPassword} />
        <PrivateRoute path="/datashow" component={Datashow} />
        <PrivateRoute path="/datashow2" component={Datashow2} />
        <PrivateRoute path="/image" component={ImagePage} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
