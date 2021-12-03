const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

const app = express()
dotenv.config()

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connectedto mongodb"))
  .catch((err) => console.log(err))

app.listen("5000", () => {
  console.log("Backend is Running")
})
