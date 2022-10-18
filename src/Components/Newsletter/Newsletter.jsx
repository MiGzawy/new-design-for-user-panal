import { Send } from '@mui/icons-material';
import React from 'react';
import './style.css'
const Newsletter = () => {
    return (
        <div className='sletter-container'>
            <div className="sletter-title">
                <h1>New Sletter</h1>
            </div>
            <div className="sletter-desc">
                <h1>The Description </h1>
            </div>
            <div className="sletter-inCon">
                <input placeholder='Your email'/>
                <button>
                    <Send/>
                </button>
            </div>
        </div>
    );
}

export default Newsletter;
