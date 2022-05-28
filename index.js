document.querySelector("form").addEventListener("submit", myfunction);
let attachone = document.querySelector("#boom");
let attachtwo = document.querySelector("#boomone");
const api_key = "0a7a1dbcbb604d9ce6a32c6ceb2ca4ed";

function myfunction() {
  event.preventDefault();
  let take = document.querySelector("#wheather").value;
  let original = `https://api.openweathermap.org/data/2.5/weather?q=${take}&appid=${api_key}`;
  async function callme() {
    try {
      let inputone = await fetch(original);
      let inputtwo = await inputone.json();
      thisisdata(inputtwo);
      console.log(inputtwo);
    } catch (err) {
      console.log(err);
    }
  }
  callme();
}
function thisisdata(data) {
  if(data.name==undefined){
    attachone.innerHTML="Not found";
  }
else{
  attachone.innerHTML=null;
  let cre = document.createElement("div");
  
  let one = document.createElement("h2");
  one.innerText = `📛 :${data.name}`;

  let two = document.createElement("h2");
  two.innerText = `🌄:${data.base}`;

  let three = document.createElement("h2");
  three.innerText = `🌨️:${data.main.temp_min}`;

  let four = document.createElement("h2");
  four.innerText = `🌞:${data.main.temp_max}`;

  let five = document.createElement("h2");
  five.innerText = `💨:${data.wind.deg}`;

  let six = document.createElement("h2");
  six.innerText = `🌨️:${data.clouds.all}`;

  let seven = document.createElement("h2");
  seven.innerText = `🌇:${data.sys.sunset}`;

  let eignt = document.createElement("h2");
  eignt.innerText = `🌞:${data.sys.sunrise}`;

  let iframe=document.querySelector("#gmap_canvas");
  iframe.src=`https://maps.google.com/maps?q=${data.name}%20&t=&z=13&ie=UTF8&iwloc=&output=embed`


  cre.append(one, two, three, four, five, six, seven, eignt);

  attachone.append(cre);
}
}