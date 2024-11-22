var express = require('express');
var router = express.Router();
const knex = require("../database/db"); // ดึง knex.js ที่ตั้งค่าไว้มาใช้

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    "message": "Hello Word"
  });
});


router.post('/weatherData', async (req, res, next) => {
  const { name, main } = req.body;

  // ตรวจสอบว่ามีข้อมูลที่จำเป็นครบหรือไม่
  if (!name || !main || !main.temp || !main.humidity) {
    return res.status(400).json({
      message: "Invalid data. Name, temperature, and humidity are required."
    });
  }

  try {
    // บันทึกข้อมูลลงฐานข้อมูล
    await knex('TestTemp').insert({
      Country: name,
      Temp: main.temp,
      hum: main.humidity,
      created_at: knex.fn.now()
    });

    res.json({
      message: "Data inserted successfully!"
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({
      message: "Failed to insert data. Please try again later."
    });
  }
});

module.exports = router;
