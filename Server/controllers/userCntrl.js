import asyncHandler from "express-async-handler"
import { prisma } from "../config/prismaCofig.js";

export const createUser = asyncHandler(async(req, res) =>{
    console.log("creating a user");
    let {email} = req.body;
    const userExists = await prisma.user.findUnique({where:{email: email}})
    if(!userExists){
        const user = await prisma.user.create({data: req.body})
        res.send({
            message: "User registered sucessfully",
            user: user,
        })
    }
    else res.status(201).send({message:'user already registered'})
});

// function to get a qoute to services 

export const bookVisit = asyncHandler(async(req, res) =>{
    const {email, date} = req.body
    const {id} = req.params

    try{
         const alreadyQuoted = await prisma.user.findUnique({
            where: {email},
            select: {bookedVisits: true}
         })

          if (alreadyQuoted.bookedVisits.some((visit)=> visit.id === id)){
            res.status(400).json({message: "This Service is already thicked by you for quote"})
          }
          else{
            await prisma.user.update({
                where: {email: email},
                data:{
                bookedVisits: {push: {id, date}}

            }
            })
            res.send("your service is ticked for quotation");
          }
     
    }catch(err){
        throw new Error(err.message)
    }
});


//funtion to get all bookings of a user

export const getAllBooking = asyncHandler(async(req, res)=> {
    const {email} = req.body

    try{
       const bookings = await prisma.user.findUnique({
        where: {email},
        select: {bookedVisits:true}
       })
       res.status(200).send(bookings)
    }catch(err){
        throw new Error(err.message)
    }
})

// funtion to cancel booking

export const cancelBooking = asyncHandler(async (req, res) => {
    const {email}= req.body;
    const {id}=req.params
try{

    const user = await prisma.user.findUnique({
        where: {email: email},    
        select: {bookedVisits:true}
    })
    const index = user.bookedVisits.findIndex((visit) => visit.id === id)
    
    if(index === -1){
        res.status(404).json({message: "Booking not found"})
    }else {
        user.bookedVisits.splice(index, 1)
        await prisma.user.update({
            where: {email},
            data: {
                bookedVisits: user.bookedVisits
            }
        })
        res.send("Booking cancelled successfully")
    }
}catch(err){   
    throw new Error(err.message);
}
})
