import React, { forwardRef, startTransition, useEffect, useRef, useState } from 'react'
import {  RenderEachWord } from '../utils/renderChars';
import { animateContactSection } from '../utils/animations';
import SVGComponent from './SvgComponent';
import emailjs from '@emailjs/browser';
import { IoIosWarning } from "@react-icons/all-files/io/IoIosWarning";
import { FaRegCheckCircle } from "@react-icons/all-files/fa/FaRegCheckCircle";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const ContactSection = () => {

  const contactMeText = 'DONT HESITATE !! AM AVAILABLE 24/7';
    const form = useRef();
    const [isFormSubmited , setIsFormSubmited] = useState(false);
    const [formResult,setFormResult]=useState({
      result:'',
      error :'',
    })
  const changeLabelText = (value,id) =>{
    if(id === 'comment-label'){
      
      value.value.length !== value.maxLength ? document.getElementById(id).innerHTML ='comment section:' : document.getElementById(id).innerHTML = 'comment section:(maximum Limit Reached)'
      
    }else{
    const labelText = id.substring(0 , id.indexOf('-'));

    value.length > 0 ? document.getElementById(id).innerHTML = labelText : document.getElementById(id).innerHTML = labelText +'*';
    }


  }

  animateContactSection('contactMe-text','contact-cursor',{
    start:'0%',
    end: '+=500',
 });

  const SendEmailForm = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_ga1f70q', 'template_uwt6r98', form.current, {
      publicKey: 'wK3d5Ur69PqBu5p2v',
    })
    .then(
      (_) => {
        console.log(_);
        setFormResult({
          error :'',
          result : 'The message was succesfully sent.',
        });
        setIsFormSubmited(true);
      },
      (error) => {    
        setFormResult({
          error :error,
          result :'',
        });
        setIsFormSubmited(true);
      },
    );
  }

useGSAP(()=>{
if(isFormSubmited){
  const toast = document.getElementById('toast');
  const loadingBar = document.getElementById('loading-bar');
  gsap.from(toast,{
    opacity:0.5,
    duration:0.3,
    x:100,
  })
  gsap.to(loadingBar,{
    width:'0px',
    duration:5,
    ease:'none',
    onComplete:()=>{
    setIsFormSubmited(false);
    }
  })
}
},[isFormSubmited])

const style ={
  height:'100%',
  width:'100%' ,
  color:formResult.result ? 'green' :'red' ,
}

const RenderFormResult =()=>{
    return (
      <div id='toast' className='sm:w-[500px] w-full flex items-center justify-start card-border h-[100px] -bg--white-col fixed top-[10%] gap-[20px] md:right-[5%] right-0 p-5'>
        {/** close button*/}
        <div className='absolute top-[5%] right-[3%]'>
        <IoClose  style={{width:'30px',cursor:'pointer' , height:'30px' , color:'#7F00FF'}} onClick={()=>setIsFormSubmited(false)}/>
        </div>
        <div className='w-[25px] h-[25px]'>
          { formResult.result ?
          <FaRegCheckCircle style={style} /> :
          <IoIosWarning style={style} />
          }
          
        </div>
        <div className='flex-1 font-semibold'>
          {formResult.result ? formResult.result : formResult.error}
        </div>
        {/** loading bar */}
        <div id='loading-bar' className={`absolute w-full h-2 ${formResult.result ? 'bg-green-600' : 'bg-red-600'} bottom-0 left-0 right-0`}></div>
      </div>
    )
}

  return (
    <>
   
    <section id='contact' className='contacts w-full relative flex items-center justify-start mb-[200px] mt-[200px] p-5 lg:p-10'> <div className='w-full flex items-center justify-start my-[100px] py-10 xl:py-20 '> {} <div className='flex-1 relative w-[70%] min-h-[314px] -bg--black-col card-border flex flex-col'> <div className='m-8 flex-center py-2'> <h3 className='card-title'> CONTACT ME: </h3> </div> <div className='w-full mx-2 lg:px-[40px] px-[20px] py-[20px]'> <form action="contact" ref={form} className='flex flex-col gap-y-2 justify-start' onSubmit={SendEmailForm}> <label id='name-label' htmlFor="user-name" className='w-fit label-text'>Name*</label> <input id='user-name' name='user-name' required type="text" className='input-section' placeholder='name here' onChange={(e)=>changeLabelText(e.target.value , 'name-label')} /> <label id='email-label' htmlFor="user-email" className='w-fit label-text'>email*</label> <input id='user-email' name='user-email' required type="email" className='input-section' placeholder='email here' onChange={(e)=>{changeLabelText(e.target.value,'email-label')}} /> <label id='comment-label' htmlFor="user-comment" className='w-fit label-text'>comment section:</label> <textarea id='user-comment' style={{height:'200px'}} required name='user-comment' placeholder='Put your comment here.' minLength={20} maxLength={400} className='text-area-section' onChange={(e)=>{changeLabelText(e.target,'comment-label')}}></textarea> <div className='flex-center my-6'> <button type='submit' className='send-button'>Send</button> </div> </form> </div> </div> {} <div id='contact-container' className='flex-center max-xl:hidden flex-wrap h-full basis-[30%] min-h-[314px] mb-[100px]'> <h2 id='contactMe-text' className='text-stroke font-extrabold h-full w-full flex items-center text-center flex-wrap xl:text-[50px] -text--white-col px-2'> {RenderEachWord(contactMeText.split(' '))} <span id='contact-cursor' className='w-1 xl:h-[40px] lg:h-[22px] -bg--white-col opacity-75'></span> </h2> </div> </div> <div className='max-xl:hidden inline-block'> <SVGComponent className='svg-cont'/> </div> </section>
    {isFormSubmited?  RenderFormResult(): null}

    </>
  )
}

export default ContactSection
