import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let scores = [
  {
    name: "Alice",
    score: 100,
    date: Date.now(),
    name: "Alice1",
    score: 100,
    date: Date.now(),
    name: "Alice2",
    score: 100,
    date: Date.now(),
    name: "Alice3",
    score: 100,
    date: Date.now(),
    name: "Alice4",
    score: 100,
    date: Date.now(),
    name: "Alice5",
    score: 100,
    date: Date.now(),
    name: "Alice6",
    score: 100,
    date: Date.now(),
    name: "Alice7",
    score: 100,
    date: Date.now(),
    name: "Alice9",
    score: 100,
    date: Date.now(),
    name: "Alice",
    score: 100,
    date: Date.now(),
  },
];

app.post("/scores", (req, res) => {
  const { name, score } = req.body;
  if (!name || typeof score !== "number") {
    return res.status(400).json({ error: "Invalid data" });
  }

  scores.push({ name, score, date: Date.now() });

  scores.sort((a, b) => b.score - a.score);
  scores = scores.slice(0, 20);

  res.json({ success: true });
});

app.get("/scores", (req, res) => {
  res.json(scores);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server running on port " + port));
