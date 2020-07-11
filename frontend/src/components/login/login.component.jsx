import React from "react";
import style from './login.module.css'
import img from '../../assets/images/avatar.png'

class LoginComponent extends React.Component {

    constructor() {
        super();

        this.state = {}
    }

    onSubmit = () => {
        this.props.history.push('/dashboard')
    }

    render() {
        return (
            <div className="container">

                <div className={style.main}>

                    <div className="col-md-12">

                        <div className={style.loginbox}>

                            <img src={img} className={style.avatar}/>

                                <h1>Login Here</h1>

                                <form>

                                    <p>Username</p>
                                    <input type="text" name="" placeholder="Enter Username"/>

                                    <p>Password</p>
                                    <input type="password" name="" placeholder="Enter Password"/>

                                    <input type="submit" name="" value="Login"/>

                                    <a href="#">Lost your password?</a><br/>
                                    <a href="#">Don't have an account?</a>
                                </form>

                        </div>

                    </div>

                </div>

            </div>
        )
    }

}


export default LoginComponent
