class NoticiaDestaque extends Noticia{
constructor(titulo,data,resumo,texto,imagem){
  super(titulo,data,resumo,texto);

this._imagem = imagem;
this._titulo = titulo;
this._data = data;
this._resumo = resumo;
this._texto = texto;
}

get MostrarDestaque(){
return this.RetornaDestaque();
}

RetornaDestaque(){
return this._imagem + "\n" + this._titulo + "\n" + this._data + "\n" + this._resumo + "\n" + this._texto
}
}