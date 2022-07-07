import { useState ,useContext } from "react";
// import "../public/css/signup.module.css"
import axios from "axios";
import React from "react";
import {toast} from "react-toastify";
import {Modal} from "antd";
import SignupForm from "../component/forms/signup";
import { UserContext } from "../context";
import Router from "next/router";

import Link from "next/link";
export default function Signup() {
  const [name, setName] = useState("");
  const [em, setEm] = useState("");
  const [pw, setPw] = useState("");
  const [ok,setOk] = useState(false);
  const [loading ,setL]=useState(false);
  const [state ] = useContext(UserContext);
  if(state && state.token) Router.push("/");
  async function handleSubmit(e) {
    e.preventDefault();
    setL(true);
    // console.log(name,em, pw);
   const data = await axios.post(`${process.env.NEXT_PUBLIC_API }/signup`, {
      name,
      em,
      pw,
    })
    .then((res)=> {
      setName("");
      setEm("");
      setPw("");
      setOk(res.data.ok);
      // setL(false);
    })
    .catch((err)=> toast.error(err.response.data));
    setL(false);
  }

  return (
    <>
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
                  <SignupForm 
                  handleSubmit={handleSubmit}
                  setName= {setName}
                  name= {name}
                  setEm = {setEm}
                  em={em}
                  setPw = {setPw}
                  pw={pw}
                  loading={loading}

                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     <div className="row">
      <div className="col">
        <Modal
          title="Congratulations"
          visible={ok}
          onCancel = {() => setOk(false)}
          footer={null}
          >
            <p>You have successfully registered</p>
            <Link href="/login" >
              <a className="btn btn-primary brn-small" >Login</a>
            </Link>
          </Modal>
      </div>
     </div>
    </>
  );
}
