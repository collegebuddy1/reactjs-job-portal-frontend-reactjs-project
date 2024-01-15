import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListItem from "../components/ListItem";
import "./list.css";
import { jobs } from "../data";
import { categories } from "../data";

export default function List() {
  const [job, setJob] = useState([]);
  const [userjob, setUserJob] = useState([]);

  useEffect(() => {
    setJob(jobs);
    setUserJob(jobs);
  }, []);
  const [nature, setNature] = useState("");
  const [cat, setCat] = useState(0);
  const [country, setCountry] = useState("");
  const jobCount = job.length;
  const [filter, setFilter] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (filter === false) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };

  const handleSearch = () => {
    
    const newJobs = userjob
      .filter((x) => x.category === (cat === "" ? x.category : Number(cat)))
      .filter((y) => y.nature === (nature === "" ? y.nature :String( nature)))
      .filter((z) => z.country === (country === "" ? z.country : String(country)));
    setJob(newJobs);
  };

  return (
    <div className="container-xxl bg-white p-0">
      <Header />
      <div className="d-md-flex align-items-md-center">
        <div className="h3 py-3 px-4">Job Listing</div>
        <div className="ml-auto d-flex align-items-center views">
          <span className="btn">
            {" "}
            <span className="fas fa-list-ul px-3"></span>
            <span className="px-md-2 ">List view</span>{" "}
          </span>{" "}
          <span className="green-label px-md-2 px-1">{jobCount}</span>{" "}
          <span className="text-muted">Jobs</span>{" "}
        </div>
      </div>

      <div className="filter-container">
        <div className="filter-item">
          <div className="filters px-4">
            {" "}
            <button
              className="btn btn-success"
              type="button"
              onClick={handleClick}
            >
              Filters<span className="px-1 fas fa-filter"></span>
            </button>{" "}
          </div>
          {filter === true ? (
            <div>
              <div className="pt-3 px-4">
                <div className="col-md-4">
                  <select
                    className="form-select border-1"
                    value={cat}
                    onChange={(e) => setCat(e.target.value)}
                  >
                    <option value="">--Select Category</option>
                    {categories.map((item) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="py-3 px-4">
                <div className="col-md-4">
                  <select
                    className="form-select border-1"
                    value={nature}
                    onChange={(e) => setNature(e.target.value)}
                  >
                    <option value="">--Select Nature</option>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                  </select>
                </div>
              </div>
              <div className="py-1 px-4">
                <div className="col-md-4">
                  <select
                    className="form-select border-1"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="">--Select Location</option>
                    {jobs.map((value) => (
                      <option value={value.country}>{value.country}</option>
                    ))}
                  </select>
                </div>
                <button
                  className="btn btn-primary px-3 text-center mt-3"
                  onClick={() => handleSearch()}
                >
                  Search
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="list-job">
          <div className="container py-3 bg-white">
            {job && job.length > 0
              ? job.map((value) => (
                  <ListItem
                    id={value.id}
                    title={value.title}
                    location={value.location}
                    salary={value.salary}
                    nature={value.nature}
                    dataline={value.dateline}
                  />
                ))
              : "No Job Found!"}
          </div>
        </div>
      </div>
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
      <Footer />
    </div>
  );
}
