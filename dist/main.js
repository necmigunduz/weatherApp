(()=>{const t=document.querySelector(".container"),e=document.querySelector(".name");e.setAttribute("class","text-center");const n=document.querySelector(".description");n.setAttribute("class","text-center");const c=document.querySelector(".temp");c.setAttribute("class","text-center");const r=document.querySelector(".humidity");r.setAttribute("class","text-center");const i=document.querySelector(".wind");i.setAttribute("class","text-center");const s=document.querySelector(".visibility");s.setAttribute("class","text-center"),function(){const o=document.createElement("h1");o.setAttribute("class","header bg-dark text-light text-center"),o.textContent="WEATHER TODAY";const a=document.createElement("form"),u=document.createElement("label");u.setAttribute("for","cityname"),u.setAttribute("class","cityname text-center mb-2"),u.setAttribute("aria-describedby","cityname"),u.textContent="Enter location name";const l=document.createElement("input");l.setAttribute("class","city form-control"),l.setAttribute("id","location");const d=document.createElement("button");d.textContent="Submit",d.setAttribute("class","btn btn-secondary mt-2 text-center w-100"),d.setAttribute("type","submit"),d.addEventListener("click",(t=>{t.preventDefault(),fetch(`https://api.openweathermap.org/data/2.5/weather?q=${l.value}&units=metric&APPID=8362038b9b4953c5bf68a1d7c665d255`,{mode:"cors"}).then((function(t){return t.json()})).then((function(t){l.value=null,n.innerHTML=`${t.weather[0].description}`.toUpperCase(),e.innerHTML=`${t.name}, ${t.sys.country}`,c.innerHTML=`${t.main.temp} Celcius`,r.innerHTML=`${t.main.humidity} %`,i.innerHTML=`${t.wind.speed} km`,s.innerHTML=`${t.visibility} km`}))})),a.appendChild(o),a.appendChild(u),a.appendChild(l),a.appendChild(d),t.appendChild(a)}()})();