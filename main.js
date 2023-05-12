let form=document.querySelector('.form')
let input=document.querySelector('.input')
let btn=document.querySelector('.btn')
let weather=document.querySelector('.weather')

form.addEventListener('click', (e) => {
    e.preventDefault();
    weather.innerHTML=''
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=3e2e21be66670551d1d6a177301cb599`)
      .then((res) => res.json())
      .then((json) => {
        weather.innerHTML += `
        <h2>${json.name}</h2>
        <h3>${json.sys.country}</h3>
        <img src='https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png' alt='' />
        <p>${Math.round(json.main.temp - 273.15)}°C</p>
        <p>${json.weather[0].description}</p>
        `
      })
  })


  
  
  