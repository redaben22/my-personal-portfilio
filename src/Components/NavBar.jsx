import React, { useEffect, useState } from 'react'
import wireImg from '../assets/objects/navBarWire.jpg'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/all';
import {useGSAP} from '@gsap/react';
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import ScrollUp from './ScrollUp';
gsap.registerPlugin(ScrollToPlugin);
const NavBar = () => {

const [isHamburgerMenuOpen,setIsHamburgerMenuOpen] = useState(false);

const moveToSection = (id) =>{
  setIsHamburgerMenuOpen(false);
 const sectionTop=document.getElementById(id).getBoundingClientRect().top;

 gsap.to(window,{
  duration:1,
  scrollTo:{
    y:sectionTop,
    autoKill:true,
    ease: "power2",
  }

 })
}

useEffect(()=>{

 
isHamburgerMenuOpen ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY ='auto'
},[isHamburgerMenuOpen])



useGSAP(()=>{

const navTexts = gsap.utils.toArray('#navtext');

navTexts.forEach((text,index) =>{
  
 let prevElWidth = 0;
 if(index == 0){
prevElWidth = 0;
 }else{
   for(let i = 0; i < index ; i++){
     
prevElWidth += navTexts[i].offsetWidth; 

 }
 }

gsap.fromTo(text,{
opacity:0,
x:`-${120 + (index * 80 + prevElWidth)}px`,

},{
ease:'expo.in',
x:'0px',
opacity:1,
duration:1.5
})
})



 },[])

  useGSAP(()=>{


const hamburger = document.querySelector('#hamburger-panel');
if(hamburger){
  gsap.to(hamburger,{
  reversed: isHamburgerMenuOpen ? false : true,
  height:'auto',
  delay:0.2,
  duration:0.5,
  ease:'power1.inOut',
  onStart:()=>console.log('start')
  });
}
    


  },[isHamburgerMenuOpen])



const animateLogoOnEnter = () =>{

gsap.to('#nav-contact',{
scaleX:1,
width:'100%',
duration:0.5,
});
gsap.to('#nav-contact >*',{
  display:'inline-block',
  duration:0.4,
  stagger:0.05,
});
  
}
const animateLogoOnLeave =()=>{

 gsap.fromTo('#nav-contact',{
      scaleX:1,
      width:'100%',
      duration:0.5,
      },{
       scaleX:0,
       width:'0%'
      })
      gsap.fromTo('#nav-contact >*',{
        display:'inline-block',
        duration:0.4,
        stagger:0.05,
      },{
        display:'none',
        duration:0.4,
        stagger:0.05,
      })

}

const renderHamburgerMenuPanel =() =>{
  return(
    <div id='hamburger-panel' className='z-10 fixed -bg--white-col top-0 left-0 right-0 overflow-hidden' style={{height:'0px'}}> {} <div className='absolute w-fit h-fit right-[10%] top-[10%]' onClick={()=>setIsHamburgerMenuOpen(false)}> <IoClose style={{width:'30px' , height:'30px' , color:'#7F00FF'}}/> </div> <div className='mb-[5%] mt-[20%] w-full flex-col '> <div className='mt-5 flex-center w-full'> <div className='w-[50%] flex-center'> <h5 className='nav-text w-fit hover:hover-intro-text'onClick={(_)=>{moveToSection('introduction')}}> INTRODUCTION </h5> </div> </div> <div className='mt-5 flex-center w-full'> <div className='w-[50%] flex-center'> <h5 className='nav-text w-fit hover:hover-intro-text' onClick={(_)=>{moveToSection('skills')}}> SKILLS </h5> </div> </div> <div className='mt-5 flex-center w-full'> <div className='w-[50%] flex-center'> <h5 className='nav-text w-fit hover:hover-intro-text' onClick={(_)=>{moveToSection('projects')}}> PROJECTS </h5> </div> </div> <div className='mt-5 flex-center w-full'> <div className='w-[50%] flex-center'> <h5 className='nav-text w-fit hover:hover-intro-text' onClick={(_)=>{moveToSection('about')}}> ABOUT </h5> </div> </div> <div className='mt-5 flex-center w-full '> <div className='w-[50%] flex-center'> <h5 className='nav-text w-fit hover:hover-intro-text' onClick={(_)=>{moveToSection('contact')}}> CONTACT ME </h5> </div> </div> </div> </div>
  )
}


  return (
    <>
    <header id='header-section' className='bg-transparent flex-end  w-full max-md:h-[177px] xl:h-40'>
      <nav className='max-md:hidden xl:w-2/4 lg:w-2/3 md:w-4/5 relative opacity-60 pl-[2.5%] flex items-center   bg-black h-2/5 rounded-3xl my-16 mx-16 max-[1400px]:mx-6 pr-5 '>
      {/** wire   */}
      <img className='object-cover mx-3  xl:h-[50px] h-[40px] aspect-auto ' src={wireImg} alt="wire" />     
      <div className='flex items-center justify-around pl-[2%]  flex-1'>
        <div id='navtext' className=' nav-text hover:hover-text opacity-0' onClick={(_)=>{moveToSection('introduction')}}>INTRODUCTION</div>
      <div id='navtext' className='nav-text hover:hover-text opacity-0' onClick={(_)=>{moveToSection('skills')}} >SKILLS</div>
      <div id='navtext' className='nav-text hover:hover-text opacity-0' onClick={(_)=>{moveToSection('projects')}}>PROJECTS</div>
      <div id='navtext' className='nav-text hover:hover-text opacity-0' onClick={(_)=>{moveToSection('about')}}>ABOUT</div>
      <div style={{ width:'135px',display:'flex',alignItems:'center',justifyContent:'center' ,cursor:'pointer'}} onMouseOver={() => animateLogoOnEnter()} onMouseLeave={() =>animateLogoOnLeave()}  onClick={(_)=>{moveToSection('contact')}}>
        <div>
       
          <svg width="16" height="41" viewBox="0 0 16 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_167_4280)">
<path d="M1.33011 18.9284C2.06467 18.1939 3.25564 18.1939 3.9902 18.9284L14.7187 29.6569C15.4532 30.3915 15.4532 31.5824 14.7187 32.317V32.317C13.9841 33.0516 12.7931 33.0516 12.0586 32.317L1.33011 21.5885C0.595545 20.854 0.595544 19.663 1.33011 18.9284V18.9284Z" fill="#7F00FF"/>
<path d="M1.34634 21.5954C0.602914 20.8519 0.602913 19.6466 1.34634 18.9032L11.9035 8.34604C12.6469 7.60261 13.8522 7.60261 14.5957 8.34604V8.34604C15.3391 9.08947 15.3391 10.2948 14.5957 11.0382L4.03854 21.5954C3.29511 22.3388 2.08977 22.3388 1.34634 21.5954V21.5954Z" fill="#7F00FF"/>
</g>
<defs>
<clipPath id="clip0_167_4280">
<rect width="16" height="41" fill="white"/>
</clipPath>
</defs>
</svg>
      
        </div>
        <div id='nav-contact' className={`flex w-0 scale-x-0`} style={{transformOrigin:'center'}} >
         <span className={`hidden nav-contact scale-x-100)]`}>C</span>
         <span className={`hidden nav-contact scale-x-100]`}>O</span>
         <span className={`hidden nav-contact scale-x-100]`}>N</span>
         <span className={`hidden nav-contact scale-x-100]`}>T</span>
         <span className={`hidden nav-contact scale-x-100]`}>A</span>
         <span className={`hidden nav-contact scale-x-100]`}>C</span>
         <span className={`hidden nav-contact scale-x-100]`}>T</span>
      </div>
      <div>

 <svg width="35" height="41" viewBox="0 0 35 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_167_4285)">
<path d="M33.7185 22.0716C32.9839 22.8061 31.7929 22.8061 31.0584 22.0716L20.3299 11.3431C19.5954 10.6085 19.5954 9.41758 20.3299 8.68301V8.68301C21.0645 7.94845 22.2555 7.94845 22.99 8.68301L33.7185 19.4115C34.453 20.146 34.453 21.337 33.7185 22.0716V22.0716Z" fill="#7F00FF"/>
<path d="M33.7022 19.4046C34.4457 20.1481 34.4457 21.3534 33.7022 22.0968L23.1451 32.654C22.4017 33.3974 21.1963 33.3974 20.4529 32.654V32.654C19.7095 31.9105 19.7095 30.7052 20.4529 29.9618L31.01 19.4046C31.7535 18.6612 32.9588 18.6612 33.7022 19.4046V19.4046Z" fill="#7F00FF"/>
<rect x="-1" y="39.6799" width="43.503" height="3.69609" rx="1.84805" transform="rotate(-65.8 -1 39.6799)" fill="#7F00FF"/>
</g>
<defs>
<clipPath id="clip0_167_4285">
<rect width="34.8826" height="41" fill="white"/>
</clipPath>
</defs>
</svg>
      
      </div>
      </div>
      </div>
      </nav>
      <nav className='md:hidden mx-12 w-2/4 flex items-center justify-end'>
      <div className='w-8 h-8'>
        
        <GiHamburgerMenu className='text-[--white-col] scale-150 w-full h-full hamburger-menu' onClick={()=>setIsHamburgerMenuOpen(true)} />
      </div>
      </nav>
    </header>
    { isHamburgerMenuOpen ? renderHamburgerMenuPanel(): null}
    <ScrollUp moveToSection ={moveToSection}/>
  </>
  )
}

export default NavBar
