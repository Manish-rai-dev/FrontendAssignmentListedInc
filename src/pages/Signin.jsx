import  { useState } from 'react';
import './SignIn.css';
import Form from '../components/Form';
import Social from '../components/Social';
import Logo from "../assets/LoginLogo.svg";
import Circle from "../assets/Logo.svg";
import MobileLogo from "../assets/MobileViewLogo.svg";
// import LightIcon from '../assets/light-mode-icon.svg'; // Add your light mode icon path here
// import DarkIcon from '../assets/dark-mode-icon.svg'; // Add your dark mode icon path here

const SignIn = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <a href="index.html" className='logo'>
        <div className='hidden_above'>
          <img src={ MobileLogo } alt="brand" style={{height:"35px", marginLeft:"5%", width:"auto"}} className=''/>
        </div>
      </a>
      <div className='signin__page__container'>
        <div className='imageContainr'>
          <img src={ Circle } alt="brand" className='bgImage' style={{ height:'80px', width:"80px" }}/> 
          <img src={ Logo } className='overlay' alt="overlay"/>
        </div>

        <div className="form__container">
          <p className='board__logo hidden_below'>BASE</p>
          <Form/>
        </div>

        <Social />

      
      </div>
    </main>
  );
}

export default SignIn;
