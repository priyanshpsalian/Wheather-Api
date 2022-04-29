const express = require("express");
const https = require("https");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  const url =
    "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=8c1a9668e8253f6af36605c8a034909f";
  https.get(url, (response) => {
    response.on("data", (data) => {
      //   console.log(JSON.parse(data).main);
      //   const wheather = JSON.parse(data);
      const temp = data.main;
      console.log(temp);
    });
  });
  res.send(temp);
});
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
