import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormTextArea, FormWrap, Icon } from './ContactElements'

export default function Contact() {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">DrowZy</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Contact Us</FormH1>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <FormInput type="email" required/>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <FormInput type="text" required/>
                            <FormLabel htmlFor="message">Message</FormLabel>
                            <FormTextArea colls="4" rows="5" required/>
                            <FormButton type="submit">Submit</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}
