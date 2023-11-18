import React from "react";
import { Link } from "react-router-dom";
import s from "./home.module.css";
import profilePhoto from "../../images/nenorvalls.jpg";
import SkillsContainer from "../SkillCard/SkillCard";

const Home = () => {
  return (
    <div className={s.container}>
      <div className={s.sidebar}>
        <img className={s.profileImage} src={profilePhoto} alt="Profile" />
        <p className={s.introParagraph}>
          Hello, I'm Nenita Norvalls, a recent graduate of Noroff School of
          Technology and Digital Media's Front-End Development course. My focus
          is on practical skills that matter in real-world web development.
        </p>
        <div className={s.contactInfoList}>
            <p className={s.contactInfo}>
            <strong>Mobile number:</strong> +4791129757
            </p>
            <p className={s.contactInfo}>
            <strong>Github:</strong> https://github.com/NeNorvalls
            </p>
            <p className={s.contactInfo}>
            <strong>Email:</strong> honeygeeh27@gmail.com
            </p>
            <p className={s.contactInfo}>
            <strong>Location:</strong> Bergen, Norway
            </p>
        </div>
      </div>

      <div className={s.content}>
        <h1 className={s.welcomeHeader}>
          Welcome to Nenorvalls: Innovating Web Experiences
        </h1>
        <p className={s.skillsParagraph}>
          Throughout my Front-End Development journey at Noroff School of
          Technology and Digital Media, I've gained proficiency in various
          technologies and tools. Here are some of the key skills I've acquired:
        </p> 
        <SkillsContainer />

        <p className={s.contributionParagraph}>
          Despite being a recent graduate, I bring a solid educational
          foundation and a dedication to staying current with industry trends. I
          am eager to contribute my skills and a fresh perspective to a team
          that values innovation and excellence.
        </p>
        <p className={s.readyParagraph}>
          Ready to see what I've been working on?
        </p>
        <Link to="projects" className={s.exploreButton}>
          Explore My Projects
        </Link>

        
       
      </div>
    </div>
  );
};

export default Home;
