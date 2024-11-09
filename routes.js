const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/plan", async (req, res) => {
  const { start, destination } = req.body;

  // Using a map service to get route with charging stations (API to be integrated here)
  try {
    const routeData = await axios.get(`https://route.api/map?start=${start}&end=${destination}`);
    res.json(routeData.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to plan route" });
  }
});

module.exports = router;
