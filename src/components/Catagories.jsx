import React from "react";
import CategoryItem from "./CategoryItem";
import { categories } from "../data";
export default function Catagories() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
          Explore By Category
        </h1>
        <div className="row g-4">
          {categories.map((item, key) => (
            <CategoryItem
              name={item.name}
              icon={item.icon}
              vacant={item.vacant}
              id={item.id}
            />
          ))}
        </div>
      </div>
     
    </div>
  );
}
