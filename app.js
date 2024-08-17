const userLocation = document.getElementById("userLocation"),
    converter = document.getElementById("converter"),
    weatherIcon = document.querySelector(".weather-icon"),
    temp = document.querySelector(".temp"),
    feelsLike = document.querySelector(".feelsLike"),
    description = document.querySelector(".description"),
    date = document.querySelector(".date"),
    city = document.querySelector(".city"),
    HValue = document.getElementById("HValue"),
    CValue = document.getElementById("CValue"),
    WValue = document.getElementById("WValue"),
    HTValue = document.getElementById("HTValue"),
    LTValue = document.getElementById("LTValue"),
    VValue = document.getElementById("VValue"),
    PValue = document.getElementById("PValue"),
    GValue = document.getElementById("GValue"),
    SeaValue =document.getElementById("SeaValue")
   ;


    
  
  const WEATHER_API_ENDPOINT =`https://api.openweathermap.org/data/2.5/weather?appid=32e851f28c27614b0b109f17136af701&q=`;
  
 
const kelvin = 273.15;
function findUserLocation(){
   fetch(WEATHER_API_ENDPOINT+userLocation.value)
      .then((res)=>res.json())
      .then((data)=>{

         if(data.cod!="" && data.cod != 200){
            alert(data.message)
            return
         }
         console.log(data)
         city.innerText = data.name+` | ${data.sys.country}`;
         weatherIcon.style.background = `url(https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)`;


         
         temp.innerText = "Temperature : "+(data.main.temp - kelvin).toFixed(1) +"°C";
         feelsLike.innerText ="FeelsLike : "+(data.main.feels_like - kelvin).toFixed(1)+"°C";

         VValue.innerText = data.visibility/1000 +"km";
         HValue.innerHTML = data.main.humidity + "%";
         PValue.innerHTML = data.main.pressure +" hPa" ;
         description.innerText = data.weather[0].description;
         WValue.innerHTML = Math.floor(data.wind.speed)+" km/hr";

         CValue.innerHTML = data.clouds.all+"%";

         HTValue.innerHTML = (data.main.temp_max - kelvin).toFixed(1)+" °C";
         LTValue.innerHTML = (data.main.temp_min - kelvin).toFixed(1) + " °C";


         GValue.innerHTML = data.main.grnd_level +" hPa";
         SeaValue.innerHTML = data.main.sea_level + " hPa";

      
      })
      
   
}