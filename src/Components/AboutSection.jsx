import React, { useEffect, useState } from 'react'
import { RenderEachWord } from '../utils/renderChars';
import { animateAboutSection } from '../utils/animations';
import { BsFillSkipForwardFill } from '@react-icons/all-files/bs/BsFillSkipForwardFill';
const AboutSection = () => {

  const aboutText = "In this section i will breafly summerize the job i do.";
  const aboutText2 = "My main job is to make sure your webpage look as good as possible ,and with using both my javascript and css skills create good making it interactible and good for the visitor while also maintaining the good performance , i will provide a free webpage warrany for two months after it launches making sure it runs without any issues." 
  const aboutText3 = 'Lastly ,everything you see in this page is my own work exept fot the laptop in the main section so i will give you the link for it if you want it, and also if you need anything on this page you can contact me aswell , we that out of the way we can move to the contact section..'
  

  animateAboutSection('word', 'about-cursor',{
    start:'center bottom',
    end:'bottom 20%',
    toggleActions:'play pause resume pause',
  });





  return (
    <section id='about' className='abouts w-full flex-center mb-[200px] mt-[200px] p-5 lg:p-10'> <div className='w-full flex-center my-14 py-10 lg:px-10 xl:py-20'> <div className='w-full relative flex-col h-full card-border min-h-[450px] -bg--black-col'> {} <div className='px-[15%] my-5 h-1/5 flex-center'> <h3 className='card-title'>ABOUT:</h3> </div> {} <div id='about-section' className='w-full p-5'> <p id='about-text' className='flex card-text'> {RenderEachWord(aboutText.split(' '),'about')} <span id='about-cursor' className='w-1 h-[24px] -bg--white-col opacity-75'></span> </p> <p id='about-text2' className='flex card-text'> {RenderEachWord(aboutText2.split(' '),'about')} </p> <p id='about-text3' className='flex card-text'> {RenderEachWord(aboutText3.split(' '),'about')} </p> </div> {} <div id='about-skip-button' className='absolute bottom-[5%] right-[5%] flex-center hover:scale-110 transition-all cursor-pointer'> <h5 className='skip-button'>SKIP</h5> <BsFillSkipForwardFill className='skip-button ml-2'/> </div> </div> </div> </section>
  )
}

export default AboutSection
