const { expect } = require("chai")
const {syncAndSeed} = require("../db")

const app = require("supertest")(require("../app"))

describe("Routes", ()=>{
  before(()=> syncAndSeed())

  describe("GET /", ()=>{
    it("shows available endpoints", async()=>{
      const resp = await app.get("/")
      const apiList = JSON.parse(resp.text)
      expect(resp.status).to.equal(200)
      expect(apiList).to.have.all.keys("movies", "roles", "actors")
    })
    it("allows cors headers", async()=>{
      const resp = await app.get("/api/movies")
      expect(resp.headers["access-control-allow-origin"]).to.equal("*")
    })
  })

  describe("GET /api/movies", ()=>{
    it("returns an array of movies", async()=>{
      const resp = await app.get("/api/movies")
      expect(resp.status).to.equal(200)
    })
  })
})


