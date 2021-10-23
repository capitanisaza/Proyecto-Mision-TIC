import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import tablep from "./tablep.css";
import api from "../../Api";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Alert from "react-bootstrap/Alert";



const UserTable = () => {
  
  const [userEmail, setUseremail] = useState("");
  const [newUser, setNewUser] = useState({
    Id_User: "",
    Nombre: "",
    Correo: "",
    Rol: "",
    Estado: "",
  });
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.users.create(Correo);
      setNewUser(response);
    };

    fetchData();
  }, [Correo]);


  const handleChange = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
    if (event.target.value === "true") {
      setNewUser({ ...newUser, state: true });
    } else if (event.target.value === "false") {
      setNewUser({User, state: false }) };

  const editUser = async () => {
    const apiResponse = await api.users.edit(newUser);
    setSuccess(apiResponse);
    if (apiResponse === "El Usuario se actualizó satisfactoriamente") {
      setVariant("success");
    } else {
      setVariant("danger");
    }
    setNewUser({
      Id_User: "",
      Nombre: "",
      Correo: "",
      Rol: "",
      Estado: "",
    });
  };


  return (
    <div className="container mt-4 " md="auto">
      <Table striped bordered hover className="Tablep mt-3">
        <thead>
          <tr>
            <th>ID Vendedor</th>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>40001</td>
            <td>Jeovan Herrera</td>
            <td>Administrador</td>
            <td>Aprobado</td>
          </tr>
          <tr>
            <td>40002</td>
            <td>Juan Isaza</td>
            <td>Vendedor</td>
            <td>Pendiente</td>
          </tr>
        </tbody>
      </Table>
      <Button variant="primary" type="submit" className="mt-2 float-end">
        Actualizar
      </Button>
    </div>
  );
};
}
export default UserTable;
