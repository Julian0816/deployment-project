const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Stock Count Api",
    version: "0.1.0",
    description: "A Multiverse project with the aim to add value to Nando's Ltd.",
    contact: {
      name: "Julian Martinez",
    },
  },
  servers: [
    {
      url: "http://localhost:8000",
    },
  ],
};
const options = {
  swaggerDefinition,
  apis: ["./docs/**/*.yaml"],
};
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
