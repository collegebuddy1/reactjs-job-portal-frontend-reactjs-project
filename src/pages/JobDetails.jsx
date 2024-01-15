import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import com_logo_4 from "../img/com-logo-4.jpg";
import { jobs } from '../data';
export default function JobDetails() {
    const params = useParams();
    const {id} = params;
  return (
    <div className="container-xxl bg-white p-0">
      <Header />
      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Job Detail
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Job Detail
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          {jobs
            .filter((item) => item.id === Number(id))
            .map((value, key) => (
              <div className="row gy-5 gx-4">
                <div className="col-lg-8">
                  <div className="d-flex align-items-center mb-5">
                    <img
                      className="flex-shrink-0 img-fluid border rounded"
                      src={com_logo_4}
                      alt=""
                      style={{ width: "80px", height: "80px" }}
                    />
                    <div className="text-start ps-4">
                      <h3 className="mb-3">{value.title}</h3>
                      <span className="text-truncate me-3">
                        <i className="fa fa-map-marker-alt text-primary me-2"></i>
                        {value.location}
                      </span>
                      <span className="text-truncate me-3">
                        <i className="far fa-clock text-primary me-2"></i>
                        {value.nature}
                      </span>
                      <span className="text-truncate me-0">
                        <i className="far fa-money-bill-alt text-primary me-2"></i>
                        {value.salary}
                      </span>
                    </div>
                  </div>

                  <div className="mb-5">
                    <h4 className="mb-3">Job description</h4>
                    <p>{value.description}</p>
                    <h4 className="mb-3">Responsibility</h4>
                    <p>{value.position}</p>

                    <h4 className="mb-3">Qualifications</h4>
                    <p>{value.qualification}</p>
                  </div>

                  <div className="">
                    <h4 className="mb-4">Apply For The Job</h4>
                    <form>
                      <div className="row g-3">
                        <div className="col-12 col-sm-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="col-12 col-sm-6">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email"
                          />
                        </div>
                        <div className="col-12 col-sm-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Portfolio Website"
                          />
                        </div>
                        <div className="col-12 col-sm-6">
                          <input
                            type="file"
                            className="form-control bg-white"
                          />
                        </div>
                        <div className="col-12">
                          <textarea
                            className="form-control"
                            rows="5"
                            placeholder="Coverletter"
                          ></textarea>
                        </div>
                        <div className="col-12">
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                          >
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div
                    className="bg-light rounded p-5 mb-4 wow slideInUp"
                    data-wow-delay="0.1s"
                  >
                    <h4 className="mb-4">Job Summary</h4>
                    <p>
                      <i className="fa fa-angle-right text-primary me-2"></i>
                      Published On: {value.publish}
                    </p>
                    <p>
                      <i className="fa fa-angle-right text-primary me-2"></i>
                      Vacancy: {value.vacant} Position
                    </p>
                    <p>
                      <i className="fa fa-angle-right text-primary me-2"></i>Job
                      Nature: {value.nature}
                    </p>
                    <p>
                      <i className="fa fa-angle-right text-primary me-2"></i>
                      Salary: {value.salary}
                    </p>
                    <p>
                      <i className="fa fa-angle-right text-primary me-2"></i>
                      Location: {value.location}
                    </p>
                    <p>
                      <i className="fa fa-angle-right text-primary me-2"></i>
                      Country: {value.country}
                    </p>
                    <p className="m-0">
                      <i className="fa fa-angle-right text-primary me-2"></i>
                      Date Line: {value.dateline}
                    </p>
                  </div>
                  <div
                    className="bg-light rounded p-5 wow slideInUp"
                    data-wow-delay="0.1s"
                  >
                    <h4 className="mb-4">Company Detail</h4>
                    <p className="m-0">{value.companyInfo}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
      <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i class="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}
