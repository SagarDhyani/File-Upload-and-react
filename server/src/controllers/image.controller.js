const express = require("express");
const upload = require("../middlewares/file_upload");

const Image = require("../models/image.model");

const router = express.Router();

router.post("/upload", upload.single("productImages"), async (req, res) => {
  // console.log("req:", req.file)
  const image = await Image.create({
    title: req.body.title,
    description: req.body.description,
    // image_urls: req.file.originalname,
    image_urls: `http://localhost:2345/src/public/uploads/${req.file.originalname}`,
  });

  return res.status(201).send(image);
});

router.get("/feeds", async (req, res) => {
  const response = await Image.find().lean().exec();

  return res.status(200).send(response);
});

module.exports = router;
