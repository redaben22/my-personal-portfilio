import React from 'react'
import {SocialIcon} from 'react-social-icons'
const Footer = () => {
  return (
    <footer className='w-full relative bottom-0 -bg--black-col flex flex-col md:flex-row items-center mt-[200px] min-h-[200px] footer-border'>
      {/** portfilio 2024 */}
      <div className='h-[100px] flex-center md:flex-1'>
          <h3 className='-text--white-col text-[19.2px]'>@Portfilio 2024</h3>
      </div>
      <div className='h-full max-[500px]:w-full w-[50%] flex md:items-center md:justify-end gap-5 mx-5 justify-center'>
        {/** linkednIn */}
        <div className='w-fit flex-center'>
        <SocialIcon
        target='_blank'
         url="https://www.linkedin.com/in/reda-ben-aa8696289/" 
         style={{height:'var(--social-media-radius)', 
         width:'var(--social-media-radius)'}}/>
        <a className='social-media-text'
        target='_blank' 
        href='https://www.linkedin.com/in/reda-ben-aa8696289/'>Linkedln</a>
        </div>
        {/** facebook */}
        <div className='w-fit flex-center'>
        <SocialIcon 
        url="https://www.facebook.com/profile.php?id=100005909295438"
        target='_blank'
         style={{height:'var(--social-media-radius)' ,width:'var(--social-media-radius)'}} />
        <a className='social-media-text'
         href="https://www.facebook.com/profile.php?id=100005909295438"
         target='_blank'
         >Facebook</a>  
        </div>
         {/** fiverr */}
         <div className='w-fit flex-center'>
         <SocialIcon url="https://www.fiverr.com/redabend22/buying?source=avatar_menu_profile" 
         target='_blank'
         style={{height:'var(--social-media-radius)', width:'var(--social-media-radius)'}}/>
          <a className='social-media-text' 
          href="https://www.fiverr.com/redabend22/buying?source=avatar_menu_profile"
          target='_blank'
          >Fiverr</a>
         </div>
         {/** github */}
         <div className='w-fit flex-center'>
         <SocialIcon url="https://github.com/redaben22" 
         target='_blank'
         style={{height:'var(--social-media-radius)', width:'var(--social-media-radius)'}}/>
          <a className='social-media-text' 
          href="https://github.com/redaben22"
          target='_blank'
          >GitHub</a>
         </div>
      </div>
    </footer>
  )
}

export default Footer
