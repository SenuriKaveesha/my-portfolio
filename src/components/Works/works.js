import React from 'react'
import './works.css'
import { Link } from 'react-scroll'

const Works = () => {
  return (
    <div>
      <section id='works'>
        <h2 className='workstitle'>My Portfolio</h2>
        <span className='worksDesc'>I take pride in paying attention to the smallest details and those are my projects that i have been working with during my 3 years of university life</span>


        <div className='skillBars2'>
            <div className='skillBar2'>
                
                <div className='skillBarText2'>
                    <h2>Garbage Management System</h2>
                    <p>Garbage management system for local counsil - Balangoda (2023 - Group project)</p>
                    <p>HTML5, CSS3, MongoDB, NodeJS, Express, React, Git, GitHub, MySQL</p>
                    <br/>
                    <Link>https://github.com/SLIITITP/y2_s2_wd_it_01-itp_wd_b01_g_09</Link>

                </div>
            </div>

            <div className='skillBar2'>
                
                <div className='skillBarText2'>
                    <h2>Online job management portal</h2>
                    <p>Mobile application develop to find employees (2023 - Group project)</p>
                    <p>HTML5, CSS3, Kotlin, Firebase, Android Studio, GitHub</p>
                    <br/>
                    <Link>https://github.com/IT21309038/MAD-Project</Link>

                </div>
            </div>

            <div className='skillBar2'>
                
                <div className='skillBarText2'>
                    <h2>Online video browsing system</h2>
                    <p>A streaming media platform for on-demand entertainment</p>
                    <p>HTML5, CSS3, Java, MySQL, Apache Tomcat, Eclipse, Servlet JSP, MVC Architecture</p>
                </div>
            </div>

            <div className='skillBar2'>
                
                <div className='skillBarText2'>
                    <h2>Online exam system</h2>
                    <p>F2Y exam platform for gain your skills</p>
                    <p>HTML, CSS, JavaScript, PHP, XAMPP, MySQL</p>
                </div>
            </div>

            <div className='skillBar2'>
                
                <div className='skillBarText2'>
                    <h2>Simple Animation Intro</h2>
                    <p>Simple Intro with typewriting animation.</p>
                    <p>HTML5, CSS3, TypeScript</p>
                </div>
            </div>


        </div>



      </section>
    </div>
  )
}

export default Works
