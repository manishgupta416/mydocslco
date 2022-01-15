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

app.get("/api/v1/lcoobject", (req, res) => {
  res.send({ id: "55", name: "Learn Backend", price: 999 });
});

app.get("/api/v1/courses", (req, res) => {
  res.send(courses);
});

app.listen(4000, () => {
  console.log("server is running at port 4000");
});
