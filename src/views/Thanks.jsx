import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../css/thanks.css";
import iconSuccess from "../assets/images/icon-success.svg";
const Thanks = () => {
    const location = useLocation();
    const {email} = location.state;
  return (
    <section className="app-thanks">
      <figure className="icon-success">
        <img src={iconSuccess} alt="icon-success" />
      </figure>
      <h1 className="title">Thanks for subscribing!</h1>
      <p className="text">
        A confirmation email has been sent to <b>{email}</b>. Please open it
        and click the button inside to confirm your subscription
      </p>
      <Link className="btn-thanks" to={"/"}>
        <button className="btn-form">Dismiss message</button>
      </Link>
    </section>
  );
};

export default Thanks;
