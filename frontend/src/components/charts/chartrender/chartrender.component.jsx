import React from "react";
import {Tabs,Tab} from "react-bootstrap";

class ChartrenderComponent extends React.Component{

    render() {
        return(
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home">
                    <div>
                        jncdncnd
                    </div>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <div>
                        kdcdncd
                    </div>
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    <div>
                        ndcndnc
                    </div>
                </Tab>
            </Tabs>
        )
    }

}



export default ChartrenderComponent
