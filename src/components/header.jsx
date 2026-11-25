import translations from './translations';

function Header({ language, onLanguageChange }) {
  const currentTranslations = translations[language];
  
  const handleLanguageToggle = () => {
    const newLanguage = language === 'it' ? 'en' : 'it';
    onLanguageChange(newLanguage);
  };

  return (
    <div className="header_container">
      <h1>{currentTranslations.title}</h1>
      <div className="header_buttons">
        <button 
          className="button header_button info_button"
          onClick={() => window.open("https://github.com/Maffo-o/Lupus-Helper", "_blank")}
          title={currentTranslations.infoButtonTitle}
          aria-label={currentTranslations.infoButtonLabel}
        >
          ℹ️
        </button>
        <button 
          className="button header_button language_button"
          onClick={handleLanguageToggle}
          title={currentTranslations.languageButtonTitle}
          aria-label={currentTranslations.languageButtonLabel}
        >
          {currentTranslations.languageButton}
        </button>
      </div>
    </div>
  );
}

export default Header;
