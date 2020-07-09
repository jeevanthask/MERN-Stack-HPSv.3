import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import DashboardComponent from "./components/dashboard/dashboard.component";
import PatientlistComponent from "./components/patientlist/patientlist.component";

class App extends React.Component{

    render() {
        return(
            <BrowserRouter>

                <Switch>
                    <Route path='/' exact component={DashboardComponent}/>
                    <Route path='/admin/patientlist' exact component={PatientlistComponent}/>
                    <Route path='/' render={() => <div>404</div>}/>
                </Switch>

            </BrowserRouter>
        )
    }

}

export default App
