const express = require("express");






console.log("check in ")

const app = express();
const PORT = process.env.PORT || 9000;


app.listen(PORT, () => {
    console.log(`API Gateway is running on port ${PORT}`);
  });