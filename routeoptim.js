router.post("/optimize-route", async (req, res) => {
    const { start, end } = req.body;
    // Call an external routing service
    try {
        const response = await axios.get(`https://api.openrouteservice.org/v2/directions/driving-car?api_key=YOUR_API_KEY&start=${start}&end=${end}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send("Error optimizing route");
    }
});
