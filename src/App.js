import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import Main from './views/ViewAll';
import Detail from './views/Detail';
import Update from './views/Update';
import Create from './views/Create';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <Main />
        </Route>
        <Route exact path='/recipe/new'>
          <Create />
        </Route>
        <Route exact path="/recipe/:id">
          <Detail />
        </Route>
        <Route exact path="/recipe/edit/:id">
          <Update />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;