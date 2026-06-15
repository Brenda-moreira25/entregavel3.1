import express from "express";
import cors from "cors";
import { nomeController } from "./controllers/nome.controller.js";

const PORT = 8080;

const app = express();
app.use(cors());
app.use(express.json());

const nome_Controller = new nomeController();
nome_Controller.inicializaRouter();



app.use("/nome", nome_Controller.router);

app.get("/", async (req, res) => {
  res.status(200).json({
    //message: "Você está na frente do castelo!",
  });
});
app.use(express.static('frontend'));



app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`),
);
