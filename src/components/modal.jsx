import '../index.css'
import { useEffect } from 'react'

function Modal({ isOpen, title, content, onClose }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const lines = content.split('\n');

    return (
        <>
            <div className="modal_backdrop" onClick={onClose}></div>
            <div className="modal_container">
                <div className="modal_content">
                    <button className="modal_close" onClick={onClose}>❌</button>
                    <h2>{title}</h2>
                    <div className="modal_text">
                        {lines.map((line, index) => (
                            <div key={index}>{line}</div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
