import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaCofig.js";


export const createProjects = asyncHandler(async (req, res) => {
  const { title, description, image } = req.body.data;

  console.log(req.body.data);
  try {
    const projects = await prisma.projects.create({
      data: {
        title,
        description,
        image,
      },
    });

    res.send({ message: "Projects created successfuly", projects });
  } catch (err) {
    if (err.code === "P2002") {
      throw new Error("Projects already there");
    }
    throw new Error(err.message);
  }
});
export const getAllProjects = asyncHandler(async(req, res)=> {
  const projects = await prisma.projects.findMany({
    orderBy:{
      
    }
  })
  res.send(projects)
})
//function to get a specific projects

export const getProjects = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const projects = await prisma.projects.findUnique({
      where: { id },
    });

    res.send(projects);
  } catch (err) {
    throw new Error(err.message);
  }
});

