const express = require("express");
const path = require("path");
const axios = require("axios");

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/prices", (req, res) => {
  axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json`)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500)
    })
})

app.listen(port, () => console.log(`listening on port ${port}`));

