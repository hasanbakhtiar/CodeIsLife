import React from 'react';
import '../i18n/i18n';
import { useTranslation } from 'react-i18next';



const App = () => {
    const {t, i18n} = useTranslation();
    const handleClick =(lang)=>{
        i18n.changeLanguage(lang);
    }
  return (
    <div className='container mt-5'>
        <h1>{t('m.0')}</h1>
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Globe 
  </button>
  <ul class="dropdown-menu">
        <li><button className='btn bg-primary dropdown-item text-center mt-3 text-light' onClick={()=>handleClick("az")}>az</button></li>
        <li><button className='btn bg-primary dropdown-item text-center mt-3 text-light' onClick={()=>handleClick("tr")}>tr</button></li>
        <li><button className='btn bg-primary dropdown-item text-center mt-3 text-light' onClick={()=>handleClick("en")}>en</button></li>
  </ul>
</div>
      
    </div>
  )
}

export default App