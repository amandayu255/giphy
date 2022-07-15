// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$(".search-button").click(function() {
  //Declare variable to store user input
  let userInput = $(".search-term").val();

  //Declaring variable for API URL
  let api_url =
    "https://api.giphy.com/v1/gifs/search?q=" +
    userInput +
    "&rating=pg&api_key=aFAApqpjJXawe199zQZ7y2nx3fvbLPNB";

  fetch(api_url)
    .then(function(response) {
      return response.json();
    })

    .then(function(data) {
      //Declare variable to find other GIFs
      let numberGIF = data.data.length;
      let index = Math.floor(Math.random()*numberGIF);
      console.log(index);
      let imageURL = data.data[index].images.original.url;
      console.log(imageURL);
      //Display image of api_url
      $(".main").html(`<img src="${imageURL}">`);
    });
});
