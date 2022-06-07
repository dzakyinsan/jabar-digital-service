import { useState } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import FormContext from "./context";
import Home from "./pages/Home";
import Preview from "./pages/Preview";
import Background from './assets/bandung2.jpg';

function App() {
  const [form, setForm] = useState({});

  return (
    <div className="App" style={{backgroundImage:`url(${Background})`}}>
      <FormContext.Provider value={{ form, setForm }}>
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/preview"} component={Preview} />
          </Switch>
        </BrowserRouter>
      </FormContext.Provider>
    </div>
  );
}

export default App;
