require("dotenv").config();
const app = require("./src/app");
const { connect } = require(process.env.NODE_ENV === "test"
  ? "./src/DataBaseTest"
  : "./src/DataBase");
const { PORT } = process.env;

connect
  .sync({ force: false })
  .then(() => {
    console.log("Conexión a la DB exitosa");
    app.listen(PORT, () => {
      console.log(`Servidor Iniciado en el puerto: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(
      "Error en la sincronización de la base de datos de prueba:",
      error
    );
  });
