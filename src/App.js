import { BrowserRouter as Router, Switch /*Route*/ } from "react-router-dom";
import Homepage from "./pages/homepage/Hompage";
import Dashboard from "./pages/dashboard/dashboard.page";
import ProtectedRoute from "./helpers/protectedRoute";
import LoginPage from "./pages/core/login/Login";
import SignupPage from "./pages/core/signup/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
         <ProtectedRoute exact path="/" component={Homepage} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />

          <ProtectedRoute exact path="/signin" component={LoginPage} />

          <ProtectedRoute exact path="/signup" component={SignupPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
