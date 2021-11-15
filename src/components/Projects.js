import React from 'react'
import './Projects.css'
import MyTabs from './MyTabs';
import test from "../Assests/2nd.jpg";

const Projects = (props) => {
    return (
      <>
        <div className="home mx-16  bg-white bg-opacity-90 px-3 text-justify w-full items-center justify-center ">
          <MyTabs setProg={props.setProg} changeFull={props.changeFull} />
        </div>
      </>
    );
}

export default Projects

