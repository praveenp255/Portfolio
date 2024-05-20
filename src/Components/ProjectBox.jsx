import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    ECommerceWebsiteDesc:
      "Dynamic e-commerce platform offering a seamless shopping experience with intuitive navigation, diverse product selection, and efficient checkout. Designed for modern retail, it boosts customer engagement and drives sales effectively.",
    ECommerceWebsiteGithub: "https://github.com/praveenp255/ChatGPT",
    ECommerceWebsiteWebsite: "https://new-ecommerce-delta.vercel.app/",

    VirtualAssistantDesc:
      "Developed a versatile AI-driven virtual assistant, DELTA, that offers natural conversations, task management, multilingual support, and customizable responses, enhancing user productivity and engagement.",
    VirtualAssistantGithub: "https://github.com/praveenp255/ChatBot-Assistance",
    VirtualAssistantWebsite: "https://chat-bot-assistant-beige.vercel.app/",

    PersonalChatGptDesc:
      "Explore our AI-powered chatbot platform, revolutionizing customer interactions with advanced natural language processing, personalized responses, and seamless integration, boosting efficiency and enhancing user experience. Discover the future of intelligent communication.",
    PersonalChatGptGithub: "https://github.com/praveenp255/ChatGPT",
    PersonalChatGptWebsite: "https://a-ichatgpt.vercel.app/",
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;
