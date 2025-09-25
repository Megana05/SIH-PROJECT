// server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// single bus location object with status + updatedAt
let busLocation = {
  latitude: 13.0800,
  longitude: 80.2767,
  driverId: "KA01AB1234",
  status: "Stopped", // "On Trip" | "Stopped"
  updatedAt: new Date().toISOString()
};

app.post("/updateLocation", (req, res) => {
  const payload = req.body || {};
  // merge updates but keep driverId if not provided
  busLocation = {
    ...busLocation,
    ...payload,
    updatedAt: new Date().toISOString()
  };
  console.log(`[${new Date().toISOString()}] Updated Location:`, busLocation);
  res.json({ message: "Location updated successfully", busLocation });
});

app.get("/getBusLocation", (req, res) => {
  res.json(busLocation);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
