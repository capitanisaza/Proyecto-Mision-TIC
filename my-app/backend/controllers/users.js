const Users = require("../models/users");

// consultar todos los usuarios
exports.getUsers = (req, res) => {
  Users.find().then((getResult) => {
    res.status(200).json(getResult);
  });
};

// consultar informacion de un usuario por el correo
exports.getOneUsersbymail = (req, res) => {
  Users.findOne({ Correo: req.body.Correo }).then((findOne) => {
    res.status(200).json(findOne);
  });
};

// Actualizar un usuario
exports.updateOneUsers = (req, res) => {
  Users.findOne({ Id_User: req.body.id_User }).then((findOne) => {
    if (findOne) {
      const updateUser = new Users({
<<<<<<< HEAD
        Id_User: req.body.Id_User,
        Nombre: req.body.Nombre,
        Correo: req.body.Correo,
        Rol: req.body.Rol,
        Estado: req.body.Estado,
      });
      Users.findByIdAndUpdate({ Id_User: req.body.Id_User }, updateUser).then(
        (findByIdAndUpdate) => {
=======
        id_User: req.body.id_User,
        nombre: req.body.nombre,
        correo: req.body.correo,
        rol: req.body.rol,
        estado: req.body.estado,
      });
      Users.findByIdAndUpdate({ id_User: req.body.id_User }, updateUser).then(
        (productoResult) => {
>>>>>>> a810421124dc3330544c06a7bed30c6be66966a9
          res.status(200).json("Usuario Actualizado");
        }
      );
    } else {
      res.status(401).json("Usuario No Encontrado");
    }
  });
};

// Añadir un usuario nuevo
exports.addUsers = (req, res) => {
  Users.findOne({ nombre: req.body.nombre }).then((findOne) => {
    if (findOne) {
      res.status(200).json("Usuario ya existe");
    } else {
      const addUser = new Users({
<<<<<<< HEAD
        Id_User: req.body.Id_User,
        Nombre: req.body.Nombre,
        Correo: req.body.Correo,
        Rol: req.body.Rol,
        Estado: "Inactivo",
=======
        id_User: req.body.id_User,
        nombre: req.body.nombre,
        correo: req.body.correo,
        rol: req.body.rol,
        estado: false,
>>>>>>> a810421124dc3330544c06a7bed30c6be66966a9
      });
      addUser.save().then((UserAdded) => {
        res.status(200).json("Usuario Creado");
      });
    }
  });
};
// Borrar Usuario por Nombre
exports.removeUsers = (req, res) => {
  Users.findOne({ nombre: req.body.nombre }).then((findOne) => {
    if (findOne) {
      Users.deleteOne({ nombre: req.body.nombre }).then((UserRemoved) => {
        res.status(200).json("Usuario Borrado");
      });
    } else {
      res.status(401).json("Usuario No Existe");
    }
  });
};
