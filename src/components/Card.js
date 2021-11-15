import React,{useContext} from "react";
import "./Card.css";
import img from "../Assests/user-circle-solid-240.png";
// import { myMode } from "../App";

const Card = () => {
  const myMode2 = "darkMode";
  return (
    <div
      className={` profile fixed  ${
        myMode2 === "darkMode" ? "bg-blue-100 " : "bg-gray-400"
      }  left-10  rounded-xl  text-center`}
    >
      <div
        className={`profileImg ${
          myMode2 === "darkMode" ? "bg-blue-600" : "bg-black "
        }`}
      ></div>
      <b className="self-center ">Om Prakash</b>

      <p
        className={` title ${
          myMode2 === "darkMode" ? " text-black " : "text-gray-100"
        }  w-full  mb-1 flex  items-center justify-center rounded-r-2xl`}
      >
        Full Stack Devloper
      </p>
      <div className="myallwave rounded-b-xl">
        <div
          className={`wave ${
            myMode2 === "darkMode" ? "wavewhite" : "waveblack "
          } one `}
        ></div>
        <div
          className={`wave ${
            myMode2 === "darkMode" ? "wavewhite" : "waveblack "
          } two `}
        ></div>
        <div
          className={`wave ${
            myMode2 === "darkMode" ? "wavewhite" : "waveblack "
          } three `}
        ></div>
      </div>
      <hr className="hrhai" />
      <div className=" w-10 h-10  mx-2 mt-3">
        <img src={img} alt="fgvfgf" srcset="" />
      </div>
      <div className="allCont  ">
        <div className="h-1 border-l-2 border-gray-800 w-2 mx-7 mt-1 p-0"></div>
        <div className="details flex text-left font-light text-sm">
          <div
            className={`circle w-2 h-2 border-2 ${
              myMode2 === "darkMode" ? " border-blue-600 " : "border-white"
            } ml-6 p-0 mt-2 mr-3`}
          ></div>
          <b className={`mr-2 ${
              myMode2 === "darkMode" ? "text-black" : "text-white "
            }`}>Name:</b>{" "}
          <font
            className={myMode2 === "darkMode" ? "text-black" : "text-white"}
          >
            {" "}
            Om Prakash
          </font>
        </div>

        <div className="h-4 border-l-2 border-gray-800 w-2 mx-7 mt-1 p-0"></div>
        <div className="details flex text-left font-light text-sm">
          <div
            className={`circle w-2 h-2 border-2 ${
              myMode2 === "darkMode" ? " border-blue-600 " : "border-white"
            } ml-6 p-0 mt-2 mr-3`}
          ></div>
          <b className={`mr-2 ${
              myMode2 === "darkMode" ? "text-black" : "text-white "
            }`}>Email:</b>{" "}
          <font
            className={myMode2 === "darkMode" ? "text-black" : "text-white"}
          >
            {" "}
            ompra.rox@gmail.com
          </font>
        </div>

        <div className="h-4 border-l-2 border-gray-800 w-2 mx-7 mt-1 p-0"></div>
        <div className="details flex text-left font-light text-sm">
          <div
            className={`circle w-2 h-2 border-2 ${
              myMode2 === "darkMode" ? " border-blue-600 " : "border-white"
            } ml-6 p-0 mt-2 mr-3`}
          ></div>
          <b className={`mr-2 ${
              myMode2 === "darkMode" ? "text-black" : "text-white "
            }`}>Phone No:</b>
          <font
            className={myMode2 === "darkMode" ? "text-black" : "text-white"}
          >
            7903592612
          </font>
        </div>

        <div className="h-4 border-l-2 border-gray-800 w-2 mx-7 mt-1 p-0"></div>
        <div className="details flex text-left font-light text-sm">
          <div
            className={`circle w-2 h-2 border-2 ${
              myMode2 === "darkMode" ? " border-blue-600 " : "border-white"
            } ml-6 p-0 mt-2 mr-3`}
          ></div>
          <b
            className={`mr-2 ${
              myMode2 === "darkMode" ? "text-black" : "text-white "
            }`}
          >
            Profession:
          </b>
          <font
            className={myMode2 === "darkMode" ? "text-black" : "text-white"}
          >
            Student
          </font>
        </div>
      </div>
      <button
        className={`btn  ${
          myMode2 === "darkMode" ? "bg-blue-600" : "bg-black "
        }  active:bg-black py-2 text-white px-3 flex items-center justify-center rounded-3xl  mt-5 self-center m-auto`}
      >
        <font className="mr-2 ">Download Resume</font>
        <box-icon
          name="download"
          type="solid"
          animation="flashing"
          color="#fefdfd"
        ></box-icon>
      </button>
      <div className="grass w-full h-7 rounded-xl"></div>
    </div>
  );
};

export default Card;
