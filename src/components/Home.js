import React from 'react'
import './Home.css'
import SkillCard from './ProjectCard/SkillCard';
import SkillListCard from './ProjectCard/SkillListCard';


const Home = () => {
  let myArray = ['op','op2','op3']
    return (
      <div className="home mx-16  bg-white bg-opacity-75 px-3 text-justify ">

        {/* About Section */}
        <div className="heading  border-b-8 border-blue-400 ">
          <h3 className="font-bold text-lg">About me</h3>
        </div>
        <div className="myDetails mt-10 mb-7">
          <p className="mydetails">
            Myself Om Prakash. I am persuing my btech in Information technology
            from Kalinga Institute of industrial technology. I'm currently in
            2nd year. I'm full stack devloper , currently working on projecs
            related to backend. I have also learned Android Development. Apart
            from Devlopment, I am also a competitive coder , on daily basis i
            solve 2-3 questions on codeforces. I have also earned certification
            in SQL as 5 star coder in hackerrank.
          </p>
        </div>
        <hr className=" bg-blue-600" />

        {/* Skill Section */}
        <div className="skillSection w-full my-4 ">
          <div className="skillHeading heading border-b-8 border-blue-400">
            <h3 className="font-bold text-lg">Skills</h3>
          </div>
          <div className="allSkills flex  w-full justify-evenly mt-10 flex-wrap">
            <SkillCard />
          </div>
          <div className="skillList flex flex-wrap justify-evenly mt-6">
            <SkillListCard
              title="Frontend"
              lang={[
                "JavaScript",
                "Bootstrap",
                "Tailwind css",
                "Materia UI",
                "ReactJs",
                "Redux",
                "Next-Js",
                "TypeScript",
              ]}
            />
            <SkillListCard
              title="Backend"
              lang={["NodeJs", "ExpressJs", "Python"]}
            />
            <SkillListCard title="Database" lang={["SQL", "Mongodb"]} />
            <SkillListCard
              title="Programming Lang."
              lang={["C", "C++", "Java", "Kotlin", "Python"]}
            />
          </div>
        </div>

        <hr className=" bg-blue-600 w-full" />
      </div>
    );
}

export default Home
