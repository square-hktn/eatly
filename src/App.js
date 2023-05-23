import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/dashboard.page';
import ProtectedRoute from './helpers/protectedRoute';
import Landing from './pages/landing/landing.page';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" element={<Landing/>}/>
        <Switch>
        <ProtectedRoute
          exact
          path="/dashboard"
          component={Dashboard}
        />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
