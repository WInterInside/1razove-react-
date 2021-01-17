import axios from 'axios';

const langItem = 'lang';

async function getData(){
  let random = sessionStorage.getItem('random');
  if(!random){
    random = Math.round(Math.random() * 100000);
    sessionStorage.setItem('random', random);
  }
  let lang = localStorage.getItem(langItem);
  let result = sessionStorage.getItem(`data-${random}-${langItem}`);
  if(!result){
    let link = `/data/data.ua.json`;
    link = lang ? `/data/data.${lang}.json?${random}` : link;
    link = `https://dmitry-alexa.s3.eu-central-1.amazonaws.com/data.${lang}.json`;
    let request = await axios.get(link);
    result = request.data;
    sessionStorage.setItem(`data-${random}-${langItem}`, JSON.stringify(result));
  } else {
    result = JSON.parse(result);
  }
  return result;
}

function getLang() {
  return localStorage.getItem(langItem) || "ua";
}

function setLang(lang) {
  localStorage.setItem(langItem, lang);
}

function changeLang(lang){
  localStorage.setItem(langItem, lang);
  let [currentLang] = window.location.pathname.split("/").filter(x => !!x);
  window.location.href = window.location.href.replace(`/${currentLang ? currentLang : 'ua'}`, `/${lang}` );
}

const dataStore = { getData, changeLang, getLang, setLang };

export default dataStore;
