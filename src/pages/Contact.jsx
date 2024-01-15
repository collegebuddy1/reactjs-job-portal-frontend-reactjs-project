import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header'

export default function Contact() {
  return (
    <div className="container-xxl bg-white p-0">
      <Header />
      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Contact
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            Contact TheEmployer – We'd Love to Hear From You!
          </h1>
          <p>
            Isn't it better to have real people to support you during your job
            search? We think so! Please contact us in whichever way you prefer,
            and someone from our staff will get back to you as soon as possible
            (within 1 business day!).
          </p>
          <div className="row g-4">
            <div className="col-12">
              <div className="row gy-4">
                <div className="col-md-4 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex align-items-center bg-light rounded p-4">
                    <div
                      className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <i className="fa fa-map-marker-alt text-primary"></i>
                    </div>
                    <span>Po box 123, Yaounde, Cameroon</span>
                  </div>
                </div>
                <div className="col-md-4 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex align-items-center bg-light rounded p-4">
                    <div
                      className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <i className="fa fa-envelope-open text-primary"></i>
                    </div>
                    <span>TheEmployer@gethired.com</span>
                  </div>
                </div>
                <div className="col-md-4 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex align-items-center bg-light rounded p-4">
                    <div
                      className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <i className="fa fa-phone-alt text-primary"></i>
                    </div>
                    <span>+237 69885 9688</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254777.89579889827!2d11.370363588694072!3d3.8306363743646177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a309a7977%3A0x7f54bad35e693c51!2zWWFvdW5kw6k!5e0!3m2!1sfr!2scm!4v1673365600019!5m2!1sfr!2scm"
                style={{ minHeight: "400px", border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
            <div className="col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.5s">
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: "150px" }}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i class="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}
