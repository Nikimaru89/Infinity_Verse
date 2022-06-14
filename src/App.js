import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/*" component={() => <div style={{ padding: 30 }}><h2> Page Not Found </h2></div>} />
      </Switch>
    </Router>
  );
}

export default App;