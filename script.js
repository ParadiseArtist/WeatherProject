$(function(){
  
    var api = "https://fcc-weather-api.glitch.me/api/current?"
    var lat;
    var lon;
    const button = document.querySelector('button');
    var tempDiv = document.getElementById('temp');
    let tempC;
    let temp;
    let tempOutput='';
    var F = 1;
   
    // Get visitor location
    // If location request is successful
    // Show location to visitor
    // If location request fails tell visitor fail message and possibly show a imaginary city's weather
    
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        $("#data").html("<p>latitude: " + lat + "<br>longitude: " + lon+"</p>");
        getWeather(lat, lon);
      });
    };
    
    // Get weather info for location
    // If successful show weather background and temp readout somewhere on image
    // Create input box for them request specific weather for a selected date at there location
    // weather requests should give them a special weather dance that they can do to help get their request
    // add button to change Farenheit to Celcius and back
    // place button near the location readout
    // when it switches from C to F the font type could change
    
    function getWeather(lat, lon) {
      var urlString = api+'lat='+lat+'&'+'lon='+lon;
      $.ajax({
        url: urlString ,
        success: function(result){
          console.log(result)
          
          //prints city location
          $('#city').html('<h4>Looks like you are in '+result.name+'</h4>');
          
          //displays graphic image of the weather
          $('#icon').html("<img src="+result.weather[0].icon+" width=160px height=auto id=icon >");
          
          //added alt text to image and got formatting correct when the text is two words. When I tried
          //adding it to the html above the second word got left out of the alt='slightly' cloudy.
          $('#icon img:first-child').attr({
            alt: result.weather[0].description
          });
          temp = Math.round(result.main.temp+32);
          tempDiv.innerHTML = '<h2>'+temp+' <button>F</button></h2>';
          },
          error: function(error){
            console.log(error);
          }
       });
     };
      
  $('#temp').click( function(){
      if(F === 1){
        F= F-1;
         tempDiv.innerHTML = '<h2>'+(temp-32)+' <button>C</button></h2>';
      }else if(F === 0){
        F++;
        tempDiv.innerHTML = '<h2>'+(temp)+' <button>F</button></h2>';
      }   
          });
  
  });
  
  
  [
    {
      'photographer': 'Danilo Batista',
      'creditHTML': '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px;" href="https://unsplash.com/@hiddenwindows?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Danilo Batista"><span style="display:inline-block;padding:2px 3px;"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white;" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px;">Danilo Batista</span></a>',
      'photoFileName': 'danilo-batista-334883.jpg',
      'weatherDesc': 'clear sky'
    },
    {
      'photographer': 'Samuel Zeller',
      'creditHTML': '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px;" href="https://unsplash.com/@samuelzeller?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Samuel Zeller"><span style="display:inline-block;padding:2px 3px;"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white;" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px;">Samuel Zeller</span></a>',
      'photoFileName': 'samuel-zeller-339480.jpg',
      'weatherDesc': 'clear sky'
    },
    {
      'photographer': 'Scott Webb',
      'creditHTML': '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px;" href="https://unsplash.com/@scottwebb?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Scott Webb"><span style="display:inline-block;padding:2px 3px;"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white;" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px;">Scott Webb</span></a>',
      'photoFileName': 'scott-webb-247900.jpg',
      'weatherDesc': 'few clouds'
    },
    {
      'photographer': '',
      'creditHTML': '',
      'photoFileName': '',
      'weatherDesc': ''
    },
    {
      'photographer': '',
      'creditHTML': '',
      'photoFileName': '',
      'weatherDesc': ''
    },
    {
      'photographer': '',
      'creditHTML': '',
      'photoFileName': '',
      'weatherDesc': ''
    }
  ]
  
  
  