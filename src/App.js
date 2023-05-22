import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/dashboard.page';
import ProtectedRoute from './helpers/protectedRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <ProtectedRoute
          exact
          path="/"
          component={Dashboard}
        />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
