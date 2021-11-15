import React from 'react'
import SimpleCard from "./SimpleCard";

const Node = () => {
    return (
      <div>
        this is Project
        <div className="allCard flex flex-wrap ">
          <SimpleCard />
          <SimpleCard />
          <SimpleCard />
          
        </div>
        <div className="allCard flex flex-wrap ">
          <SimpleCard />
          <SimpleCard />
          <SimpleCard />
        </div>
        <div className="allCard flex flex-wrap ">
          <SimpleCard />
          <SimpleCard />
          <SimpleCard />
        </div>
      </div>
      
    );
}

export default Node
