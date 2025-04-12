import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp";

const ScrollUp = ({moveToSection}) => {

  const [isScrollFar , setIsScrollFar] =useState(window.scrollY > 800? true : false)

  useEffect(()=>{

function CheckScrollPosition(){
  
  window.scrollY > 800 ? setIsScrollFar(true) : setIsScrollFar(false);
  
  
}

    window.addEventListener('scroll',CheckScrollPosition);
    return ()=> window.removeEventListener('scroll',CheckScrollPosition);

  },[])


  return (
    <>
    <div className={`${!isScrollFar ? 'hidden' : null } z-20 h-[60px] fixed bottom-[2%] right-[2%]`}>
     <div className='h-full flex-center aspect-square rounded-full bg-transparent  cursor-pointer border-2 -border--sec-col' onClick={(_)=>moveToSection('header-section')}>
     <FaArrowUp className='-text--sec-col h-full w-[50%]' />
    </div>  
    </div>
    
    </>
   
  )
}

export default ScrollUp
