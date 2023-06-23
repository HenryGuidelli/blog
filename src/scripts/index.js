var link_json = "https://raw.githubusercontent.com/HenryGuidelli/blog/main/src/json/teste.json?token=GHSAT0AAAAAACEG57HVAZA5U3WMPXMPCWYYZEU5XOQ";

fetch(link_json)
  .then(response => response.json())
  .then(data => {
    // Aqui você pode acessar os dados do arquivo JSON
    console.log(data);
  })
  .catch(error => {
    // Em caso de erro na requisição
    console.error('Ocorreu um erro:', error);
  });