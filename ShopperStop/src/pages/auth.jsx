import { useState } from "react";
import './auth.css';

function Authentication() {
    const [mode, setMode] = useState("signup")
    return (
        <>
            <div className="authPage">
                <div className="auth_container_box">
                    <div className="auth_container">
                        <h1 className="page_title">{mode === "signup" ? "SignUp" : "Login"}</h1>
                    </div>
                    <form className="auth_form">
                        <div className="form_group">
                            <label className="form_label" htmlFor="email">Email</label>
                            <input type="email" className="form_input" id="email" />
                        </div>
                        <div className="form_group">
                            <label className="form_label" htmlFor="password">Password</label>
                            <input type="password" className="form_input" id="password" />
                        </div>

                        <button className="submitForm" type="submit">{mode === "signup" ? "SignUp" : "Login"}</button>

                        <div className="switchAuth">
                            {mode === "signup" ?
                                (
                                    <p>Already have an account? <span className="authLink" onClick={() => {
                                        setMode("login");
                                    }}>Login</span></p>
                                ) : (
                                    <p>Don't have an account? <span className="authLink" onClick={() => {
                                        setMode("signup");
                                    }}>SignUp</span></p>
                                )
                            }
                        </div>
                    </form>

                </div >
            </div >
        </>
    )
}

export default Authentication;