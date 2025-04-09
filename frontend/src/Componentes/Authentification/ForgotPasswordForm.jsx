import React, {useState} from "react";
import axios from "axios";


const ForgotPasswordForm = ({ onSubmit }) => {
    const [email, setEmail] = useState("");
   
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(email)
    };

    return (
        <div className="form-box">
            <form onSubmit={handleSubmit}>
                <h1>Forgot Password</h1>
                <div className="input-box">
                    <input
                    type = "text"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <button type="submit">
                    Send Reset Link
                </button>
            </form>
        </div>
    );
};

export default ForgotPasswordForm;