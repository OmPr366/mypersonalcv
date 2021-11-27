import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";
import AppsIcon from "@mui/icons-material/Apps";
import { motion } from "framer-motion";

const SkillCard = (props) => {

  
  return (
    <>
      {/* Card 1 */}
      <motion.div 
        className="SkillCard border-2 hover:border-blue-400 hover:bg-gray-300 w-64 flex flex-col  items-center px-3 pt-1 rounded-md cursor-pointer"
        initial={{
          y: "100vw",
        }}
        animate={{
          y: 0,
        }}
        transition={{
          delay: 1.7,
          type: "spring",
          // stiffness:70       
         }}
      >
        <div className="circle w-24 h-24 rounded-full bg-blue-400 flex justify-center items-center mt-0">
          <CodeIcon style={{ width: "50px", height: "50px" }}></CodeIcon>
        </div>
        <h2 className="font-semibold text-blue-600">Competitive Programming</h2>
        <p className="font-serif font-normal text-sm mt-3">
          With a healthy understanding of basic and advanced Data Structures and
          with mainly all Algorithms ready to give my efforts for the well being
          on the planet. Also became 4 star coder on Codechef and working hard
          for 5th.
        </p>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        className="SkillCard border-2 hover:border-blue-400 hover:bg-gray-300 w-64 flex flex-col  items-center px-3 pt-1 rounded-md cursor-pointer"
        initial={{
          marginTop: "100vw",
        }}
        animate={{
          marginTop: 0,
        }}
        transition={{
          delay: 2,
          type: "spring",
          stiffness:70        }}
      >
        <div className="circle w-24 h-24 rounded-full bg-blue-400 flex justify-center items-center mt-0">
          <LanguageIcon
            style={{ width: "50px", height: "50px" }}
          ></LanguageIcon>
        </div>
        <h2 className="font-semibold text-blue-600">Webapp Developer</h2>
        <p className="font-serif font-normal text-sm mt-3">
          With Python web frameworks like Flask and Django developing webapps
          and using it to deploy ML, DL models and some more techy apps used to
          drive client's attentions. Filled with latest tech advancements and
          looks. Web automation using bots for almost everything.
        </p>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        className="SkillCard border-2 hover:border-blue-400 hover:bg-gray-300 w-64 flex flex-col  items-center px-3 pt-1 rounded-md cursor-pointer"
        initial={{
          marginTop: "100vw",
        }}
        animate={{
          marginTop: 0,
        }}
        transition={{
          delay: 2.4,
          type: "spring",
          stiffness:70        }}
      >
        <div className="circle w-24 h-24 rounded-full bg-blue-400 flex justify-center items-center mt-0">
          <AppsIcon style={{ width: "50px", height: "50px" }}></AppsIcon>
        </div>
        <h2 className="font-semibold text-blue-600">Andriod Developer</h2>
        <p className="font-serif font-normal text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel
          tenetur neque quas laboriosam doloremque dolor dignissimos nesciunt
          maxime nostrum harum deleniti, suscipit laudantium debitis excepturi
          cumque dolorum, et unde!
        </p>
      </motion.div>
    </>
  );
};

export default SkillCard;
