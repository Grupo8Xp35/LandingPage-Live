import Countdown from "./contador.js";

const dataLive = new Countdown("27 August 2020 20:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function contRegres(){
    tempos.forEach((tempo, index) => {
        tempo.innerHTML = dataLive.total[index];
    });
}
contRegres();
setInterval(contRegres, 1000);

function mostrarPopUp(){
    document.getElementById('popup').style.display = 'block';
}
function esconderPopUp(){
    document.getElementById('popup').style.display = 'none';
}

// var serialize = function (form){
//     var json = {};
//     var data = new FormData(form);
//     var keys = data.keys();
//     for(var key = keys.next(); !key.done; key = key.next()){
//         var values = data.getAll(key.values);
//         json[key.value] = values.length == 1 ? values[0] : values;
//     }
//     return json;
// }

// var form = document.querySelector("form");
// var enviar = document.getElementById("enviar");
// enviar.addEventListener("click", function(e){
//     e.preventDefault();
//     var json = serialize(form);
//     console.log(json);
// })