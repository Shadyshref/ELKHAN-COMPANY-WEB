import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const headerRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        headerRef.current.classList.add("scrolled")
      } else {
        headerRef.current.classList.remove("scrolled")
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 bg-[#080707] transition-all duration-300"
    >
      <div className="flex items-center justify-between px-6 sm:px-10 h-[100px] transition-all duration-300">
        <img
        onClick={()=>navigate('/')}
          src="/images/second-image.png-removebg-preview.png"
          alt="logo"
          className="w-[100px] cursor-pointer sm:w-[140px]"
        />

        <ul className="flex items-center gap-4 text-white text-[16px] sm:text-[18px]">
          <li
            onClick={() => navigate('/')}
            className="cursor-pointer hover:underline"
          >
            Home
          </li>
          <li
            onClick={() => {
              const footer = document.getElementById('contact')
              if (footer) {
                footer.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="cursor-pointer hover:underline"
          >
            Contact us
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
