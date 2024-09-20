import {Router} from "express";

import {buscaTodosLivros, 
    buscaLivroPorId, 
    atualizaLivro, 
    deletaLivro,
    criarLivro} from "../controllers/livros.controller";

const livroRouter = Router();

livroRouter.get('/', buscaTodosLivros);
livroRouter.get('/:id', buscaLivroPorId);
livroRouter.put('/:id', atualizaLivro);
livroRouter.delete('/:id', deletaLivro);
livroRouter.post('/', criarLivro);

export default livroRouter;