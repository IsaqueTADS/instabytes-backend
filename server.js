import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

const post = [
  {
    id: 1,
    descricao: "Foto teste",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Foto teste",
    imagem: "https://placecats.com/millie/300/150",
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

async function getTodosPosts() {
    const db = conexao.db("instabytes")
    const colecao = db.collection("posts")
    return colecao.find().toArray()
}
app.get("/posts", async (req, res) => {
  const posts = await getTodosPosts()
  res.status(200).json(posts);
});

// function buscarPostID(id) {
//   return post.findIndex((post) => {
//     return post.id === Number(id);
//   });
// }
// app.get("/posts/:id", (req, res) => {
//   const index = buscarPostID(req.params.id);
//   res.status(200).json(post[index]);
// });
