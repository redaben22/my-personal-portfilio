import React from 'react'
import laptop from '../assets/objects/laptop.png'
import { RenderEachChar } from '../utils/renderChars'
import  {animateMainSection} from '../utils/animations'
import laptop400w from '../assets/objects/laptop-400w.png'
const HeroSection = () => {
console.log(laptop400w);

const titleText1 = 'HELLO WORLD!!' ,
WELOCOME ='WELOCOME TO MY ',
PORTFILIO = 'PORTFILIO'

animateMainSection('h1-title','h2-title','cursor');

  return (
    <section className='w-full lg:p-10 md:mx-4 mx-2 mt-5 mb-[200px]'>
     <div className='w-full z-10 flex my-0 mx-auto'> <div className='flex-1 title-text '> <div className='flex flex-col'> <h1 id='h1-title' className='title-text text-stroke flex items-start'> {RenderEachChar(titleText1)} {} <span id='cursor' className='title-cursor h-[100%] w-1 inline-block -bg--white-col opacity-75'></span> </h1> <div id='last-title' className='max-[500px]:flex-col flex flex-row items-center'> <h2 id='h2-title' className='text-stroke font-extrabold max-[500px]:flex-wrap flex items-center xl:text-[50px] lg:text-[31.5px] sm:text-[25.2px] text-[16px]'> {RenderEachChar(WELOCOME)} </h2> <h2 id='h2-title' className='text-stroke font-extrabold flex items-center xl:text-[50px] lg:text-[31.5px] sm:text-[25.2px] text-[16px] '> {RenderEachChar(PORTFILIO)} </h2> </div> </div> </div> <div className='basis-6/12'> <img id='laptop' fetchPriority='high' className='object-cover w-full aspect-auto' sizes="100vw" srcSet='/src/assets/objects/laptop-400w.png 450w,
      /src/assets/objects/laptop-800w.png 800w,
    /src/assets/objects/laptop.png 1920w' src={laptop} decoding='async' alt="laptop"/></div> </div> </section>
  )
}

export default HeroSection


