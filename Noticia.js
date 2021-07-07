class Noticia {

  set titulo(titulo) {
    this._titulo = titulo
  }
  get notTitulo() {
    return this._titulo
  }

  set autor(autor) {
    this._autor = autor
  }
  get notAutor() {
    return this._autor
  }

  set data(data) {
    this._data = data
  }
  get notData() {
    return this._data;
  }

  set resumo(resumo) {
    this._resumo = resumo
  }

  set descricao(descricao) {
    this._descricao = descricao;
  }
  get notDescricao() {
    return this._descricao;
  }

  set link(link) {
    this._link = link;
  }
  get notLink() {
    return this._link;
  }

  get mostraNoticia() {
    try {

      return this.retornaNoticia();
    } catch (erro) {

      return erro
    } finally {

      console.log("Código executado com sucesso!")
    } 
  }

  novaNoticia() {
    if (this._titulo != "") {

      return `
<a href="${this._link}"><h1>${this._titulo}</h1></a>
<p class="mt-2">${this._data}</p>
<p class="mt-2">${this._autor}</p>
<p class="descricao">${this._descricao}</p>
`

    } else {
      throw new CustomError("A notícia está incompleta! Tente novamente.")
    }
  }
}