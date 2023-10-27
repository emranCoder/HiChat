import React, { useState } from 'react'

export default function SignUpComponent() {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });

    }
    console.log(data);

    const handleSubmit = () => {
        console.log("Click... Create User");

    }

    return (
        <div>
            <div className='container'>
                <div className="row m-auto">
                    <div className="col-md-6 col-lg-6 m-auto">
                        <div className="logo-box p-5" >
                            <h3 className='logo-title'>HiChat</h3>
                            <p>Connecting Conversations, One Message at a Time.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 m-auto">
                        <form onSubmit={(e) => { e.preventDefault() }} className='login-form rounded-5 p-5  sign-up' >
                            <h3 className='form-title mb-5 mt-0'>Login Form</h3>
                            <div className="mb-3">
                                <input
                                    placeholder='Email, Mobile or Username'
                                    type="text"
                                    className={(((error != null) && (error.err.username.msg)) && ("form-control rounded-pill border-danger")) || ("form-control rounded-pill border")}
                                    id="username"
                                    aria-describedby="emailHelp"
                                    name='username'
                                    onChange={handleInput}
                                />
                                {/* {(error != null && error) && (<span id="emailError" className="form-text text-danger">
                                    {error.err.username.msg}
                                </span>)} */}

                            </div>
                            <div className="mb-3">
                                <input
                                    placeholder='Type your First Name'
                                    type="text"
                                    className={(((error != null) && (error.err.username.msg)) && ("form-control rounded-pill border-danger")) || ("form-control rounded-pill border")}
                                    id="fName"
                                    aria-describedby="emailHelp"
                                    name='fName'
                                    onChange={handleInput}
                                />
                                {/* {(error != null && error) && (<span id="emailError" className="form-text text-danger">
                                    {error.err.username.msg}
                                </span>)} */}

                            </div>
                            <div className="mb-3">
                                <input
                                    placeholder='Type your First Last Name'
                                    type="text"
                                    className={(((error != null) && (error.err.username.msg)) && ("form-control rounded-pill border-danger")) || ("form-control rounded-pill border")}
                                    id="lName"
                                    aria-describedby="emailHelp"
                                    name='lName'
                                    onChange={handleInput}
                                />
                                {/* {(error != null && error) && (<span id="emailError" className="form-text text-danger">
                                    {error.err.username.msg}
                                </span>)} */}

                            </div>
                            <div className="mb-3">
                                <input
                                    placeholder='Put your First Email'
                                    type="email"
                                    className={(((error != null) && (error.err.username.msg)) && ("form-control rounded-pill border-danger")) || ("form-control rounded-pill border")}
                                    id="email"
                                    aria-describedby="emailHelp"
                                    name='email'
                                    onChange={handleInput}
                                />
                                {/* {(error != null && error) && (<span id="emailError" className="form-text text-danger">
                                    {error.err.username.msg}
                                </span>)} */}

                            </div>
                            <div className="mb-3">
                                <input
                                    placeholder='Put your First Mobile No'
                                    type="tel"
                                    className={(((error != null) && (error.err.username.msg)) && ("form-control rounded-pill border-danger")) || ("form-control rounded-pill border")}
                                    id="mobileNo"
                                    aria-describedby="emailHelp"
                                    name='mobileNo'
                                    onChange={handleInput}
                                />
                                {/* {(error != null && error) && (<span id="emailError" className="form-text text-danger">
                                    {error.err.username.msg}
                                </span>)} */}

                            </div>
                            <div className="mb-3">
                                <input
                                    placeholder='Password'
                                    type="password"
                                    name='pwd'
                                    className={((error != null && error.err.pwd.msg) && ("form-control rounded-pill border-danger")) || ("form-control rounded-pill ")}
                                    id="pwd"
                                    onChange={handleInput}
                                />
                                {/* {(error != null && error.err.pwd.msg) && (<span id="emailError" className="form-text text-danger">
                                    {error.err.pwd.msg}
                                </span>)} */}
                            </div>
                            <div className="mb-3">
                                <input
                                    placeholder='Confirm Password'
                                    type="password"
                                    name='confPwd'
                                    className={((error != null && error.err.pwd.msg) && ("form-control rounded-pill border-danger")) || ("form-control rounded-pill ")}
                                    id="confPwd"
                                    onChange={handleInput}
                                />
                                {/* {(error != null && error.err.pwd.msg) && (<span id="emailError" className="form-text text-danger">
                                    {error.err.pwd.msg}
                                </span>)} */}
                            </div>
                            <div className="mb-3">
                                <a href="#section" className='forget-pwd'>Forget Password?</a>
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
        </div>
    )
}
