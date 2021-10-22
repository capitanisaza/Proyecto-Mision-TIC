const mongoose = require("mongoose");
const Users = mongoose.Schema({
<<<<<<< HEAD
  Id_User: { type: String, required: true },
  Nombre: { type: String, required: true },
  Correo: { type: String, required: true },
  Rol: { type: String, required: true },
  Estado: { type: String, required: true },
=======
  id_User: { type: Number, unique: true },
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  rol: { type: String, required: true },
  estado: { type: Boolean, required: true },
>>>>>>> a810421124dc3330544c06a7bed30c6be66966a9
});
module.exports = mongoose.model("Users", Users);
