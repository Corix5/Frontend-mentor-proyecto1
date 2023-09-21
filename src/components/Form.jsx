import { useState } from "react";
import {useNavigate} from "react-router-dom";
import "../css/form.css";

const Form = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    email: "",
  });

  const [error, setError] = useState("");

  const { email } = register;

  const handleOnChange = (e) => {
    const { name, type, value } = e.target;
    setError("");
    setRegister({
      ...register,
      [name]: type === "text" && value,
    });
  };

  const validEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    setError("");
    e.preventDefault();
    if (!email.trim() || !validEmail(email)) {
      return setError("Valid Email required");
    }else{
      navigate('/thanks', {state: {email}})
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="labels">
        <label htmlFor="email">Email address</label>
        <p>{error !== "" && error}</p>
      </div>

      <input
        type="text"
        placeholder="email@company.com"
        name="email"
        value={email}
        onChange={handleOnChange}
        className={error !== "" ? "error-input" : ""}
      />
     
        <button type="submit" className="btn-form">
          Subscribe to monthly newsletter
        </button>
      
    </form>
  );
};

export default Form;
