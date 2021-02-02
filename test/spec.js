const { expect } = require("chai")
const app = require("supertest")(require("../app"))
describe("Routes", ()=>{
  describe("GET /", ()=>{
    it("shows available endpoints", async()=>{
      const resp = await app.get("/")
      expect(resp.status).to.equal(200)
    })
  })
})
