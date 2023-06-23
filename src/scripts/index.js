var link_json = "https://raw.githubusercontent.com/HenryGuidelli/blog/main/src/json/teste.json?token=GHSAT0AAAAAACEG57HVLBTTRBXVC4HOQ36YZEU6DVA";

fetch(link_json)
  .then(response => response.json())
  .then(data => {

    post = data.post;

    for (key in data) {
        console.log(data);
    }

    console.log(data.post0000);
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });