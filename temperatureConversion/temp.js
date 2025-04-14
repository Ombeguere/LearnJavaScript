const celfahr = document.getElementById("celfahr");
const fahrCel = document.getElementById("fahrCel");
const button = document.getElementById("mybutton");
const hResult = document.getElementById("result");


button.onclick = function(){
   
    let temperature = document.getElementById("temp").value;
    temperature = Number(temperature);

    if(celfahr.checked)
    {
        temperature = (temperature * (9/5)) + 32;
        hResult.textContent = `${temperature}` + `°F`;
    }else if(fahrCel.checked)
    {
        temperature = (temperature - 32) * (5/9);
        hResult.textContent = `${temperature}` + `°C`;
    }else
    {
        hResult.textContent = "Please select a conversion mode";
    }

}