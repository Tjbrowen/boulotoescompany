import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProject } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import "./Project.css";

const Project = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  const { data, isLoading, isError } = useQuery(["proj", id], () =>
    getProject(id)
  );

  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <PuffLoader />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <span>Error while fetching the project details</span>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth project-container">
        {/* image */}
        <img src={data?.image} alt="home image" />

        <div className="flexCenter project-details">
          {/* left */}
          <div className="flexColStart left">
            {/* head */}
            <div className="flexStart head">
              <span className="primaryText">{data?.title}</span>
            </div>

            {/* description */}

            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
