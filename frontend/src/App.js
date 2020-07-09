import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import DashboardComponent from "./components/dashboard/dashboard.component";

class App extends React.Component{

    render() {
        return(
            <BrowserRouter>

                <Switch>
                    <Route path='/' exact component={DashboardComponent}/>
                    <Route path='/' render={() => <div>404</div>}/>
                </Switch>

            </BrowserRouter>
        )
    }

}

export default App
