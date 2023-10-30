import React, { useState } from 'react'
import { setCookie } from '../utility/cookie';
import { Link } from "react-router-dom";

export default function LoginComponent() {

    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const handleInput = (e) => {

        setData({ ...data, [e.target.name]: e.target.value })
    }
    const activeLogin = () => {
        const log = document.querySelector('.log');
        const formLog = document.querySelector('.form-log');
        log.classList.add('d-none');
        formLog.classList.remove('col-hide');
    }
    const handleSubmit = async () => {
        const res = await fetch('http://localhost:5000/api/login/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data),
        })
        const response = await res.json();
        if (res.status === 200) {
            const token = response.token;
            const id = response.id;
            setCookie("auth", token, 24);
            setCookie("ID", id, 24);
            window.location.reload();
        } else {
            if (response.err) {
                setError(response.err);
            } else {
                setError({
                    username: {
                        msg: "Username not allowed to be empty!",
                    },
                    pwd: { msg: "Password not allowed to be empty!" }
                });
            }
        }

    }
    return (
        <div className="container">
            <div className="row m-auto">
                <div className="col-md-6 col-lg-6 m-auto log">
                    <div className="logo-box p-5" >
                        <h3 className='logo-title'>HiChat</h3>
                        <p>Connecting Conversations, One Message at a Time.</p>
                        <button onClick={activeLogin} className="btn btn-primary rounded-pill btn-login d-none">
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="col-hide col-md-6 col-lg-6 m-auto form-log">
                    <form onSubmit={(e) => { e.preventDefault() }} className='login-form rounded-5 p-5' >
                        <h3 className='form-title mb-5 mt-0'>Login Form</h3>
                        <div className="mb-3">
                            <input
                                placeholder='Email, Mobile or Username'
                                type="text"
                                className={(((error != null) && (error.username)) && ("form-control rounded-pill border-danger")) || ("form-control rounded-pill border")}
                                id="username"
                                aria-describedby="emailHelp"
                                name='username'
                                onChange={handleInput}
                            />
                            {(error != null && error.username) && (<span id="emailError" className="form-text text-danger">
                                {error.username.msg}
                            </span>)}

                        </div>
                        <div className="mb-3">
                            <input
                                placeholder='Password'
                                type="password"
                                name='pwd'
                                className={((error != null && error.pwd) && ("form-control rounded-pill border-danger")) || ("form-control rounded-pill ")}
                                id="pwd"
                                onChange={handleInput}
                            />
                            {(error != null && error.pwd) && (<span id="emailError" className="form-text text-danger">
                                {error.pwd.msg}
                            </span>)}
                        </div>
                        <div className="mb-3">
                            <a href="#section" className='forget-pwd'>Forget Password?</a>
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="rmm"
                            />
                            <label className="form-check-label" htmlFor="exampleCheck1">
                                Remember Me
                            </label>
                        </div>
                        <button onClick={handleSubmit} type="submit" className="btn btn-primary rounded-pill">
                            SIGN IN
                        </button>
                        <div className="m-3 ">
                            <Link to="/signup" className='forget-pwd'>Create a new account</Link>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}
