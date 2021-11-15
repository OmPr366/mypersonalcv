import React from 'react'

const SkillListCard = (props) => {
    let lang = props.lang;
    return (
        <div className='skillList bg-white bg-opacity-50 w-52 px-4 border-2 items-start py-5 rounded-md cursor-pointer hover:border-blue-500 hover:bg-gray-300'>
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
        </div>
    )
}

export default SkillListCard
