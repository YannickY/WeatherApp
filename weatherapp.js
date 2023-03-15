$(function () {

    $("#submit").on("click", function(){
        $.ajax({
            
            type: "POST",
            url: `https://api.openweathermap.org/data/2.5/weather?q=${$("input[id='cityRadio']:checked").val()}&appid=a261e8b391febbe8a8f940f7fb4d2709&units=imperial`,
            success: function(data) {
                let html = `<p>Main: ${data.weather[0].main}<br>`;
                html+= `Temp: ${data.main.temp}°F <span>(feels like: ${data.main.feels_like}°F)</span><br>`,
                html+= `Description: ${data.weather[0].description}<br>`
                html+= `Humidity: ${data.main.humidity}</p>`;
                let $text = $(".text");
                $text.html(html);
                $("p").css("color", "white");

                

            },
            fail: function() {
                $(".text").html("<p>Please try again soon</p>");
            }
        });

    })
   
        
  

})