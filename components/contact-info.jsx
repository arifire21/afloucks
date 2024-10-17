import { SiGithub, SiDevpost, SiLinkedin } from "react-icons/si";

export default function ContactInfo(){
    return (
        <section style={{textAlign:'center'}}>
            <p style={{textAlign:'center',marginTop:'2rem'}}>Connect with me!</p>
            <a className="contact-link" href='https://github.com/arifire21/' target='_blank'><SiGithub size={25}/> Github</a>
            <span className='contact-bullet'>&bull;</span>
            <a className="contact-link" href='https://www.linkedin.com/in/ariannaloucks/' target='_blank'><SiLinkedin size={25}/> Linkedin</a>
            <span className='contact-bullet'>&bull;</span>
            <a className="contact-link" href='https://devpost.com/arifire21/' target='_blank'><SiDevpost size={25}/> Devpost <small className="desktop">(Hackathon Archive)</small></a>
        </section>
    )
}
