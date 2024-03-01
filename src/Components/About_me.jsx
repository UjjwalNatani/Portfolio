import about from "./images/about.png";
import './css/About.css'

export function About_me() {
    return (
        <div id="about_me" className="my-5">
            <h1 className='mt-4'>ABOUT ME</h1>
            <div className="main-div" style={{ borderRadius: '80px' }}>
                <div className="about-image">
                    <img src={about} alt="" width="380px" height="400px" className="my-5" style={{ borderRadius: '40px', marginLeft: '120px', marginLeft: '200px', boxShadow: '0 4px 8px rgba(255, 255, 255, 1)' }} />
                    <div className="about-text"><br />
                        <p className="m-2">
                            Experienced and passionate web developer with a strong background in front-end and back-end development. Skilled in HTML5, CSS3, JavaScript, and various frameworks such as ReactJS and NextJS for building dynamic and responsive web applications. <br /><br /> Proficient in server-side programming languages like Node.js, with expertise in database management using MySQL and MongoDB. <br /><br /> Detail-oriented with a commitment to delivering high-quality, efficient, and user-friendly solutions. Excellent problem-solving skills and ability to work collaboratively in a team environment. <br /><br />
                        </p>
                        <div className="mt-2" style={{textAlign:'center'}}>
                            <button className="btn btn-outline-success mx-1"><a href="https://github.com/UjjwalNatani" style={{ color: 'black', textDecoration: 'none' }} target='_blank'>GitHub</a></button>

                            <button className="btn btn-outline-primary"><a href="https://www.linkedin.com/in/ujjwal-natani-a03584276" style={{ color: 'black', textDecoration: 'none' }} target='_blank'>LinkdIn</a></button>

                            <button className="btn btn-outline-info mx-1">Resume</button>

                            <button className="btn btn-outline-secondary">Let's talk</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
