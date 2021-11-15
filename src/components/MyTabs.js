import React,{useState} from 'react'
import './MyTabs.css'
import All from './ProjectCard/All'
import Java from './ProjectCard/Java'
import Node from './ProjectCard/Node'
import ReactP from './ProjectCard/ReactP'

const MyTabs = (props) => {
    const [margin, setmargin] = useState("17px")
    const [myWidth, setWidth] = useState("115px")
    const [color, setColor] = useState({
        x:1,
        y:0,
        z:0,
        a:0,
    })

    const adjust1 = ()=>{
      props.setProg(10);
        setmargin("17px")
        setWidth("115px")
      props.setProg(50);
        setColor({
          x: 1,
          y: 0,
          z: 0,
          a: 0,
        });
      props.setProg(100);
    }
    const adjust2 = ()=>{
      props.setProg(10);
        setmargin("164px");
        setWidth("100px");
      props.setProg(50);
        setColor({
          x: 0,
          y: 1,
          z: 0,
          a: 0,
        });
        props.setProg(100);
    }
    const adjust3 = ()=>{
      props.setProg(10);
        setmargin("295px")
        setWidth("65px");
      props.setProg(50);
        setColor({
          x: 0,
          y: 0,
          z: 1,
          a: 0,
        });
        props.setProg(100);
    }
    const adjust4 = ()=>{
      props.setProg(10);
        setmargin("388px");
        setWidth("66px");
      props.setProg(50);
        setColor({
          x: 0,
          y: 0,
          z: 0,
          a: 1,
        });
        props.setProg(100);
    }
    return (
      <>
        <div className="myTab  flex">
          <div
            className={`tabs font-normal mx-2 my-1 p-2  px-4 uppercase  ${
              color.x == 1 ? "text-blue-600 " : ""
            }`}
            
          >
            All Projects
          </div>
          <div
            className={`tabs font-normal mx-2 my-1 p-2  px-4 uppercase  ${
              color.y == 1 ? "text-blue-600 " : ""
            }`}
            onClick={adjust2}
          >
            Javascript
          </div>
          <div
            className={`tabs font-normal mx-2 my-1 p-2  px-4 uppercase  ${
              color.z == 1 ? "text-blue-600 " : ""
            }`}
            onClick={adjust3}
          >
            React
          </div>
          <div
            className={`tabs font-normal mx-2 my-1 p-2  px-4 uppercase  ${
              color.a == 1 ? "text-blue-600 " : ""
            }`}
            onClick={adjust4}
          >
            Node
          </div>
          <div
            className="extra"
            style={{ marginLeft: margin, width: myWidth }}
          ></div>
        </div>
        <hr className="to-blue-600 border-4 w-full " />

        {color.x ? <All changeFull ={props.changeFull}/> : ""}
        {color.y ? <Java changeFull ={props.changeFull}  /> : ""}
        {color.z ? <ReactP changeFull ={props.changeFull} /> : ""}
        {color.a ? <Node changeFull ={props.changeFull} /> : ""}
      </>
    );
}

export default MyTabs
