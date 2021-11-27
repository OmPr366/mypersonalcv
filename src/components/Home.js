import React from 'react'
import './Home.css'
import SkillCard from './ProjectCard/SkillCard';
import SkillListCard from './ProjectCard/SkillListCard';
import { motion } from 'framer-motion';


const Home = () => {
  let myArray = ['op','op2','op3']
    return (
      <div className="home mx-16  bg-white bg-opacity-75 px-3 text-justify ">

        {/* About Section */}
        <motion.div className="heading  border-b-8 border-blue-400 "
          initial={{
            marginLeft:"-100vw"
          }}
          animate={{
            marginLeft:0
          }}
          transition={{
            type:"spring",
            delay:0
          }}
        >
          <h3 className="font-bold text-lg">About me</h3>
        </motion.div>
        <motion.div className="myDetails mt-10 mb-7"
          initial={{
            x:"-100vw"
          }}
          animate={{
            x:0
          }}
          transition={{
            type:"spring",
            delay:0.5
          }}
        >
          <p className="mydetails">
            Myself Om Prakash. I am persuing my btech in Information technology
            from Kalinga Institute of industrial technology. I'm currently in
            2nd year. I'm full stack devloper , currently working on projecs
            related to backend. I have also learned Android Development. Apart
            from Devlopment, I am also a competitive coder , on daily basis i
            solve 2-3 questions on codeforces. I have also earned certification
            in SQL as 5 star coder in hackerrank.
          </p>
        </motion.div>
        <motion.hr className=" bg-blue-600"
            initial={{
              width:0
            }}
            animate={{
              width:["2%","50%","40%","90%","85%","100%"]
            }}
            transition={{
              
              duration:5,
              bounce:0.2
            }}
         />

        {/* Skill Section */}
        <div className="skillSection w-full my-4 ">
          <motion.div className="skillHeading heading border-b-8 border-blue-400"
            initial={{
              marginLeft:"-100vw"
            }}
            animate={{
              marginLeft:0
            }}
            transition={{
              type:"spring",
              delay:1.6
            }}
          >
            <h3 className="font-bold text-lg"
              
            >Skills</h3>
          </motion.div>
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
