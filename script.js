let requestURL = "Informacoes/noticias.json";

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {

  var noticias = request.response;

  var div = document.getElementById("div");
  
  noticias.forEach(function (noticia) {


    let novaNoticia = new Noticia;
    novaNoticia._titulo = noticia.titulo;
    novaNoticia._data = noticia.data;
    novaNoticia._autor = noticia.autor;
    novaNoticia._resumo = noticia.resumo;
    novaNoticia._texto = noticia.texto;

    div.insertAdjacentHTML('afterbegin', novaNoticia.mostraNoticia + "<br/>");




  })

}