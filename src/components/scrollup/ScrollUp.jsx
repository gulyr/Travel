import React, { useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { HashLink as Link } from 'react-router-hash-link'
import { setScrollUpVisible } from '../../redux/slices/menuSlice'

const ScrollUp = () => {
  const dispatch = useDispatch()
  const scrollUpVisible = useSelector((state) => state.menu.scrollUpVisible)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 350) {
        dispatch(setScrollUpVisible(true))
      } else {
        dispatch(setScrollUpVisible(false))
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [dispatch])
  return (
    <Link
      smooth
      to={'#'}
      className={`scroll_up ${scrollUpVisible ? 'show_scroll' : ''}`}
      id="scrollUp"
    >
      <FaArrowUp className="icon" />
    </Link>
  )
}
export default ScrollUp
