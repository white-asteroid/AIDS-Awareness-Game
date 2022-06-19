import { useState } from "react";
import "../public/css/signup.module.css"
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [em, setEm] = useState("");
  const [pw, setPw] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name,em, pw);
    axios.post("http://localhost:8000/api/signup", {
      name,
      em,
      pw,
    });
  }

  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage:
          'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")',
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: 15 }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input
                        value={name} 
                        onChange={(e)=>{setName(e.target.value)}} 
                        type="text"
                        id="name"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="name">
                        Your Name
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        value={em} onChange={(e)=>{setEm(e.target.value)}} 
                        type="email"
                        id="email"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="email">
                        Your Email
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        value={pw} onChange={(e)=>{setPw(e.target.value)}} 
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example4cg">
                        Password
                      </label>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Register
                      </button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <a href className="fw-bold text-body">
                        <u>Login here</u>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
