const container = document.querySelector('.container');

const name = document.querySelector('.name');
name.setAttribute('class', 'text-center');

const description = document.querySelector('.description');
description.setAttribute('class', 'text-center');

const temp = document.querySelector('.temp');
temp.setAttribute('class', 'text-center');

const humidity = document.querySelector('.humidity');
humidity.setAttribute('class', 'text-center');

const wind = document.querySelector('.wind');
wind.setAttribute('class', 'text-center');

const visibility = document.querySelector('.visibility');
visibility.setAttribute('class', 'text-center');

function createForm() {
  const header = document.createElement('h1');
  header.setAttribute('class', 'header bg-dark text-light text-center');
  header.textContent = 'WEATHER TODAY';
  const form = document.createElement('form');
  const label = document.createElement('label');
  label.setAttribute('for', 'cityname');
  label.setAttribute('class', 'cityname text-center mb-2');
  label.setAttribute('aria-describedby', 'cityname');
  label.textContent = 'Enter location name';
  const input = document.createElement('input');
  input.setAttribute('class', 'city form-control');
  input.setAttribute('id', 'location');
  const submit = document.createElement('button');
  submit.textContent = 'Submit';
  submit.setAttribute('class', 'btn btn-secondary mt-2 text-center w-100');
  submit.setAttribute('type', 'submit');

  submit.addEventListener('click', (e) => {
    e.preventDefault();

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&APPID=8362038b9b4953c5bf68a1d7c665d255`,
      { mode: 'cors' },
    )
      .then(function (response) { // eslint-disable-line
        return response.json();
      })
      .then(function (data) { // eslint-disable-line
        input.value = null;

        description.innerHTML = `${data.weather[0].description}`.toUpperCase();
        name.innerHTML = `${data.name}, ${data.sys.country}`;
        temp.innerHTML = `${data.main.temp} Celcius`;
        humidity.innerHTML = `${data.main.humidity} %`;
        wind.innerHTML = `${data.wind.speed} km`;
        visibility.innerHTML = `${data.visibility} km`;
      });
  });

  form.appendChild(header);
  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(submit);

  container.appendChild(form);
}

createForm();
