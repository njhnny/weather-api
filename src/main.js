import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
//import { Loader } from "@googlemaps/js-api-loader";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const lat = $('#latitude').val();
    const lon = $('#longitude').val();
    $('#location').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=0b1f0c4ad33ac4bb014575429627407c`;
    // const loader = new Loader({
    //   apiKey: "AIzaSyBOvgbJ-lq1v4Ub6XMvEkhamJoCvyIhX9cY",
    //   version: "weekly",
    // });
    

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.showHumidity').text(`The humidity in ${lat} ${lon} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Fahrenheit is ${response.main.temp} degrees.`);
    }

    let map;

    function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
    
    // loader.load().then(() => {
    //   map = new google.maps.Map(document.getElementById("map"), {
    //     center: { lat: 35.23, lng: -80.84 },
    //     zoom: 8,
    //   });
    // });
  });
  
});