import React from "react";
import { FaFileDownload } from "react-icons/fa";
import MyPhoto from "../images/photo.jpg";

const About = () => {
  return (
    <div className="AboutPage">
      <div className="AboutText">
        <h1 className="AboutTextHeading">
          Get to <b>know</b> me!
        </h1>
        <p>
          Hi, my name is <b>Praveen Patel</b> I'm a <b>MERN Stack Developer</b>
          B.Tech in Computer Science <b>From AKTU University</b>. <br />
          <br />
          Innovative Software Engineer | Entrepreneur | MERN Stack Developer
          Eager to pioneer solutions at the intersection of technology and
          entrepreneurship. Specializing in MERN stack development and driven by
          a relentless pursuit of knowledge. Let's collaborate and revolutionize
          the digital landscape together! I love to create projects with
          beautiful designs and put my own twists on it, you can check out some
          of my work in the projects section.
          <br />
          <br />I am <b>open</b> to new collaborations or work where I can
          contribute and grow. Feel free to connect with me, links are in the
          footer.
          <br />
          Apart from coding I love to make discord servers,designs and do
          photography in my spare time.
        </p>
        <a
          href="https://drive.google.com/file/d/1f3ZtoOUYIbX8wZPszev15ag7tEIqSJId/view?usp=sharing"
          download
          className="resume-btn"
        >
          <button>
            View Resume <FaFileDownload></FaFileDownload>
          </button>
        </a>
      </div>
      <div className="PhotoContainer">
        <img src={MyPhoto} alt="Praveen Patel" className="CircularPhoto" />
      </div>
    </div>
  );
};

export default About;