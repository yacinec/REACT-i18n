import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  // use the t method to access to the /public/locales folder which contains the translation
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className='App'>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('fr')}>FR</button>
      <hr />
      <h2>{t('title')}</h2>
      <p>{t('description.part1')}</p>
      <p>{t('description.part2')}</p>
    </div>
  );
}

export default App;
