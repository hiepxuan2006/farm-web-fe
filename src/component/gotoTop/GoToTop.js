import React, { useEffect, useState } from 'react';

function GoToTop(props) {
    const [scrollY, setScrollY] = useState(0)
    useEffect(() => {
        const handleScrollY = () => {
            setScrollY(window.scrollY)
        }
        window.addEventListener('scroll', handleScrollY)
    }, [scrollY])
    const handleGototop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div style={(scrollY > 300) ? { visibility: 'visible' } : { visibility: 'hidden' }}
            onClick={handleGototop}>
            <div style={{
                fontSize: '24px',
                zIndex: '120',
                position: 'fixed',
                bottom: '30px',
                cursor: 'pointer',
                border: '1px solid #ccc',
                backgroundColor: '#000',
                left: '90%',


            }}>
                <i style={{ padding: '10px', color: '#fff' }} className="fa-solid fa-square-caret-up"></i>
            </div>
        </div>
    );
}

export default GoToTop;