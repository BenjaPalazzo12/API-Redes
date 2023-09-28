require("dotenv").config();
const app = require("./src/app");
const { connect } = require("./src/DataBase");
const { PORT } = process.env;

connect.sync({ force: false }).then(() => {
  console.log("Conexion a la DB exitosa");
  app.listen(PORT, () => {
    console.log(`Servidor Iniciado en el puerto: ${PORT}`);
  });
});

