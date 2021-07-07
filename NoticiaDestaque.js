class NoticiaDestaque extends Noticia {
  constructor(titulo, data, resumo, imagem) {
    super(titulo, data, resumo);

    this._imagem = imagem;
    this._titulo = titulo;
    this._data = data;
    this._resumo = resumo;
  }

  get MostrarDestaque() {

    try {
      return this.novaNoticia();
    } catch (erro) {
      return erro
    }
  }

  novaNoticia() {

    if (this._imagem != "") {

      return `
<a href="${this._link}"><h1>${this._titulo}</h1></a>
<img src="${this._imagem}">
<p>${this._data}</p>
<p>${this._resumo}</p>
`

    } else {
      throw new ErroNoticia("A notícia está incompleta! Tente novamente.")
    }
  }
}