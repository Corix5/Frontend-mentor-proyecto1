import { useEffect, useState } from "react";
//images
import illustrationMobile from "../assets/images/illustration-sign-up-mobile.svg";
import illustrationDesktop from '../assets/images/illustration-sign-up-desktop.svg';
import listIcon from "../assets/images/icon-list.svg";
//components
import Illustration from "../components/Illustration";
import List from "../components/List";
import Form from "../components/Form";

const Inicio = () => {

    const list1 = "Product discovery and building what matters";
    const list2 = "Measuring to ensure updates are a success";
    const list3 = "And much more!";
  
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    const illustrationImage = windowWidth >= 1024 ? illustrationDesktop : illustrationMobile;
  return (
    <>
      <div className="app">
        <Illustration image={illustrationImage} />
        <section className="section-list">
          <h1 className="title">Stay updated!</h1>
          <p className="text">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <List listImage={listIcon} list={[list1, list2, list3]} />
          <Form />
        </section>
      </div>
    </>
  );
};

export default Inicio;
