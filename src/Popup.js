import React from 'react';

const Popup = () => {
    return (
        <>
            <div className="intro">
                <img src='hermes.png' alt='Hermes logo' />
                <h1>Hey! I'm Hermes the messenger of the gods.</h1>
            </div>
            <hr />
            <div className="text">
                <p>I'm here to help you sharing your quests to validate them.</p>
                <p>Call me from your dashboard or your challenge by using <span>Hermes</span> buttons!</p>
                <p>I'll copy your quests in your clipboard, then you can paste them on slack.</p>
                <p>Enjoy!</p>
            </div>
            <footer>
                <a 
                    href="https://github.com/GordonPmnt" 
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Made with passion by GordonPmnt
                </a>
            </footer>
        </>
    );
};

export default Popup;