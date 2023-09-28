
// Función para validar una contraseña
function validatePassword(password) {
  if (password.length < 6 || password.length > 25) {
    return { error: "La password debe tener un largo entre 6 y 25 caracters." };
  } else {
    // La contraseña debe tener entre 6 y 25 caracteres y contener letras y números
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{6,25}$/;
    return passwordRegex.test(password);
  }
}

module.exports = {
  validatePassword,
};
