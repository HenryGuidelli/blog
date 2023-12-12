var url_JSON = "https://raw.githubusercontent.com/HenryGuidelli/blog/main/src/json/teste.json?token=GHSAT0AAAAAACEG57HUTRM6A2BWTPB7B4KAZEU27LQ";

fetch(url_JSON)
  .then(response => response.json())
  .then(data => {

    console.log(data);
  })