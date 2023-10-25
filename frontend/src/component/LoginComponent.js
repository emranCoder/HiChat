import React, { useState } from 'react'
import { setCookie } from '../utility/cookie';

export default function LoginComponent() {

    const [error, setError] = useState(null);
    const [data, setData] = useState({
        username: null,
        pwd: null
    });
    const handleUserName = (e) => {

        setData({ ...data, username: e.target.value })
    }
    const handleUserPwd = (e) => {

        setData({ ...data, pwd: e.target.value })
    }

    const handleSubmit = async () => {
        let token;
        let id;
        await fetch('http://localhost:5000/api/login/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.err) {
                    setError(data);
                } else {
                    token = data.token;
                    id = data.id;
                    setCookie("auth", token, 1);
                    setCookie("ID", id, 1);
                    window.location.reload();
                }
            })
            .catch((err) => {
                console.error(err);
            });

    }

    return (
        <div className='container '>
            <div className="row">
                <div className="col-md-6 col-lg-6">
                    <div className="logo-box p-5" style={{ marginTop: "100px " }}>
                        <h3>HiChat</h3>
                        <p>Connecting Conversations, One Message at a Time.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <form onSubmit={(e) => { e.preventDefault() }} className='login-form rounded-5 p-5 mt-5' >
                        <h3 className='form-title m-5 mt-0'>Login Form</h3>
                        <div className="mb-3">
                            <input
                                placeholder='Email, Mobile or Username'
                                type="text"
                                className={(((error != null) && (error.err.username.msg)) && ("form-control rounded-pill border-danger")) || ("form-control rounded-pill border")}
                                id="username"
                                aria-describedby="emailHelp"
                                name='username'
                                onChange={handleUserName}
                            />
                            {(error != null && error) && (<span id="emailError" className="form-text text-danger">
                                {error.err.username.msg}
                            </span>)}

                        </div>
                        <div className="mb-3">
                            <input
                                placeholder='Password'
                                type="password"
                                name='pwd'
                                className={((error != null && error.err.pwd.msg) && ("form-control rounded-pill border-danger")) || ("form-control rounded-pill ")}
                                id="pwd"
                                onChange={handleUserPwd}
                            />
                            {(error != null && error.err.pwd.msg) && (<span id="emailError" className="form-text text-danger">
                                {error.err.pwd.msg}
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
                            <a href="#section" className='forget-pwd'>Create a new account</a>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}
