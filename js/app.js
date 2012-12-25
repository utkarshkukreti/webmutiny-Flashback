var hashtag;
var twitterapi = "http://search.twitter.com/search.json?q=Pink&rpp=1000" ;

$.getJSON(twitterapi + 'q=' + hashtag + '&' + 'rpp=1500',  function(data){
