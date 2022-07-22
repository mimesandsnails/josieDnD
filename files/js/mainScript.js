window.onload=function(){

function getTranslation(string) {
  return string
    .split(/[,?;:\s]+/) //separates via puncuation or whitespace (\s)
    .filter(word => word)
    .map(word => dictionary[word] || word.fontcolor( "grey" ).italics() + " (n/a)".fontcolor( "grey" ).italics()) // makes words not in dictionary appear grey and italicized with (n/a) after
    .join(' ');
} // end getTranslation()

function translate(inputEl, outputEl) {
  outputEl.innerHTML = getTranslation(inputEl.value);
} //end translate()


document.querySelector('#translate').addEventListener('click', function() {
  const input = document.querySelector('#inputTextField');
  const output = document.querySelector('#translationOutputDiv');
  translate(input, output);
}); // end querySelector()

} // end window.onload
