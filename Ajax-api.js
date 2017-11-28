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

$(function() {
   $("#loadButtons").click(function() {
       $("li").remove(); // Remove any existing li elements
       $(this).toggleClass("btn-primary"); // Switch to default grey
       $(this).html("Loading"); // Change text of button
       $.ajax({
            url: "/codecademy/success",
            dataType: "jsonp",
            complete: function(jqXHR, textStatus) {
                $("#loadButtons").html("Load Again"); // Change back text of button
                $("#loadButtons").toggleClass("btn-primary"); // Revert back to default grey
            },
            error: function(jqXHR, textStatus, errorThrown) {
            },
            success: function(response) {
                // Empty the #buttonfeed div
                $("#buttonfeed").html("");
                
                // Go through the array of button data passed back and create a button for each
                $.each(response.buttonData, function(i, item){
                    $("#buttonfeed").append(buttonHTML(item,response.numberOfCalls));
                });
                
                // Add a click event for button #1
                $(generateButtonId(response, 1)).click(function(e) {
                    $("#statusText").text("Clicked "+$(this).attr("id"));
                });
            }
        });
   });
   
   function buttonHTML(buttonData,counter) {
       return "<a type='button' id='"+buttonData.btnId+counter+"' class='"+buttonData.btnClass+"' >"+buttonData.btnText+"</a>";
   }
   
   // Add a click event for any button with class 'btn-primary'
   $("body").on('click', 'a.btn-primary', function(e) {
       $("#statusText").text("Clicked "+e.target.id);
   });
});

// Take in the item number and generate an id for jQuery from the response data
function generateButtonId(respData, itemNo) {
    return "#"+respData.buttonData[itemNo].btnId+respData.numberOfCalls;
}
University of OULU
POBox 8000
90014 University of Oulu



$(document).ready(() => {
  $('.menu-button').on('click',() => {
    $('#nav-dropdown').slideToggle('slow');
  });
	
  $(".login-button").on("click", () => {
    $(".login-form").slideToggle();
  });
  
  $(".arrow-one").on("click", () => {
    $(".shoe-details-one").toggle();
  });
  
  $(".sizes-one").on("click", () => {
    $(".text-one").fadeIn(1000);
  });
  
  $(".arrow-two").on("click", () => {
    $(".shoe-details-two").toggle();
  });
  
  $(".sizes-two").on("click", () => {
    $(".text-two").fadeIn();
  });
  
  $(".arrow-three").on("click", () => {
    $(".shoe-details-three").toggle();
  });
  
  $(".sizes-three").on("click", () => {
    $(".text-three").fadeIn(1000);
  });
  
});

$(function() {
   $("#loadButtons").click(function() {
       $("li").remove(); // Remove any existing li elements
       $(this).toggleClass("btn-primary"); // Switch to default grey
       $(this).html("Loading"); // Change text of button
       $.ajax({
            url: "/codecademy/success",
            dataType: "jsonp",
            jsonpCallback:"buttonHTML",
            complete: function(jqXHR, textStatus) {
                $("#loadButtons").html("Load Again"); // Change back text of button
                $("#loadButtons").toggleClass("btn-primary"); // Revert back to default grey
            },
            error: function(jqXHR, textStatus, errorThrown) {
            },
            success: function(response) {
                // Empty the #buttonfeed div
                $("#buttonfeed").html("");
                
                // Go through the array of button data passed back and create a button for each
                $.each(response.buttonData, function(i, item){
                    $("#buttonfeed").append(buttonHTML(item,response.numberOfCalls));
                });
                
                // Add a click event for button #1
                $(generateButtonId(response, 1)).click(function(e) {
                    $("#statusText").text("Clicked "+$(this).attr("id"));
                });
            $(generateButtonId(response, 2)).click(function(e) {
                    $("#statusText").text("Clicked "+$(this).attr("id"));
                });
             $(generateButtonId(response, 3)).click(function(e) {
                    $("#statusText").text("Clicked "+$(this).attr("id"));
                });
            }
        });
   });
   
   function buttonHTML(buttonData,counter) {
       return "<a type='button' id='"+buttonData.btnId+counter+"' class='"+buttonData.btnClass+"' >"+buttonData.btnText+"</a>";
   }
   
   // Add a click event for any button with class 'btn-primary'
   $("body").on('click', 'a.btn-primary', function(e) {
       $("#statusText").text("Clicked "+e.target.id);
   });
$("body").on('click', 'a.btn-success', function(e) {
       $("#statusText").text("Clicked "+e.target.id);
   });
$("body").on('click', 'a.btn-inverse', function(e) {
       $("#statusText").text("Clicked "+e.target.id);
   });

});

