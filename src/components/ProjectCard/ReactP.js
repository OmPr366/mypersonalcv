import React from 'react'
import SimpleCard from "./SimpleCard";

const ReactP = () => {
    return (
      <div>
        This is my React
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

export default ReactP
