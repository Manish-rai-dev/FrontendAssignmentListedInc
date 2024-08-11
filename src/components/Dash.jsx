import { useState } from "react";
import "../pages/Dashboard.css";
import Hamburger from "../assets/hamburger.svg";
import bell from "../assets/Bell.svg";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Dash = () => {

    const [imageError, setImageError] = useState(false);



    const user = localStorage.getItem('photoUrl');
    console.log("User Photo URL:", user); // Log the photo URL to debug

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="dash__header__bar">
            <h2 className="dashboard">Upload CSV</h2>
            <div className="header__right">
                <button className="bell__icon">
                    <img src={bell} alt="bell Icon" className="ri-notification-2-line" />
                </button>
                <div className="profile__icon">
                <div>
                {user && !imageError ? (
                    <img 
                        src={user} 
                        alt="User Profile" 
                        referrerPolicy="no-referrer"
                        onError={() => setImageError(true)} 
                    />
                ) : (
                    <FaUser/>
                )}
            </div>
                    <ul className="profile__dropdown">
                        <li>
                            <button onClick={handleLogout}>Log Out</button>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Dash;
