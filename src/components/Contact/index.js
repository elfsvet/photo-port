import React, { useState } from 'react';

const ContactForm = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    // JSX
    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }
    // console.log(formState);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>

                {/* name input */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onChange={handleChange} />
                </div>

                {/* email input */}
                <div>
                    {/* name reserved in JS for "for" so we use "htmlFor" same as with class as "className" */}
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onChange={handleChange} />
                </div>

                {/* message text area */}
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />
                </div>

                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;