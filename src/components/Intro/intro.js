import React from 'react';
import './Intro.css';
import bg from '../../assets/bg.png'
import {Link} from 'react-scroll';
import btnImg from '../../assets/contact.png'

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Senuri Kaveesha</span> <br/> Undegraduate at Sliit</span>
        <p className='introPara'>I'm eager to start a path of academic and
professional development since I'm enthusiastic <br></br> about data science and want to use my degree to have a good impact on the information
technology industry.</p>
<Link><button className='btn'><img src={btnImg} alt='Download CV' className='btnImg'/>Hire me</button></Link>

      </div>
      <img src={bg} alt='Profile' className='bg'/>
    </section>
  )
}

export default Intro;
