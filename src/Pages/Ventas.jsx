import React from "react";


import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";
// lista de objetos iniciales
const data = [
  { id: 1, descripcion: "Parapente", valorunitario: 1000 ,estado: "Disponible"},
  { id: 2, descripcion: "MotoCross", valorunitario: 3000 ,estado: "Disponible"},
  { id: 3, descripcion: "Parkour", valorunitario: 2000 ,estado: "Disponible" },
  { id: 4, descripcion: "Parapente", valorunitario: 5000 ,estado: "No Disponible" },
  { id: 5, descripcion: "Alpinismo", valorunitario: 4000,estado: "Disponible"},
  { id: 6, descripcion: "Parapente", valorunitario: 6000,estado: "Disponible" },
];

class Productos extends React.Component {
  //Estado para ir almacenando la lista de  productos
  state = {
    //
    data: data,
    // con esto controlamos cuando se abre y cuando se cierra el modal
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      descripcion: "",
      valorunitario: "",
      estado:"",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };
// esta funcion cambia el estado a true de la funcion del metodo modalinsertar
  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };
// esta funcion cambia el estado a false de la funcion del metodo modalinsertar
  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].descripcion = dato.descripcion;
        arreglo[contador].valorunitario = dato.valorunitario;
        arreglo[contador].estado = dato.estado;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    // Almacenar en una variable lo que se tenga en nuestro estado form para poder agregar el ID de forma automaticamica
    var valorNuevo= {...this.state.form};
    // le sumamos 1 a nuestro id actual
    valorNuevo.id=this.state.data.length+1;
    // Almacenar en una lista todos los elemntos para poder midificarla
    var lista= this.state.data;
    // a la lista le agramos el elemnto nuevo a la lista creacda en esta funcion
    lista.push(valorNuevo);
    // Actualizamos nuestro estado diciendo que data es igual a lista, y colocamos la funcion modalinsentar en false para cerrarlo
    this.setState({ modalInsertar: false, data: lista });
  }
// funcion para que el usuario cuando este digitando los datos del formulario automaticamente se actulice en el estado
// cambio de estado
handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {

    return (
      <>
        <Container>
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
          <br />
          <br />
          {/*T mayuscula en Table para trabajar con la etiqueta de reactstrap */}
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Descripcion</th>
                <th>Valor unitario</th>
                <th>Estado</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
            {/*funcion map para poder ir elemento por elemento */}
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.descripcion}</td>
                  <td>{dato.valorunitario}</td>
                  <td>{dato.estado}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>


        {/*Inicio configuracion Ventana modal con el atributo is open llamo al metodo actualizar*/}
        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
          <div><h3>Editar Registro</h3></div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>Id:</label>
              <input className="form-control" readOnly type="text" value={this.state.form.id} />
            </FormGroup>
            <FormGroup>
              <label> Descripcion:</label>
              <select class="form-control"name="descripcion" type="text" onChange={this.handleChange} value={this.state.form.descripcion}><option></option><option>Parapente</option><option>Alpinismo</option><option>MotoCross</option><option>Rafting</option><option>Parkour</option></select>
            </FormGroup>
            <FormGroup>
              <label>Valor Unitario:</label>
              <input className="form-control" name="valorunitario" type="number" onChange={this.handleChange} value={this.state.form.valorunitario}/>
            </FormGroup>
            <FormGroup>
              <label>Estado:</label>
              <select class="form-control"name="estado" type="text" onChange={this.handleChange} value={this.state.form.estado}><option>Disponible</option><option>No Disponible</option></select>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.editar(this.state.form)}>Editar </Button>
            <Button color="danger"  onClick={() => this.cerrarModalActualizar()}> Cancelar </Button>
          </ModalFooter>
          </Modal>


            {/*Inicio modal insertar */}
        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
          <div><h3>Insertar nuevo producto</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label> Id:</label>
              <input className="form-control"
               // El id va ser de solo lectura para que el usuario no lo edite
                readOnly
                type="text"
                // Por eso el valor del ID va a ser la longitud de nuestro arreglo mas 1 , para que sea nuestro nuemero consecutivo
                value={this.state.data.length+1}
              />
            </FormGroup>
            <FormGroup>
              <label> Descripcion: </label>
              <select class="form-control"name="descripcion" type="text" onChange={this.handleChange}><option></option><option>Parapente</option><option>Alpinismo</option><option>MotoCross</option><option>Rafting</option><option>Parkour</option></select>
            </FormGroup>
            <FormGroup>
              <label> Valor unitario: </label>
              <input className="form-control" name="valorunitario" type="number" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <label> Estado:</label>
              <select class="form-control"name="estado" type="text" onChange={this.handleChange}><option></option><option>Disponible</option><option>No Disponible</option></select>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            {/*llamamos a la funcion insertar para modificar el arreglo*/}
            <Button color="primary" onClick={() => this.insertar()}>Insertar</Button>
            <Button className="btn btn-danger" onClick={() => this.cerrarModalInsertar()}> Cancelar</Button>
          </ModalFooter>
        </Modal>
        {/*fin configuracion Ventana modal */}
      </>
    );
  }
}
export default Productos;