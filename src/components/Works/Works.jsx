import React, { useContext } from "react";
import "./Works.css";
import Reacticon from "../../img/react.gif";
import Flask from "../../img/flask.png";
import Mongodb from "../../img/mongodb.png";
import Sql from "../../img/sql.jpg";
import Js from "../../img/javascript.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works with all these
          </span>
          <span>Frameworks & Databases</span>
          <spane>
            I specialize in crafting dynamic user interfaces with React, building scalable APIs 
            <br />
            with Flask, and leveraging MongoDB for flexible data storage along with
            <br />
            SQL/MySQL for relational data management. My expertise ensures efficient
            <br />
            and reliable solutions tailored to your specific requirements.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Reacticon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Flask} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Js} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Sql} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Mongodb} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
