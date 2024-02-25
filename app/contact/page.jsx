'use client'
import Navbar from "@/components/navbar";
import ContactForm from '@/components/form'
import ContactInfo from '@/components/contact-info'

export default function ContactPage(){
    return(
        <div style={{minHeight:'100vh'}}>
            <Navbar/>
            <main style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h1>Contact</h1>
            <p>Want to get in touch? Send me your info and I&apos;ll get back to you!</p>

            <ContactForm/>

            <ContactInfo/>
            </main>
            
            <footer>
                <p>Website made with <span>Next.js</span> and <span>MUI Joy-UI</span></p>
            </footer>
        </div>
    )
}