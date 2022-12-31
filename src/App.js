
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NewYear from "./pages/NewYear"
import Year from "./pages/year";
import Ten from "./pages/Ten";
//"2022-12-31T23:59:59+00:00"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Year />
        </Route>
        <Route exact path="/ten">
          <Ten />
        </Route>
        <Route exact path="/fin">
          <NewYear /> 
        </Route>

      </Switch>

    </Router>


  );
 

}

export default App;


