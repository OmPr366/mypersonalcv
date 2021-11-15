import React from 'react'
import SimpleCard from "./SimpleCard";

const Java = () => {
    return (
      <div>
        This is Javascript projects
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

export default Java
