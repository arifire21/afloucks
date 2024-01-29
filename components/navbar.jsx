import DarkModeSwitch from '@/components/switch'
import { HiArrowRight } from 'react-icons/hi'
import Button from '@mui/joy/Button'
import Link from 'next/link'

export default function Navbar(){
    return(
      
        <header className="navbar">
          <nav className='center-nav'>
            <a href='#about' className='nav-item' id='about-nav' aria-label="About Me section nav">About Me</a>
            <span className='bullet'>&bull;</span>
            <a href='#experience' className='nav-item' id='experience-nav' aria-label="Experience section nav">Experience</a>
            <span className='bullet'>&bull;</span>
            <a href='#projects' className='nav-item' id='project-nav' aria-label="Projects section nav">Projects</a>
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