import express from "express";
import registerRouter from "./routes/registerRouter.js";
// assigning express
const app = express();

// Allowing to receive JSON
app.use(express.json());

// using Routes for Register
app.use("/register", registerRouter);

// port
const port = 1000;
app.listen(port, () =>
  console.log(
    `Port is Running on: ${port} \n Location -> http://localhost:${port}`
  )
);
