$(function() {
    $.getJSON("https://ajax.googleapis.com/ajax/services/feed/find?v=1.0&q=codecademy&callback=?",
      function(response) {
        $.each(response.responseData.entries, function (i,newsItem) {
            $("#newsfeed").append("<li>"+newsItem.title+"</li>");
        });
      });

   $.ajax({
        url: "https://ajax.googleapis.com/ajax/services/feed/find?v=1.0&q=jquery& ",

        jsonpCallback: "listFeeds"
    });

});

function listTweets(response) {
     // each goes here with appends to #jqueryfeed
  $.each(response, function(i, item){
  
  });

}



$(function() {
   $("#loadFeeds").click(function() {
       $("li").remove(); // Remove any existing li elements
       $(this).toggleClass("btn-primary"); // Switch to default grey
       $(this).html("Loading"); // Change text of button
       $(this).html("Load Again"); // Change back text of button
       $(this).toggleClass("btn-primary")
       $.ajax({
            url: "/codecademy/success?callback=?",
            dataType: "jsonp",
            complete: function(jqXHR, textStatus) {
                console.log("Completed: "+textStatus);
            $("#loadFeeds").html("Load Again"); // Change back text of button
       $("#loadFeeds").toggleClass("btn-primary")
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("Error: "+textStatus+" "+errorThrown);
            },
            success: function(data, textStatus, jqXHR) {
                console.log("Success: "+textStatus);
            
            },
            jsonpCallback: "listFeeds"
       
       });

       // Revert back to default grey
   });
});

function listFeeds(response) {
    $.each(response.responseData.entries, function (i,newsItem) {
        $("#newsfeed").append("<li>"+newsItem.title+"</li>");
    });
}
