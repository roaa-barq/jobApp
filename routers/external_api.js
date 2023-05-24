const express = require('express');
const axios = require('axios');

const router = express.Router();

router.post('/jobsExternal', async (req, res) => {
  try {
    const url = "https://jooble.org/api/";
    const key = "69675c50-ae44-48bc-91f2-1ec4f101f5ec";

    const data = {
      keywords: req.body.keywords,
      location: req.body.location
    };

    const options = {
      method: 'POST',
      url: url + key,
      data: data,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const response = await axios.request(options);
    const responseData = response.data;

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch job data' });
  }
});

module.exports = router;
