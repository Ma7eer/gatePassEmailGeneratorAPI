const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const winston = require("winston");
const { Loggly } = require("winston-loggly-bulk");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

require("dotenv").config();

const companiesRouter = require("./routes/companies");
const usersRouter = require("./routes/users");

const app = express();

app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Documentation setup
// Swagger Options
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Gate Pass Email Generator API",
      description: "API to get information for Gate Pass Email Generator",
      contact: {
        name: "Maher Alkendi"
      },
      servers: ["http://localhost:3000"]
    }
  },
  apis: ["./routes/index.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

companiesRouter.use("/api-docs", swaggerUi.serve);
companiesRouter.get("/api-docs", swaggerUi.setup(swaggerDocs));

app.use("/", companiesRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

winston.add(
  new Loggly({
    token: process.env.WINSTON_TOKEN,
    subdomain: process.env.WINSTON_SUBDOMAIN,
    tags: ["Winston-NodeJS"],
    json: true
  })
);

winston.log("info", "Loggly started...");

module.exports = app;
