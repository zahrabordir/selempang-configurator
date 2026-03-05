function setModel(img){

document.getElementById("modelLayer").src =
"images/model/" + img

}

function setMotif(img){

document.getElementById("motifLayer").src =
"images/motif/" + img

}

function setColor(color){

document.getElementById("colorLayer").style.background = color

}

document.getElementById("nama").addEventListener("input", function(){

document.getElementById("textLayer").innerText = this.value

})
