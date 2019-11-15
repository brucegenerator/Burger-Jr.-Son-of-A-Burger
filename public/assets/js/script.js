$(document).ready(function() {
  $(".devour-form").on("click", function(event) {
   event.preventDefault();
    var burger_id = $(this).children(".burger_id").val();
    console.log(burger_id);
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then(function(data) {
      location.reload();
    });
  });
});
  var burgerSound = new Audio("http://www.moviewavs.com/0053148414/WAVS/Movies/Pulp_Fiction/burger.wav");
  $('.devour-form').on("click", function(event) {
    event.preventDefault();
    burgerSound.play();
  })

  var bevSound = new Audio("http://www.moviewavs.com/0053148414/WAVS/Movies/Pulp_Fiction/beverage.wav");
  $("#text-enter-button").on("click", function(event) {
    event.preventDefault();
    bevSound.play();
  });

