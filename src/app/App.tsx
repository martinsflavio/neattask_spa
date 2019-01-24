import * as React from 'react';
import { Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Routes from "./routes";

const App: React.FunctionComponent<{}> = () => {
  return (
    <React.Fragment>
      <CssBaseline/>
      <Switch>
        {
          Routes.map((prop, key) => {
            return (
              <Route
                key={key}
                {...prop} />
            );
          })
        }
      </Switch>
    </React.Fragment>
  );
};

export default App;
