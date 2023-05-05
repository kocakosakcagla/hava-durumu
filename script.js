

var url ="https://api.openweathermap.org/data/2.5/weather?q=";
var apiKey ="945e57bfb69c088e44e69a2cdb56b7ba";

const keyPress = (e)=> {

if(e.keyCode =='13')
{
var query = `${url}${sehirAdi.value}&appid=${apiKey}&units=metric&lang=tr`;
    fetch(query)
    .then(hava=>{

     return hava.json();

    })
    .then(sonuclarıGoster)
}
 
}

const sonuclarıGoster = (sonuc)=>{
    console.log(sonuc.main);
   
    var sehir = document.querySelector('.city');
    sehir.innerText= sonuc.name;
    
    var sicaklik = document.querySelector('.temp');
    sehir.innerText= sonuc.main.temp;

}


const sehirAdi = document.getElementById("searchBar");
sehirAdi.addEventListener('keypress',keyPress);