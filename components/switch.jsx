"use client"
import { Switch } from '@mui/joy'
import { useColorScheme } from '@mui/joy/styles';
import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from "react-icons/fa6";

export default function DarkModeSwitch(){
    const [dark, setDark] = useState(false)
    const [preLoadDisabled, setDisabled] = useState(true)
    const { mode, systemMode, setMode } = useColorScheme();

    useEffect(() => {
        //'mode' is defaulted to 'system' (before localstorage takes over)
        //detect system pref on load
        // console.log(`${mode}, ${systemMode}`)
        if(mode === 'dark' || systemMode === 'dark'){
            // console.log('dark is true')
            setDark(true)
            setMode('dark') //in case mode is 'system'
        }
        setDisabled(false)
    }, [])

    return(
        <Switch
            aria-label='light/dark mode'
            disabled={preLoadDisabled}
            color={dark ? 'primary' : 'neutral'}
            checked={dark}
            onChange={(event) => setDark(event.target.checked)}
            onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
            startDecorator={<FaSun color={dark ? 'gray' : 'white'}/>}
            endDecorator={<FaMoon color={dark ? 'white' : 'gray'}/>}
        />
    )
}