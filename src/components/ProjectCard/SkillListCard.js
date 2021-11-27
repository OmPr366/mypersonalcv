import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'


const SkillListCard = (props) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  const [x, setX] = useState(0)
  const animation =  useAnimation();
  
  useEffect(() => {
    if(inView){
      animation.start({
        x:0,
        opacity:1,
        transition:{
          type:'spring',duration:1, bounce:0.5
        }
      })
      setX(1);
    }
    else if(!x) {
      animation.start({opacity:0,x:'-20vh'})
    }
    console.log(inView);
  })
    let lang = props.lang;
    return (
        <motion.div ref={ref} className='skillList bg-white bg-opacity-50 w-52 px-4 border-2 items-start py-5 rounded-md cursor-pointer hover:border-blue-500 hover:bg-gray-300'
        
        animate={animation}
        
        >
            <h3  >{props.title}</h3>
            <ul className='list-outside font-light text-md mt-3' >
                {lang.map((element)=>{
                    return (
                      <div className='SkillItem flex items-center   '>
                        <div className=" rounded-full w-2 h-2 border-2 border-blue-600 mr-2"></div>
                        <li>
                          <text>{element}</text>{" "}
                        </li>
                      </div>
                    );
                })}
            </ul>
        </motion.div>
    )
}

export default SkillListCard
