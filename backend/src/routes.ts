import express from 'express'
import { prisma } from './prisma'

export const routes = express.Router();

interface Team {
  id: number,
  name: string,
  pokemons: string | null
}

routes.get('/allteams', async (req,res) => {
  let teams: Team[] = await prisma.team.findMany();
  let _teams = [];
  for(let index in teams){
    let _team = teams[index].pokemons?.split('-')
    let pokemons = _team?.map((num) => Number(num))
    _teams.push({...teams[index], pokemons})
  }
  res.send(_teams)
})

routes.get('/team/:id', async (req,res) => {
  const id = Number(req.params.id);
  const team = await prisma.team.findUnique({
    where: {id}
  });    
  res.send(team)
})


routes.post('/createteam', async (req,res) => {
  let {name, pokemons} = req.body;
  pokemons = pokemons.join('-')
  await prisma.team.create({
    data:{
      name,
      pokemons,
    }
  }).catch((e) => res.send(e))
  res.status(200).json({status:"ok"})
})


routes.delete('/delete/:id', async (req,res) => {
  const id = Number(req.params.id)
  await prisma.team.delete({
    where:{id}
  }).catch((e) => res.send(e)) // todo
  res.status(200).json({status:"ok"})
})