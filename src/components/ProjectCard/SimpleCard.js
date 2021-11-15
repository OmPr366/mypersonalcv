import React,{useState, useEffect} from 'react'
import test from "../../Assests/2nd.jpg";
import './SimpleCard.css'


const SimpleCard = () => {
    
    useEffect(() => {
    //   let x = document.getElementsByClassName("mycard");
    //   x.style.color = "red"
    });
    return (
      <>
          <div
            className="mycard w-60 h-56 bg-white mx-3 mt-1 mb-4 cursor-pointer " id="ok"
            
          >
            <img
              src={test}
              alt=""
              srcset=""
              className="w-full h-1/2"
              
            />
            <div className="tag ">React</div>
            <div className="contain w-full h-full">
              <font>OP</font>
              <font>Simple Website</font>
            </div>
          </div>
         
          {/* <div className="fullscreen w-screen h-screen flex justify-center items-center bg-opacity-25">
            <div className="mycard w-60 h-56 bg-white ">
              <img src={test} alt="" srcset="" className="w-full h-1/2" />
              <div className="tag">React</div>
              <div className="contain w-full h-full">
                <font>OP</font>
                <font>Simple Website</font>
              </div>
            </div>
          </div> */}
        
        
      </>
    );
}

export default SimpleCard
