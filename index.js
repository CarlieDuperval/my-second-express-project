import express from "express";
import { hello, stranger, name, newPerson } from "./src/hello.js";
const app = express();

const PORT = 3035;
app.use(express.json());

app.get("/hello", hello);

app.get("/stranger", stranger);

app.get("/hello/:person", name);

app.post("/hello", newPerson);

app.listen(PORT, () =>
  console.log(`I'm Listening on  http://localhost:${PORT}`)
);
