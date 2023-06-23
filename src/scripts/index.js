var link_json = "https://raw.githubusercontent.com/HenryGuidelli/blog/main/src/json/teste.json";

fetch(link_json)
  .then(response => response.json())
  .then(post => {

    for (const key in post) {
        if (post.hasOwnProperty(key)) {
          const id = post[key].id;
          const nome = post[key].nome;
          const local = post[key].local;
          const data = post[key].data;
          const desc = post[key].descricao;
          const tags = post[key].tags;

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