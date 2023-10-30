import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { setCookie } from '../utility/cookie';

export default function SignUpComponent() {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = async () => {
        if (data && data.confPwd) delete data.confPwd;
        await fetch('http://localhost:5000/api/auth/createuser', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.user) {
                    let token = data.user;
                    setCookie("auth", token, 1);
                    window.location.reload();
                } else {
                    if (data.err) {
                        setError(data.err);
                    } else { setError(null); }
                }

            })
            .catch((err) => {
                console.log(err);
            });



    }
    console.log(error);
    return (
        <div className='container-fluid'>
            <div className="row m-auto">
                <div className="col-md-1 col-lg-1 col-hide">
                    <div className="logo-box sign-up-logo" >
                        <h3 className='logo-title '>HiChat</h3>
                    </div>
                </div>
                <div className="col-md-11 col-lg-11 ">
                    <form onSubmit={(e) => { e.preventDefault() }} className='login-form rounded-5 p-5  sign-up ' >
                        <h3 className='form-title mb-5 mt-0'>Welcome</h3>

                        <div className="mb-3 inline">
                            <input
                                placeholder='Put your First Name'
                                type="text"
                                className={(((error != null) && (error.fName)) && ("form-control rounded-pill border-danger")) || ("form-control rounded-pill border")}
                                id="fName"
                                aria-describedby="emailHelp"
                                name='fName'
                                onChange={handleInput}
                                value={(data && data.fName) || ""}
                            />
                            {(error != null && error.fName) && (<span id="emailError" className="form-text text-danger">
                                {error.fName.msg}
                            </span>)}

                        </div>
                        <div className="mb-3 inline">
                            <input
                                placeholder='Put your Last Name'
                                type="text"
                                className={(((error != null) && (error.lName)) && ("form-control rounded-pill border-danger")) || ("form-control rounded-pill border")}
                                id="lName"
                                aria-describedby="emailHelp"
                                name='lName'
                                onChange={handleInput}
                                value={(data && data.lName) || ""}
                            />
                            {(error != null && error.lName) && (<span id="emailError" className="form-text text-danger">
                                {error.lName.msg}
                            </span>)}

                        </div>
                        <div className="mb-3 me-0 inline">
                            <input
                                placeholder='Put your Last Name'
                                type="date"
                                className={(((error != null) && (error.dateOfBirth)) && ("form-control rounded-pill border-danger")) || ("form-control rounded-pill border")}
                                id="dateOfBirth"
                                aria-describedby="dateOfBirth"
                                name='dateOfBirth'
                                onChange={handleInput}
                                value={(data && data.dateOfBirth) || ""}
                            />
                            {(error != null && error.dateOfBirth) && (<span id="emailError" className="form-text text-danger">
                                {error.dateOfBirth.msg}
                            </span>)}

                        </div>
                        <div className="mb-3 ">
                            <input
                                placeholder='Put your Email'
                                type="email"
                                className={(((error != null) && (error.email)) && ("form-control rounded-pill border-danger")) || ("form-control rounded-pill border")}
                                id="email"
                                aria-describedby="emailHelp"
                                name='email'
                                onChange={handleInput}
                                value={(data && data.email) || ""}
                            />
                            {(error != null && error.email) && (<span id="emailError" className="form-text text-danger">
                                {error.email.msg}
                            </span>)}

                        </div>
                        <div className="mb-3 ">
                            <input
                                placeholder='Put your Mobile No'
                                type="tel"
                                className={(((error != null) && (error.mobile)) && ("form-control rounded-pill border-danger")) || ("form-control rounded-pill border")}
                                id="mobileNo"
                                aria-describedby="emailHelp"
                                name='mobile'
                                onChange={handleInput}
                                value={(data && data.mobile) || ""}
                            />
                            {(error != null && error.mobile) && (<span id="emailError" className="form-text text-danger">
                                {error.mobile.msg}
                            </span>)}

                        </div>
                        <div className="mb-3 ">
                            <input
                                placeholder='Password'
                                type="password"
                                name='pwd'
                                className={((error != null && error.pwd) && ("form-control rounded-pill border-danger")) || ("form-control rounded-pill ")}
                                id="pwd"
                                onChange={handleInput}
                                value={(data && data.pwd) || ""}
                            />
                            {(error != null && error.pwd) && (<span id="emailError" className="form-text text-danger">
                                {error.pwd.msg}
                            </span>)}
                        </div>
                        <div className="mb-3 ">
                            <input
                                placeholder='Confirm Password'
                                type="password"
                                name='confPwd'
                                className={(data && data.pwd && data.confPwd && !(data.pwd === data.confPwd) && "border-danger form-control rounded-pill") || ("form-control rounded-pill ")}
                                id="confPwd"
                                onChange={handleInput}
                                value={(data && data.confPwd) || ""}
                            />
                            {(data && data.pwd && data.confPwd && !(data.pwd === data.confPwd)) && (<span id="emailError" className="form-text text-danger">
                                Make sure the passwords match
                            </span>)}
                        </div>
                        <button onClick={handleSubmit} type="submit" className="btn btn-primary rounded-pill">
                            SIGN IN
                        </button>
                        <div className="m-3 ">
                            <Link to="/" className='forget-pwd'>Already Have An Account?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}
