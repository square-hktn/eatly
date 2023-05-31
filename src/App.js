import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Hompage";
import Dashboard from "./pages/dashboard/dashboard.page";
import ProtectedRoute from "./helpers/protectedRoute";
import LoginPage from "./pages/core/login/Login";
import SignupPage from "./pages/core/signup/Signup";
import MerchantDashboard from "./pages/dashboard/dashboard.page.merchant";
import CustomerProfile from "./pages/profile/profile.page.customer";
import MerchantProductList from "./pages/merchant-product-list/merchant.product.list";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/signin" component={LoginPage} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <ProtectedRoute
            exact
            path="/merchant-dashboard"
            component={MerchantDashboard}
          />

          <ProtectedRoute exact path="/signin" component={LoginPage} />

          <ProtectedRoute exact path="/signup" component={SignupPage} />
            <ProtectedRoute exact path="/merchant-product-list" component={MerchantProductList} />
          <ProtectedRoute
            exact
            path="/customer-profile"
            component={CustomerProfile}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
