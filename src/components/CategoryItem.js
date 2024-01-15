import React from 'react'
import { Link } from 'react-router-dom';
import { categories } from '../data';

export default function CategoryItem({name, icon, vacant, id}) {
  return (
    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
      <Link className="cat-item rounded p-4" to={`/filterlistcat/${id}/${name}`}>
        {icon}
        <h6 className="mb-3">{name}</h6>
        <p className="mb-0">{vacant} Vacancy</p>
      </Link>
    </div>
  );
}
