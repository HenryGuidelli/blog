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
          const data = data[key].data;
          const desc = data[key].descricao;
          const tags = data[key].tags;

          // document.write("<div>");
          // document.write("Id: "+id+"<br>");
          // document.write("Nome: %s", nome);
          // document.write();
          // document.write("</div>");

          console.log("Chave:", key);
          console.log("Id: %s \nNome: %s \nlocal: %s \ndata: %s \nDescrição: %s \nTags: %s \n", id, nome, local, data, desc, tags);
        }
      } 

    // console.log(data.post0000);
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });