import express from "express";

const app = express();
app.set("view engine", "ejs");
const PORT = process.env.PORT || 3000;

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

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
// work in progress
// step one
// step two
// step three
// checkpoint 1
// checkpoint 2
// checkpoint 3
// BUG: off-by-one introduced here
// checkpoint 4
// checkpoint 5
// stable checkpoint
