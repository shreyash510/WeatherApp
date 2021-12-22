console.log('this is working');
fetch('https://api.openweathermap.org/data/2.5/weather?q=Ahmednagar&appid=28e1107da44a4e4406402748f062d353')
    .then((apidata) => {
        // console.log(apidata);
        return apidata.json();
    })
    .then((actualdata) => {
        // console.log(actualdata);
        var city = (actualdata.name);
        var country = (actualdata.sys.country);
        var temp = (actualdata.main.temp)
        var mtemp = (actualdata.main.temp_min);
        var ftemp = (actualdata.main.feels_like);

        console.log(city);

        var CurTemp =(temp-273.5).toFixed(2);
        var CurMTemp =(mtemp-273.5).toFixed(2); 
        var CurFTemp =(ftemp-273.5).toFixed(2); 

        const location = document.getElementById('location');
        const temp1 =document.getElementById('temp');
        const maxtemp = document.getElementById('maxtemp');

        location.innerHTML = `${city} ${country}`;
        temp1.innerHTML = `${CurTemp} °C`;
        maxtemp.innerHTML= `Min ${CurMTemp}°C | Max ${CurFTemp}°C`;
    })
    .catch((error) => {
        console.log("error is:" + error)
    });

