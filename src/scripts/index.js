var link_json = "https://raw.githubusercontent.com/HenryGuidelli/blog/main/src/json/teste.json";

function divPost(id, nome, local, data, descricao, tags) {
  document.write(
    "<div id='id'>"+
    "<a href='"+local+"'>"+nome+"</a>"
    +"</div>"
  );
}

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

          divPost(id, nome, local, data, desc, tags);


          console.log("Chave:", key);
          console.log("Id: %s \nNome: %s \nlocal: %s \ndata: %s \nDescrição: %s \nTags: %s \n", id, nome, local, data, desc, tags);
        }
      } 
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });