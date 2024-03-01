import React from 'react'
import './css/Home.css';

export function Home() {
    return (
        <div>
            <div className='background-image1' >
                <h1 style={{position: "relative" }}>Hi, I'm <br /> Ujjwal Natani</h1>
                <div class="loader" style={{ display: 'flex', flexDirection: 'row' }}>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
            </div>
        </div>
    )
}
