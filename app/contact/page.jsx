import { SiGithub, SiDevpost, SiLinkedin } from "react-icons/si";

export default function ContactPage(){
    return(
        <>
        <h1>Contact</h1>
            <p>Want to get in touch? Send me an email at [email]</p>

            <p>[form tbd??]</p>

        <section>
            <p>Or connect with me!</p>
            <a href='https://github.com/arifire21/' target='_blank'><SiGithub size={25}/>Github</a>
            <a href='https://devpost.com/afloucks' target='_blank'><SiLinkedin/>Linkedin</a>
            <a href='https://github.com/arifire21/' target='_blank'><SiDevpost size={25}/>Devpost</a>
        </section>
        </>
    )
}