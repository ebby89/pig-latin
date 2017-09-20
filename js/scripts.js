var vowelsWithYRegex = /[a,e,i,o,u,y]/i
var vowelsNoYRegex = /[a,e,i,o,u]/i
var notLetterRegex = /[^a-z]/i

// Returns pig latin-ated word, or null if not a word
var wordToPigLatin = function(word) {
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
  var withConsonantsRemoved = word.substring(firstVowelIndex);

  if (firstConsonants.slice(-1) === 'q' && withConsonantsRemoved.substring(0, 1) === 'u') {
    firstConsonants += 'u';
    withConsonantsRemoved = withConsonantsRemoved.substring(1);
  }

  return withConsonantsRemoved + firstConsonants + "ay";
};

// Returns an entire sentence as pig latin or null if not a valid sentence
var sentenceToPigLatin = function(sentence) {
  var words = sentence.split(" ");
  var pigLatinWords = [];
  words.forEach(function(word) {
    if (word !== "") {
      pigLatinWords.push(wordToPigLatin(word));
    }
  });

  return pigLatinWords.join(" ");
}

$(document).ready(function(){
  $("#input-form").submit(function(event) {
    event.preventDefault();

    var input = $("#input-form input[name=word]").val();
    var output = sentenceToPigLatin(input);

    $("#output h1").text(output);
  });
});
