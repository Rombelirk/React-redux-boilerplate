import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from "./store/store";
import "../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss";
import Navbar from "./components/Navbar/Navbar";
import Hello from "./components/Hello/Hello";
import Decrement from "./containers/Decrement";
import Increment from "./containers/Increment";


console.log(Provider);
ReactDOM.render(
    <div>
        <Provider store={store}>
            <Router>
                <div>
                    <Navbar/>
                    <Route exact path="/" component={Hello}/>
                    <Route path="/increment" component={Increment}/>
                    <Route path="/decrement" component={Decrement}/>
                </div>
            </Router>
        </Provider>
    </div>
    , document.getElementById("root")
);