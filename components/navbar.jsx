import DarkModeSwitch from '@/components/switch'
import { HiArrowRight } from 'react-icons/hi'
import Button from '@mui/joy/Button'
import Link from 'next/link'

export default function Navbar(){

  function customScroll(id){
    console.log(id)
    let element = document.getElementById(id)
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
  }
    return(
      
        <header className="navbar">
          <nav className='center-nav'>
            <a className='nav-item' id='about-nav' aria-label="About Me section nav" onClick={() => customScroll('about')}>About Me</a>
            <span className='bullet'>&bull;</span>
            <a className='nav-item' id='experience-nav' aria-label="Experience section nav" onClick={() => customScroll('experience')}>Experience</a>
            <span className='bullet'>&bull;</span>
            <a className='nav-item' id='project-nav' aria-label="Projects section nav" onClick={() => customScroll('projects')}>Projects</a>
          </nav>

          <div className='flex-other'>
            <DarkModeSwitch/>

            {/* <Button 
              variant="solid"
              size="md"
              color="primary"
              aria-label="Contact Me button"
              sx={{ ml: 'auto', fontWeight: 600 }}
            >
              <Link href='/contact'>Contact Me <HiArrowRight/></Link>
            </Button> */}
          </div>
        </header>
    )
}