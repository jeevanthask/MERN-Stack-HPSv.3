import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import DashboardComponent from "./components/dashboard/dashboard.component";
import PatientlistComponent from "./components/patientlist/patientlist.component";
import UpdatepatientComponent from "./components/updatepatient/updatepatient.component";
import UpdatedoctorComponent from "./components/updatedoctor/updatedoctor.component";
import SymptomlistComponent from "./components/symptomslist/symptomlist.component";
import UpdatesymptomComponent from "./components/updatesymptom/updatesymptom.component";
import DoctorlistComponent from "./components/doctorlist/doctorlist.component";
import SearchpatientComponent from "./components/searchpatient/searchpatient.component";
import SearchdoctorComponent from "./components/searchdoctor/searchdoctor.component";
import SearchsymptomComponent from "./components/searchsymptom/searchsymptom.component";

class App extends React.Component{

    render() {
        return(
            <BrowserRouter>

                <Switch>
                    <Route path='/' exact component={DashboardComponent}/>
                    <Route path='/admin/patientlist' exact component={PatientlistComponent}/>
                    <Route path='/admin/doctorlist' exact component={DoctorlistComponent}/>
                    <Route path='/admin/symptomlist' exact component={SymptomlistComponent}/>
                    <Route path='/admin/updatepatient/:id' exact component={UpdatepatientComponent}/>
                    <Route path='/admin/updatedoctor/:id' exact component={UpdatedoctorComponent}/>
                    <Route path='/admin/updatesymptom/:id' exact component={UpdatesymptomComponent}/>
                    <Route path='/admin/searchpatient' exact component={SearchpatientComponent}/>
                    <Route path='/admin/searchdoctor' exact component={SearchdoctorComponent}/>
                    <Route path='/admin/searchsymptom' exact component={SearchsymptomComponent}/>
                    <Route path='/' render={() => <div>404</div>}/>
                </Switch>

            </BrowserRouter>
        )
    }

}

export default App
