"use strict";

var twitterLink = "https://twitter.com/intent/tweet?text=",
    generateTwitterLink = function generateTwitterLink() {
  var newTwitterLink = [twitterLink, quoteText.toString(), "By ", quoteAuthor.toString()].join("");
  return newTwitterLink;
},
    setTwitterAttr = function setTwitterAttr() {
  $("#tweet-quote, #tweet-quote-mobile").attr({
    href: generateTwitterLink,
    target: "_blank"
  });
},
    quoteText,
    quoteAuthor,
    quote = function quote() {
  $.ajax({
    url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",
    dataType: "json",
    success: function success(data) {
      quoteText = data.quoteText;
      quoteAuthor = data.quoteAuthor;
      $("#quote-text").text(quoteText);
      $("#quote-author").text(" - By " + quoteAuthor);
    }
  });
};

$(document).ready(quote, setTwitterAttr);

$("#quote-generator").on("click", function (e) {
  e.preventDefault;
  quote();
  setTwitterAttr();
});