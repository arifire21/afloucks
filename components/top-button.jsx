// import { Button } from "@mui/joy";
import { HiArrowUp } from "react-icons/hi";
import styles from '@/styles/topbutton.module.css'

export default function TopButton(){
    return(
    <button className={styles.topbutton} id="topbutton" onClick={() => window.scrollTo({top:0, left:0, behavior: 'smooth'})}><HiArrowUp/> Back to Top</button>
    )
}
