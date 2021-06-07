import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <h1>{t('hello')}</h1>
      <button onClick={() => changeLanguage('en')}>En</button>
      <button onClick={() => changeLanguage('vi')}>Vi</button>
    </div>
  );
}

export default App;
