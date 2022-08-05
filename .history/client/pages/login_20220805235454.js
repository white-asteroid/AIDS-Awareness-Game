import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import SignupForm from "../component/forms/signup";
import Link from "next/link";
import Router from "next/router";
import { UserContext } from "../context";
// router = useRouter();
export default function Login() {
  const [em, setEm] = useState("");
  const [pw, setPw] = useState("");
  const [state , setState] = useContext(UserContext);

  if(state && state.token) Router.push("/");
  // console.log(em,pw);
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(em, pw);
    const data = await axios
      .post("http://localhost:8000/api/login", {
        em,
        pw,
      })
      .then((res) => {
        // router.push("/");
        //update context global wala
        console.log("resp ",res.data);
        setState({
          user: res.data.Luser,
          token: res.data.token,
        });
        console.log("State is ",state);
        //local stohttp://localhost:3000/loginrage m store karne ke liye
        // window.localStorage.setItem("auth",json.stringify(res.data));
        window.localStorage.setItem("auth", JSON.stringify(res.data));
        // console.log(res.data.token);
        // if(state && state.token) Router.push("/");
      })
      .catch((err) => {
        console.log("error in login post");
        // toast.error(err.response.data );
      });
      // console.log(data);
  }
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={handleSubmit}>
              {/* Email input */}
              <div className="form-outline mb-4">
                <input
                  value={em}
                  onChange={(e) => {
                    setEm(e.target.value);
                  }}
                  type="email"
                  id="em"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="em">
                  Email address
                </label>
              </div>
              {/* Password input */}
              <div className="form-outline mb-4">
                <input
                  value={pw}
                  onChange={(e) => {
                    setPw(e.target.value);
                  }}
                  type="password"
                  id="pw"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="pw">
                  Password
                </label>
              </div>
              <div className="d-flex justify-content-around align-items-center mb-4">
                {/* Checkbox */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="RemeberME"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="RemeberME">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
                <Link href="/signup">
                  <a>Not registered? Sign up</a>
                </Link>
              </div>
              {/* Submit button */}
              <div className="center">
                <button
                  disabled={!em || !pw}
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
