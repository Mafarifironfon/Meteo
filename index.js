function askWeather() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);

        // JOUR 0
        let imgURL = "img/" + response.current_condition.condition_key + ".png";
        document.getElementById("pic0").setAttribute ("src", imgURL);
        document.getElementById("city0").innerHTML = response.city_info.name;
        document.getElementById("date0").innerHTML = (response.fcst_day_0.day_long + "\r" + response.fcst_day_0.date);
        document.getElementById("condition0").innerHTML = response.current_condition.condition;
        document.getElementById("temp0").innerHTML = ("Température :\r" + response.current_condition.tmp + "°");
        document.getElementById("wind0").innerHTML = ("Vitesse du vent :\r" + response.current_condition.wnd_spd + "km");

        ///////////////////////////////////////////////////////////////////////////////////

        
        for (let dayNum = 1; dayNum < 5; dayNum ++){

          const dayData = response["fcst_day_" + dayNum];

          imgURL = "img/" + dayData.condition_key + ".png";
          document.getElementById("pic" + dayNum).setAttribute ("src", imgURL);
          document.getElementById("date" + dayNum).innerHTML = (dayData.day_long + "\r" + dayData.date);
          document.getElementById("condition" + dayNum).innerHTML = dayData.condition;
          document.getElementById("temp" + dayNum).innerHTML = ("Température min :\r" + dayData.tmin + "°" + "<br/>Température max :\r" + dayData.tmax + "°");

        }
        /////////////////////////////////////////////////////////////////////////////////////////
        // imgURL = "img/" + response.fcst_day_1.condition_key + ".png";
        // document.getElementById("pic1").setAttribute ("src", imgURL);
        // document.getElementById("date1").innerHTML = (response.fcst_day_1.day_long + "\r" + response.fcst_day_1.date);
        // document.getElementById("condition1").innerHTML = response.fcst_day_1.condition;
        // document.getElementById("temp1").innerHTML = ("Température min :\r" + response.fcst_day_1.tmin + "°" + "<br/>Température max :\r" + response.fcst_day_1.tmax + "°");

        // imgURL = "img/" + response.fcst_day_2.condition_key + ".png";
        // document.getElementById("pic2").setAttribute ("src", imgURL);
        // document.getElementById("date2").innerHTML = (response.fcst_day_2.day_long + "\r" + response.fcst_day_2.date);
        // document.getElementById("condition2").innerHTML = response.fcst_day_2.condition;
        // document.getElementById("temp2").innerHTML = ("Température min :\r" + response.fcst_day_2.tmin + "°" + "<br/>Température max :\r" + response.fcst_day_2.tmax + "°");

        // imgURL = "img/" + response.fcst_day_3.condition_key + ".png";
        // document.getElementById("pic3").setAttribute ("src", imgURL);
        // document.getElementById("date3").innerHTML = (response.fcst_day_3.day_long + "\r" + response.fcst_day_3.date);
        // document.getElementById("condition3").innerHTML = response.fcst_day_3.condition;
        // document.getElementById("temp3").innerHTML = ("Température min :\r" + response.fcst_day_3.tmin + "°" + "<br/>Température max :\r" + response.fcst_day_3.tmax + "°");

        // imgURL = "img/" + response.fcst_day_4.condition_key + ".png";
        // document.getElementById("pic4").setAttribute ("src", imgURL);
        // document.getElementById("date4").innerHTML = (response.fcst_day_4.day_long + "\r" + response.fcst_day_4.date);
        // document.getElementById("condition4").innerHTML = response.fcst_day_4.condition;
        // document.getElementById("temp4").innerHTML = ("Température min :\r" + response.fcst_day_4.tmin + "°" + "<br/>Température max :\r" + response.fcst_day_4.tmax + "°");
      }

    };
    request.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
    request.send();
  };

  const affiche = askWeather()

  

  
 