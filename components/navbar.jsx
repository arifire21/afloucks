"use client"
import DarkModeSwitch from '@/components/switch'
import {Button} from '@mui/joy'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar(){
  const pathname = usePathname()

  function customScroll(id){
    // console.log(id)
    let element = document.getElementById(id)
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
  }

    return(
      <header className="navbar sticky" id='navbar'>
        {pathname === '/contact' ? (
          <nav className='center-nav'>
            <p style={{color:'#fff'}}>Contact</p>
          </nav>
        ) : (
          <>
          <nav className='center-nav desktop'>
            <a className='nav-item' id='about-nav' aria-label="About Me section nav" onClick={() => customScroll('about')}>About Me</a>
            <span className='bullet'>&bull;</span>
            <a className='nav-item' id='experience-nav' aria-label="Experience section nav" onClick={() => customScroll('experience')}>Experience</a>
            <span className='bullet'>&bull;</span>
            <a className='nav-item' id='project-nav' aria-label="Projects section nav" onClick={() => customScroll('projects')}>Projects</a>
          </nav>
          <div className='center-nav mobile'>
            <p className='nav-item' id='mobile-nav' aria-label="mobile section nav">About Me</p>  {/* by default */}
          </div>
          </>
        )}

        <div className='flex-other'>
          <DarkModeSwitch/>

          {pathname === '/contact' ? (
           <Link href={'/'}>
            <Button 
              variant="solid"
              size="md"
              color="primary"
              aria-label="Home button"
              sx={{ ml: 'auto', fontWeight: 600 }}
            >
              Home &#8594;
              </Button>
            </Link>
          ) : (
            <Link href={'/contact'}>
            <Button 
              variant="solid"
              size="md"
              color="primary"
              aria-label="Contact Me button"
              sx={{ ml: 'auto', fontWeight: 600 }}
            >
              Contact &#8594;
              </Button>
            </Link>
          )}
        </div>
      </header>
    )
}