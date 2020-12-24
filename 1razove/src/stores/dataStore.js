import axios from 'axios';

const langItem = 'lang';

async function getData(){
  let lang = localStorage.getItem(langItem);
  let link = `http://razove.com.ua/data/data.ua.json`;
  link = lang ? `http://razove.com.ua/data/data.${lang}.json` : link;
  //link = `https://dmitry-alexa.s3.eu-central-1.amazonaws.com/data.${lang}.json`;
  let request = await axios.get(link);
  return request.data;
}

function changeLang(lang){
  localStorage.setItem(langItem, lang);
  window.location.reload();
}

const dataStore = { getData, changeLang };

export default dataStore;