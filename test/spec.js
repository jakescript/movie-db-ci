const { expect } = require("chai")
const {syncAndSeed} = require("../db")

const app = require("supertest")(require("../app"))
describe("Routes", ()=>{
  before(()=> syncAndSeed())

  describe("GET /", ()=>{
    it("shows available endpoints", async()=>{
      const resp = await app.get("/")
      expect(resp.status).to.equal(200)
    })
  })
  describe("GET /api/movies", ()=>{
    it("returns an array of movies", async()=>{
      const resp = await app.get("/api/movies")
      expect(resp.status).to.equal(200)
    })
  })
})
