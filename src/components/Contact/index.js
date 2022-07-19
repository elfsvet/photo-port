import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
const ContactForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    // JSX
    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage("Your email is invalid.");
            }
            else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                }
                else {
                    setErrorMessage("");
                }
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })

        }
        // console.log('errorMessage', errorMessage);
    }
    // console.log(formState);
    const handleSubmit = (e) => {

        e.preventDefault();
        // console.log(formState);
    }
    return (
        <section>
            <h1 data-testid='h1tag'>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>

                {/* name input */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>

                {/* email input */}
                <div>
                    {/* name reserved in JS for "for" so we use "htmlFor" same as with class as "className" */}
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>

                {/* message text area */}
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {/* this is refers as if(errorMessage){add div and p tags with info} */}
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}

                <button type="submit" data-testid='button'>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;