const express = require("express");

const app = express();

const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
const fileUpload = require("express-fileupload");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use(fileUpload());

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
  // sending strings
  res.send("hello from lco docs");
});

app.get("/api/v1/lcoobject", (req, res) => {
  // sending objects
  res.send({ id: "55", name: "Learn Backend", price: 999 });
});

app.get("/api/v1/courses", (req, res) => {
  //sending arrays
  res.send(courses);
});
app.get("/api/v1/mycourse/:courseId", (req, res) => {
  // sending data in url
  const myCourse = courses.find((course) => course.id === req.params.courseId);
  res.send(myCourse);
});

app.post("/api/v1/addCourses", (req, res) => {
  //if response give error make sure check routes as well of swagger routes
  console.log(req.body);
  courses.push(req.body);
  res.send(true);
});

app.get("/api/v1/coursequery", (req, res) => {
  let location = req.query.location;
  let device = req.query.device;

  res.send({ location, device });
});
app.post("/api/v1/courseupload", (req, res) => {  //handle image /files
  console.log(req.headers)
  const file = req.files.file;
  let path = __dirname + "/images/" + Date.now() + ".jpg";
  file.mv(path, (err) => {
    res.send(true);
  });
});

app.listen(4000, () => {
  console.log("server is running at port 4000");
});
