import { useState } from "react";
import axios from "axios";

export default function Login() {
    const [em, setEm] = useState("");
    const [pw, setPw] = useState("");
    // console.log(em,pw);
    function handleSubmit(e) {
        e.preventDefault();
        console.log(em, pw);
        axios
            .post("http://localhost:3000/api/login",
                {
                    em,
                    pw
                }
            )
    }

    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form onSubmit={handleSubmit}>
                            {/* Email input */}
                            <div className="form-outline mb-4">
                                <input value={em} onChange={(e) => { setEm(e.target.value) }} type="email" id="em" className="form-control form-control-lg" />
                                <label className="form-label" htmlFor="em">Email address</label>
                            </div>
                            {/* Password input */}
                            <div className="form-outline mb-4">
                                <input value={pw} onChange={(e) => { setPw(e.target.value) }} type="password" id="pw" className="form-control form-control-lg" />
                                <label className="form-label" htmlFor="pw">Password</label>
                            </div>
                            <div className="d-flex justify-content-around align-items-center mb-4">
                                {/* Checkbox */}
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" defaultChecked />
                                    <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                                </div>
                                <a href="#!">Forgot password?</a>
                            </div>
                            {/* Submit button */}
                            <div className="center">
                                <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
                            </div>
                            <div className="divider d-flex align-items-center my-4 center">
                                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                            </div>
                            <div className="center">
                                <a className="btn btn-primary btn-lg btn-block mb-2 " style={{ backgroundColor: '#3b5998' }} href="#!" role="button">
                                    <i className="fab fa-facebook-f me-2" />Continue with Facebook
                                </a>
                            </div>
                            <div className="center">
                                <a className="btn btn-primary btn-lg btn-block" style={{ backgroundColor: '#55acee' }} href="#!" role="button">
                                    <i className="fab fa-twitter me-2" />Continue with Twitter</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );

}