import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import Create from './views/Create';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path='/new'>
          <Create />
        </Route>
        <Route exact path="/:id">
          <Detail />
        </Route>
        <Route exact path="/edit/:id">
          <Update />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;