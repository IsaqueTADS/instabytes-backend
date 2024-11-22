import express from "express";

const post = [
  {
    decricao: "Foto teste",
    imagem: "https://playcecats.com/millie/300/150",
  },
  {
    descricao: "Foto teste",
    imagem: "https://playcecats.com/millie/300/150",
  },
  {
    descricao: "Paisagem montanhosa",
    imagem: "https://placekitten.com/300/150",
  },
  {
    descricao: "Pôr do sol na praia",
    imagem: "https://placekitten.com/310/160",
  },
  {
    descricao: "Flores no jardim",
    imagem: "https://placekitten.com/320/170",
  },
  {
    descricao: "Cidade à noite",
    imagem: "https://placekitten.com/330/180",
  },
  {
    descricao: "Cachoeira tranquila",
    imagem: "https://placekitten.com/340/190",
  },
];

const app = express();
app.listen(3000, () => {
  console.log("ligou bb...");
});

app.get("/api", (req, res) => {
  res
    .status(200)
    .send(
      "<h1>Cara, namoral, criar um servidor com express é mamão com açucar</h1>"
    );
});
