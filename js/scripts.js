var firstVowelRegex = /[a,e,i,o,u]/i


var toPigLatin = function(word) {
  var firstVowelIndex = word.search(firstVowelRegex);

  if (firstVowelIndex === 0) {
    return word + 'way';
  }
  else {
    var firstConsonants = word.slice(0, firstVowelIndex);
    var moveConsonants = word.substring(firstVowelIndex) + firstConsonants;
    return moveConsonants + "ay";
  }




  return word;
};





$(document).ready(function(){
  $("#input-form").submit(function(event) {
    event.preventDefault();

    var inputWord = $("#input-form input[name=word]").val();
    var output = toPigLatin(inputWord);

    $("#output h1").text(output);
  });
});
