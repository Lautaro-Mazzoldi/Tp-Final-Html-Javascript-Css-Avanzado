let menu = document.querySelector('.menu');
let flag=false;

function iniciar(){
    var imagenes = document.querySelectorAll('#div-imagenes img');
     soltar = document.getElementById('div1-soltar');  
     soltar2 = document.getElementById('div2-soltar'); 
     soltar3 = document.getElementById('div3-soltar'); 

    for(var i=0; i<imagenes.length; i++){
     imagenes[i].addEventListener('dragstart', arrastrado, false);
     imagenes[i].addEventListener('dragend', finalizado, false);
    }

    soltar.addEventListener('dragenter', function(e){
     e.preventDefault(); }, false);
    soltar.addEventListener('dragover', function(e){
     e.preventDefault(); }, false);
    soltar.addEventListener('drop', soltado1, false);


    soltar2.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar2.addEventListener('dragover', function(e){
     e.preventDefault(); }, false);
    soltar2.addEventListener('drop', soltado2, false);


    soltar3.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar3.addEventListener('dragover', function(e){
     e.preventDefault(); }, false);
    soltar3.addEventListener('drop', soltado3, false);

}
function arrastrado(e){
    elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}
function finalizado(e){
    elemento=e.target;
    elemento.style.visibility='hidden';
} 

function soltado1(e){
    e.preventDefault();
    var id=e.dataTransfer.getData('Text');
    if(id=="imagen2"){
        var src=document.getElementById(id).src;
        soltar.innerHTML='<img src="'+src+'" height="400px" width="275px">';
    }else{
     soltar.innerHTML='la imagen no es admitida';
    }
}

function soltado2(e){
    e.preventDefault();
    var id=e.dataTransfer.getData('Text');
    if(id=="imagen1"){
        var src=document.getElementById(id).src;
        soltar2.innerHTML='<img src="'+src+'"height="400px" width="275px">';
    }else{
     soltar2.innerHTML='la imagen no es admitida';
    }
}
function soltado3(e){
    e.preventDefault();
    var id=e.dataTransfer.getData('Text');
    if(id=="imagen3"){
        var src=document.getElementById(id).src;
        soltar3.innerHTML='<img src="'+src+'"height="400px" width="275px">';
    }else{
     soltar3.innerHTML='la imagen no es admitida';
    }
}

function reinicio() {
    window.location.reload();
}
iniciar()