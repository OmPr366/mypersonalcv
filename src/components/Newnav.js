import React,{useState} from "react";
import "./Newnav.css";
import img from "../Assests/butterfly.gif";
// import { Link } from "react-router-dom";
import rope from "../Assests/rope.png";
// import  ThemeContext  from '../contexts/ThemeContext';
// import { myMode, update } from '../App';
// import Alert from "@mui/material/Alert";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Newnav = (props) => {
  const myMode2 = "darkMode";
  // const myfunc = useContext(update);

  const [active1, setActive1] = useState(1)
  const [active2, setActive2] = useState(0)
  const [active3, setActive3] = useState(0)
  // const click1 = ()=>{
  //   // props.setProg(10);
  //   setActive1(1);
  //   // props.setProg(50);
  //   setActive2(0);
  //   // props.setProg(80);
  //   setActive3(0);
  //   // props.setProg(100);
  // }
  // const click2 = ()=>{
  //   props.setProg(10)
  //   setActive1(0);
  //   props.setProg(50);
  //   setActive2(1);
  //   props.setProg(80);
  //   setActive3(0);
  //   props.setProg(100);
  // }
  // const click3 = ()=>{
  //   props.setProg(10)
  //   setActive1(0);
  //   props.setProg(50);
  //   setActive2(0);
  //   props.setProg(80);
  //   setActive3(1);
  //   props.setProg(100);
  // }

  // Theme Provider

  // const mode = useContext(ThemeContext);
  return (
    <>
      <div className="rope">
        <img src={rope} alt="" srcset="" />
        <i
          class={`fas ${myMode2 === "darkMode" ? "fa-moon" : "fa-sun"} fa-3x`}
          // onClick={() => myfunc()}
        ></i>
      </div>

      <motion.div className="butter w-2/3 h-5"
        initial={{
          opacity:0,
        }}
        animate={{
          opacity:1,
        }}
        transition={{
          duration:2,
          delay:1.5
        }}
      >
        <img src={img} alt="" srcset="" />
      </motion.div>
      <motion.div className="mynav w-2/3 h-16 bg-white mx-16 rounded-md rounded-l-lg flex items-center pr-3 "
        initial={{
          marginTop:"-50vh",
          opacity:0
        }}
        animate={{
          marginTop:0,
          opacity:1
        }}
        transition={{
          type:"spring"
        }}
      >
        <div
          className={`homeLogo h-full w-28 flex justify-center items-center ${
            myMode2 === "darkMode" ? "bg-blue-600" : "bg-black "
          }  rounded-tl-md rounded-bl-md cursor-pointer hover:bg-blue-800`}
        >
          {/* <box-icon name="home" type="solid" color="#fefafa"></box-icon> */}
          <HomeIcon/>
        </div>
        <div className="alllink h-full flex justify-center items-center ">
          <ul className="flex">
            <li
              className={`px-2 hover:text-blue-600 cursor-pointer hover:text-xl border-white hover:border-blue-600 border-2 ${
                active1 ? "text-blue-600 " : ""
              }`}
            >
              <Link to="/" >
              About
              </Link>
            </li>
            <li
              className={`px-2 hover:text-blue-600 cursor-pointer hover:text-xl border-white hover:border-blue-600 border-2 ${
                active2 ? "text-blue-600 " : ""
              }`}
            >
              <Link to="/Projects" >
              Projects
              </Link>
            </li>
            <li
              className={`px-2 hover:text-blue-600 cursor-pointer border-white hover:border-blue-600 border-2  ${
                active3 ? "text-blue-600 " : ""
              }`}
            >
              <Link to="/Contact" >
              Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="allIcons flex items-center float-left  w-full justify-end">
          <a className="flex justify-center cursor-pointer">
            {/* <box-icon name="instagram" type="logo" className=""></box-icon> */}
          </a>
          <a className="flex justify-center mx-1 cursor-pointer">
            {/* <box-icon name="twitter" type="logo" className=""></box-icon> */}
          </a>
          <a className="flex justify-center cursor-pointer">
            {/* <box-icon
                name="linkedin-square"
                type="logo"
                className=""
              ></box-icon> */}
          </a>
          <button
            className={`btn  ${
              myMode2 === "darkMode" ? "bg-blue-600" : "bg-black "
            }   active:bg-black py-2 text-white px-4 flex items-center justify-center rounded-3xl ml-3`}
          >
            <font className="mr-2">Github</font>
            <GitHubIcon />
            {/* <box-icon
                type="logo"
                name="github"
                color="#fefdfd"
                className="self-center ml-5"
              ></box-icon> */}
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Newnav;
