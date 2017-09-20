var vowelsWithYRegex = /[a,e,i,o,u,y]/i
var vowelsNoYRegex = /[a,e,i,o,u]/i
var notLetterRegex = /[^a-z]/i

// Returns pig latin-ated word, or null if not a word
var toPigLatin = function(word) {
  if (notLetterRegex.test(word)) {
    return null;
  }
  var firstVowelIndex = word.search(vowelsWithYRegex);

  if (firstVowelIndex === 0 && word[firstVowelIndex] === 'y') {
      firstVowelIndex = word.search(vowelsNoYRegex);
  }
  else if (firstVowelIndex === 0) {
    return word + 'way';
  }

  var firstConsonants = word.slice(0, firstVowelIndex);
  var moveConsonants = word.substring(firstVowelIndex) + firstConsonants;
  return moveConsonants + "ay";
};





$(document).ready(function(){
  $("#input-form").submit(function(event) {
    event.preventDefault();

    var inputWord = $("#input-form input[name=word]").val();
    var output = toPigLatin(inputWord);

    $("#output h1").text(output);
  });
});
