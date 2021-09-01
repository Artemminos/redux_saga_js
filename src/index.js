import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import {Router} from "react-router";
import {Switch,Route} from 'react-router-dom';
import {createBrowserHistory} from "history";
import NotFoundPage from "./pages/NotFound";
import Blog from "./pages/Blog";


const history = createBrowserHistory()
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path={'/'}>
                    <App />
                </Route>
                <Route exact path={'/blog'}>
                    <Blog />
                </Route>
                <Route exact path={'/*'}>
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
