$(document).ready(function(){
$('submit').click(function(hashtag){

   
	var twitterapi = "http://search.twitter.com/search.json?";
	var link = twitterapi + 'q=' + hashtag + '&' + 'rpp=1500'
    $.getJSON(url,function(results){
	for(i=0;i<100;i++)
	{
			$("#tweet").html("<p> Name: " + results[0].from_user + " -   " + results[0].text + "</p>");
	}
	
    });	
});