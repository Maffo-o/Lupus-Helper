import '../index.css'
import translations from './translations'

function Note({language}) {
    const currentTranslations = translations[language];

    return <div>
        <h2>{currentTranslations.notesHeading}</h2>
        <textarea className="text_area" aria-label={currentTranslations.notesHeading}></textarea>
    </div>
}

export default Note