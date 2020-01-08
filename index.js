'use strict';

function getDogImage(dogInput) {
  fetch(`https://dog.ceo/api/breeds/image/random/${dogInput}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}


function displayResults(responseJson) {
    console.log(responseJson);
  }

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let dogInput = $('#dog-input').val();
    getDogImage(dogInput);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});