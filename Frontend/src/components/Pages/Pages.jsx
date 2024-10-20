import React from 'react'
import Landing from '../Landing/Landing'
import About from '../About/About'
import Contact from '../Contact/Contact'
import './Pages.css'

const Pages = () => {
  return (
    <>
        <div className="pages-container">
            <section id = "Home">
                <Landing />
            </section>
            <section id = "About">
                <About />
            </section>
            <section id = "Contact">
                <Contact />
            </section>
        </div>
    </>
  )
}

export default Pages