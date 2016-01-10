// This code allows me to remove '<' and '>' signs from a url,
// protecting myself from people adding strings into my forms

var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
  var newHTML = _html;

/*
  These lines are replacing all instances of '<' and '>' with their character entity references
  /x/g is a RegExp modifier meaning it looks for all instances of 'x' rather than stopping at the first one
  more info @ http://www.w3schools.com/jsref/jsref_regexp_g.asp and 
  https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML
*/

  newHTML = _html.replace(/</g, "&lt;");
  newHTML = newHTML.replace(/>/g, "&gt;");

  return newHTML;
};

