import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Projects.css";
import { PuffLoader } from "react-spinners";
import useProjects from "../../components/hooks/useProjects";
import ProjectsCard from "../../components/ProjectsCard/ProjectsCard";

const Projects = () => {
  const { data, isLoading, isError } = useProjects();

  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius="1"
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth projects-container">
        <SearchBar />
        <div className="paddings flexCenter projects">
          {data.map((card, i) => (
            <ProjectsCard card={card} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;