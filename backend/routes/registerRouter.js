import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "GET Request",
  });
});
router.post("/", (req, res) => {
  res.status(200).json({
    message: "POST Request",
  });
});
router.put("/", (req, res) => {
  res.status(200).json({
    message: "PUT Request",
  });
});
router.delete("/", (req, res) => {
  res.status(200).json({
    message: "Delete Request",
  });
});

export default router;
