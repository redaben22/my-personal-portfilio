import React, { Suspense, useEffect } from 'react'
import { lazy } from 'react';

const SkillsSecton = lazy(() => import('../SkillsSecton'));
const ProjectsSection = lazy(() => import('../ProjectsSection'));
const AboutSection = lazy(() => import('../AboutSection'));
const ContactSection = lazy(() => import('../ContactSection'));
const Footer = lazy(() => import('../Footer'));

import IntroductionSection from '../IntroductionSection'
import MainSection from '../MainSection'


const MainPage = () => {
  useEffect(()=>{
    document.body.style.overflowX = 'hidden'
  })
  return (
    <>
    <MainSection/>
    <IntroductionSection/>
    <Suspense>
      <SkillsSecton/>
      <ProjectsSection/>
      <AboutSection/>
      <ContactSection/>
      <Footer/>
    </Suspense>
    </>
  )
}

export default MainPage
