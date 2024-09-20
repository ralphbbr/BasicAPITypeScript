import {PrismaClient} from "@prisma/client";

const livroClient = new PrismaClient().livro;

export const buscaTodosLivros = async (req,res) =>{
    try{

        const todosLivros = await livroClient.findMany();

        res.status(200).json({data : todosLivros});
    } catch (e){
        console.log(e);
    }
}

export const buscaLivroPorId = async (req,res) =>{
    try{
        const livroId = req.params.id;
        const livro = await livroClient.findUnique({
            where:{
                id: livroId,
            }
        });

        res.status(200).json({data : livro});
    } catch (e){
        console.log(e);
    }
};

export const criarLivro = async (req,res) =>{
    try{
        const livroData = req.body;
        const livro = await livroClient.create({
            data: {
                titulo: livroData.titulo,
                autor: {
                    connect: {id: livroData.autorId}
                }
            }
        });

        res.status(201).json({data : livro});
    } catch (e){
        console.log(e);
    }
};

export const atualizaLivro = async (req,res) =>{
    try{
        const livroId = req.params.id;
        const livroData = req.body;
        const livro = await livroClient.update({
            where:{
                id: livroId,
            },
            data: livroData,
        });

        res.status(200).json({data : livro});
    } catch (e){
        console.log(e);
    }
};

export const deletaLivro = async (req, res) =>{
    try{
        const livroId = req.params.id;
        const livro = await livroClient.delete({
            where:{
                id: livroId,
            } 
        });

        res.status(200).json({data:{}});

    }catch(e){
        console.log(e);
    }
}