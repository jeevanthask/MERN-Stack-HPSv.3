import React from "react";

class LoginComponent extends React.Component{

    handleLoginClick = () => {
        this.props.history.push('/dashboard')
    }

    render() {
        return(
            <div>
                <button className="btn btn-primary" onClick={this.handleLoginClick}>
                    login
                </button>
            </div>
        )
    }
}

export default LoginComponent
