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
            <div className='container-fluid'>
                <div className="row m-auto">
                    <div className="col-md-1 col-lg-1 ">
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
                            <div className="mb-3 me-0 inline">
                                <input
                                    placeholder='Put your Last Name'
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
                            <div className="mb-3 ">
                                <input
                                    placeholder='Put your Email'
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
                            <div className="mb-3 ">
                                <input
                                    placeholder='Put your Mobile No'
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
                            <div className="mb-3 ">
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
                            <div className="mb-3 ">
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
                            <button onClick={handleSubmit} type="submit" className="btn btn-primary rounded-pill">
                                SIGN IN
                            </button>
                            <div className="m-3 ">
                                <a href="#section" className='forget-pwd'>Already Have An Account?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    )
}
