import Logo from "./images/Logo.png";

export function Navbar() {
    return (
        <div className="navbar navbar-expand fixed-top" style={{ backgroundColor: 'rgba(7, 11, 18,0.9)' }}>
            <a href="#"><img className="mx-2 mt-2" width="70" height="70" src={Logo} alt="" /></a>
            <div style={{ width: "100vw", height: "70px", display: "flex", justifyContent: "end", alignItems: "center", marginRight: '30px' }}>
                <a href="#" className="navbar-brand text-info mx-3">Home</a>
                <a href='#about_me' className="navbar-brand text-info mx-3">About Me</a>
                <a href="#skills" className="navbar-brand text-info mx-3">Skills</a>
                <a href="#project" className="navbar-brand text-info mx-3">Projects</a>
                <a href="#contact" className="navbar-brand text-info mx-3">Contact</a>
            </div>
        </div>
    )
}