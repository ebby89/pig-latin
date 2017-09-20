var toPigLatin = function(word) {
  return word;
}





$(document).ready(function(){
  $("#input-form").submit(function(event) {
    event.preventDefault();

    var inputWord = $("#input-form input[name=word]").val();
    var output = toPigLatin(inputWord);

    console.log(output);
  });
});
