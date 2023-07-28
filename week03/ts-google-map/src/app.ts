/**
import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "";

// declare var google: any;

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then(response => {
      if (response.data.status !== "OK") {
        throw new Error("Could not fetch location!");
      }
      const coordinates = response.data.results[0].geometry.location;
      const map = new google.maps.Map(document.getElementById("map"), {
        center: coordinates,
        zoom: 16
      }); 

      new google.maps.Marker({ position: coordinates, map: map });
    })
    .catch(err => {
      alert(err.message);
      console.log(err);
    });
}

form.addEventListener("submit", searchAddressHandler);
 */

declare var ol: any;

function searchAddressHandler(event: Event) {
  event.preventDefault();

  const coordinates = {lat: 40.41, lng: -73.99}; // Google API에서 좌표를 가져올 수 없음, 더미 API 사용

  document.getElementById('map')!.innerHTML = ''; // <div id="map">에서 <p> 제거
  new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
      zoom: 16
    })
  });
}