class ErroCustomizado extends Error{
constructor(Mensagem){
  super(Mensagem);

  this.name = "TituloError"; 
}
}