import React, { useEffect, useMemo, useState, useRef } from 'react'
import Header from '../components/Header'
import FirstPage from '../components/FirstPage'
import Story from './story/Story'
import Work from './work/Work'
import Skills from './skill/Skills'
import Explorations from './explorations/Explorations'
import Connect from './connect/Connect'

function MainPage() {
  const [activeSection, setActiveSection] = useState('story')
  const sections = useMemo(()=> ['story', 'works', 'skills', 'explorations', 'connect'],[]);
  let autoScrolling = useRef(false);
  const slides = [
    {image : 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600', caption : 'first project'},
    {image : 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600', caption : 'second project'},
    {image : 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600', caption : 'third project'},
    {image : 'https://images.pexels.com/photos/3782248/pexels-photo-3782248.jpeg?auto=compress&cs=tinysrgb&w=600', caption : 'forth project'},
    {image : 'https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&w=600', caption : 'fifth project'},
    {image : 'https://images.pexels.com/photos/45718/pexels-photo-45718.jpeg?auto=compress&cs=tinysrgb&w=600', caption : 'sixth projedt'}
  ]

  // Function to scroll to a section by ID
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle mannual scrolling
  useEffect(()=>{
    const handleScroll = () =>{
      if(autoScrolling.current) return;

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight/2 && rect.bottom >= window.innerHeight/2;
      });
      
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
      console.log('this is ', activeSection)
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      return window.removeEventListener('scroll', handleScroll)
    }
  }, [activeSection, sections])


  // Handle auto-scrolling
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      autoScrolling.current = true;

      const currentIndex = sections.indexOf(activeSection);
      const nextSection = sections[(currentIndex + 1) % sections.length];

      scrollToSection(nextSection);
      setActiveSection(nextSection);

      autoScrolling.current = false;
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, [activeSection, sections]);


  return (
    <div className='mainPage'>
        <Header activeSection = {activeSection}/>
        <FirstPage/>
        <Story/>
        <Work/>
        <Skills/>
        <Explorations slides={slides}/>
        <Connect/>
    </div>
  )
}

export default MainPage