const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

const routes = require("./routes");
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT} 🚀`);
});
