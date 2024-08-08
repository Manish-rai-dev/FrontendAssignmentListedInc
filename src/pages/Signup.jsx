// import React from 'react';
import './SignIn.css';
import Social from '../components/Social';
import Logo from "../assets/LoginLogo.svg";
import Circle from "../assets/Logo.svg";
import MobileLogo from "../assets/MobileViewLogo.svg";
import SignUpForm from '../components/SignUpForm';

const SingUp = () => {



    return (
        <main>
        <a href="index.html" className='logo'>
        <div className='hidden_above'>
        <img src={ MobileLogo} alt="brand" style={{height:"35px",
        marginLeft:"5%",
        width:"auto",}} className=''/>
        {/*  <p className='board__logo '>Base</p>*/}
        </div>
        </a>
        <div className='signin__page__container'>
        <div className='imageContainr'>
        <img src={ Circle} alt="brand" className='bgImage' style={{
          height:'80px',
          width:"80px",
        }}/> 
        <img src={Logo} className='overlay' alt="overlay"/>
        </div>
                <div className="form__container">
                <p className='board__logo hidden_below'>BASE</p>
                    <SignUpForm/>
                </div>
    
                <Social />
        </div>
        </main>
      )
}

export default SingUp