import React from 'react'
import './contacts.css'

const Contacts = () => {
  return (
    <div id='contact'>
        <h1 className='contactPageTitle'>Contact me</h1>
        <span className='contactDesc'>pls fillout the form below to dicuss my any work oppoortunity</span>
        <form className='contactForm'>
            <input type='text' className='name' placeholder='Your Name'/>
            <input type='email' className='email' placeholder='Your email'/>
            <textarea  className= 'msg'name='message' rows={5} placeholder='Your message'/>
            <button className='submitBtn' type='submit' value='send'>Submit</button>
        </form>
    </div>
  )
}

export default Contacts
