import styles from '@/styles/page.module.css'
import {WorkCard, ProjectCard} from '@/components/card'
import DarkModeSwitch from '@/components/switch'
import EagleEyeLogo from '@/images/eagle-eye/logo_transparent_crop.png'
import LEILogo from '@/images/loucks-eng/logo192.png'
import SilviLogo from '@/images/silvi/silvi_logo.webp'
import JustLearnLogo from '@/images/justlearn/justlearn_logo.webp'

export default function Home() {
  return (
    <>
    <DarkModeSwitch/>
    <main className={styles.main}>
    <h1>Professional Experience</h1>
      <div className={styles.cardContainer}>
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
        />
      </div>

      <h1>Projects</h1>
      <div className={styles.cardContainer}>
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
        />
      </div>
      </main>
      </>
  )
}
