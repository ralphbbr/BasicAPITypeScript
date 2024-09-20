import {Router} from "express";

import {buscaTodosAutores, 
    buscaAutorPorId, 
    atualizaAutor, 
    deletaAutor,
    criarAutor} from "../controllers/autor.controller";

const autorRouter = Router();

autorRouter.get('/', buscaTodosAutores);
autorRouter.get('/:id', buscaAutorPorId);
autorRouter.put('/:id', atualizaAutor);
autorRouter.delete('/:id', deletaAutor);
autorRouter.post('/', criarAutor);

export default autorRouter;