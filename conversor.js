function converter() {
  var cotacaoEmReal = 123800.23;
  var nome = prompt("Digite seu nome");
  var numero = prompt(
    nome +
      ", qual o valor a ser convertido?\nDetalhe, apenas convertemos Bitcoin para Real"
  );

  var resultado = Number(numero) * cotacaoEmReal;

  alert("O valor é de R$ " + resultado);
}