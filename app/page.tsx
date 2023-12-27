import styles from '@/styles/page.module.css'
import GlimpseCard from '@/components/card'
import EagleEyeLogo from '@/images/eagle-eye/logo_transparent_crop.png'
import LEILogo from '@/images/loucks-eng/logo192.png'
import SilviLogo from '@/images/silvi/silvi_logo.webp'
import JustLearnLogo from '@/images/justlearn/justlearn_logo.webp'

export default function Home() {
  return (
    <>
    <h1>Professional Experience</h1>
    <main className={styles.main}>
      <GlimpseCard
        logo={EagleEyeLogo}
        position='Website Designer and Developer'
        company='Eagle Eye Monitoring, LLC.'
        jobType='Freelance (Remote)'
        duration='Nov 2023 - Present'
        blurb='Figma | TypeScript | SCSS | Next.js | SendGrid | MaterialUI-Base'
      />

      <GlimpseCard
        logo={LEILogo}
        position='Website Developer'
        company='Loucks Engineering, Inc.'
        jobType='Part-Time'
        duration='May 2023 - Present'
        blurb='React.js | CD/CI | JavaScript | React-Bootstrap | JSON'
      />

      <GlimpseCard
        logo={SilviLogo}
        position='Front-End Web Developer'
        company='Silvi'
        jobType='Part-Time (Remote)'
        duration='Jun 2022 - Jul 2023'
        blurb='TypeScript | SCSS | Next.js | APIs | in-browser camera'
      />

      <GlimpseCard
        logo={JustLearnLogo}
        position='Front-End Web Developer'
        company='JustLearn'
        jobType='Internship & Part-Time (Remote)'
        duration='Nov 2021 - June 2022'
        blurb='Django | HTML5 | SCSS | JavaScript | Python | jQuery | Web APIs | Bootstrap'
      />
      </main>
      <h1>Projects</h1>
      </>
  )
}
