import '../index.css'
import { useEffect } from 'react'

function PowerPopup({ isOpen, title, content, onClose }) {
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = scrollbarWidth + 'px';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div className="modal_backdrop" onClick={handleBackdropClick}></div>
      <div className="modal_container">
        <div className="modal_content">
          <button className="modal_close" onClick={onClose}>❌</button>
          <h2>{title}</h2>
          <div className="modal_text">
            {content.split('\n').map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PowerPopup;
