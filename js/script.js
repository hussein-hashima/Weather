let d = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let list=[];
let listdays=[];
async function getData(country){
    let response= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=b3d6924a007946f494b101546212809&q=${country}&aqi=no&days=3`);
    if(response.ok && response.status !=400){
        let finalResult=await response.json();
    list =  finalResult;
    listdays= finalResult.forecast.forecastday;
    display(country);
    displayAnother();
    }
}

getData('cairo');
function display(country){
    let cartona=``;
    console.log(listdays.length);
    cartona +=`<div class="col-md-4">
    <div class="forecast-today my-5 ">
    <div class="box-header d-flex justify-content-between px-2 py-3">
        <div class="">${days[d.getDay()]}</div>
        <div class="text">${d.getDate()+months[d.getMonth()]}</div>
    </div>
    <div class="box-content p-3 mx-2">
        <h3 ">${country}</h3>
        <div class="dgree text-white">
            <div class="num">${list.current.temp_c}<sup >o</sup>C</div>
            <div class="forecast-icon"><img src="${list.current.condition.icon}" width="90"></div>
        </div>
        <div class="custom my-3"><a>${list.current.condition.text}</a></div>

        <span class="me-3"><img src="image/icon-umberella.png" class="me-1" alt="">${list.current.cloud}%</span>
        <span class="me-3"><img src="image/icon-wind.png"class="me-1" alt="">${list.current.wind_kph} km/h</span>
        <span class="me-3"><img src="image/icon-compass.png" class="me-1" alt="">${list.current.wind_dir}</span>
    </div>
    </div> 
</div>`;

    document.getElementById('dataRow').innerHTML=cartona;
}

function displayAnother(){
    let cartona=``;
    for (let i = 1; i < listdays.length; i++) {
            cartona += `<div class="col-md-4">
<div class="forecast-today my-5 ">
<div class="box-header text-center px-2 py-3">
    <div>${days[d.getDay()+i]}</div>
    
</div>
<div class="box-content p-3 mx-2 py-5">
    
    <div class="text-white d-flex justify-content-center align-items-center flex-column">
    <div class="forecast-icon"><img src="${listdays[i].day.condition.icon}" ></div>
    <div class="num my-3">${listdays[i].day.maxtemp_c}<sup >o</sup>C</div>
    <div class="num">${listdays[i].day.mintemp_c}<sup >o</sup>C</div>
    
    <div class="custom my-3"><a>${listdays[i].day.condition.text}</a></div>
    </div>
    
</div>
</div> 
</div>` ;

    }
    document.getElementById('dataRow').innerHTML+=cartona;

}

document.getElementById("search").addEventListener("keyup", a=>{
    getData(a.target.value);
}
);

