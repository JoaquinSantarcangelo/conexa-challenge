import app from "./app"
const port = 3000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});