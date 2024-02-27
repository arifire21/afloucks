'use client'
import { Button, FormControl, FormHelperText, FormLabel, Input, Textarea } from "@mui/joy";
import { useEffect, useState, useRef } from "react";
import Snackbar from '@mui/joy/Snackbar';
import styles from '@/styles/form.module.css'

export default function ContactForm(){
    // let emailElement : HTMLInputElement;
    // let emailCheckElement: HTMLInputElement;
    // const emailRef = useRef<HTMLInputElement>(null);
    // const emailMatchRef = useRef<HTMLInputElement>(null);

    //button state
    // const [isDisabled, setDisabled] = useState<boolean>(true)
    const [isLoading, setLoading] = useState<boolean>(false)

    //form state
    const [submitSuccess, setSuccess] = useState<boolean>(false)
    const [nameValue, setNameValue] = useState<string>('')
    const [emailValue, setEmailValue] = useState<string>('')
    const [isEmailValid, setisEmailValid] = useState<boolean>(false)
    const [confirmEmailValue, setConfirmEmailValue] = useState<string>('')
    const [commentValue, setCommentValue] = useState<string>('')

    //snackbar state
    const [open, setOpen] = useState<boolean>(false)
    const [errorString, setErrorString] =useState<string>()

    async function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault()
        setLoading(true)

        // console.log(`${nameProps.nameInput}\n${emailProps.emailInput}\n${emailMatchProps.matchInput}\n${commentProps.commentInput}`)

        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameValue,
                email: emailValue,
                comment: commentValue
            })
        })
        .then((response => {
            if(!response.ok){
                return Promise.reject(response)
            }
            
            setSuccess(true)
            setOpen(true)
            setLoading(false)
        }))
        .catch(error => {
            console.log(error.json())
        })

        // if response === 'validation_error'
    }

    function handleClose() {    //back to defaults
        setOpen(false)
        // setSuccess(false)

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

    function handleEmailTest(e: any){
        setEmailValue(e.target.value)
        if(e.target.validity.valid){
        // if(.test(e.target.value)){
            // console.log('yes')
            setisEmailValid(true)
        } else {
            setisEmailValid(false)
        }
    }

    return (
        <form className={styles.formContainer} id="contact-form">
            <FormControl
            required
            error={nameValue!.length > 2 ? false : true}
            color={nameValue!.length > 2 ? 'neutral' : 'danger'}
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
                    onChange={(e) => setNameValue(e.target.value)}
                    // color={nameValue!.length > 2 ? 'neutral' : 'danger'}
                />
                {nameValue!.length <= 2 ? (
                <FormHelperText>
                Required field
                </FormHelperText>
                ) : (null)}
            </FormControl>

            <FormControl
            required
            error={isEmailValid ? false : true}
            color={isEmailValid ? 'neutral' : 'danger'}
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
                    onChange={handleEmailTest}
                    // ref={emailRef}
                />
                {!isEmailValid ? (
                <FormHelperText>
                Email must be valid: email@example.com
                </FormHelperText>
                ) : (null)}
            </FormControl>

            <FormControl
            required
            error={confirmEmailValue != emailValue ? true : false}
            color={confirmEmailValue === emailValue ? 'neutral' : 'danger'}
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
                    onChange={(e) => setConfirmEmailValue(e.target.value)}
                    // ref={emailMatchRef}
                />
                {confirmEmailValue != emailValue ? (
                <FormHelperText>
                Emails should match
                </FormHelperText>
                ) : (null)}
            </FormControl>

            <FormControl
            required
            error={commentValue!.length >= 10 ? false : true}
            color={commentValue!.length >= 10 ? 'neutral' : 'danger'}
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
                    onChange={(e) => setCommentValue(e.target.value)}
                    // color={(nameProps.isValid) ? 'neutral' : 'danger'}
                />
                {commentValue!.length <= 9 ? (
                <FormHelperText>
                Required field
                </FormHelperText>
                ) : (null)}
            </FormControl>

            <Button
                // type="submit"
                onClick={handleSubmit}
                loading={isLoading}
                disabled={(
                    nameValue.length > 2
                    && emailValue.length
                    && confirmEmailValue === emailValue
                    && commentValue.length >= 10
                    ) ? false : true}
            >Submit</Button>

            <Snackbar
                variant="solid"
                color={submitSuccess ? 'success' : 'danger'}
                autoHideDuration={submitSuccess ? 3500 : 5000}
                open={open}
                onClose={handleClose}
            >
                {submitSuccess ?
                `Thank you, ${nameValue}! Your info was sent!
                Please check your inbox and/or junk folders.`
                : `Error! ${errorString}`}
            </Snackbar>
        </form>
    )
}