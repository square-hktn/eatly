import { BrowserRouter as Router, Switch /*Route*/ } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard.page";
import ProtectedRoute from "./helpers/protectedRoute";
import LoginPage from "./pages/core/login/Login";
import SignupPage from "./pages/core/signup/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <ProtectedRoute exact path="/" component={Dashboard} />
        </Switch>
        <Switch>
          <ProtectedRoute exact path="/login" component={LoginPage} />
        </Switch>
        <Switch>
          <ProtectedRoute exact path="/signup" component={SignupPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
