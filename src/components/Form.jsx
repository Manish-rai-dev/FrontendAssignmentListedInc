import  { useState,useEffect } from "react";
import "../pages/SignIn.css";
import {auth,provider} from "../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword } from 'firebase/auth';
import {  useNavigate } from 'react-router-dom';
import {signInWithPopup} from "firebase/auth";

const Form = () => {
  const navigate=useNavigate();
  const [value,setValue] = useState('')
  // const[profile,setProfile] =useState('')
  const loginWithRedirect = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      const email = data?.user?.email;
      const photoURL = data?.user?.photoURL;
  
      if (email && photoURL) {
        localStorage.setItem("email", email);
        localStorage.setItem("photoUrl", photoURL);
        navigate("/dashboard");
      } else {
        toast.error("Failed to retrieve user information.");
      }
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
      toast.error("Google Sign-In failed. Please try again.");
    }
  };
  
  
  
  useEffect(()=>{
    setValue(localStorage.getItem('email'))
},[])
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const validateForm = (email, password, confirmPassword) => {
    // Email validation
  if (!validateEmail(email)) {
        return {
            isValid: false,
            message: "Invalid email address"
        };
    }

    // Password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[^\s]).{8,}$/;
    if (!passwordRegex.test(password)) {
        return {
            isValid: false,
            message: "Password must contain at least one uppercase letter, one lowercase letter, one numeric digit, one special character, and be at least 8 characters long"
        };
    }


    // If all validations pass
    return {
        isValid: true,
        message: ""
    };
};

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const { isValid, message } = validateForm(email, password);
    
    if (!isValid) {
        toast.error(message);
        return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        const user = userCredential.user;
        localStorage.setItem('token', user.accessToken);
        localStorage.setItem('user', JSON.stringify(user));
        navigate("/dashboard");
    } catch (error) {
        console.error(error);
        toast.error(error);
    }
};

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="formgroup__container">
      <p className="fontSign">Sign in</p>
      <p className="sign_to_ur_acc">Sign in to your account</p>

      <div className="signin__with__buttons">
        <button className="siginin__google btn__primary" onClick={loginWithRedirect}>
          Sign in with Google
        </button>
        <button className="siginin__apple btn__primary">Sign in with Apple</button>
      </div>

      <div className="form__wrapper">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="input__bar"
            autoComplete="false"
            placeholder="Email id"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="input__bar"
            autoComplete="false"
            placeholder="Password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <a href="http://" target="_blank" className="forgot__pass" rel="noopener noreferrer">
            Forgot password?
          </a>

          <button type="submit" className="signin__btn">
            Sign In
          </button>
        </form>
      </div>

      <p className="form__footer">
        Don't have an account?{" "}
        <span  onClick={()=>navigate("/signup")}>
          Register here
        </span>
      </p>

      <ToastContainer />
    </div>
  );
};

export default Form;
