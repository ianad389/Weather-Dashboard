$(document).ready(function()) {

    const apiKey = '558648b15532e7ad648de88c718a7836';
    const cityEl = $('h2#city');
    const dateEl = $('h3#date');
    const weatherIconEl = $('span#temperature');
    const humidityEl = $('span#humidity');
    const windEl = $('span#wind');
    const uvIndexEl = $('span#uv-index');
    const cityListEl = $('div.cityList');


    const cityInput = $('#city-input');

    let pastCities = [];

    
