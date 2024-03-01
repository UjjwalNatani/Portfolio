import './css/Contact.css';

export function Contact() {
    return (
        <div id='contact' className='div-class my-4'>
            <h1>CONTACT ME</h1>
            <div className="div-btn">
                <button className="btn btn-success mx-3"><a href="https://www.linkedin.com/in/ujjwal-natani-a03584276" style={{ color: 'black', textDecoration: 'none' }} target='_blank'>LinkdIn</a></button>
                <button className="btn btn-primary mx-3"><a href="https://github.com/UjjwalNatani" style={{ color: 'black', textDecoration: 'none' }} target='_blank'>GitHub</a></button>
                <button className="btn btn-secondary mx-3"><a href="mailto:ujjwalnatani10@gmail.com" style={{ color: 'black', textDecoration: 'none' }}>Email Me</a></button>
            </div>
        </div>
    )
}