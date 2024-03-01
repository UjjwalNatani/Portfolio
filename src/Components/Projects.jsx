import Project1 from "./images/Project1.png"
import Project2 from "./images/Project2.png"
import Project3 from "./images/Project3.webp"
import "./css/Projects.css";

export function Project() {
    return (
        <div id="project">
            <h1 className="mt-5" style={{ color: "black" }}>MY PROJECTS</h1>
            <div className="div-img1 project-animate">
                <img src={Project1} alt="" width="600px" height="450px" className="my-5" style={{marginLeft:'100px', borderRadius: '80px', boxShadow: '0 4px 8px rgba(0, 0, 0, 1)' }} />
                <h2 style={{ color: "black", fontSize:'50px', marginLeft:'200px', fontStyle:'italic'}}>Project 1</h2>
            </div>
            <div className="div-img2 mb-5 project-animate">
                <h2 style={{ color: "black", fontSize:'50px', fontStyle:'italic'}}>Project 2</h2>
                <img src={Project2} alt="" width="600px" height="450px" style={{marginLeft:'350px', borderRadius: '40px', boxShadow: '0 4px 8px rgba(0, 0, 0, 1)' }} />
            </div>
            <div className="div-img3 project-animate">
                <img src={Project3} alt="" width="600px" height="450px" className="my-5" style={{marginLeft:'100px', borderRadius: '40px', boxShadow: '0 4px 8px rgba(0, 0, 0, 1)' }} />
                <h2 style={{ color: "black", fontSize:'50px', marginLeft:'200px', fontStyle:'italic' }}>Project 3</h2>
            </div>
        </div>
    )
}