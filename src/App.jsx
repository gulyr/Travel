import React, { useEffect } from 'react'
import './assets/css/style.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'
import './assets/js/scrollreveal.min.js'
import { useDispatch } from 'react-redux'
import {
  setActiveSection,
  setScrollUpVisible,
} from './redux/slices/menuSlice.js'

const App = () => {
  const dispatch = useDispatch()
  const sections = ['home', 'about', 'popular', 'explore', 'join']

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      dispatch(setScrollUpVisible(scrollY >= 350))

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId)
        if (section) {
          const sectionTop = section.offsetTop - 58
          const sectionHeight = section.offsetHeight
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            dispatch(setActiveSection(sectionId))
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dispatch, sections])

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 3000,
      delay: 400,
      reset: true,
    })
    sr.reveal(`.home_data, .explore_data, .explore_user, .footer_container`)
    sr.reveal('.home_card', { delay: 600, distance: '100px', interval: 100 })
    sr.reveal('.about_data, .join_image', { origin: 'right' })
    sr.reveal('.about_image, .join_data', { origin: 'left' })
    sr.reveal('.popular_card', { interval: 200 })
  }, [])
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <ScrollUp />
    </div>
  )
}

export default App
