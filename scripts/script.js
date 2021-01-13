function consultaCep() {
  let cep = document.getElementById("cep").value;
  console.log("CEP: " + cep);
  $.ajax({
    url: "https://viacep.com.br/ws/" + cep + "/json/",
    type: GET,
    success: function (response) {
      console.log(response);
      /* utilização de jquery com propriedades htlm */
      $("#cepValue").html(response.cep);
      $("#logradouro").html(response.logradouro);
      $("#complemento").html(response.complemento);
      $("#bairro").html(response.bairro);
      $("#localidade").html(response.localidade);
      $("#uf").html(response.uf);
      $("#ibge").html(response.ibge);
      $("#gia").html(response.gia);
      $("#ddd").html(response.ddd);
      $("#siafi").html(response.siafi);
    },
  });
}
