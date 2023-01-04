import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import React, { useState } from "react"
import ColorList from './ColorList';
import ColorPage from './ColorPage';
import NewColorForm from './NewColorForm';

function App() {
  const [colors, setColor] = useState(["red", "blue", "green"])

  return (
    <div>
      <h1>All my favorite colors:</h1> 
      <Switch>
        <Route exact path="/colors">
          <ColorList initialColors={colors} />
        </Route>
        <Route exact path="/colors/:color">
          <ColorPage colors={colors} />
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </div>
  );
}

export default App;
