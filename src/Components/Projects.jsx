import Project1 from "./images/Project1.png"
import Project2 from "./images/Project2.png"
import Project3 from "./images/Project3.png"
import "./css/Projects.css";

export function Project() {
    return (
        <div id="project">
            <h1 className="mt-5" style={{ color: "black" }}>MY PROJECTS</h1>
            <div className="div-img project-animate">
                <a href="https://ujjwal-quiz-platform.netlify.app/"><img src={Project1} alt="" width="600px" height="450px" className="my-5" style={{ marginLeft: '100px', borderRadius: '80px', boxShadow: '0 4px 8px rgba(0, 0, 0, 1)' }} /></a>
                <div className="div-title">
                    <h2 style={{ color: "black", fontSize: '50px', marginLeft: '200px', fontStyle: 'italic' }}>Quiz Platform</h2>
                    <h5>Welcome to QuizWise: Your hub for creating, managing, and playing quizzes! Dive into a world of interactive learning, where you can craft quizzes effortlessly, challenge your mind, and get instant results. Join the fun on QuizWise and unleash your inner Quizmaster!</h5>
                </div> 

            </div>
            <div className="div-img2 mb-5 project-animate">
                <div className="div-title">
                    <h2 style={{ color: "black", fontSize: '50px', fontStyle: 'italic' }}>Entertainment App</h2>
                    <h5>The Entertainment App lets users find and save movies and TV shows. It has a Home page, separate sections for Movies and TV Series, and a Bookmarks feature. Built with HTML, CSS, Tailwind CSS, React, Redux-toolkit, Node.js, Express.js, MongoDB, and TMDB API.</h5>
                </div>
                <a href="https://entertainmentapp-5ffn.onrender.com"><img src={Project2} alt="" width="600px" height="450px" style={{ marginLeft: '150px', borderRadius: '40px', boxShadow: '0 4px 8px rgba(0, 0, 0, 1)' }} /></a>
            </div>
            <div className="div-img project-animate">
                <a href="https://stickynotes-2yt4.onrender.com"><img src={Project3} alt="" width="600px" height="450px" className="my-5" style={{ marginLeft: '100px', borderRadius: '40px', boxShadow: '0 4px 8px rgba(0, 0, 0, 1)' }} /></a>
                <div className="div-title">
                    <h2 style={{ color: "black", fontSize: '50px', marginLeft: '200px', fontStyle: 'italic' }}>Sticky Notes</h2>
                    <h5>The Sticky Note App lets users create, save, and arrange notes with ease. It offers customization options and flexible note positioning for efficient organization. With seamless synchronization across devices, it's a convenient tool for staying organized and productive.</h5>
                </div>
            </div>
        </div>
    )
}