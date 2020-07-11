import React from "react";
import style from './login.module.css'

class LoginComponent extends React.Component {

    handleLoginClick = () => {
        this.props.history.push('/dashboard')
    }

    render() {
        return (
            <div>
                <body>
                <div className={style.container}>
                    <section id={style.content}>
                        <form action="">
                            <h1>Login Form</h1>
                            <div>
                                <input type="text" placeholder="Username" required="" id="username"/>
                            </div>
                            <div>
                                <input type="password" placeholder="Password" required="" id="password"/>
                            </div>
                            <div>
                                <input type="submit" value="Log in"/>
                                <a href="#">Lost your password?</a>
                                <a href="#">Register</a>
                            </div>
                        </form>
                    </section>

                </div>

                </body>
            </div>
        )
    }

}


export default LoginComponent
