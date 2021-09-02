import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import {ConnectedRouter} from "connected-react-router";
import {Switch,Route} from 'react-router-dom';
import NotFoundPage from "./pages/NotFound";
import Blog from "./pages/Blog";
import {history} from './redux/configureStore'

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
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
        </ConnectedRouter>
    </Provider>
 ,
  document.getElementById('root')
);
