import React from 'react'
import { RenderEachChar } from '../../utils/renderChars'
import { animateErrorSection } from '../../utils/animations'
import { useNavigate } from 'react-router-dom'
const ErrorPage = () => {
  const navigate = useNavigate();
  const errorMessage = 'BACK TO THE PAGE ?'

animateErrorSection('error-text','error-cursor');

  return (
    <section className='w-dvw h-dvh flex-center overflow-x-hidden'>
      <div className='w-fit h-[50%] flex flex-col'>
        <h1  className='w-full h-fit p-4 title-text text-stroke' >ERROR 404 : PAGE NOT FOUND </h1>
        <h2 id='error-text' className='text-stroke min-h-[120px] w-full h-fit p-4 font-extrabold max-[500px]:flex-wrap flex items-center xl:text-[50px] lg:text-[31.5px] sm:text-[25.2px] text-[16px] -text--white-col'>
        {RenderEachChar(errorMessage)}
        <span id='error-cursor' className='title-cursor w-1 inline-block -bg--white-col opacity-75' style={{height:'50%'}}></span>
        </h2>
        <div className='my-8 w-full h-fit flex-center '>
          <button className='return-button' onClick={()=>navigate('/')}>RETURN</button>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
