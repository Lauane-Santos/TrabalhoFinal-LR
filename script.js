let requestURL = "https://www.luizpicolo.com.br/api.json";

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {

  var noticias = request.response;
  var notPrincipal = document.getElementById("notPrincipal");
  var notSecundario = document.getElementByI("notSecundaria");

  var ultimaNot = noticias.articles[0];

  let notDestaque = new NoticiaDestaque;
  notDestaque._imagem = ultimaNot.urlToImage;
  notDestaque._link = ultimaNot.url;
  notDestaque._titulo = ultimaNot.title;
  notDestaque._data = ultimaNot.publishedAt;
  notDestaque._resumo = ultimaNot.description;

  notPrincipal.insertAdjacentHTML('afterbegin', notDestaque.mostrarNoticiaDestaque + "<br/>");

  noticias.articles.shift();

  noticias.articles.forEach(function (noticia) {
    let novaNoticia = new Noticia;
    novaNoticia._link = noticia.url;
    novaNoticia._titulo = noticia.title;
    novaNoticia._data = noticia.publishedAt;
    novaNoticia._autor = noticia.author;
    novaNoticia._descricao = noticia.description;
    
    notSecundaria.insertAdjacentHTML('afterbegin', novaNoticia.mostrarNoticia + "<br/>";
  })
}