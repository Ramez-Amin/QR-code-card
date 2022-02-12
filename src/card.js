import react from 'react';
import Image from './images/image-qr-code.png';

function Card() {
    return (
        <main>
            <div className="qr-pic-container">
                <img src={Image} alt="" />
                <h3 className='title'>Improve Your Front-end skills by building projects</h3>
                <p className="info">Scan the QR code to visit Frontend Mentor and take your coding skills to  the next level</p>
            </div>

        </main>
    )
}

export default Card;