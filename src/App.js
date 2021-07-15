import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Offers from './pages/Offers';
import Subscribe from './pages/Subscribe';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Offers}/>
          <Route path="/subscribe"  component={Subscribe}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
