import React, { useEffect, useRef, useState } from 'react'
import { RenderEachWord } from '../utils/renderChars';
import { animateIntroSection } from '../utils/animations';
import { BsFillSkipForwardFill } from "@react-icons/all-files/bs/BsFillSkipForwardFill";
import wireImg  from '../assets/objects/bigWire.png';

const IntroductionSection = () => {
  
const IntroductionText ='Hello Everyone my name is Reda Bendimred, and am a frontend developper, am 25 years old and i live in algeria, i love travling and playing video games and of course programming, i mainly use javascript as my main programming language but am very flexible and i can work with any environement and i use react aswell';
const careerText ='i Graduated from the university in my home town, Where i got a master degree in public works engeneering and worked with it for couple of months before i decided to change my career path into something i like the most and started learning javascript since then, so am very determined to make the dream of working as a programmer a reality.';
const myGoalText ='As i said in my previous section, my goal is to turn this passion into a full time work, and making sure i not only create good sites in both UI/UX but also in performance and SEO score, also my objective for the next couple of months is to learn Backend so that i become a fullstack dev, i will keep updating this page the more i learn and work on projects';
const conclusionText ='lastly, i will leave ,if you need the source code down below in my github link, and contact me if you need anything related to this job i will gladly help you if i can, see ya!!';
const [currentText , setCurrentText] = useState(IntroductionText);
const [title ,setTitle] = useState(window.innerWidth <450 ? 'INFO:':'INFORMATION:');
const [personaInfo,setPersonalInfo] = useState(window.innerWidth ?'PERSONAL INFO':'PERSONAL INFORMATION');

useEffect(()=>{
 const handleResize = () =>{
  window.innerWidth < 600 ? setPersonalInfo('PERSONAL INFO') :
setPersonalInfo('PERSONAL INFORMATION');
window.innerWidth < 450 ? setTitle('INFO:') :setTitle('INFORMATION:');
 }

window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
},[])


useEffect(()=>{
const words = Array.from(document.querySelectorAll('#intro-container span')).slice(0,-1);
const letters = document.querySelectorAll('#intro-letter');
words.forEach(word =>{
  word.style.display = 'none';
})
letters.forEach(letter=>{
  letter.style.display = 'none';
})

},[currentText]);


animateIntroSection('word','intro-cursor', {
    start:'center bottom',
    end:'bottom 20%',
    toggleActions:'play pause resume pause',
      },currentText
)



 const changeRenderText =(id) =>{
  switch (id) {
    case "PERSONAL-INFORMATION": 
      currentText !== IntroductionText ? setCurrentText(prev => prev = IntroductionText )  : null;  
      break;
    case "CAREER":
      currentText !== careerText ? setCurrentText(prev => prev = careerText )  : null;

      break;
    case "MY-GOAL":
      currentText !== myGoalText ? setCurrentText(prev => prev = myGoalText )  : null;
 
      break;
    case "CONCLUSION":
      currentText !== conclusionText ? setCurrentText(prev => prev = conclusionText )  : null;
  
      break;
   default:
   break;
  }
 }


  return (

    <section id='introduction' className='introductions w-full mb-20 mt-[200px] flex items-center lg:p-10 md:p-8 p-6 max-sm:px-0 '> <div className='flex flex-1 items-center justify-start my-14 py-10 xl:py-20 w-full'> <div className='flex-1 relative min-w-[190px] min-h-[314px] -bg--black-col card-border flex flex-col'> {} <div className='px-[15%] my-2 h-1/5 flex items-center justify-start' > <h3 className='card-title' >{ title}</h3> </div> <div id='intro-container' className='w-full p-2'> <p className='flex card-text'> {RenderEachWord(currentText.split(' '),'intro')} <span id='intro-cursor' className='w-1 h-[24px] -bg--white-col opacity-75'></span> </p> </div> {} <div className='h-[50px] w-full'> <div id='skip-button' className='absolute bottom-[5%] right-[5%] flex-center hover:scale-110 transition-all cursor-pointer'> <h5 className='skip-button'>SKIP</h5> <BsFillSkipForwardFill className='skip-button ml-2'/> </div> </div> </div> {} <div className='basis-2/4 flex justify-end'> {} <div className='flex flex-col items-end justify-center md:ml-6 gap-12 ml-3 '> <p id='PERSONAL-INFORMATION' className='clicked intro-panel intro-text hover-intro-text text-end hover:scale-110 max-[400px]:text-[12.6px]' onClick={(e)=>{changeRenderText(e.target.id)}}>{personaInfo}</p> <p id='CAREER' className='clicked intro-panel intro-text hover-intro-text hover:scale-110 max-[400px]:text-[12.6px]' onClick={(e)=>{changeRenderText(e.target.id)}}>EDUCATION</p> <p id='MY-GOAL' className='clicked intro-panel intro-text hover-intro-text hover:scale-110 max-[400px]:text-[12.6px]' onClick={(e)=>{changeRenderText(e.target.id)}}>MY GOAL</p> <p id='CONCLUSION' className='clicked intro-panel intro-text hover-intro-text hover:scale-110 max-[400px]:text-[12.6px]' onClick={(e)=>{changeRenderText(e.target.id)}}>CONCLUSION</p> </div> {} <div className='h-full lg:ml-8 md:ml-4'> <img src={wireImg} className='w-full h-full object-cover' alt="big-wire" /> </div> </div> </div> </section>
  )
}



export default IntroductionSection
