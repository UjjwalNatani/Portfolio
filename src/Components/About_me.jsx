import about from "./images/about.png";
import resume from "./images/Ujjwal_Natani.pdf"
import './css/About.css'

export function AboutMe() {
    const handleDownload = () => {    
        // Create an anchor element
        const anchorElement = document.createElement('a');
        anchorElement.href = resume;
        anchorElement.download = 'resume.pdf'; // Set the desired file name
    
        // Trigger the download
        document.body.appendChild(anchorElement);
        anchorElement.click();
    
        // Clean up
        document.body.removeChild(anchorElement);
      };
    return (
        <div id="about_me" className="my-5">
            <h1 className='mt-4'>ABOUT ME</h1>
            <div className="main-div" style={{ borderRadius: '80px' }}>
                <div className="about-image">
                    <img src={about} alt="" width="380px" height="400px" className="my-5" style={{ borderRadius: '40px', marginLeft: '200px', boxShadow: '0 4px 8px rgba(255, 255, 255, 1)' }} />
                    <div className="about-text"><br />
                        <p className="m-2">
                        Successfully completed a rigorous full stack web development program accredited by IIT Guwahati, offered by AlmaBetter. I bring a strong foundation in HTML, CSS, JavaScript, DBMS. I am eager to apply my knowledge and learn new technologies to contribute as a Web Developer. I have demonstrated my abilities through projects like  <strong><em> Portfolio, QuizPlatform, Entertainment App, Sticky Notes.</em></strong> My academic background in Computer Applications has equipped me with the necessary skills and mindset to tackle challenges and drive innovation in web development. <br /><br />
                        </p>
                        <div className="mt-2" style={{textAlign:'center'}}>
                            <button className="btn btn-outline-success mx-1"><a href="https://github.com/UjjwalNatani" style={{ color: 'black', textDecoration: 'none' }} target='_blank' rel="noreferrer">GitHub</a></button>

                            <button className="btn btn-outline-primary"><a href="https://www.linkedin.com/in/ujjwal-natani-a03584276" style={{ color: 'black', textDecoration: 'none' }} target='_blank' rel="noreferrer">LinkdIn</a></button>

                            <button className="btn btn-outline-info mx-1" onClick={handleDownload}>Resume</button>

                            <button className="btn btn-outline-secondary"><a href="mailto:ujjwalnatani10@gmail.com" style={{ color: 'black', textDecoration: 'none' }}>Let's talk</a></button>
       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
