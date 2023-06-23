var link_json = "https://raw.githubusercontent.com/HenryGuidelli/blog/main/src/json/teste.json";

fetch(link_json)
  .then(response => response.json())
  .then(data => {

    post = data;

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const item = data[key].id;
        //   console.log("Chave:", key);
          console.log("Valor:", item);
        }
      } 

    // console.log(data.post0000);
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });