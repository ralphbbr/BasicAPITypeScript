import {PrismaClient} from "@prisma/client";

const autorClient = new PrismaClient().autor;

export const buscaTodosAutores = async (req,res) =>{
    try{

        const todosAutores = await autorClient.findMany({
            include: {
                livros: true
             }
        })

        res.status(200).json({data : todosAutores});
    } catch (e){
        console.log(e);
    }
}

export const buscaAutorPorId = async (req,res) =>{
    try{
        const autorId = req.params.id;
        const autor = await autorClient.findUnique({
            where:{
                id: autorId,
            },
            include: {
                livros: true,
             },
        });

        res.status(200).json({data : autor});
    } catch (e){
        console.log(e);
    }
};

export const criarAutor = async (req,res) =>{
    try{
        const autorData = req.body;
        const autor = await autorClient.create({
            data: autorData
        });

        res.status(201).json({data : autor});
    } catch (e){
        console.log(e);
    }
};

export const atualizaAutor = async (req,res) =>{
    try{
        const autorId = req.params.id;
        const autorData = req.body;
        const autor = await autorClient.update({
            where:{
                id: autorId,
            },
            data: autorData,
        });

        res.status(200).json({data : autor});
    } catch (e){
        console.log(e);
    }
};

export const deletaAutor = async (req, res) =>{
    try{
        const autorId = req.params.id;
        const autor = await autorClient.delete({
            where:{
                id: autorId,
            } 
        });

        res.status(200).json({data:{}});

    }catch(e){
        console.log(e);
    }
}