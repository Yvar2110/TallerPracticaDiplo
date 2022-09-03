import React from "react";

const Formulario = () => {
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [lista, setLista] = React.useState([]);

  const guardarDatos = (e) => {
    e.preventDefault(); //prevenir el comportamiento del metodo get
    //validaciones
    if (!nombre.trim()) {
      alert("Ingrese el Nombre");
      return;
    }
    if (!apellido.trim()) {
      alert("Ingrese el Apellido");
      return;
    }
    //guardar lista
    setLista([...lista, { nombre: nombre, apellido: apellido }]);
    //limpiar estados
    setNombre("");
    setApellido("");
    //limpiar inputs
    e.target.reset();
  };

  const eliminar = (index) => {
    const nlista = lista.filter((item, ind) => ind !== index);
    setLista(nlista);
  };

  return (
    <div className="container">
      <hr />
      <h2>Formulario de Registro</h2>
      <form onSubmit={guardarDatos}>
        <input
          type="text"
          placeholder="Ingrese Nombre"
          className="form-control m-3"
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingrese Apellido"
          className="form-control m-3"
          onChange={(e) => setApellido(e.target.value)}
        />
        <div className="d-grid gap2">
          <button type="submit" className="m-3 btn btn-outline-info">
            Registrar
          </button>
        </div>
      </form>
      <hr />
      <h2>Lista de usuarios</h2>
      <ul>
        <table class="table  table-hover">
          <thead>
            <tr>
              <th scope="col">NOMBRE</th>
              <th scope="col">APELLIDO</th>
              <th scope="col">ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((item, index) => (
              <tr key={index}>
                <td>{item.nombre} </td>
                <td>{item.apellido}</td>
                <td>
                  <button
                    onClick={() => eliminar(index)}
                    className="m-2 btn btn-outline-secondary"
                  >
                    Elminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ul>
      <hr />
    </div>
  );
};

export default Formulario;
