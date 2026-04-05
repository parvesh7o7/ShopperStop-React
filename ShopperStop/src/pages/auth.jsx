import { useState } from "react";
import './auth.css';
import { useForm } from 'react-hook-form'
function Authentication() {
    const [mode, setMode] = useState("signup")
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function onSubmit() {
        // alert("User SignedUp");
    }

    return (
        <>
            <div className="authPage">
                <div className="auth_container_box">
                    <div className="auth_container">
                        <h1 className="page_title">{mode === "signup" ? "SignUp" : "Login"}</h1>
                    </div>
                    <form className="auth_form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form_group">
                            <label className="form_label" htmlFor="email">Email</label>
                            <input type="email" className="form_input" id="email" {...register("email", { required: "Email is required" })} />
                            {errors.email && (<span className="form_error">{errors.email.message}</span>)}
                        </div>
                        <div className="form_group">
                            <label className="form_label" htmlFor="password">Password</label>
                            <input type="password" className="form_input" id="password" {...register("password", {
                                required: "password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password should be minimum of 6 length",
                                },
                                maxLength: {
                                    value: 12,
                                    message: "Password should be maximum of 12 length",
                                }

                            })} />
                            {errors.password && (<span className="form_error">{errors.password.message}</span>)}

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