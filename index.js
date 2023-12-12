import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let posts = [];

// Assign a unique ID to each new post
let nextId = 1;

app.get("/", (req, res) => {
  res.render("pages/index", { posts: posts });
});

app.get("/new-post", (req, res) => {
  res.render("pages/new-post");
});

app.post("/submit", (req, res) => {
  const newPost = {
    id: nextId++,
    title: req.body.title,
    content: req.body["blog-content"],
  };
  posts.push(newPost);
  res.redirect("/");
  // Remove the console.log for production
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
