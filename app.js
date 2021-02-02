const express = require("express")
const app = express()
const {models: {Movie} } = require("./db")

app.get("/", (req,res)=>{
  res.status(200).send({
    movies: "/api/movies"
  })
})

app.get("/api/movies", async(req,res,next)=>{
  try {
    res.status(200).send(await Movie.findAll())
  } catch (ex) {
    next(ex)
  }

})

module.exports = app
