import Project1 from "./images/Project1.png"
import Project2 from "./images/Project2.png"
import Project3 from "./images/Project3.png"
import Project4 from "./images/Project4.png"
import Project5 from "./images/Project5.png"
import "./css/Projects.css";

export function Project() {
    return (
        <div id="project" className="project-div-main">
            <h1 className="mt-5">MY PROJECTS</h1>
            <div className="div-img project-animate">
                <a href="https://ujjwal-quiz-platform.netlify.app/"><img src={Project1} alt="" width="600vw" height="450vh" className="my-5" style={{ borderRadius: '80px', boxShadow: '0 4px 8px rgba(0, 0, 0, 1)' }} /></a>
                <div className="div-title">
                    <h2 style={{ color: "black", fontSize: '3vw', fontStyle: 'italic', textAlign:'center' }}>Quiz Platform</h2>
                    <p style={{fontSize:'1.1vw', textAlign:'center', fontWeight:'inherit'}}>Welcome to QuizWise: Your hub for creating, managing, and playing quizzes! Dive into a world of interactive learning, where you can craft quizzes effortlessly, challenge your mind, and get instant results. Join the fun on QuizWise and unleash your inner Quizmaster!</p>
                </div> 
            </div>
            <div className="div-img mb-5 project-animate">
                <div className="div-title">
                    <h2 style={{ color: "black", fontSize: '3vw', fontStyle: 'italic', textAlign:'center' }}>Entertainment App</h2>
                    <p style={{fontSize:'1.1vw', textAlign:'center', fontWeight:'inherit'}}>The Entertainment App lets users find and save movies and TV shows. It has a Home page, separate sections for Movies and TV Series, and a Bookmarks feature. Built with HTML, CSS, Tailwind CSS, React, Redux-toolkit, Node.js, Express.js, MongoDB, and TMDB API.</p>
                </div>
                <a href="https://entertainmentapp-5ffn.onrender.com"><img src={Project2} alt="" width="600vw" height="450vh" style={{ borderRadius: '80px', boxShadow: '0 4px 8px rgba(0, 0, 0, 1)' }} /></a>
            </div>
            <div className="div-img project-animate">
                <a href="https://stickynotes-2yt4.onrender.com"><img src={Project3} alt="" width="600vw" height="450vh" className="my-5" style={{ borderRadius: '80px', boxShadow: '0 4px 8px rgba(0, 0, 0, 1)' }} /></a>
                <div className="div-title">
                    <h2 style={{ color: "black", fontSize: '3vw', fontStyle: 'italic', textAlign:'center' }}>Sticky Notes</h2>
                    <p style={{fontSize:'1.1vw', textAlign:'center', fontWeight:'inherit'}}>The Sticky Note App lets users create, save, and arrange notes with ease. It offers customization options and flexible note positioning for efficient organization. With seamless synchronization across devices, it's a convenient tool for staying organized and productive.</p>
                </div>
            </div>
            <div className="div-img mb-5 project-animate">
                <div className="div-title">
                    <h2 style={{ color: "black", fontSize: '3vw', fontStyle: 'italic', textAlign:'center' }}>Chat Application</h2>
                    <p style={{fontSize:'1.1vw', textAlign:'center', fontWeight:'inherit'}}>Developed a real-time chat application featuring a universal chat room and user authentication. Built with React for the frontend and Node.js with Express and MongoDB for the backend, it leverages Socket.io for real-time messaging. The app ensures secure communication through JWT-based authentication and includes functionalities for users to post, edit, and delete messages.</p>
                </div>
                <a href="https://chatapplication0.netlify.app/"><img src={Project4} alt="" width="600vw" height="450vh" style={{ borderRadius: '80px', boxShadow: '0 4px 8px rgba(0, 0, 0, 1)' }} /></a>
            </div>
            <div className="div-img project-animate">
                <a href="https://datavisualizationdashboard1.netlify.app/"><img src={Project5} alt="" width="600vw" height="450vh" className="my-5" style={{ borderRadius: '80px', boxShadow: '0 4px 8px rgba(0, 0, 0, 1)' }} /></a>
                <div className="div-title">
                    <h2 style={{ color: "black", fontSize: '3vw', fontStyle: 'italic', textAlign:'center' }}>Data Visualization Dashboard</h2>
                    <p style={{fontSize:'1.1vw', textAlign:'center', fontWeight:'inherit'}}>The Data Visualization Dashboard is an interactive web application designed to visualize complex datasets in an intuitive and user-friendly manner. The dashboard enables users to filter, analyze, and interpret data through dynamic charts, graphs, and tables, offering insightful perspectives into the underlying trends and patterns.</p>
                </div>
            </div>
        </div>
    )
}