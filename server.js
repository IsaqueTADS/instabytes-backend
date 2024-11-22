import express from "express";

const post = [
  {
    id: 1,
    descricao: "Foto teste",
    imagem: "https://playcecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Foto teste",
    imagem: "https://playcecats.com/millie/300/150",
  },
  {
    id: 3,
    descricao: "Paisagem montanhosa",
    imagem: "https://placekitten.com/300/150",
  },
  {
    id: 4,
    descricao: "Pôr do sol na praia",
    imagem: "https://placekitten.com/310/160",
  },
  {
    id: 5,
    descricao: "Flores no jardim",
    imagem: "https://placekitten.com/320/170",
  },
  {
    id: 6,
    descricao: "Cidade à noite",
    imagem: "https://placekitten.com/330/180",
  },
  {
    id: 7,
    descricao: "Cachoeira tranquila",
    imagem: "https://placekitten.com/340/190",
  },
];

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("ligou bb...");
});

app.get("/posts", (req, res) => {
  res.status(200).json(post);
});

function buscarPostID(id) {
  return post.findIndex((post) => {
    return post.id === Number(id);
  });
}
app.get("/posts/:id", (req, res) => {
  const index = buscarPostID(req.params.id);
  res.status(200).json(post[index]);
});
