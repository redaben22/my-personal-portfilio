import React, { useEffect, useState } from 'react'
const skillsLogo = import.meta.glob('../assets/SkillsLogo/*.png');


const SkillsSecton = () => {

  const [names , setNames] = useState({
    javascript:window.innerWidth <450 ? 'JS ':'JAVASCRIPT ',
    gsap:window.innerWidth <450 ? 'GSAP ':'ANIMATIONS WITH GSAP',
  })



  useEffect(()=>{
    const handleResize = () =>{

   window.innerWidth < 450 ? setNames({javascript:'JS ',
    gsap:'GSAP ',
   }) :setNames({javascript:'JAVASCRIPT ',gsap:'ANIMATIONS WITH GSAP'});
    }
   
   window.addEventListener("resize", handleResize)
       return () => window.removeEventListener("resize", handleResize)
   },[])
  

  const RenderSkillsList = () =>{
    const skills = ['JAVASCRIPT ','CSS & HTML','REACT ','FIGMA ','ANIMATIONS WITH GSAP','MATERIAL UI','TAILWIND ', 'GIT '];
 let skillNames = [];
 let skillLinks =['https://www.javascript.com',' ','https://react.dev','https://www.figma.com/files/team/1397660223360148816/recents-and-sharing/recently-viewed?fuid=1397660218812244708', 'https://gsap.com','https://mui.com','https://tailwindcss.com','https://git-scm.com'];

    
       
 for(let i =0 ; i < skills.length ; i++){

    for(let img in skillsLogo){
      if(skills[i].substring(0,skills[i].indexOf(' ')) === img.substring(21,img.indexOf('-')).toUpperCase()){
        
        skillNames.push(img.substring(21));
        break;
      }
    }          
     } 
   
    return skills.map((skill,index) =>(
      <div key={index} className='w-full p-5 box-border flex items-center justify-between'> {index != 1 ? <a href={index != 1 ? skillLinks[index]:null} target='_blank'> <p className='skill-text mx-4 hover:scale-110 hover:hover-text -text--white-col cursor-pointer' > { index == 0 ? names.javascript : (index == 4 ? names.gsap :skill ) } </p> </a> : <p className='skill-text mx-4 hover:scale-110 hover:hover-text -text--white-col cursor-pointer' >{skill}</p> } <div className='md:h-12 h-8 mx-8'> <img className='object-cover w-full h-full' src={`src/assets/SkillsLogo/${skillNames[index]}`}alt="skill-logo" /> </div> </div>
    ))

   
  }

  return (
    <section id='skills' className='w-full flex-center mb-[200px] mt-20 lg:p-10'> <div className='my-14 md:p-20 p-10 max-[500px]:px-2 w-full flex-center'> <div className='my-14 w-max-[900px] max-[500px]:px-1 p-10 -bg--black-col card-border flex flex-col '> <div className='px-[15%] my-2 h-1/6 flex items-center justify-start' > <h3 className='card-title'>SKILLS:</h3> </div> {} <RenderSkillsList/> </div> </div> </section>
  )
}

export default SkillsSecton
