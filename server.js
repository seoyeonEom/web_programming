import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/hello/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

app.get("/users/:userId/posts/:postId", (req, res) => {
  const { userId, postId } = req.params;
  res.send(`User ${userId}, post ${postId}`);
});

app.get("/search", (req, res) => {
  const term = req.query.term || "nothing";
  const limit = parseInt(req.query.limit) || 5;
  res.send(`Searching for "${term}", showing ${limit} results.`);
});

app.get("/api/user/:id", (req, res) => {
  if (req.params.id !== "1") {
    res.status(404).send("User not found.");
    return;
  }
  res.json({ id: "1", name: "Alice", role: "admin" });
});

app.use((req, res) => {
  res.status(404).send("Page not found.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
