import React from "react";
import "../project/project.css";
import aeroimage from "..//../assets/aero.png";


const projectbody = [
  {
    heading: "Nome do projeto",
    title:
      "Pellentesque nulla arcu, fermentum ultrices ipsum at, suscipit fermentum mauris. Suspendisse potenti. Aenean"
  },
  {
    heading: "Nome do projeto",
    title:
      "Pellentesque nulla arcu, fermentum ultrices ipsum at, suscipit fermentum mauris. Suspendisse potenti. Aenean",
  },
  {
    heading: "Nome do projeto",
    title:
      "Pellentesque nulla arcu, fermentum ultrices ipsum at, suscipit fermentum mauris. Suspendisse potenti. Aenean",
  },
  {
    heading: "Nome do projeto",
    title:
      "Pellentesque nulla atrcu, fermentum ultrices ipsum at, suscipit fermentum mauris. Suspendisse potenti. Aenean",
  },
  {
    heading: "Nome do projeto",
    title:
      "Pellentesque nulla arcu, fermentum ultrices ipsum at, suscipit fermentum mauris. Suspendisse potenti. Aenean",
  },
  {
    heading: "Nome do projeto",
    title:
      "Pellentesque nulla arcu, fermentum ultrices ipsum at, suscipit fermentum mauris. Suspendisse potenti. Aenean",
  },
];



function Project() {
  return (
    <div className="project_div">
      <div className="project_header">
        <h1>Projetos</h1>
      </div>
      <div className="project_div">
        <div className="project_list">
          {projectbody?.map((item) => (
            <div className="project_container">
            <div key={item?.id}>
                <div className="heading_div">{item.heading}</div>
                <div className="title_div">{item.title}</div>
              <div>
                <button className="project_btn">
                <p className="project_title">GitHub</p>
                </button>
              </div>
            </div>
            </div>
            
          ))}
        </div>
      </div>
      <img src={aeroimage} className="aero_image"/>
    </div>
  );
}

export default Project;
