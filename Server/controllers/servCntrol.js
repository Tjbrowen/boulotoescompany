import asyncHandler from "express-async-handler"
import {  prisma } from "../config/prismaCofig.js"


export const createServices = asyncHandler(async(req, res) =>{
const {title,
     description, 
     image,
      userEmail,
      address,
       country,
       city,
       
     }= req.body.data;

       console.log(req.body.data)
try{

    const services = await prisma.services.create({
        data:{
            title,
            description,
            image,
            owner : {connect : {email: userEmail}},
            address,
            country,
            city,
           
         
        },
    });

    res.send({message: "Services created successfuly", services})

}catch(err){
    if(err.code === "P2002")
    {
        throw new Error("Services already there")
    }
    throw new Error(err.message)
}
})

export const getAllServices = asyncHandler(async(req,res)=> {
    const services = await prisma.services.findMany({
        orderBy:{
            createdAt: "desc"
        }
    })
    res.send(services);
})

//function to get a specific services

export const getServices= asyncHandler(async(req, res) =>{
    const {id} = req.params;
    try{

        const services = await prisma.services.findUnique({
            where: {id}
        })

        res.send(services);

    }catch(err){
        throw new Error(err.message);
    }
})