// Take in the item number and generate an id for jQuery from the response data
function generateButtonId(respData, itemNo) {
    return "#"+respData.buttonData[itemNo].btnId+respData.numberOfCalls;
}$(function() {
   $("#resultsModal").modal({show: false});

   $("#mySubmit").click(function(e) {
       e.preventDefault(),
       $(this).attr('disabled','disabled'); // Switch to default grey
       $(this).html("Sending"); // Change text of button
       $.ajax({
            url: "/codecademy/uploadForm",
            data: $('#myForm').serialize() ,
            type: 'post',
            dataType: "text",
            complete: function(jqXHR, textStatus) {
                $("#mySubmit").removeAttr('disabled'); // Change back text of button
                $("#mySubmit").toggleClass("btn-primary"); // Revert back to default grey
            },
            error: function(jqXHR, textStatus, errorThrown) {
                 $("#twitterstatus").text("Tweet failed.");
            },
            success: function(response) {
                 $("#twitterstatus").text("Tweet sent successfully.");
            }
        });
   });
});

$(function(){   
    $('#uploadFile').click(function (e) {
        var inputFiles = $('#file').prop("files");
        if (inputFiles) {
            $(this).prop('disabled','disabled');
            uploadFile(inputFiles[0], "myFile");
        }
    });
    
    function uploadFile(blobFile, fileName) {
        var fd = new FormData();
           fd.append(fileName,blobFile)
        // Need to add filename and blobFile here
        $("#progress").show();
    
        $.ajax({
           url: "/codecademy/uploadAway",
           type: "POST",
           contentType:false,
           processData:false,
          data:fd,

           //other parameters here
           
           complete: function() {
              $("#progress").hide();
              $("#uploadFile").removeProp('disabled');
           },
           success: function(response) {
               $("body").append('<div id="uploadStatus" class="alert alert-success">Upload Successful.</div>');
           },
           error: function(jqXHR, textStatus, errorMessage) {
               $("body").append('<div id="uploadStatus" class="alert alert-error">Upload Failed.</div>');
               console.log(errorMessage); // Optional
           }
        });
    }
});

$(function() {
   $(document).ajaxSuccess(function(event, xhr, settings) {
        if ($.inArray("json", settings.dataTypes) != -1) {
            var myData = $.parseJSON(xhr.responseText);
            $("#callStat").text(myData.numberOfCalls);
        }   
   });
   
   $("#loadFormData").click(function() {
$("#mySubmit").prop("disabled","disabled");
      var promise1= $.ajax({
            url: "/codecademy/dropdown",
            dataType: "json",
      });
            promise1.done(function(response,textStatus,jqXHR)
            {
               updateDropDown(response.dropDown); 
            })
             
     var promise2= $.ajax({
            url: "/codecademy/button",
            dataType: "json",
     });
    promise2.done(function(response,textStatus,jqXHR) {
               $("#two").html(response.btnText) 
            })
        });
   var promise3=$.ajax({
            url: "/codecademy/input",
            dataType: "json",
   });
       promise3.done(function(response) {
            $("#three").val(response.accessDate)
            });
   var promise4 = $.ajax({
            url: "/codecademy/span",
            dataType: "json",
   });
        promise4.done( function(response) {
            $("#four").text(response.lastLoggedInUser)
            })
      var promise5=  $.get("/codecademy/div", function(response,textStatus, jqXHR){
         $("#five").html(data) 
        });
   $.when(promise1,promise2,promise3,promise4,promise5).then(function(){$("#mySubmit").removeAttr("disabled","disabled")});
   $("body").on('click', 'button.btn-info', function(e) {
       var clicked = $(e.target);
       alert("Button has text: "+clicked.text());
   
   });
   
   $('.chzn').chosen();
   });
function updateDropDown(data) {
    $("#one.chzn").empty();
    $.each(data,function(i,item){
        $("#one.chzn").append($("<option>",{
                                val: item.id,
                                text: item.text
        }));
    });
    $('#one.chzn').trigger("liszt:updated");
}