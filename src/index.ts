import express from "express";

import diaryRouter from "./routes/diaries";

const app = express();
app.use(express.json()); // middleware que transforma el req.body a json

const PORT = 3000;

// GET, Endpoint: /ping
app.get("/ping", (_req, res) => {
  // Ponemos _req para que no nos salte el Warning de unusued params
  console.log("someone pinged here! " + new Date().toLocaleDateString());
  res.send("pong");
});

app.use("/api/diaries", diaryRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
