import dataRu from '../data.ru.json';
import dataUa from '../data.ua.json';
import dataEn from '../data.en.json';

const dataLangs = {
  ru: dataRu,
  ua: dataUa,
  en: dataEn
};
const langItem = 'lang';

function getData(){
  let lang = localStorage.getItem(langItem);
  if(!lang || !dataLangs[lang])
    return dataLangs.ua;
  return dataLangs[lang];
}

function changeLang(lang){
  localStorage.setItem(langItem, lang);
  window.location.reload();
}

const dataStore = { getData, changeLang };

export default dataStore;