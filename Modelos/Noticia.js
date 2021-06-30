class Noticia{

set titulo(titulo){
this._titulo = titulo
}

set autor(autor){
this._autor = autor
}

set data(data){
this._data = data
}

set resumo(resumo){
this._resumo = resumo
}

set texto(texto){
this._texto = texto
}

get mostraNoticia(){
try{

return this.retornaNoticia();
} catch (erro){

  return erro

} finally{

  console.log("O código foi executado.")
}
}

retornaNoticia(){
if (this._titulo != ""){

return this._titulo + "\n" + this._autor + "\n" + this._data + "\n" + this._resumo + "\n" + this._texto;

}else{
  throw new ErroCustomizado("A notícia deve ter um título.")
}
}
}