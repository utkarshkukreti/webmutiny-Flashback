$(document).ready(function () {
  $('#search').submit(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var hashtag = $(this).find('input[name="hashtag"]').val();
    var twitterapi = "http://search.twitter.com/search.json?";
    jQuery.ajax({
      type: "GET",
      url: twitterapi,
      data: {
        "q": hashtag,
        "rpp": 1000
      },
      dataType: 'jsonp'
    }).done(function (response) {
      var results = response.results;
      for (var i = 0; i < results.length; i++) {
        $("#tweet").append("<p> Name: " + results[i].from_user + " -   " +
                           results[i].text + "</p>");
      }
    });
  });
});
