const express = require("express");

const app = express();

const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

let courses = [
  {
    id: "11",
    name: "Learn ReactJs",
    price: 299,
  },
  {
    id: "12",
    name: "Learn EcpressJs",
    price: 599,
  },
  {
    id: "11",
    name: "Learn NodeJs",
    price: 699,
  },
];

app.get("/", (req, res) => {
  res.send("hello from lco");
});

app.get("/api/v1/lco", (req, res) => {
  res.send("hello from lco docs");
});

app.listen(4000, () => {
  console.log("server is running at port 4000");
});
