import express from "express";

const app = express();

app.get("/api/login", (req, res) => {
  res.json({
    username: "admin",
    fullName: "Marcus Kristoffersen",
  });
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on https://${server.address().port}`);
});
