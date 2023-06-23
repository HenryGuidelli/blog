var link_json = "https://raw.githubusercontent.com/HenryGuidelli/blog/main/src/json/teste.json?token=GHSAT0AAAAAACEG57HUICL6DQ2AXYUHK4VGZEU5YEQ";

fetch(link_json)
  .then(response => response.json())
  .then(data => {
    // Aqui você pode acessar os dados do arquivo JSON
    console.log(data.post0000);
  })
  .catch(error => {
    // Em caso de erro na requisição
    console.error('Ocorreu um erro:', error);
  });