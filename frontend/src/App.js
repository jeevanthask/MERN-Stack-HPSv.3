import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import DashboardComponent from "./components/dashboard/dashboard.component";
import PatientlistComponent from "./components/patientlist/patientlist.component";
import UpdatepatientComponent from "./components/updatepatient/updatepatient.component";

class App extends React.Component{

    render() {
        return(
            <BrowserRouter>

                <Switch>
                    <Route path='/' exact component={DashboardComponent}/>
                    <Route path='/admin/patientlist' exact component={PatientlistComponent}/>
                    <Route path='/admin/updatepatient/:id' exact component={UpdatepatientComponent}/>
                    <Route path='/' render={() => <div>404</div>}/>
                </Switch>

            </BrowserRouter>
        )
    }

}

export default App
