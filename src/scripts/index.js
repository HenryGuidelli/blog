var link_json = "https://raw.githubusercontent.com/HenryGuidelli/blog/main/src/json/teste.json";

fetch(link_json)
  .then(response => response.json())
  .then(data => {

    post = data;

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const id = data[key].id;
          const nome = data[key].nome;
          const local = data[key].local;
          const desc = data[key].descricao;
          const tags = data[key].tags;

          console.log("Chave:", key);
          console.log("Id: %s \nNome: %s \nlocal: %s \nDescrição: %s \nTags: %s \n", id, nome, local, desc, tags);
        }
      } 

    // console.log(data.post0000);
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });