var firstVowelRegex = /^[a,e,i,o,u]/i


var toPigLatin = function(word) {
  if (firstVowelRegex.test(word)) {
    return word + 'way';
  };




  return word;
}





$(document).ready(function(){
  $("#input-form").submit(function(event) {
    event.preventDefault();

    var inputWord = $("#input-form input[name=word]").val();
    var output = toPigLatin(inputWord);

    $("#output h1").text(output);
  });
});
