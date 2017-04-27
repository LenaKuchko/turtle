

$(function() {
  $("#form-species").submit(function(event) {
    var species = $("input:radio[name=species]:checked").val();
    console.log(species);
    event.preventDefault();

    if (species == "turtles") {
      $("#outputText").text("Lemme tell you about Turtles. Did you know that over 4000 years ago, turtles were the main dominant race on the planet of Earth. They flew there utilizing their scrubby shells and have been using the deceitful tactic of playing as small, insignificant reptiles. But indeed, they are the true gods of this world.")
      $("#outputText").append('<img src="img/turtle.jpg" alt="A magnificent beast."/>')

    } else if (species == "snakes") {
      $("#outputText").text("Snakes are the bane of turtles. Having no legs and no shell fully undermines the turtle authority.")
    // } else (species == "insects") {
    }else {
      $("#outputText").text("Insects suck. Go learn about turtles.")
    }
  });
});
