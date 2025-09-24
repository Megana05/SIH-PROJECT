const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

let busLocation = {latitude: 13.0800,
  longitude: 80.2767,
  driverId: "KA01AB1234"}; // store latest location

app.use(cors());
app.use(express.json());

// Driver updates location
app.post("/updateLocation", (req, res) => {
  busLocation = req.body;
  console.log("Updated Location:", busLocation);
  res.json({ message: "Location updated successfully" });
});

// Passenger/USSD fetch location
app.get("/getBusLocation", (req, res) => {
  res.json(busLocation);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
