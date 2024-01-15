import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate('/admin')
  }
  return (
    <div class="container-xxl bg-white p-0 login">
      <Header />
      <section className="mt-5">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2
                      className="text-center mb-5"
                      style={{ fontSize: "18px" }}
                    >
                      Login To Your Account
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          placeholder="Your Email"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          placeholder="Your Password"
                        />
                      </div>
                      <div className="d-flex justify-content-center mb-3">
                        <p className="text-bold">
                          <a href="#!" className="text-body">
                            <u>Forgot Password</u>
                          </a>
                        </p>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          onClick={handleClick}
                          className="btn btn-primary py-3 px-5 text-center"
                        >
                          Login
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Do not have an account?{" "}
                        <a href="/register" className="fw-bold text-body">
                          <u>Register here</u>
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
      <Footer />
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}
