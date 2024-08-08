// import React from 'react';
import { Link } from 'react-router-dom';
// import { RiGithubFill, RiTwitterFill, RiLinkedinBoxFill, RiDiscordFill } from 'react-icons/ri';
import Github from "../assets/Github.svg";
import discord from "../assets/discord.svg";
import LinkedIN from "../assets/LinkedIN.svg";
import Twitter from "../assets/Twitter.svg";
import '../pages/SignIn.css';

const Social = () => {
  return (
    <div className="socials__wrapper">
      <ul className="socials__links">
        <li>
          <Link to="https://github.com/" target="_blank" className="social__link">
            <img src={Github} alt="github-icon"/>
          </Link>
        </li>
        <li>
          <Link to="https://twitter.com/" target="_blank" className="social__link">
            <img src={Twitter} alt ="discord-icon"/>
          </Link>
        </li>
        <li>
          <Link to="https://linkedin.com/" target="_blank" className="social__link">
            <img src={LinkedIN} alt="linkedIN"/>
          </Link>
        </li>
        <li>
          <Link to="https://discord.com/" target="_blank" className="social__link">
           <img src={discord} alt="discord"/>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Social;
