import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom';
import { jobs } from '../data';
import ListItem from '../components/ListItem';
export default function FilteListCat() {
      
      const [job, setJob] = useState(jobs);
      const params = useParams();
      const {catId, name} = params;
      
  return (
    <div className="container-xxl bg-white p-0">
      <Header />
      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Job List
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
                Job List
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <h1 className="display-3 text-center mb-3 animated slideInDown">
        {String(name)}
      </h1>

      {job
        .filter((item) => item.category === Number(catId))
        .map((value, key) => (
          <ListItem
            id={value.id}
            title={value.title}
            location={value.location}
            salary={value.salary}
            nature={value.nature}
            dataline={value.dateline}
          />
        ))}

      <Footer />
      <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i class="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}
