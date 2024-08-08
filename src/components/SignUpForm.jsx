import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/SignIn.css"; // You may create a new CSS file for sign-up styles
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUpForm = () => {


    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
    
        // Confirm password validation
        if (password !== confirmPassword) {
            return {
                isValid: false,
                message: "Passwords do not match"
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
    
        const { isValid, message } = validateForm(email, password, confirmPassword);
        
        if (!isValid) {
            toast.error(message);
            return;
        }
    
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            navigate("/dashboard");
        } catch (error) {
            console.error(error);
        }
    };
    

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div className="formgroup__container">
            <p className="fontSign">Sign up</p>
            <p className="sign_to_ur_acc">Create an account</p>

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

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        className="input__bar"
                        autoComplete="false"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <button type="submit" className="signin__btn">
                        Sign Up
                    </button>
                </form>
            </div>

            <p className="form__footer">
                Already have an account?{" "}
                <span onClick={() => navigate("/")}>
                    Sign in here
                </span>
            </p>

            <ToastContainer />
        </div>
    );
};

export default SignUpForm;
