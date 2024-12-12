import { useState } from 'react';
import '../App.css';
const Contact = () => {
    const [displayMessage, setDisplayMessage] = useState('Send us a message!')

    const changeMessage = (e) => {
        e.preventDefault();
        let name = document.querySelector('#name')
        let message = `Hey ${name.value} Our Team will reach out to you shortly!`
        setDisplayMessage(message)
    }
    return (
        <div>
            <h1>{displayMessage}</h1>
            <div className='contact'>
                <div className='contactForm'>
                    <form>
                        <input name='name' id='name' placeholder='Input Name'></input>
                        <input name='email' type='email' id='name' placeholder='Input Email'></input>
                        <input name='message' id='name' placeholder='Input Message'></input>
                        <button onClick={changeMessage}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact