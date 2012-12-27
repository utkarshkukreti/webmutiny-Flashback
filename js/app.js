$(document).ready(function()
{
  $('submit').click(function(hashtag)
    {
      var array;
      var j=0;
      var twitterapi = "http://search.twitter.com/search.json?";
      var link = twitterapi + 'q=' + hashtag + '&' + 'rpp=1500';
      tweetspresent = results.length;
      jQuery.ajax(
    	{
          type: "GET",
          url:  twitterapi ,
          data: {"q": hashtag,"rpp":1000},
          dataType: 'jsonp',
        });
    }).done(function(results)
        {
           for(i=0;i<tweetspresent;i++)
             {
               $("#tweet").html("<p> Name: " + results[i].from_user + " -   " + results[i].text + "</p>");
               array[j] = [results[i].from_user,results[i].text];
               j++;
             }
        });
});