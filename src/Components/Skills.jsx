import './css/Skills.css'
import git from './images/git.svg';
import bootstrap from './images/bootstrap.jpg';
import rbootstrap from './images/rbootstrap.jpg';
import mui from './images/mui.jpg';
import tcss from './images/tcss.jpg';
import firebase from './images/firebase.jpg';
import netlify from './images/netlify.jpg';
import github from './images/github.jpg';
import vercel from './images/vercel.jpg';
import heroku from './images/heroku.jpg';
import html from './images/html.jpg';
import css from './images/css.jpg';
import js from './images/js.jpg';
import sass from './images/sass.jpg';
import react from './images/react.jpg';
import redux from './images/redux.jpg';


export function Skills() {
    return (
        <div id='skills'>
            <h1 className='my-4' >TECH SKILLS</h1>
            <div className='main-div1'>
                <div className='div2'>
                    <div className='div1'><h5 className='mt-3'>Version Control</h5>
                        <div>
                            <img src={git} alt=""  width="80px" height="80px" className='m-2' />GIT
                        </div>
                    </div>
                    <div className='div1'><h5 className='mt-3'>Database</h5>
                        <div>
                            <img src={firebase} alt="" width="50px" height="50px" className='m-2' />Firebase Database
                        </div>
                        <div>
                            <img src={firebase} alt="" width="50px" height="50px" className='m-2' />Cloud Firestore
                        </div>
                    </div>
                </div>
                <div className='div'><h5 className='mt-3'>Frameworks</h5>
                    <div>
                        <img src={bootstrap} alt="" width="50px" height="50px" className='m-2' />Bootstrap <br />
                        <img src={rbootstrap} alt="" width="50px" height="50px" className='m-2' />React Bootstrap <br />
                        <img src={mui} alt="" width="50px" height="50px" className='m-2' />Matalic UI <br />
                        <img src={tcss} alt="" width="50px" height="50px" className='m-2' />Tailwind CSS
                    </div>
                </div>
                <div className='div'><h5 className='mt-3'>Hosting Platform</h5>
                    <div>
                        <img src={netlify} alt="" width="50px" height="50px" className='m-2' /> Netlify <br />
                        <img src={github} alt="" width="50px" height="50px" className='m-2' />Github Pages <br />
                        <img src={vercel} alt="" width="50px" height="50px" className='m-2' /> Vercel <br />
                        <img src={heroku} alt="" width="50px" height="50px" className='m-2' />Heroku
                    </div>

                </div>
                <div className='div'><h5 className='mt-3'>Scripting Languages</h5>
                    <div>
                        <img src={html} alt="" width="50px" height="50px"  className='m-2'/> HTML5 <br />
                        <img src={css} alt="" width="50px" height="50px"  className='m-2'/>CSS3 <br />
                        <img src={js} alt="" width="50px" height="50px"  className='m-2'/> JavaScript <br />
                        <img src={sass} alt="" width="50px" height="50px"  className='m-2'/>SASS <br />
                        <img src={react} alt="" width="50px" height="50px"  className='m-2'/> React JS <br />
                        <img src={redux} alt="" width="50px" height="50px"  className='m-2'/>Redux <br />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}