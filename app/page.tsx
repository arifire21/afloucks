import styles from '@/styles/page.module.css'
import {WorkCard, ProjectCard} from '@/components/card'
import { List, ListDivider, ListItem, Typography } from '@mui/joy'
import Navbar from '@/components/navbar'
import { SiFigma, SiHtml5, SiCss3, SiAmazonaws, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiJquery, SiDjango, SiDiscord, SiGithub, SiDevpost, SiLinkedin } from "react-icons/si";
import EagleEyeLogo from '@/images/eagle-eye/logo_transparent_crop.png'
import LEILogo from '@/images/loucks-eng/logo192.png'
import SilviLogo from '@/images/silvi/silvi_logo.webp'
import JustLearnLogo from '@/images/justlearn/justlearn_logo.webp'

export default function Home() {
  return (
    <>
    <Navbar/>
    <section style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h1>Arianna Loucks</h1>
      <p>stuff</p>

      <List
         orientation='horizontal'
         variant='outlined'
         sx={{
            // flexGrow: 0,
            mx: 'auto',
            '--ListItem-paddingY': '1rem',
            borderRadius: 'md',
            width:'fit-content'
          }}
          >
            <ListItem><SiReact size={25}/>React.js</ListItem>
            <ListDivider inset='gutter'/>
            <ListItem><SiNextdotjs size={25}/>Next.js</ListItem>
            <ListDivider inset='gutter'/>
            <ListItem><SiHtml5 size={25}/>HTML5</ListItem>
            <ListDivider inset='gutter'/>
            <ListItem><SiJavascript size={25}/>JavaScript</ListItem>
            <ListDivider inset='gutter'/>
            <ListItem><SiTypescript size={25}/>TypeScript</ListItem>
            <ListDivider inset='gutter'/>
            <ListItem><SiJquery size={25}/>jQuery</ListItem>
            <ListDivider inset='gutter'/>
            <ListItem><SiCss3 size={25}/>CSS/SCSS</ListItem>
            <ListDivider inset='gutter'/>
            <ListItem><SiFigma size={25}/>Figma</ListItem>
            <ListDivider inset='gutter'/>
            <ListItem><SiAmazonaws size={25}/>AWS (EC2, Lambda)</ListItem>
            <ListDivider inset='gutter'/>
            <ListItem><SiDjango size={25}/>Django</ListItem>
            {/* <ListDivider inset='gutter'/>
            <ListItem><SiDiscord size={25}/>Discord.js</ListItem> */}
        </List>
    </section>

    <main className={styles.main}>
    <h1>Professional Experience</h1>
      {/* <div className={styles.cardContainer}>
        <WorkCard
          logo={EagleEyeLogo}
          position='Website Designer and Developer'
          company='Eagle Eye Monitoring, LLC.'
          jobType='Freelance (Remote)'
          duration='Nov 2023 - Present'
          blurb='Figma | TypeScript | SCSS | Next.js | SendGrid | MaterialUI-Base'
          link='/professional/eagle-eye'
        />

        <WorkCard
          logo={LEILogo}
          position='Website Developer'
          company='Loucks Engineering, Inc.'
          jobType='Part-Time'
          duration='May 2023 - Present'
          blurb='React.js | JavaScript | React-Bootstrap | JSON | CD/CI (Heroku)'
          link='/professional/loucks-eng'
        />

        <WorkCard
          logo={SilviLogo}
          position='Front-End Web Developer'
          company='Silvi'
          jobType='Part-Time (Remote)'
          duration='Jun 2022 - Jul 2023'
          blurb='TypeScript | SCSS | Next.js | APIs | in-browser camera'
          link='/professional/silvi'
        />

        <WorkCard
          logo={JustLearnLogo}
          position='Front-End Web Developer'
          company='JustLearn'
          jobType='Internship & Part-Time (Remote)'
          duration='Nov 2021 - June 2022'
          blurb='Django | HTML5 | SCSS | JavaScript | Python | jQuery | Web APIs | Bootstrap'
          link='/professional/justlearn'
        /> */}
      {/* </div> */}

      <h1>Projects</h1>
      {/* <div className={styles.cardContainer}>
        <ProjectCard
          projectTitle='Discord.js Bot'
          subtitle=''
          date='Nov 2022 - Present'
          blurb='Discord.js | Node.js | Axios | WikiMedia API'
          link='projects/other'
        />

        <ProjectCard
          projectTitle='Discord.js Bot'
          subtitle=''
          date='Nov 2022 - Present'
          blurb='Discord.js | Node.js | Axios | WikiMedia API'
          link='projects/other'
        />

        <ProjectCard
          projectTitle='Plant Watering Notification System'
          subtitle='Secure IoT Final Project'
          date='Apr - May 2021'
          blurb='Arduino Wifi 1000 | MailChimp'
          link='projects/arduino'
        />

        <ProjectCard
          projectTitle='Discord.js Bot'
          subtitle=''
          date='Nov 2022 - Present'
          blurb='Discord.js | Node.js | Axios | WikiMedia API'
          link='projects/other'
        />

        <ProjectCard
          projectTitle='Dog-Walking Alarm Clock'
          subtitle='Hands-On Engineering Design Final Project'
          date='Aug - Dec 2020'
          blurb='Arduino Uno R3 | Solidworks'
          link='projects/arduino'
        /> */}
      {/* </div> */}
      </main>

      <section>
        <p>Connect with me!</p>
        <a href='https://github.com/arifire21/' target='_blank'><SiGithub size={25}/>Github</a>
        <a href='https://devpost.com/afloucks' target='_blank'><SiLinkedin/>Linkedin</a>
        <a href='https://github.com/arifire21/' target='_blank'><SiDevpost size={25}/>Devpost</a>
      </section>
      <footer>
        <p>Website made with <span>Next.js</span> and <span>Material Joy UI</span></p>
      </footer>
      </>
  )
}
