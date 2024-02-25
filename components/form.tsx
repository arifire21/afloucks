'use client'
import { Button, FormControl, FormHelperText, FormLabel, Input, Textarea } from "@mui/joy";
import { useEffect, useState } from "react";
import Snackbar, { SnackbarOrigin } from '@mui/joy/Snackbar';
import styles from '@/styles/form.module.css'

export default function ContactForm(){
    let emailElement : HTMLInputElement;
    let emailCheckElement: HTMLInputElement;
    useEffect(() => {
        //Runs only on the first render, define elements
        emailElement = document.getElementById('email') as HTMLInputElement;
        emailCheckElement = document.getElementById('email-check') as HTMLInputElement;

        // const form = document.getElementById('contact-form') as HTMLFormElement;
      }, []);

    const requestData = {
        name: '',
        email:'',
        comment: ''
    }

    //button state
    // const [isDisabled, setDisabled] = useState<boolean>(true)
    const [isLoading, setLoading] = useState<boolean>(false)

    //form state
    const [submitSuccess, setSuccess] = useState<boolean>(false)

    const [nameProps, setNameProps] = useState({
        nameInput: '',
        isValid: false,
        isError: false
    })

    const [emailProps, setEmailProps] = useState({
        emailInput: '',
        isValid: false,
        isError: false
    })

    const [emailMatchProps, setEmailMatchProps] = useState({
        matchInput: '',
        isValid: false,
        isError: false
    })

    const [commentProps, setCommentProps] = useState({
        commentInput: '',
        isValid: false,
        isError: false
    })

    function handleNameChange(e: { target: { value: string; }; }){
        setNameProps({...nameProps, nameInput: e.target?.value})

        if(e.target.value.length > 2 && !nameProps.isValid){
            setNameProps({nameInput: e.target?.value, isValid: true, isError: false})
        }
        else if (e.target.value.length <= 2 && nameProps.isValid) { //if user backspaces or deletes
            setNameProps({nameInput: e.target?.value, isValid: false, isError: true})
        }
    }

    function handleEmailChange(e: { target: { value: string; }; }){
        setEmailProps({...emailProps, emailInput: e.target?.value})

        if(emailElement?.checkValidity() && !emailProps.isValid){
            setEmailProps({emailInput: e.target?.value, isValid: true, isError: false})
        }
        else if(emailCheckElement?.checkValidity() && emailProps.isValid) { //if user backspaces or deletes
            setEmailProps({emailInput: e.target?.value, isValid: false, isError: true})
        }
    }

    function handleEmailMatch(e: { target: { value: string; }; }){
        setEmailMatchProps({...emailMatchProps, matchInput: e.target?.value})

        if(e.target?.value === emailProps.emailInput){
            setEmailMatchProps({matchInput: e.target?.value, isValid:true, isError: false})
        }
        else if (e.target?.value != emailProps.emailInput && emailMatchProps.isValid) { //if user backspaces or deletes
            setEmailMatchProps({matchInput: e.target?.value, isValid: false, isError: true})
        }
    }

    function handleCommentChange(e: { target: { value: string; }; }){
        setCommentProps({...commentProps, commentInput: e.target?.value})

        if(e.target.value.length >= 10){
            setCommentProps({commentInput: e.target?.value, isValid: true, isError: false})
        }
        else if (e.target.value.length < 10 && commentProps.isValid) { //if user backspaces or deletes
            setCommentProps({commentInput: e.target?.value, isValid: false, isError: true})
        }
    }

    async function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault()
        setLoading(true)

        // console.log(`${nameProps.nameInput}\n${emailProps.emailInput}\n${emailMatchProps.matchInput}\n${commentProps.commentInput}`)

        requestData.name = nameProps.nameInput
        requestData.email = emailProps.emailInput
        requestData.comment = commentProps.commentInput
        console.log(requestData)

        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
        if(response.status === 200){
            setSuccess(true)
            setOpen(true)
            setLoading(false)
        }
        else if(response.status >= 400){
            setOpen(true)
            setSuccess(false)
            setLoading(false)
            setErrorString('Check the email entered.')
        }
        else if(response.status >= 500) {
            setOpen(true)
            setSuccess(false)
            setLoading(false)
            setErrorString('Resend service error, try again later.')
        }
    }

    //snackbar state
    const [open, setOpen] = useState<boolean>(false)
    const [errorString, setErrorString] =useState<string>()

    function handleClose() {    //back to defaults
        setOpen(false)
        setSuccess(false)

        // //resetting
        // requestData.name = ''
        // requestData.email = ''
        // requestData.comment = ''
        // form.reset()
        // setNameProps({nameInput: '', isValid: false, isError: false})
        // setEmailProps({emailInput: '', isValid: false, isError: false})
        // setEmailMatchProps({matchInput: '', isValid: false, isError: false})
        // setCommentProps({commentInput: '', isValid: false, isError: false})
        // setLoading(false)
    }

    return (
        <form className={styles.formContainer} id="contact-form">
            <FormControl
            required
            error={nameProps.isError}
            color={(nameProps.isValid) ? 'neutral' : 'danger'}
            sx={{marginBottom: '1rem'}}
            >
                <FormLabel>Name</FormLabel>
                <Input
                    type="text"
                    sx={{
                        '--Input-focusedHighlight': 'rgba(13,110,253,.25)',
                        '&::before': {
                          transition: 'box-shadow .15s ease-in-out',
                        }
                    }}
                    onChange={handleNameChange}
                    color={(nameProps.isValid) ? 'neutral' : 'danger'}
                />
                {!nameProps.isValid ? (
                <FormHelperText>
                Required field
                </FormHelperText>
                ) : (null)}
            </FormControl>

            <FormControl
            required
            id='email'
            error={emailProps.isError}
            color={(emailProps.isValid) ? 'neutral' : 'danger'}
            sx={{marginBottom: '1rem'}}
            >
                <FormLabel>Email Address</FormLabel>
                <Input
                    type="email"
                    sx={{
                        '--Input-focusedHighlight': 'rgba(88,88,88,.25)',
                        '&::before': {
                          transition: 'box-shadow .15s ease-in-out',
                        }
                    }}
                    onChange={handleEmailChange}
                />
                {!emailProps.isValid ? (
                <FormHelperText>
                Enter a valid email
                </FormHelperText>
                ) : (null)}
            </FormControl>

            <FormControl
            required
            id='email-check'
            error={emailMatchProps.isError}
            color={(emailMatchProps.isValid) ? 'neutral' : 'danger'}
            sx={{marginBottom: '1rem'}}
            >
                <FormLabel>Confirm Email Address</FormLabel>
                <Input
                    type="email"
                    sx={{
                        '--Input-focusedHighlight': 'rgba(88,88,88,.25)',
                        '&::before': {
                          transition: 'box-shadow .15s ease-in-out',
                        }
                    }}
                    onChange={handleEmailMatch}
                />
                {!emailMatchProps.isValid ? (
                <FormHelperText>
                Emails should match
                </FormHelperText>
                ) : (null)}
            </FormControl>

            <FormControl
            required
            error={commentProps.isError}
            color={(commentProps.isValid) ? 'neutral' : 'danger'}
            // color={nameProps.isValid ? 'success' : 'danger' ?? 'neutral'}
            sx={{marginBottom: '1rem'}}
            >
                <FormLabel>Comments</FormLabel>
                <Textarea
                    minRows={3}
                    sx={{
                        '--Input-focusedHighlight': 'rgba(13,110,253,.25)',
                        '&::before': {
                            transition: 'box-shadow .15s ease-in-out',
                        }
                    }}
                    onChange={handleCommentChange}
                    // color={(nameProps.isValid) ? 'neutral' : 'danger'}
                />
                {!commentProps.isValid ? (
                <FormHelperText>
                Required field
                </FormHelperText>
                ) : (null)}
            </FormControl>

            <Button
                // type="submit"
                onClick={handleSubmit}
                loading={isLoading}
                disabled={(nameProps.isValid && emailProps.isValid && emailMatchProps.isValid && commentProps.isValid) ? false : true}
            >Submit</Button>

            <Snackbar
                variant="solid"
                color={submitSuccess ? 'success' : 'danger'}
                autoHideDuration={submitSuccess ? 3000 : 5000}
                open={open}
                onClose={handleClose}
            >
                {submitSuccess ?
                `Thank you, ${nameProps.nameInput}! Your info was sent.`
                : `Error! ${errorString}`}
            </Snackbar>
        </form>
    )
}