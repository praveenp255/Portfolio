import React from "react";
import ProjectBox from "./ProjectBox";
import EcommerceImage from "../images/Ecommerce.png";
import DeltaImage from "../images/Delta.png";
import ChatGptImage from "../images/ChatGpt.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div 
      className="project">
        {/* <ProjectBox projectPhoto={GymImage} projectName="Levels" /> */}
        <ProjectBox projectPhoto={EcommerceImage} projectName="ECommerceWebsite" />
        <ProjectBox projectPhoto={DeltaImage} projectName="VirtualAssistant" />
        <ProjectBox projectPhoto={ChatGptImage} projectName="PersonalChatGpt" />
      </div>
    </div>
  );
};

export default Projects;
