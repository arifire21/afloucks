"use client"
import styles from '@/styles/page.module.css'
import {WorkCard, ProjectCard} from '@/components/card'
import { List, ListDivider, ListItem, Typography } from '@mui/joy'
import Navbar from '@/components/navbar'
import { SiFigma, SiHtml5, SiCss3, SiAmazonaws, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiJquery, SiDjango, SiDiscord, SiGithub, SiDevpost, SiLinkedin, SiJira, SiTrello, SiCanva, SiPython, SiMysql, SiOracle, SiNotion, SiGimp, SiMui, SiBootstrap, SiNodedotjs, SiVisualstudiocode, SiVisualstudio, SiCplusplus, SiCsharp, SiUnity, SiArduino, SiCreality, SiMongodb } from "react-icons/si";
import { FaJava } from 'react-icons/fa';
import { useEffect } from 'react';
import Carousel from '@/components/carousel'

import {justLearnImages, silviImages, LeiImages, surveyImages} from './all_image_data.js'
import ContactInfo from '@/components/contact-info.jsx'

export default function Home() {
  const desktopMode = document.querySelector('.desktop')
  const mobileMode = document.querySelector('.mobile')

  // if(mobileMode){
  useEffect(() => {
    // Function to handle scroll events
    // Get current scroll position
    let scrollTop = document.body.scrollTop;
  
    //get others
    const aboutPos = document.getElementById('about')!.offsetTop - 86;
    const experiencePos = document.getElementById('experience')!.offsetTop - 86;
    const projectPos = document.getElementById('projects')!.offsetTop - 86;
  
    const aboutNav = document.getElementById('about-nav');
    const experienceNav = document.getElementById('experience-nav');
    const projectNav = document.getElementById('project-nav');

    //set default
    if(scrollTop == 0){
      aboutNav?.classList.add('nav-active')
    }
  
    const navActivateCallback = (e: Event) => {
      scrollTop = document.documentElement.scrollTop
  
      // console.log(`${scrollTop}, aboutPos ${aboutPos}, experiencePos ${experiencePos}, projectPos ${projectPos}`)
      
      if  ((!aboutNav?.classList.contains('nav-active'))
          && (scrollTop == 0 || (scrollTop > aboutPos && scrollTop < experiencePos))){
        aboutNav!.classList.add('nav-active');
        // console.log('aboutnav changed')
        experienceNav!.classList.remove('nav-active');
      }
      else if((!experienceNav?.classList.contains('nav-active'))
          && (scrollTop > experiencePos && scrollTop < projectPos)){
        experienceNav!.classList.add('nav-active');
        aboutNav!.classList.remove('nav-active');
        projectNav!.classList.remove('nav-active');
        // console.log('expnav changed')
      }
      else if((!projectNav?.classList.contains('nav-active'))
        && (scrollTop > experiencePos && scrollTop > projectPos)){
        projectNav!.classList.add('nav-active');
        experienceNav!.classList.remove('nav-active');
        // console.log('projectnav changed')
      }
    }
  
    //mount
    window.addEventListener("scroll", navActivateCallback);
  
    //clean-up, unmount
    return () => window.removeEventListener('scroll', navActivateCallback);
  
  }, []);
// }

  return (
    <>
    <Navbar/>
    <div className={styles.main}>

      <section className={styles.genericCenter}>
        <h1 className={styles.header} id='about'>Arianna Loucks</h1>
        <div style={{padding: `0 20%`, textAlign:'center'}}>
          <p>I&apos;m a programmer and IT graduate inspired by the experimentation and endless creative options that accompanies web development. 
            I have strong foundations in vanilla HTML/CSS/JS and ReactJS, and am currently using NextJS for multiple projects. 
            In the past, I&apos;ve enjoyed contributing to multiple hackathon projects with both front-end and full-stack development.
            Outside of coding, I like to work on digital art, Unity projects, and  3D-printing.
          </p>
        </div>

        <h2>What I Use:</h2>
        <h3>Languages</h3>
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
              <ListItem><SiJavascript size={25}/>JavaScript</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><SiTypescript size={25}/>TypeScript</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><SiJquery size={25}/>jQuery</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><SiHtml5 size={25}/>HTML5</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><SiCss3 size={25}/>CSS/SCSS</ListItem>
          </List>

          <List
          orientation='horizontal'
          variant='outlined'
          sx={{
              mt:'0.5rem',
              mx: 'auto',
              '--ListItem-paddingY': '1rem',
              borderRadius: 'md',
              width:'fit-content'
            }}
            >
              <ListItem><SiPython size={25}/>Python</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><SiMysql size={25}/>MySQL</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><FaJava size={25}/>Java</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><SiCplusplus size={25}/>C++</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><SiCsharp size={25}/>C#</ListItem>
          </List>

        <h3>Frameworks and Tools</h3>
        <List
        orientation='horizontal'
        variant='outlined'
        sx={{
            mx: 'auto',
            '--ListItem-paddingY': '1rem',
            borderRadius: 'md',
            maxWidth:'fit-content'
          }}
          >
            <ListItem><SiReact size={25}/>React.js</ListItem>
            <ListDivider inset='gutter'/>
            <ListItem><SiNextdotjs size={25}/>Next.js</ListItem>
            <ListDivider inset='gutter'/>
            <ListItem><SiNodedotjs size={25}/>Node.js</ListItem>
            <ListDivider inset='gutter'/>
            <ListItem><SiDjango size={25}/>Django</ListItem>
            <ListDivider inset='gutter'/>
            <ListItem><SiAmazonaws size={25}/>AWS<Typography level='body-sm'>(EC2, Lambda)</Typography></ListItem>
            <ListDivider inset='gutter'/>
            <ListItem><SiVisualstudiocode size={25}/>VSCode</ListItem>
          </List>

          <List
          orientation='horizontal'
          variant='outlined'
          sx={{
              mt:'0.5rem',
              mx: 'auto',
              '--ListItem-paddingY': '1rem',
              borderRadius: 'md',
              width:'fit-content'
            }}
            >
            <ListItem><SiMui size={25}/>Material UI<Typography level='body-sm'>(MD, Joy, Base)</Typography></ListItem>
            <ListDivider inset='gutter'/>
            <ListItem><SiBootstrap size={25}/>Bootstrap</ListItem>
          </List>

          <h3>Design and Productivity</h3>
          <List
          orientation='horizontal'
          variant='outlined'
          sx={{
              mx: 'auto',
              '--ListItem-paddingY': '1rem',
              borderRadius: 'md',
              maxWidth:'fit-content'
            }}
            >
              <ListItem><SiFigma size={25}/>Figma</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><SiCanva size={25}/>Canva</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><SiJira size={25}/>Jira</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><SiNotion size={25}/>Notion</ListItem>
              <ListDivider inset='gutter'/>
              <ListItem><SiTrello size={25}/>Trello</ListItem>
            </List>

            <h3>Hobby Tools:</h3>
            <List
            orientation='horizontal'
            variant='outlined'
            sx={{
                mx: 'auto',
                '--ListItem-paddingY': '1rem',
                borderRadius: 'md',
                maxWidth:'fit-content'
              }}
              >
                <ListItem><SiMongodb size={25}/>MongoDB</ListItem>
                <ListDivider inset='gutter'/>
                <ListItem><SiGimp size={25}/>GIMP</ListItem>
                <ListDivider inset='gutter'/>
                <ListItem><SiVisualstudio size={25}/>Visual Studio</ListItem>
                <ListDivider inset='gutter'/>
                <ListItem><SiUnity size={25}/>Unity<Typography level='body-sm'>(2D)</Typography></ListItem>
                <ListDivider inset='gutter'/>
                <ListItem><SiArduino size={25}/>Arduino</ListItem>
                <ListDivider inset='gutter'/>
                {/* <ListItem><SiOracle size={25}/>Oracle SQL</ListItem>
              <ListDivider inset='gutter'/> */}
                <ListItem><SiCreality size={30}/>3D Printing</ListItem>
              </List>
      </section>

      <section>
        <h1 className={styles.header} id='experience'>Professional Experience</h1>
          <div className={styles.sharedCardContainer}>
            <WorkCard
              position='Website Designer and Developer'
              company='Oceanside Group Service'
              jobType='Freelance (Remote)'
              duration='Apr 2024 - Present'
              blurb='Website for welding & fabrication company.'
              tools={['Next.js', 'Figma']}
            />
            <WorkCard
              position='Website Designer and Developer'
              company='A-1 Property Management Solutions, Inc.'
              jobType='Freelance (Remote)'
              duration='Apr 2024 - Present'
              blurb='Website for property management company.'
              tools={['Next.js', 'Figma']}
            />
            <WorkCard
              // logo={EagleEyeLogo}
              position='Website Designer and Developer'
              company='Eagle Eye Monitoring, LLC.'
              jobType='Freelance (Remote)'
              duration='Nov 2023 - Apr 2024'
              blurb='Website for parking enforcement company.'
              // link='/professional/eagle-eye'
              tools={['Next.js', 'TypeScript', 'SCSS', 'Figma', 'MUI Base-UI', 'Vercel', 'Resend', 'React-Email']}
              buttons={[
              {
                text:'Visit Site',
                variant:'solid',
                link:'https://www.eemonitoringllc.com/',
                linkTo:'site'
              },
              {
                text:'View Figma Prototype',
                variant:'outlined',
                link:'https://www.figma.com/proto/wBBFOjAFeAkFhYMBuMIgsd/Eagle-Eye-Monitoring-Site?type=design&node-id=4-2&t=V68KdUeWL6SkpupE-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=4%3A2&mode=design',
                linkTo:'details'
              }, {
                text:'View Github',
                variant:'outlined',
                link:'https://github.com/arifire21/eagle-eye-site',
                linkTo:'github'
              }
            ]}
            />
          </div>

          <div className={styles.cardWithCarouselContainer}>
            <div className={styles.pageCarouselContainer}>
              <Carousel images={LeiImages} project='Loucks Engineering Inc.'/>
            </div>
            <WorkCard
              // logo={LEILogo}
              position='Website Developer'
              company='Loucks Engineering, Inc.'
              jobType='Part-Time'
              duration='May 2023 - July 2023'
              blurb='Website for consulting engineering firm, using React-Router-v6 and React-Bootstrap.'
              tools={['React.js', 'JavaScript', 'JSON', 'React-Bootstrap', 'Heroku']}
              buttons={[{
                text:'Visit Site',
                variant:'solid',
                link:'https://www.louckseng.com/',
                linkTo:'site'
              }]}
            />
          </div>

            <div className={styles.cardWithCarouselContainer}>
              <div className={styles.pageCarouselContainer}>
                <Carousel images={silviImages} project='Silvi'/>
              </div>
              <WorkCard
                // logo={SilviLogo}
                position='Front-End Web Developer'
                company='Silvi'
                jobType='Part-Time (Remote)'
                duration='Jun 2022 - Jul 2023'
                blurb='Silvi is a web-app that allows for users to track reforestation progress and interact with the community. Focused on a mobile-first approach, improved profile and asset management UX. Rebuilt in-browser camera components, focal points of the app, that used conditional rendering.'
                tools={['Mobile-first development', 'Next.js', 'TypeScript', 'SCSS', 'React-Bootstrap', 'Jira (Agile)', 'Github-CodeSpaces']}
                buttons={[{
                  text:'Visit Site',
                  variant:'solid',
                  link:'https://www.silvi.earth/',
                  linkTo:'site'
                }]}
              />
            </div>

            <div className={styles.cardWithCarouselContainer}>
              <div className={styles.pageCarouselContainer}>
                <Carousel images={justLearnImages} project='JustLearn'/>
              </div>
              <WorkCard
                // logo={JustLearnLogo}
                position='Front-End Web Developer'
                company='JustLearn'
                jobType='Internship & Part-Time (Remote)'
                duration='Nov 2021 - June 2022'
                blurb='JustLearn was started with the goal of teaching students about environmental sustainability. To streamline logging of trees, created in-browser camera functionality in vanilla JS, using Geolocation and getUserMedia APIs. Also modified Django models/views, and customized generated forms.'
                tools={['Mobile-first development', 'HTML5', 'SCSS', 'JavaScript', 'jQuery/jQueryUI', 'Web APIs', 'Django', 'Python', 'Bootstrap', 'Notion']}
              />
            </div>
      </section>

      <section>
        <h1 className={styles.header} id='projects'>Projects</h1>
        <div className={styles.cardWithCarouselContainer}>
          <div className={styles.pageCarouselContainer}>
            <Carousel images={surveyImages} project='PWA'/>
          </div>
          <ProjectCard
            projectTitle='Survey Web App'
            subtitle='[Alum] FRC Team (Robotics)'
            date='Nov 2023 - Present'
            blurb='Creating a web app made for a competitive robotics team to streamline survey during competitions.'
            tools={['Next.js', 'Vercel Postgres', 'Vercel Blob', 'MUI Joy-UI', 'CSS', 'JavaScript']}
            buttons={[
              {
                text:'Visit Site',
                variant:'solid',
                link:'https://744-survey.vercel.app/',
                linkTo:'site'
              },
              {
              text:'View GitHub',
              variant:'outlined',
              link:'https://github.com/arifire21/744-survey',
              linkTo:'github'
            }]}
          />
        </div>

        <div className={styles.sharedCardContainer}>
                  {/* TODO WHAT IS THIS A PLACEHOLDER FOR */}
         {/* <ProjectCard
            projectTitle='Discord.js Bot'
            date='Nov 2022 - Present'
            blurb='Bot created to present community wiki data.'
            tools={['Discord.js', 'Node.js', 'Axios', 'WikiMedia API']}
          />
           */}

          <ProjectCard
            projectTitle='Phishooks'
            date='Jan 2023 - May 2023'
            blurb='Capstone project using VirusTotal API. Designed frontend, including handling API response, conditional rendering, and mobile media rules. Also collaborated with team members to finalize designs and documentation.'
            tools={['React.JS', 'React-Bootstrap', 'Figma', 'VirusTotal API']}
            buttons={[{
              text:'View GitHub',
              variant:'solid',
              link:'https://github.com/arifire21/phishooks',
              linkTo:'github'
            }]}
          />
        {/* </div> */}

        <ProjectCard
            projectTitle='Discord.js Bot'
            date='Nov 2022 - May 2023'
            blurb='Bot created to present community wiki data.'
            tools={['Discord.js', 'Node.js', 'Axios', 'WikiMedia API', 'AWS (EC2)']}
        />

        {/* <div className={styles.cardContainer}> */}
          <ProjectCard
            projectTitle='Plant Watering Notification System'
            subtitle='Secure Internet of Things (IoT) Final Project'
            date='Apr 2021 - May 2021'
            blurb='Solo project - system created with an Arduino microcontroller that would measure moisture levels in soil.
            The Arduino would wirelessly trigger a connected mailing service to notify the user if the readings were low.'
            tools={['Arduino Wifi 1000', 'C++', 'MailChimp']}
            buttons={[{
              text:'View Details',
              variant:'solid',
              link:'https://youtu.be/0VJrU7v5NAY',
              linkTo:'details'
            }]}
          />
        {/* </div> */}

        {/* <div  className={styles.cardContainer}> */}
          <ProjectCard
            projectTitle='Dog-Walking Alarm Clock'
            subtitle='Hands-On Engineering Design Final Project'
            date='Aug 2020 - Dec 2020'
            blurb='Solo project - system created with an Arduino, LCD clock, and motor. The user would enter a target time;
            once reached, the motor would “wag” the printed tail, and lights would flash as two visual indicators.
            The skills to prototype, 3D model, prep for 3D printing, and code were all taught through a rigorous course.'
            tools={['Arduino Uno R3', 'C++', 'SolidWorks']}
            buttons={[{
              text:'View Details',
              variant:'solid',
              link:'https://www.instructables.com/Dog-Walking-Alarm-Clock/',
              linkTo:'details'
            }]}
          />
        {/* </div> */}
        </div>
      </section>
    </div>

    <ContactInfo/>

    <footer>
      <p>Website made with <span>Next.js</span>, <span>TypeScript</span>, and <span>MUI Joy-UI</span></p>
    </footer>
    </>
  )
}
