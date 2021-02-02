const express = require("express")
const cors = require("cors")

const app = express()
const {models: {Movie, Role, Actor} } = require("./db");

app.use(cors());

app.get("/", (req,res)=>{
  res.status(200).send({
    movies: "/api/movies",
    roles: "/api/roles",
    actors: "/api/actors"
  })
})

app.get("/api/movies", async(req,res,next)=>{
  try {
    res.status(200).send(await Movie.findAll({include: Role}));
  } catch (ex) {
    next(ex);
  };
});

app.get("/api/movies/:id", async(req,res,next)=>{
  try {
    res.status(200).send(await Movie.findOne({
      include: Role,
      where: {id: req.params.id}
    }));
  } catch (ex) {
    next(ex);
  };
});

app.get("/api/roles", async(req,res,next)=>{
  try {
    res.status(200).send(await Role.findAll({include: Actor}));
  } catch (ex) {
    next(ex);
  };
});

app.get("/api/roles/:id", async(req,res,next)=>{
  try {
    res.status(200).send(await Role.findOne({
      include: Actor,
      where: {id: req.params.id}
    }));
  } catch (ex) {
    next(ex);
  };
});

app.get("/api/actors", async(req,res,next)=>{
  try {
    res.status(200).send(await Actor.findAll({include: Role}));
  } catch (ex) {
    next(ex);
  };
});

app.get("/api/actors/:id", async(req,res,next)=>{
  try {
    res.status(200).send(await Actor.findOne({
      include: Role,
      where: {id: req.params.id}
    }));
  } catch (ex) {
    next(ex);
  };
});

module.exports = app
