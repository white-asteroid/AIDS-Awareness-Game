import { SyncOutlined } from '@ant-design/icons';

import Link from "next/link";
export default function SignupForm({
    handleSubmit,
    setName,
    name,
    setEm,
    em,
    setPw,
    pw,
    loading
}
){
    return(

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
                        disabled = {!em || !pw || !name}
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        {loading ? <SyncOutlined spin />:"Register"}
                      </button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <Link href="/login">
                      <a className="fw-bold text-body">
                        <u>Login here</u>
                      </a>
                      </Link>
                    </p>
                  </form>
    );
}