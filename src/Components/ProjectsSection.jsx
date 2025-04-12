import React, { useEffect, useState } from 'react'
import { animateProjectVideos } from '../utils/animations';
import { allVideos } from '../assets/project-video/videos';
const ProjectsSection = () => {

  
  const [isWidthEnough ,setIsWidthEnough] = useState(null);
 
  const {coffeeShop ,loginSigninPage ,socialMediaSite } = allVideos;

useEffect(()=>{

const handleResize =()=>{
  const videoContainer = document.getElementById('videos-container');
   const paddingLeft= window.getComputedStyle(videoContainer).paddingLeft;
   const paddingRight= window.getComputedStyle(videoContainer).paddingRight;
   
   const diff = videoContainer.offsetWidth - (300 * 3 + Number(paddingLeft.substring(0,paddingLeft.indexOf("p"))) + Number(paddingRight.substring(0,paddingRight.indexOf("p")))  +20);
    setIsWidthEnough(diff <= 0 ? false : true);
  }

  handleResize();

   window.addEventListener("resize", handleResize);
   return () => window.removeEventListener("resize", handleResize);
    
},[])

 animateProjectVideos('video1-container','video2-container','video3-container',{
  start:'center bottom',
    end:'bottom 20%',
},isWidthEnough
)

useEffect(()=>{
const video = document.getElementById('video1');

function checkFullScreen(){
  console.log(video.onfullscreenchange);
  
}

video.addEventListener('click',checkFullScreen);
},[])


const renderProjectName =(name)=>{
return isWidthEnough ? <div className={`card-text font-extrabold -text--white-col mt-10 flex-center 'w-[30%]' h-fit  min-w-[300px] mx-3 `} >
{name}
</div> : null;
}

  return (
    <section id='projects' className='projects w-full max-[500px]:px-2 flex-center mb-[200px] mt-[200px] p-5 lg:p-10'> <div className='w-full xl:mx-0 max-[500px]:mx-0 mx-2 h-full flex-col flex-center -bg--black-col card-border'> {} <div className='my-2 mt-6 h-1/6'> <h3 className='card-title'>PROJECTS A REALISED:</h3> </div> {} <div id='videos-container' className={`w-full h-full p-5 my-10 xl:px-10 flex ${isWidthEnough ? 'flex-row' : 'flex-col' } items-center justify-between `} > <div id='video1-container' className={`flex-col ${isWidthEnough ? 'w-[30%]' : 'w-[60%]' } min-w-[300px] mx-3 my-5 aspect-square`}> <video id='video1' controls muted loop src={coffeeShop} className='card-border' ></video> {renderProjectName('coffeeShop Ecommerce site')} </div> <div id='video2-container' className={`flex-col ${isWidthEnough ? 'w-[30%]' : 'w-[60%]' } min-w-[300px] mx-3 my-5 aspect-square`}> <video id='video2' controls muted loop src={loginSigninPage} className='card-border' ></video> {renderProjectName('Login/Signin pages')} </div> <div id='video3-container' className={`flex-col ${isWidthEnough ? 'w-[30%]' : 'w-[60%]' } min-w-[300px] mx-3 my-5 aspect-square`}> <video id='video3' controls muted loop src={socialMediaSite} className='card-border' ></video> {renderProjectName('Social media site page')} </div> </div> </div> </section>
  )
}

export default ProjectsSection
