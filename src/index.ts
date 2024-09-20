import express from "express";
import autorRouter from "./routes/autor.routes";
import livroRouter from "./routes/livro.routes";

const app  = express ();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/autores', autorRouter);
app.use('/livros', livroRouter);

app.get('/ping', (req, res) => {
    res.json({message: "pong"}).status(200);
});


app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`);
});
