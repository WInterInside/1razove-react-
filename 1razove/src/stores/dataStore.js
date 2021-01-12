import axios from 'axios';

const langItem = 'lang';

async function getData(){
  let random = Math.round(Math.random() * 100000);
  let lang = localStorage.getItem(langItem);
  let link = `https://razove.com.ua/data/data.ua.json`;
  link = lang ? `https://razove.com.ua/data/data.${lang}.json?${random}` : link;
  //link = `https://dmitry-alexa.s3.eu-central-1.amazonaws.com/data.${lang}.json`;
  let request = await axios.get(link);
  return request.data;
}

function getLang() {
  return localStorage.getItem(langItem) || "ua";
}

function changeLang(lang){
  localStorage.setItem(langItem, lang);
  window.location.reload();
}

const dataStore = { getData, changeLang, getLang };

export default dataStore;
