
const button = document.getElementById('but');
const input = document.getElementById('input');
const temp=document.getElementById('temp');
const loc=document.getElementById('location');
const summary=document.getElementById('summary');
const rain=document.getElementById('rain');


button.addEventListener("click", async ()=>{
    loc.textContent="Loading..."
    temp.textContent="Loading"
    summary.textContent="Loading"
    rain.textContent="Loading"

    let response=await fetch(`http://localhost:3002/weather?location=${input.value}`)
    let data = await response.json();
    loc.textContent=data.place
    temp.textContent=`The temperature is ${data.temp}°C`
    summary.textContent=data.summary
    rain.textContent=`The chance of rain is ${data.rain}%`

})