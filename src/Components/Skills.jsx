import './css/Skills.css'
import git from './images/git.svg';
import bootstrap from './images/bootstrap.jpg';
import mui from './images/mui.jpg';
import tcss from './images/tcss.jpg';
import netlify from './images/netlify.jpg';
import github from './images/github.jpg';
import vercel from './images/vercel.jpg';
import heroku from './images/heroku.jpg';
import html from './images/html.jpg';
import css from './images/css.jpg';
import js from './images/js.jpg';
import react from './images/react.jpg';
import mariadb from './images/mariadb.png';
import mongodb from './images/mongodb.png'
import render from './images/render.svg'
import aws from './images/aws.png'
import next from './images/next.webp'
import node from './images/node.png'
import express from './images/express.webp'


export function Skills() {
    return (
        <div id='skills'>
            <h1 className='my-4' >TECH SKILLS</h1>
            <div className='main-div1'>
                <div className='div2'>
                    <div className='div1'><h5 className='mt-3'>Version Control</h5>
                        <div><img src={git} alt=""  width="80px" height="80px" className='m-2' />GIT</div>
                    </div>
                    <div className='div1'><h5 className='mt-3'>Database Management</h5>
                        <div><img src={mongodb} alt="" width="50px" height="50px" className='m-2' />MongoDB</div>
                        <div><img src={mariadb} alt="" width="50px" height="50px" className='m-2' />MariaDB</div>
                    </div>
                </div>
                <div className='div'><h5 className='mt-3'>Frontend Frameworks</h5>
                    <div>
                        <img src={react} alt="" width="50px" height="50px" className='m-2' />React JS <br />
                        <img src={next} alt="" width="50px" height="50px" className='m-2' />Next JS <br />
                        <img src={bootstrap} alt="" width="50px" height="50px" className='m-2' />Bootstrap <br />
                        <img src={mui} alt="" width="50px" height="50px" className='m-2' />Matalic UI <br />
                        <img src={tcss} alt="" width="50px" height="50px" className='m-2' />Tailwind CSS
                    </div>
                </div>
                <div className='div'><h5 className='mt-3'>Hosting Platform</h5>
                    <div>
                        <img src={netlify} alt="" width="50px" height="50px" className='m-2' /> Netlify <br />
                        <img src={github} alt="" width="50px" height="50px" className='m-2' />Github Pages <br />
                        <img src={vercel} alt="" width="50px" height="50px" className='m-2' /> Vercel <br />
                        <img src={render} alt="" width="50px" height="50px" className='m-2' /> Render <br />
                        <img src={aws} alt="" width="50px" height="50px" className='m-2' /> AWS <br />
                        <img src={heroku} alt="" width="50px" height="50px" className='m-2' />Heroku
                    </div>

                </div>
                <div className='div2'>
                <div className='div1'><h5 className='mt-3'>Web Essentials</h5>
                    <div>
                        <img src={html} alt="" width="45px" height="45px"  className='m-2'/> HTML5 <br />
                        <img src={css} alt="" width="45px" height="45px"  className='m-2'/>CSS3 <br />
                        <img src={js} alt="" width="45px" height="45px"  className='m-2'/> JavaScript <br />
                    </div>
                </div>
                    <div className='div1'><h5 className='mt-3'>Backend Frameworks</h5>
                        <div><img src={node} alt="" width="50px" height="50px" className='m-2' />Node JS</div>
                        <div><img src={express} alt="" width="50px" height="50px" className='m-2' />Express JS</div>
                    </div>
                </div>

                
            </div>
        </div>
    )
}