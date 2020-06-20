import express from "express";
import "@models/user";
const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "world" });
});

app.listen(3333);
