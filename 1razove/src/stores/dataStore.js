import axios from 'axios';

const langItem = 'lang';

async function getData(){
  let random = Math.round(Math.random() * 100000);
  let lang = localStorage.getItem(langItem);
  let link = `/data/data.ua.json`;
  link = lang ? `/data/data.${lang}.json?${random}` : link;
  //link = `https://dmitry-alexa.s3.eu-central-1.amazonaws.com/data.${lang}.json`;
  let request = await axios.get(link);
  return request.data;
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
