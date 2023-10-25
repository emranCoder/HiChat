import React from 'react'

export default function LoginComponent() {
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
                    <form className='login-form rounded-5 p-5 mt-5' >
                        <h3 className='form-title m-5 mt-0'>Login Form</h3>
                        <div className="mb-3">
                            <input
                                placeholder='Email, Mobile or Username'
                                type="email"
                                className="form-control rounded-pill"
                                id="email"
                                aria-describedby="emailHelp"
                            />
                            <span id="emailError" className="form-text d-none">
                                We'll never share your email with anyone else.
                            </span>
                        </div>
                        <div className="mb-3">
                            <input
                                placeholder='Password'
                                type="pwd"
                                className="form-control rounded-pill"
                                id="pwd"
                            />
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
                        <button type="submit" className="btn btn-primary rounded-pill">
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
