var displaycity = document.getElementById('display');
var url = 'https://api.openweathermap.org/data/2.5/weather?lat=6.0535&lon=80.221&appid=45113cdc283bc1319ddbbe3b72b7cf46'
           var http = new XMLHttpRequest();
           http.open('GET',url);
           http.send();
                             //http.onreadystatechange = () => { //function()

                           //console.log(http.readyState);
                         //}
        http.onreadystatechange = function(){
            if (http.readyState == 4 && http.status == 200){
                var data = JSON.parse(http.response)
                console.log(data);
                var city = data.name;
                   //displaycity.innerHTML = "city : " + city;
                var temp = data.main.temp;
                var pressure = data.main.pressure;
                var humidity = data.main.humidity;
                
    

                display.innerHTML = "<h2>city : " + city + "<h2><div>temp : " + temp + "k</div><div>humidity : " + humidity + "</div><div>pressure:" + pressure+"</div>";
                
                var weather = data.weather[0].main;
                
               
               
            }
        }