import React,{useState} from 'react'
import SimpleCard from './SimpleCard'
import './All.css'

const All = (props) => {
  
    return (
      <div className=''>
        <h1>This is All projects</h1>
        <br />
        <br />
        <div className="allCard flex flex-wrap w-full justify-evenly ">
          <div className="x1" onClick={()=>props.changeFull()}>
            <SimpleCard />
          </div>
          <div className="x1" onClick={()=>props.changeFull()}>
            <SimpleCard />
          </div>
          <div className="x1" onClick={()=>props.changeFull()}>
            <SimpleCard />
          </div>
          <div className="x1" onClick={()=>props.changeFull()}>
            <SimpleCard />
          </div>
          <div className="x1" onClick={()=>props.changeFull()}>
            <SimpleCard />
          </div>
          <div className="x1" onClick={()=>props.changeFull()}>
            <SimpleCard />
          </div>
          <div className="x1" onClick={()=>props.changeFull()}>
            <SimpleCard />
          </div>
          <div className="x1" onClick={()=>props.changeFull()}>
            <SimpleCard />
          </div>
          <div className="x1" onClick={()=>props.changeFull()}>
            <SimpleCard />
          </div>
        
        </div>
        
        
        
      </div>
    );
}

export default All
